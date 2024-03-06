actor Calc {

  var number : Int = 0;

  // Add.
  public func add(n : Int) : async Int {
    number += n;
    return number;
  };

  // Subtract.
  public func sub(n : Int) : async Int {
    number -= n;
    return number;
  };

  // Multiply.
  public func mul(n : Int) : async Int {
    number *= n;
    return number;
  };

  // Divide.
  public func div(n : Int) : async ?Int {
    if (n == 0) {
      // 'null' encodes the division by zero error.
      return null;
    } else {
      number /= n;
      return ?number;
    };
  };

  // Clear the calculator and reset its number to zero.
  public func clearall() : async () {
    number := 0;
  };
};