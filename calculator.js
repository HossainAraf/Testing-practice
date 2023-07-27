class Calculator {
  add(x, y) {
    return x + y;
  }

  substract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    let error = 'Division by zero is not allowed';
    if (y !==0) {
      return x/y;
    } else {
      throw error;
    }
    
  }
}

module.exports = {Calculator};