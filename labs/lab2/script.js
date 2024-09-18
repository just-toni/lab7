// 1 TODO:
//
const areaOfCircle = (radius) => {
  return radius ** 2 * Math.PI;
};

// 2
const calculate = (first, second) => {
  return `Addition: ${first + second}
  Subtraction: ${first - second}
  Multiplication: ${first * second}
  Division: ${first / second}`;
};

// 3
function areaOfRectangle(length, width) {
  return length * width;
}

console.log(areaOfCircle(6));
console.log(calculate(5, 7));
console.log(areaOfRectangle(20, 15));

/**
 * 4
 * The scope of a const variable is block scope
 * let and const were added the Javascript in 2015 with ECMAScript 6
 */
