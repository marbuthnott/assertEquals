var assertEqualsSpec = {
  expectedAndActualStringsSame_doesNotThrowError: function() {
    assert.isEqual(assertEquals('Test 01: ', 'abc', 'abc'), undefined)
  },

  expectedAndActualStringsDifferent_ThrowsError: function() {
    var assertion = function() {
      assertEquals('Test 02: ', 'abcdef', 'abc')
    };
    assert.throwsError(assertion, 'Test 02: Expected "abcdef" found "abc"');
  },

  expectedIsArrayAndActualIsObject_ThrowsError: function() {
    var assertion = function() {
      assertEquals('Test 03: ', ['a'], {0: 'a'});
    };
    assert.throwsError(assertion, 'Test 03: Expected type Array but found Object');
  },

  expectedIsArrayAndActualIsString_ThrowsError: function() {
    var assertion = function() {
      assertEquals('Test 04: ', ['a'], 'this is a string');
    };
    assert.throwsError(assertion, 'Test 04: Expected type Array but found String');
  },

  expectedAndActualArraysAreDifferentLengths_ThrowsError: function() {
    var assertion = function() {
      assertEquals('Test 05: ', ['a', 'b'], ['a', 'b', 'c']);
    };
    assert.throwsError(assertion, 'Test 05: Expected "a,b" found "a,b,c"')
  }
}

runner.runTests(assertEqualsSpec)