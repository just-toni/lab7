let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let body = document.getElementsByTagName("body")[0];

let firstNameRegex = /[A-z -]+/;
let lastNameRegex = /[A-z '-]+/;
let emailRegex = /([A-z0-9])+[-.A-z0-9]+[@][a-z]+.[a-z]+.[a-z]{1,6}/;
let passwordRegex = /(?=.*[A-Z])(?=.+[a-z])(?=.+[0-9])(?=.+\W).{12,}/;

let submit = document.getElementsByTagName("button")[0];
submit.addEventListener(
  "click",
  function (evt) {
    validate();
  },
  false
);

function validate() {
  if (
    validateFirstName(firstName) &&
    validateLastName(lastName) &&
    validateEmail(email) &&
    validatePassword(password)
  ) {
    alert("The form is successfully submitted");
  } else {
    alert("There's some errors with your submission");
  }
}

function validateFirstName(args) {
  let result1 = firstNameRegex.test(args.value);
  if (args.value && result1) {
    return true;
  } else {
    let firstNameError = document.createElement("p");
    firstNameError.style.color = "red";
    firstNameError.textContent =
      "First name is invalid. \n Input must not be empty\n Input must only contain letters";
    body.append(firstNameError);
    return false;
  }
}

function validateLastName(args) {
  let result2 = lastNameRegex.test(args.value);
  if (args.value && result2) {
    return true;
  } else {
    let lastNameError = document.createElement("p");
    lastNameError.style.color = "red";
    lastNameError.textContent =
      "Last name is invalid. \n Input must not be empty\n Input must only contain letters";
    body.append(lastNameError);
    return false;
  }
}

function validateEmail(args) {
  let result3 = emailRegex.test(args.value);
  if (args.value && result3) {
    return true;
  } else {
    let emailError = document.createElement("p");
    emailError.textContent = "Invalid email";
    emailError.style.color = "red";
    body.append(emailError);
    return false;
  }
}

function validatePassword(args) {
  let result4 = passwordRegex.test(args.value);
  if (args.value && result4) {
    return true;
  } else {
    let passwordError = document.createElement("p");
    passwordError.style.color = "red";
    passwordError.textContent =
      "Password entered is invalid. \n Input must not be empty\n Input must have at least one number, one uppercase letter, one lowercase letter, one special character, and be at least 12 characters long.";
    body.append(passwordError);
    return false;
  }
}

function inFocus(temp) {
  temp.classList.add("active");
}

function outFocus(temp) {
  temp.classList.remove("active");
}

firstName.addEventListener(
  "focus",
  function () {
    inFocus(firstName);
  },
  false
);

firstName.addEventListener(
  "blur",
  function () {
    outFocus(firstName);
  },
  false
);

lastName.addEventListener(
  "focus",
  function () {
    inFocus(lastName);
  },
  false
);

lastName.addEventListener(
  "blur",
  function () {
    outFocus(lastName);
  },
  false
);

email.addEventListener(
  "focus",
  function () {
    inFocus(email);
  },
  false
);

email.addEventListener(
  "blur",
  function () {
    outFocus(email);
  },
  false
);

password.addEventListener(
  "focus",
  function () {
    inFocus(password);
  },
  false
);

password.addEventListener(
  "blur",
  function () {
    outFocus(password);
  },
  false
);
