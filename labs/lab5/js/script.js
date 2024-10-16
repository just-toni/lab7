const numbers = document.getElementById("numbers");
let calc = document.getElementById("calculate");
let map = document.getElementById("map");
let $for = document.getElementById("for");
let $foreach = document.getElementById("foreach");
let numArray;

calc.addEventListener("click", function (evt) {
  evt.preventDefault();
});

$foreach.addEventListener("click", function (evt) {
  evt.preventDefault();
  numArray = numbers.value.split(",");
  let primeNo = 0;
  let compNo = 0;
  let neithersNo = 0;
  numArray.forEach((element) => {
    if (isPrime(element)) {
      primeNo++;
    } else if (isComposite(element)) {
      compNo++;
    } else {
      neithersNo++;
    }
  });

  let result = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = "Using a for-each loop:";
  result.appendChild(h3);

  let prime = document.createElement("p");
  prime.textContent = "Prime Numbers: ";
  let spanPrimeVal = document.createElement("span");
  spanPrimeVal.textContent = primeNo;
  prime.appendChild(spanPrimeVal);
  result.appendChild(prime);

  let comp = document.createElement("p");
  comp.textContent = "Composite Numbers: ";
  let spanCompVal = document.createElement("span");
  spanCompVal.textContent = compNo;
  comp.appendChild(spanCompVal);
  result.appendChild(comp);

  let neither = document.createElement("p");
  neither.textContent = "Neither Numbers: ";
  let spanNeitherVal = document.createElement("span");
  spanNeitherVal.textContent = neithersNo;
  neither.appendChild(spanNeitherVal);
  result.appendChild(neither);

  body = document.getElementsByTagName("body")[0];
  body.appendChild(result);
});

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  numArray = numbers.value.split(",");
  let primeNo = 0;
  let compNo = 0;
  let neithersNo = 0;

  let no = numArray.map((element) => {
    if (isPrime(element)) {
      primeNo++;
    } else if (isComposite(element)) {
      compNo++;
    } else {
      neithersNo++;
    }
  });

  let result = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = "Using a map:";
  result.appendChild(h3);

  let prime = document.createElement("p");
  prime.textContent = "Prime Numbers: ";
  let spanPrimeVal = document.createElement("span");
  spanPrimeVal.textContent = primeNo;
  prime.appendChild(spanPrimeVal);
  result.appendChild(prime);

  let comp = document.createElement("p");
  comp.textContent = "Composite Numbers: ";
  let spanCompVal = document.createElement("span");
  spanCompVal.textContent = compNo;
  comp.appendChild(spanCompVal);
  result.appendChild(comp);

  let neither = document.createElement("p");
  neither.textContent = "Neither Numbers: ";
  let spanNeitherVal = document.createElement("span");
  spanNeitherVal.textContent = neithersNo;
  neither.appendChild(spanNeitherVal);
  result.appendChild(neither);

  body = document.getElementsByTagName("body")[0];
  body.appendChild(result);
});

$for.addEventListener("click", function (evt) {
  evt.preventDefault();
  numArray = numbers.value.split(",");
  let primeNo = 0;
  let compNo = 0;
  let neithersNo = 0;
  for (let index = 0; index < numArray.length; index++) {
    const element = numArray[index];
    if (isPrime(element)) {
      primeNo++;
    } else if (isComposite(element)) {
      compNo++;
    } else {
      neithersNo++;
    }
  }

  let result = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = "Using a for loop:";
  result.appendChild(h3);

  let prime = document.createElement("p");
  prime.textContent = "Prime Numbers: ";
  let spanPrimeVal = document.createElement("span");
  spanPrimeVal.textContent = primeNo;
  prime.appendChild(spanPrimeVal);
  result.appendChild(prime);

  let comp = document.createElement("p");
  comp.textContent = "Composite Numbers: ";
  let spanCompVal = document.createElement("span");
  spanCompVal.textContent = compNo;
  comp.appendChild(spanCompVal);
  result.appendChild(comp);

  let neither = document.createElement("p");
  neither.textContent = "Neither Numbers: ";
  let spanNeitherVal = document.createElement("span");
  spanNeitherVal.textContent = neithersNo;
  neither.appendChild(spanNeitherVal);
  result.appendChild(neither);

  body = document.getElementsByTagName("body")[0];
  body.appendChild(result);
});

function isPrime(val) {
  if (val < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(val); i++) {
    if (val % i == 0) {
      return false;
    }
  }
  return true;
}

function isComposite(val) {
  for (let i = 2; i <= Math.sqrt(val); i++) {
    if (val % i == 0) {
      return true;
    }
  }
}
