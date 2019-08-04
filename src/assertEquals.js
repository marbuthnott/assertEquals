
/**
 * Asserts "expected" versus "actual", 
 * 'failing' the assertion (via Error) if a difference is found.
 *
 * @param {String} message The comparison message passed by the user
 * @param {*} expected The expected item
 * @param {*} actual The actual item
 */
function assertEquals(message, expected, actual) {

    if (Array.isArray(expected) === true && Array.isArray(actual) === false) {
      throw new Error(message + 'Expected type Array but found ' + capitalize(typeof actual));
    }

    else if (Array.isArray(expected)) {
      if (expected.length !== actual.length) {
        throw new Error(message + 'Expected array length ' + expected.length + ' but found ' + actual.length);
      }
    }

    // check if it is an object
    else if (typeof expected === "object" && Array.isArray(expected) === false) {
      // iterate through the object
      for (var key1 in expected) {
        // if key1 is embedded object, iterate through it
        if (typeof expected[key1] === "object") {
          for (var key2 in expected[key1]) {
            // if key2 is embedded object, iterate through it
            if (typeof expected[key1][key2] === "object") {
              for (var key3 in expected[key1][key2]) {
                // if key3 is embedded object, iterate through it
                if (typeof expected[key1][key2][key3] === "object") {
                  for (var key4 in expected[key1][key2][key3]) {
                    // check if expected === actual and if not throw error
                    if (expected[key1][key2][key3][key4] !== actual[key1][key2][key3][key4]) {
                      throw new Error(message + 'Expected ' + key1 + '.' + key2 + '[' + key3 + '].' + key4 + ' "' + expected[key1][key2][key3][key4] + '" but found "' + actual[key1][key2][key3][key4] + '"');
                    }
                  }
                }
              }
            } 
            // else if (expected[key1][key2] !== actual[key1][key2]) {
              // if they don't equal then throw error
              // throw new Error(message + 'Expected "' + key1 + '.' + key2 + ' "' + expected[key1][key2] + '" but found ' + actual[key1][key2]);
            // }
            // if 'actual' key does not exist throw error
            else if (actual[key1][key2] === undefined) {
              throw new Error(message + 'Expected ' + key1 + '.' + key2 + ' but was not found');
            }
          }
        }
        // if key1 isn't embedded object then compare with actual object
        // else if (expected[key1] !== actual[key1]) {
          // if they don't equal then throw error
          // throw new Error(message + 'Expected ' + key1 + ' "' + expected[key1] + '" but found ' + actual[key1]);
        // }
      }
    }

    else if (expected.toString() !== actual.toString()) {
      throw new Error(message + 'Expected "' + expected + '" found "' + actual + '"');
    }

    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
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

  // Run the tests
  var assertionFailures = [];
  runTest('Test 01: ', assertionFailures, 'abc', 'abc');
  runTest('Test 02: ', assertionFailures, 'abcdef', 'abc');
  runTest('Test 03: ', assertionFailures, ['a'], {0: 'a'});
  runTest('Test 04: ', assertionFailures, ['a'], 'this is a string');
  runTest('Test 05: ', assertionFailures, ['a', 'b'], ['a', 'b', 'c']);
  runTest('Test 06: ', assertionFailures, ['a', 'b', 'c'], ['a', 'b', 'c']);
  runTest('Test 07: ', assertionFailures, complexObject1, complexObject1Copy);
  runTest('Test 08: ', assertionFailures, complexObject1, complexObject2);
  runTest('Test 09: ', assertionFailures, complexObject1, complexObject3);
  // runTest('Test 10: ', assertionFailures, null, {});

  
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