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
    propC: 3
  }
};

var assertEqualsSpec = {
  test01_ExpectedAndActualStringsSame_doesNotThrowError: function() {
    assert.isEqual(assertEquals('Test 01: ', 'abc', 'abc'), undefined);
  },

  test02_ExpectedAndActualStringsDifferent_throwsError: function() {
    var assertion = function() {
      assertEquals('Test 02: ', 'abcdef', 'abc')
    };
    assert.throwsError(assertion, 'Test 02: Expected "abcdef" found "abc"');
  },

  test03_ExpectedIsArrayAndActualIsObject_throwsError: function() {
    var assertion = function() {
      assertEquals('Test 03: ', ['a'], {0: 'a'});
    };
    assert.throwsError(assertion, 'Test 03: Expected type Array but found Object');
  },

  test04_ExpectedAndActualArraysAreDifferentLengths_throwsError: function() {
    var assertion = function() {
      assertEquals('Test 04: ', ['a', 'b'], ['a', 'b', 'c']);
    };
    assert.throwsError(assertion, 'Test 04: Expected array length 2 but found 3')
  },

  test05_ExpectedAndActualArraysSame_doesNotThrowError: function() {
    assert.isEqual(assertEquals('Test 05: ', ['a', 'b', 'c'], ['a', 'b', 'c']), undefined);
  },

  test06_ExpectedAndActualObjectsSame_doesNotThrowError: function() {
    assert.isEqual(assertEquals('Test 06: ', complexObject1, complexObject1Copy), undefined)
  },

  test07_ExpectedAndActualObjectsDifferentValues_throwsError: function() {
    var assertion = function() {
      assertEquals('Test 07: ', complexObject1, complexObject2);
    };
    assert.throwsError(assertion, 'Test 07: Expected propB.propA[1].propB "b" but found "c"')
  },

  test08_ExpectedAndActualObjectsMissingKey_throwsError: function() {
    var assertion = function() {
      assertEquals('Test 08: ', complexObject1, complexObject3);
    };
    assert.throwsError(assertion, 'Test 08: Expected propB.propC but was not found')
  },

  test09_ExpectedNullAndActualObject_throwsError: function() {
    var assertion = function() {
      assertEquals('Test 09: ', null, {});
    };
    assert.throwsError(assertion, 'Test 09: Expected type null but found type Object');
  },

  test10_ExpectedIsArrayAndActualIsString_throwsError: function() {
    var assertion = function() {
      assertEquals('Test 10: ', ['a'], 'this is a string');
    };
    assert.throwsError(assertion, 'Test 10: Expected type Array but found String');
  },

  test11_ExpectedAndActualObjectsMissingKey_throwsError: function() {
    var assertion = function() {
      assertEquals('Test 11: ', complexObject1, complexObject4);
    };
    assert.throwsError(assertion, 'Test 11: Expected propB.propA[0] but was not found')
  },

  test12_ExpectedAndActualObjectsMissingKey_throwsError: function() {
    var assertion = function() {
      assertEquals('Test 12: ', complexObject1, complexObject5);
    };
    assert.throwsError(assertion, 'Test 12: Expected propB.propC "2" but found "3"')
  },

  test13_ExpectedAndActualObjectsMissingKey_throwsError: function() {
    var assertion = function() {
      assertEquals('Test 13: ', complexObject1, complexObject6);
    };
    assert.throwsError(assertion, 'Test 13: Expected propB.propA[0] "1" but found "4"')
  }
}


runner.runTests(assertEqualsSpec)