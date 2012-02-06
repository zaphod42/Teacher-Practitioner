describe("Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = Calculator();
  });

  describe("stack", function() {
    it("has no value in the begining", function() {
      expect(calculator.value()).toBeUndefined();
    });

    it("remembers the last number entered as the current value", function() {
      calculator.enter(1).enter(2);
      expect(calculator.value()).toEqual(2);
    });

    it("drops the last entered value to reveal the previously entered one", function() {
      calculator.enter(1).enter(2).drop();
      expect(calculator.value()).toEqual(1);
    });
  });

  describe("basic arithmetic", function() {
    it("sums the top 2 values", function() {
      calculator.enter(1).enter(2).add();
      expect(calculator.value()).toEqual(3);
    });

    it("subtracts second entered value from the first", function() {
      calculator.enter(1).enter(2).subtract();
      expect(calculator.value()).toEqual(-1);
    });

    it("multiplies the top 2 values", function() {
      calculator.enter(3).enter(2).multiply();
      expect(calculator.value()).toEqual(6);
    });

    it("divides first entered value by the second", function() {
      calculator.enter(8).enter(2).divide();
      expect(calculator.value()).toEqual(4);
    });

    it("produces an infinite value from division by zero", function() {
      calculator.enter(8).enter(0).divide();
      expect(calculator.value()).toEqual(Infinity);
    });
  });

  describe("errors during basic arithmetic", function() {
    it("errors when adding just one value", function() {
      calculator.enter(1);
      expect(function() { calculator.add() }).toThrow("Not enough values for addition");
    });

    it("errors when adding no values", function() {
      expect(function() { calculator.add() }).toThrow("Not enough values for addition");
    });

    it("errors when subtracting just one value", function() {
      calculator.enter(1);
      expect(function() { calculator.subtract() }).toThrow("Not enough values for subtraction");
    });

    it("errors when subtracting no values", function() {
      expect(function() { calculator.subtract() }).toThrow("Not enough values for subtraction");
    });

    it("errors when multiplying just one value", function() {
      calculator.enter(1);
      expect(function() { calculator.multiply() }).toThrow("Not enough values for multiplication");
    });

    it("errors when multiplying no values", function() {
      expect(function() { calculator.multiply() }).toThrow("Not enough values for multiplication");
    });

    it("errors when dividing just one value", function() {
      calculator.enter(1);
      expect(function() { calculator.divide() }).toThrow("Not enough values for division");
    });

    it("errors when dividing no values", function() {
      expect(function() { calculator.divide() }).toThrow("Not enough values for division");
    });
  });
});
