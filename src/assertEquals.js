
/**
 * Asserts "expected" versus "actual", 
 * 'failing' the assertion (via Error) if a difference is found.
 *
 * @param {String} message The comparison message passed by the user
 * @param {*} expected The expected item
 * @param {*} actual The actual item
 */
function assertEquals(message, expected, actual) {

  // if expected is array and actual is different data type throw error
  if (Array.isArray(expected) && Array.isArray(actual) === false) {
    throw new Error(message + 'Expected type Array but found ' + capitalize(typeof actual));
  }

  // if expected and actual are arrays, check length
  if (Array.isArray(expected) && Array.isArray(actual)) {
    if (expected.length !== actual.length) {
      throw new Error(message + 'Expected array length ' + expected.length + ' but found ' + actual.length);
    }
  }

  // if expected is null and actual has value throw error
  if (expected === null && actual !== null) {
    throw new Error(message + 'Expected type null but found type ' + capitalize(typeof actual));
  }

  // if it is a deep object then iterate through it
  if (typeof expected === "object" && Array.isArray(expected) === false) {
    // iterate through the object
    for (var key1 in expected) {
      // if key1 is embedded object, iterate through it
      if (typeof expected[key1] === "object") {
        for (var key2 in expected[key1]) {
          var keys2 = [key1, key2]
          // if key2 is embedded object, iterate through it
          if (typeof item(expected, keys2) === "object") {
            for (var key3 in item(expected, keys2)) {
              var keys3 = [key1, key2, key3]
              // if key3 is embedded object, iterate through it
              if (typeof item(expected, keys3) === "object") {
                for (var key4 in item(expected, keys3)) {
                  var keys4 = [key1, key2, key3, key4]
                  // checks for unequal elements in key4
                  if (item(expected, keys4) !== item(actual, keys4)) {
                    throw new Error(message + 'Expected ' + key1 + '.' + key2 + '[' + key3 + '].' + key4 + ' "' + item(expected, keys4) + '" but found "' + item(actual, keys4) + '"');
                  }
                }
              }
              // checks if actual key3 exists
              else if (item(actual, keys3) === undefined) {
                throw new Error(message + 'Expected ' + key1 + '.' + key2 + '[' + key3 + '] but was not found');
              }
              // checks for unequal elements in key3
              else if (item(expected, keys3) !== item(actual, keys3) && typeof item(expected, keys3) !== "object" && typeof item(actual, keys3) !== "object") {
                throw new Error(message + 'Expected ' + key1 + '.' + key2 + '[' + key3 + '] "' + item(expected, keys3) + '" but found "' + item(actual, keys3) + '"');
              }
            }
          } 
          // checks if actual key2 exists
          else if (item(actual, keys2) === undefined) {
            throw new Error(message + 'Expected ' + key1 + '.' + key2 + ' but was not found');
          }
          // checks for unequal elements in key2
          else if (item(expected, keys2) !== item(actual, keys2) && typeof item(expected, keys2) !== "object" && typeof item(actual, keys2) !== "object") {
            throw new Error(message + 'Expected ' + key1 + '.' + key2 + ' "' + item(expected, keys2) + '" but found "' + item(actual, keys2) + '"');
          }
        }
      }
      // checks if actual key1 exists
      else if (actual[key1] === undefined) {
        throw new Error(message + 'Expected ' + key1 + ' but was not found');
      }
      // checks for unequal elements in key1
      else if (expected[key1] !== actual[key1] && typeof expected[key1] !== "object" && typeof actual[key1] !== "object") {
        throw new Error(message + 'Expected ' + key1 + ' "' + expected[key1] + '" but found "' + actual[key1] + '"');
      }
    }
  }

  // if no error has been thrown in previous if statements, convert to string and compare
  if (expected.toString() !== actual.toString()) {
    throw new Error(message + 'Expected "' + expected + '" found "' + actual + '"');
  }

  // private capitalize function
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  // private function to return element in deep object
  function item(input, keys) {
    switch(keys.length) {
      case 2:
        return input[keys[0]][keys[1]];
      case 3:
        return input[keys[0]][keys[1]][keys[2]]; 
      case 4:
        return input[keys[0]][keys[1]][keys[2]][keys[3]];
    }
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