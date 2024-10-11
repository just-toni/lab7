let firstNameRegex = /[A-z -]+/;
let lastNameRegex = /[A-z '-]+/;
let emailRegex = /([A-z0-9])+[-.A-z0-9]+[@][a-z]+.[a-z]+.[a-z]{1,6}/;

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let countries = document.getElementsByTagName("select")[0];
let male = document.getElementById("male");
let female = document.getElementById("female");
let none = document.getElementById("none");
let nonbinary = document.getElementById("nonbinary");
let body = document.getElementsByTagName("body")[0];
let result = document.createElement("div");

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  validate();
});

function validate() {
  let firstNameValid = validateFirstName(firstName);
  let lastNameValid = validateLastName(lastName);
  let emailValid = validateEmail(email);
  let genderValid = validateGender();
  let countryValid = validateCountry(countries);

  if (
    firstNameValid &&
    lastNameValid &&
    emailValid &&
    genderValid &&
    countryValid
  ) {
    displayResult();
  } else {
    displayErrors(
      firstNameValid,
      lastNameValid,
      emailValid,
      genderValid,
      countryValid
    );
  }
}

function displayErrors(first, last, mail, gender, country) {
  let result = document.createElement("div");
  if (!first) {
    result.appendChild(displayFirstNameError());
  }
  if (!last) {
    result.appendChild(displayLastNameError());
  }
  if (!mail) {
    result.appendChild(displayEmailError());
  }
  if (!gender) {
    result.appendChild(displayGenderError());
  }
  if (!country) {
    result.appendChild(displayCountryError());
  }
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
  let firstNameResult = document.createElement("p");
  firstNameResult.textContent = firstName.value;
  return firstNameResult;
}

function displayFirstNameError() {
  let firstNameError = document.createElement("p");
  firstNameError.style.color = "red";
  firstNameError.textContent =
    "First name is invalid. \n Input must not be empty\n Input must only contain letters";
  return firstNameError;
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
  let lastNameResult = document.createElement("p");
  lastNameResult.textContent = lastName.value;
  return lastNameResult;
}

function displayLastNameError() {
  let lastNameError = document.createElement("p");
  lastNameError.style.color = "red";
  lastNameError.textContent =
    "Last name is invalid. \n Input must not be empty\n Input must only contain letters";
  return lastNameError;
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
  let emailResult = document.createElement("p");
  emailResult.textContent = email.value;
  return emailResult;
}

function displayEmailError() {
  let emailError = document.createElement("p");
  emailError.textContent = "Invalid email";
  emailError.style.color = "red";
  return emailError;
}

function displayGender() {
  let genderResult = document.createElement("p");
  if (male.checked) {
    genderResult.textContent = "Male";
  } else if (female.checked) {
    genderResult.textContent = "Female";
  } else if (nonbinary.checked) {
    genderResult.textContent = "Non-binary";
  } else if (none.checked) {
    genderResult.textContent = "Prefer not to answer";
  }
  return genderResult;
}

function validateGender() {
  return male.checked || female.checked || nonbinary.checked || none.checked;
}

function displayGenderError() {
  let genderError = document.createElement("p");
  genderError.textContent = "Gender not selected";
  genderError.style.color = "red";
  return genderError;
}

function validateCountry() {
  if (countries.selectedIndex > 0) {
    return true;
  } else return false;
}

function displayCountry() {
  let countryResult = document.createElement("p");
  countryResult.textContent = countries[countries.selectedIndex].label;
  return countryResult;
}

function displayCountryError() {
  let countryError = document.createElement("p");
  countryError.textContent = "Country not selected";
  countryError.style.color = "red";
  return countryError;
}
