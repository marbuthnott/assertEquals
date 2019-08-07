
/**
 * Asserts "expected" versus "actual", 
 * 'failing' the assertion (via Error) if a difference is found.
 *
 * @param {String} message The comparison message passed by the user
 * @param {*} expected The expected item
 * @param {*} actual The actual item
 */
function assertEquals(message, expected, actual) {

  _classifyExpectedAndImplementComparison();

  function _classifyExpectedAndImplementComparison() {
    if (expected === null) {
      _compareNull();
    } else if (Array.isArray(expected)) {
      _compareArray();
    } else if (typeof expected === 'object') {
      _compareObjects();
    } else {
      _compareItems();
    }
  }

  function _compareArray() {
    if (!Array.isArray(actual)) {
      throw new Error(message + 'Expected type Array but found ' + _capitalize(typeof actual));
    } else {
      if (expected.length !== actual.length) {
        throw new Error(message + 'Expected array length ' + expected.length + ' but found ' + actual.length);
      } else
      _compareItems();
    }
  }

  function _compareObjects() {
    var path = [];

    function _traverseObject(obj) {
      for (var key in obj) {
        _classify(obj[key], key);
      }
    }
    
    function _traverseArray(arr) {
      for (var i = 0; i < arr.length; i++) {
        _classify(arr[i], i);
      }
    }

    function _classify(item, key) {
      if (Array.isArray(item)) {
        path.push(key);
        _traverseArray(item);
        path.pop();
      } else if ((typeof item === 'object') && (item !== null)) {
        path.push(key);
        _traverseObject(item);
        path.pop();
      } else {
        _compareElements(item, key);
      }
    }

    function _compareElements(expectedElement, key) {
      var actualElement = actual;
      path.push(key);
      for (var i = 0; i < path.length; i++) {
        actualElement = actualElement[path[i]];
      }
      if (actualElement === undefined) {
        _pathToString();
        throw new Error(message + 'Expected ' + pathString + ' but was not found');
      } else if (expectedElement !== actualElement) {
        _pathToString();
        throw new Error(message + 'Expected ' + pathString + ' "' + expectedElement + '" but found "' + actualElement + '"');
      } else {
        path.pop();
      }
    }

    function _pathToString() {
      pathString = path[0];
      for (var i = 1; i < path.length; i++) {
        if (Number.isInteger(path[i])) {
          pathString = pathString + '[' + path[i] + ']';
        } else if (Number.isInteger(path[i-1])) {
          pathString = pathString + path[i];
        } else {
          pathString = pathString + '.' + path[i];
        }
      }
    }

    _traverseObject(expected);
  }

  function _compareNull() {
    if (actual !== null) {
      throw new Error(message + 'Expected type null but found type ' + _capitalize(typeof actual));
    }
  }

  function _compareItems() {
    if (expected.toString() !== actual.toString()) {
      throw new Error(message + 'Expected "' + expected + '" found "' + actual + '"');
    }
  }

  function _capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

/* -- Test running code:  --- */

/**
 * Runs a "assertEquals" test.
 * 
 * @param {String} message The initial message to pass
 * @param {Array} assertionFailures List of messages that will be displayed on the UI for evaluation
 * @param {*} expected Expected item
 * @param {*} actual The actual item
 */
function runTest(message, assertionFailures, expected, actual) {
  try {
    assertEquals(message, expected, actual);
  } catch (failure) {
    assertionFailures.push(failure.message);
  }
}

function runAll() {
  
  var complexObject1 = {
    propA: 1,
    propB: {
      propA: [1, { propA: 'a', propB: 'b' }, 3],
      propB: 1,
      propC: 2
    }
  };
  var complexObject1Copy = {
    propA: 1,
    propB: {
      propA: [1, { propA: 'a', propB: 'b' }, 3],
      propB: 1,
      propC: 2
    }
  };
  var complexObject2 = {
    propA: 1,
    propB: {
      propB: 1,
      propA: [1, { propA: 'a', propB: 'c' }, 3],
      propC: 2
    }
  };
  var complexObject3 = {
    propA: 1,
    propB: {
      propA: [1, { propA: 'a', propB: 'b' }, 3],
      propB: 1
    }
  };

  var complexObject4 = {
    propA: 1,
    propB: {
      propA: 3,
      propB: 'c',
      propC: 2
    }
  };

  var complexObject5 = {
    propA: 1,
    propB: {
      propA: [1, { propA: 'a', propB: 'b' }, 3],
      propB: 1,
      propC: 3
    }
  };

  var complexObject6 = {
    propA: 1,
    propB: {
      propA: [4, { propA: 'a', propB: 'b' }, 3],
      propB: 1,
      propC: 2
    }
  };

  // Run the tests
  var assertionFailures = [];
  runTest('Test 01: ', assertionFailures, 'abc', 'abc');
  runTest('Test 02: ', assertionFailures, 'abcdef', 'abc');
  runTest('Test 03: ', assertionFailures, ['a'], {0: 'a'});
  runTest('Test 04: ', assertionFailures, ['a', 'b'], ['a', 'b', 'c']);
  runTest('Test 05: ', assertionFailures, ['a', 'b', 'c'], ['a', 'b', 'c']);
  runTest('Test 06: ', assertionFailures, complexObject1, complexObject1Copy);
  runTest('Test 07: ', assertionFailures, complexObject1, complexObject2);
  runTest('Test 08: ', assertionFailures, complexObject1, complexObject3);
  runTest('Test 09: ', assertionFailures, null, {});
  runTest('Test 10: ', assertionFailures, ['a'], 'this is a string');
  runTest('Test 11: ', assertionFailures, complexObject1, complexObject4);
  runTest('Test 12: ', assertionFailures, complexObject1, complexObject5);
  runTest('Test 13: ', assertionFailures, complexObject1, complexObject6);
  runTest('Test 14: ', assertionFailures, {propA: "c", propB: [1, 2]}, {propA: "c", propB: [1, 3]});
  runTest('Test 15: ', assertionFailures, {propA: "c", propB: 2, propC: 4}, {propA: "c", propB: 2, propC: 3});

  // Output the results
  var messagesEl = document.getElementById('messages');
  var newListEl;
  var i, ii;
  
  for (i = 0, ii = assertionFailures.length; i < ii; i++) {    
    newListEl = document.createElement('li');
    newListEl.innerHTML = assertionFailures[i];
    messagesEl.appendChild(newListEl);    
  }
}

runAll();