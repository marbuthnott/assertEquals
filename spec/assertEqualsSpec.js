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
    assert.throwsError(assertion);
  }
}

runner.runTests(assertEqualsSpec)