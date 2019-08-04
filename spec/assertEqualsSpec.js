var assertEqualsSpec = {
  doesNotThrowErrorFor_abc_: function() {
    assert.isEqual(assertEquals('Test 01: ', 'abc', 'abc'), 'abc')
  }
};

runner.runTests(assertEqualsSpec)