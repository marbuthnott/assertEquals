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

  test04_ExpectedIsArrayAndActualIsString_throwsError: function() {
    var assertion = function() {
      assertEquals('Test 04: ', ['a'], 'this is a string');
    };
    assert.throwsError(assertion, 'Test 04: Expected type Array but found String');
  },

  test05_ExpectedAndActualArraysAreDifferentLengths_throwsError: function() {
    var assertion = function() {
      assertEquals('Test 05: ', ['a', 'b'], ['a', 'b', 'c']);
    };
    assert.throwsError(assertion, 'Test 05: Expected array length 2 but found 3')
  },

  test06_ExpectedAndActualArraysSame_doesNotThrowError: function() {
    assert.isEqual(assertEquals('Test 06: ', ['a', 'b', 'c'], ['a', 'b', 'c']), undefined);
  },

  test07_ExpectedAndActualObjectsSame_doesNotThrowError: function() {
    assert.isEqual(assertEquals('Test 07: ', complexObject1, complexObject1Copy), undefined)
  },

  test08_ExpectedAndActualObjectsDifferentValues_throwsError: function() {
    var assertion = function() {
      assertEquals('Test 08: ', complexObject1, complexObject2);
    };
    assert.throwsError(assertion, 'Test 08: Expected propB.propA[1].propB "b" but found "c"')
  },

  test09_ExpectedAndActualObjectsMissingKey_throwsError: function() {
    var assertion = function() {
      assertEquals('Test 09: ', complexObject1, complexObject3);
    };
    assert.throwsError(assertion, 'Test 09: Expected propB.propC but was not found')
  }

}

runner.runTests(assertEqualsSpec)