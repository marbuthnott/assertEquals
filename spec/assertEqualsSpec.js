var assertEqualsSpec = {
  doesNotThrowErrorFor_abc_: function() {
    assert.isEqual(assertEquals('Test 01: ', 'abc', 'abc'), undefined)
  }
};

runner.runTests(assertEqualsSpec)