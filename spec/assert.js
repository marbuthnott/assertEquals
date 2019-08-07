var assert = {
  isEqual: function(firstItem, secondItem) {
    if (firstItem !== secondItem) {
      throw new Error("Assertion failed: '" + firstItem + "' & '" + secondItem + "' are not equal");
    }
    else{
      console.log('%c' + "Test passed, " + firstItem + " is equal to " + secondItem, 'color: green');
    }
  },

  throwsError: function(someFunction, errorMessage) {
    try {
      someFunction();
    }
    catch(error) {
      console.log(error.message)
      if (error.message !== errorMessage) {
        throw new Error("Assertion failed: Error messages do not equal. '" + errorMessage + "' does not equal actual '" + error.message + "'");
      }
      console.log('%c' + "Test passed, " + someFunction + " raises error with '" + errorMessage, 'color: green');
      return;
    }
    throw new Error("Assertion failed: " + someFunction + " does not raise error");
  }
};