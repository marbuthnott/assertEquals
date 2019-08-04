var assertEqualsSpec = {
  doesNotThrowErrorFor_abc_: function() {
    // var assertion = function() {
    //   assertEquals('Test 01: ', 'abc', 'abc')
    // };
    assert.isEqual(assertEquals('Test 01: ', 'abc', 'abc'), undefined)
  },

  expectedActualStringsDifferentThrowsError: function() {
    var assertion = function() {
      assertEquals('Test 02: ', 'abcdef', 'abc')
    };
    assert.throwsError(assertion);
  }
};

runner.runTests(assertEqualsSpec)