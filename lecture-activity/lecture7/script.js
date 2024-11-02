function generateRandomNumber(range) {
  return Math.floor(Math.random() * range);
}

function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}

console.log(areaOfCircle(6));
console.log(generateRandomNumber(1000));
