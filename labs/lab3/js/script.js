function generateColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function switchColor() {
  let dropdown = document.getElementById("days").value;
  console.log(dropdown);
  let div = document.getElementsByTagName("div")[0];
  switch (dropdown) {
    case "Monday":
      div.style.backgroundColor = generateColor();
      break;
    case "Tuesday":
      div.style.backgroundColor = generateColor();
      break;
    case "Wednesday":
      div.style.backgroundColor = generateColor();
      break;
    case "Thursday":
      div.style.backgroundColor = generateColor();
      break;
    case "Friday":
      div.style.backgroundColor = generateColor();
      break;
    case "Saturday":
      div.style.backgroundColor = generateColor();
      break;
    case "Sunday":
      div.style.backgroundColor = generateColor();
      break;
    default:
      break;
  }
}

function surprise() {
  let p = document.createElement("p");
  let value = document.getElementById("number").value;
  let form = document.getElementsByTagName("form")[0];
  p.textContent = `The number entered is
  ${isEven(value)} ${isPrime(value)} number ${range(value)}
  `;
  form.appendChild(p);
}

function isPrime(value) {
  if (value < 2) {
    return "but not a prime or composite";
  }
  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i == 0) {
      return "composite";
    }
  }
  return "prime";
}

function isEven(value) {
  if (value % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

function range(value) {
  if (value <= 50) {
    return "less than or equal 50";
  } else if (value > 50 && value <= 70) {
    return "greater than 50 and less than or equal to 70";
  } else if (value > 70 && value <= 100) {
    return "greater than 70 and less than or equal to 100";
  } else if (value > 100) {
    return "greater than 100";
  }
}
