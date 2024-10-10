let firstNameRegex = /[A-z -]+/;
let lastNameRegex = /[A-z '-]+/;
let emailRegex = /([A-z0-9])+[-.A-z0-9]+[@][a-z]+.[a-z]+.[a-z]{1,6}/;

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let countries = document.getElementsByTagName("option")[0];
let male = document.getElementById("male");
let female = document.getElementById("female");
let none = document.getElementById("none");
let nonbinary = document.getElementById("nonbinary");
let body = document.getElementsByTagName("body")[0];

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("submit", function (evt) {
  evt.preventDefault();
  validate();
});

function validate() {
  // result.appendChild(displayFirstName());
  // result.appendChild(displayLastName());
  // result.appendChild(displayEmail());
  if (
    validateFirstName(firstName) &&
    validateLastName(lastName) &&
    validateEmail(email)
  ) {
    displayResult();
  } else {
    displayErrors();
  }
}

function displayErrors() {
  let result = document.createElement("div");
  result.appendChild(displayFirstNameError());
  result.appendChild(displayFirstNameError());
  result.appendChild(displayFirstNameError());
  body.appendChild(result);
}

function displayResult() {
  let result = document.createElement("div");
  result.appendChild(displayFirstName());
  result.appendChild(displayLastName());
  result.appendChild(displayEmail());
  result.appendChild(displayGender());
  result.appendChild(displayCountry());
  body.appendChild(result);
}

function validateFirstName(args) {
  let result1 = firstNameRegex.test(args.value);
  if (args.value && result1) {
    return true;
  } else {
    return false;
  }
}

function displayFirstName() {
  if (validateFirstName(firstName)) {
    let firstNameResult = document.createElement("p");
    firstNameResult.textContent = args.value;
    return firstNameResult;
  }
  // else {
  // let firstNameError = document.createElement("p");
  // firstNameError.style.color = "red";
  // firstNameError.textContent =
  //   "First name is invalid. \n Input must not be empty\n Input must only contain letters";
  // body.append(firstNameError);
  // return firstNameError;
  // }
}

function displayFirstNameError() {
  if (!validateFirstName(firstName)) {
    let firstNameError = document.createElement("p");
    firstNameError.style.color = "red";
    firstNameError.textContent =
      "First name is invalid. \n Input must not be empty\n Input must only contain letters";
    // body.append(firstNameError);
    return firstNameError;
  }
}

function validateLastName(args) {
  let result2 = lastNameRegex.test(args.value);
  if (args.value && result2) {
    return true;
  } else {
    return false;
  }
}

function displayLastName() {
  if (validateLastName(firstName)) {
    let lastNameResult = document.createElement("p");
    lastNameResult.textContent = args.value;
    return lastNameResult;
  }
}

function displayLastNameError() {
  if (!validateFirstName(firstName)) {
    let lastNameError = document.createElement("p");
    lastNameError.style.color = "red";
    lastNameError.textContent =
      "Last name is invalid. \n Input must not be empty\n Input must only contain letters";
    return lastNameError;
  }
}

function validateEmail(args) {
  let result3 = emailRegex.test(args.value);
  if (args.value && result3) {
    return true;
  } else {
    return false;
  }
}

function displayEmail() {
  if (validateEmail(email)) {
    let emailResult = document.createElement("p");
    emailResult.textContent = args.value;
    return emailResult;
  }
}

function displayEmailError() {
  if (!validateFirstName(firstName)) {
    let emailError = document.createElement("p");
    emailError.textContent = "Invalid email";
    emailError.style.color = "red";
    return emailError;
  }
}

function displayGender() {
  let emailResult = document.createElement("p");
  emailResult.textContent = args.value;
  return emailResult;
}

function displayCountry() {
  let countryResult = document.createElement("p");
  countryResult.textContent = args.value;
  return countryResult;
}
