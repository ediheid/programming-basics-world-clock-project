class Calculator {
  constructor() {
    //properties
    this.PI = Math.PI;
    this.E = Math.E;
  }

  //getter
  addPiAndEulners() {
    return `The sum of PI (${this.PI}) and Eulner's (${this.E}) is ${
      this.PI + this.E
    }`;
  }

  //methods

  /* example of calculating 2:40 . using javascript programming language.

var width = 240 ;
var rat1 = 2;
var rat2 = 40;

var ratio  = width / rat1;
var calculated_height = ratio * rat2;
*/

  // or

  /* 
Definition of the ratio:

ratio = width / height

Formula:

height = width / ratio = 240 / 2.40 = 100
*/

  ratio(rat1, rat2, width) {
    let ratio = width / rat1;
    let calculatedHeight = ratio * rat2;
    return `Height is ${calculatedHeight} on ratio ${rat1}:${rat2}`;
  }

  getPercentage(x, y) {
    let sum = (x / y) * 100;
    return `The percentage of ${x} in ${y} to two decimal places is ${sum.toFixed(
      2
    )}% `;
  }

  add(x, y) {
    let sum = x + y;
    return `The sum of ${x} plus ${y} is ${sum}`;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    if (y != 0) {
      return x / y;
    }
    if (y == 0) {
      return `Error: You cannot divide ${x} by ${y}.`;
    }
  }

  modulation(x, y) {
    if (y != 0) {
      return x % y;
    }
    if (y == 0) {
      return `Error: You cannot get the remainder of ${x} divided by ${y}. `;
    }
  }

  elevate(x, y) {
    return Math.pow(x, y);
  }

  sqrt(x) {
    return Math.sqrt(x);
  }
}

let calculate = new Calculator();

console.log(calculate.PI);
console.log(calculate.E);

console.log(calculate);

console.log(calculate.ratio(2, 40, 240));

console.log(calculate.getPercentage(30, 45));

console.log(calculate.add(579357, 384745));

console.log(calculate.addPiAndEulners());

console.log(calculate.subtract(678, 566));

console.log(calculate.multiply(532, 63));

console.log(calculate.divide(60, 5));
console.log(calculate.divide(60, 0));

console.log(calculate.modulation(60, 5));
console.log(calculate.modulation(60, 4.3));

console.log(calculate.modulation(60, 0));

console.log(calculate.elevate(3, 3));

console.log(calculate.sqrt(843));
