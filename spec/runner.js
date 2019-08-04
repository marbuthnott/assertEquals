var runner = {
  runTests: function(unit) {
    var count = 0;
    Object.keys(unit).forEach(function(test) {
      count += 1;
      console.log(count);
      try {
        unit[test]();
      }
      catch(error) {
        console.error(error)
      }
    });
  }
}