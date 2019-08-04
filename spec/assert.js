var assert = {
  isEqual: function(firstItem, secondItem) {
    if (firstItem !== secondItem) {
      throw new Error("Assertion failed: '" + firstItem + "' & '" + secondItem + "' are not equal");
    }
    else{
      console.log('%c' + "Test passed, " + firstItem + " is equal to " + secondItem, 'color: green');
    }
  },

  throwsError: function(someFunction) {
    try {
      someFunction();
    }
    catch(error) {
      console.log('%c' + "Test passed, " + someFunction + " raises error", 'color: green');
      return;
    }
    throw new Error("Assertion failed: " + someFunction + " does not raise error");
  }
};