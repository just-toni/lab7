const calculate = ($firstNum, $secondNum, $calc) => {
  $calc = $calc.toLowerCase();
  switch ($calc) {
    case "add":
      return `Addition: ${$firstNum + $secondNum}`;
    case "subtract":
      return `Subtraction: ${$firstNum - $secondNum}`;
    case "multiply":
      return `Multiplication: ${$firstNum * $secondNum}`;
    case "divide":
      return `Division: ${$firstNum / $secondNum}`;
    case "min":
      return `Minimum: ${Math.min($firstNum, $secondNum)}`;
    case "max":
      return `Maximum: ${Math.max($firstNum, $secondNum)}`;
    case "avg":
      return `Average: ${($firstNum + $secondNum) / 2}`;
    case "all":
      return all($firstNum, $secondNum);
  }
};

function all($firstNum, $secondNum) {
  let add = $firstNum + $secondNum;
  let sub = $firstNum - $secondNum;
  let multiply = $firstNum * $secondNum;
  let divide = $firstNum / $secondNum;
  let exp = $firstNum ** $secondNum;
  let min = Math.min($firstNum, $secondNum);
  let max = Math.max($firstNum, $secondNum);
  let avg = add / 2;
  return `Addition: ${add}
Subtraction: ${sub} 
Multiplication: ${multiply} 
Division: ${divide} 
Exponential: ${exp} 
Minimum: ${min} 
Maximum: ${max} 
Average: ${avg}`;
}

let $firstNum = Number(prompt("Enter your first number"));
let $secondNum = Number(prompt("Enter your second number"));
let $calc = prompt(`Which of these calculations would you like to do?
  add
  subtract
  multiply
  divide
  min
  max 
  avg
  all`);
console.log(calculate($firstNum, $secondNum, $calc));
