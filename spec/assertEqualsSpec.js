
var assertEqualsSpec = {
  test01_ExpectedAndActualStringsSame_doesNotThrowError: function() {
    assert.isEqual(assertEquals('Test 01: ', 'abc', 'abc'), undefined);
  },

  test02_ExpectedAndActualStringsDifferent_ThrowsError: function() {
    var assertion = function() {
      assertEquals('Test 02: ', 'abcdef', 'abc')
    };
    assert.throwsError(assertion, 'Test 02: Expected "abcdef" found "abc"');
  },

  test03_ExpectedIsArrayAndActualIsObject_ThrowsError: function() {
    var assertion = function() {
      assertEquals('Test 03: ', ['a'], {0: 'a'});
    };
    assert.throwsError(assertion, 'Test 03: Expected type Array but found Object');
  },

  test04_ExpectedIsArrayAndActualIsString_ThrowsError: function() {
    var assertion = function() {
      assertEquals('Test 04: ', ['a'], 'this is a string');
    };
    assert.throwsError(assertion, 'Test 04: Expected type Array but found String');
  },

  test05_ExpectedAndActualArraysAreDifferentLengths_ThrowsError: function() {
    var assertion = function() {
      assertEquals('Test 05: ', ['a', 'b'], ['a', 'b', 'c']);
    };
    assert.throwsError(assertion, 'Test 05: Expected "a,b" found "a,b,c"')
  },

  test06_ExpectedAndActualArraysSame_doesNotThrowError: function() {
    assert.isEqual(assertEquals('Test 06: ', ['a', 'b', 'c'], ['a', 'b', 'c']), undefined);
  },

  test07_ExpectedAndActualObjectsSame_doesNotThrowError: function() {
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
    assert.isEqual(assertEquals('Test 07: ', complexObject1, complexObject1Copy), undefined)
  }
}

runner.runTests(assertEqualsSpec)