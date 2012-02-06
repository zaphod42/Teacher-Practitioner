var Calculator = function() {
  var value = [];

  function binaryOperation(name, operation) {
    return function() {
      var second = value.shift(),
          first = value.shift();

      if (first === undefined) {
        throw "Not enough values for " + name; 
      }
      this.enter(operation(first, second));
      return this;
    };
  }

  return {
    drop: function() { 
            value.shift(); 
            return this;
          },
    enter: function(input) { 
             value.unshift(input); 
             return this;
           },
    value: function() { 
             return value[0]; 
           },
    add: binaryOperation("addition", function(left, right) { return left + right; }),
    subtract: binaryOperation("subtraction", function(left, right) { return left - right; }),
    multiply: binaryOperation("multiplication", function(left, right) { return left * right; }),
    divide: binaryOperation("division", function(left, right) { return left / right; })
  };
};
