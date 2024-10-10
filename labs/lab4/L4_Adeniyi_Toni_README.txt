# Lab 4

* *Date Created*: 02 OCT 2024
* *Last Modification Date*: 10 OCT 2024
* *Lab URL*: <https://web.cs.dal.ca/~oadeniyi/csci3172/lab4>
* *Gitlab URL*: <https://git.cs.dal.ca/oadeniyi/csci-3172/-/tree/main/labs/lab4>


## Authors

If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* [Toni Adeniyi ](ol618725@dal.ca) - (Author)

## Answer to question in Lab doc
a. preventDefault() means that the default action for an event would not occur when this function is used.
   I called preventDefault() on the submit button to prevent it from refreshing the page because by default the submit button refreshes the page.
   I also had to add an event listener first, so when the button is clicked, the prevent default is called on the click event so that the button doesn't refresh the page
b. lines 16 - 19 in js/script.js


## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.


### index.html

*Lines 15 - 94*

```
    <form class="registration" id="register" onsubmit="validate()">
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="lastName" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <select class="form-select" aria-label="Country select">
        <option selected>Select contry</option>
        <option value="1">Canda</option>
        <option value="2">USA</option>
        <option value="3">Other</option>
      </select>
      <div>
        <p class="form-label">Select Gender</p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="nonbinary"
          />
          <label class="form-check-label" for="nonbinary"> Non-binary </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="female"
            checked
          />
          <label class="form-check-label" for="female"> Female </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="male"
            checked
          />
          <label class="form-check-label" for="male"> Male </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="none"
            checked
          />
          <label class="form-check-label" for="none">
            Prefer not to answer
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" id="submitBtn">
        Submit
      </button>
    </form>
```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/5.3/forms/overview/) as shown below: 

```
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

```

- <!---How---> The code in [Bootstrap](https://getbootstrap.com/docs/5.3/forms/overview/) was implemented by adding it to my index.html file
- <!---Why---> [Bootstrap](https://getbootstrap.com/docs/5.3/forms/overview/)'s Code was used because I liked the structure of the form in Bootstrap
- <!---How---> [Bootstrap](https://getbootstrap.com/docs/5.3/forms/overview/)'s Code was modified by adding more fields to the form and giving it a class, id and an onsubmit action


### index.html

*Lines 41 - 46*

```
      <select class="form-select" aria-label="Country select">
        <option selected>Select contry</option>
        <option value="1">Canda</option>
        <option value="2">USA</option>
        <option value="3">Other</option>
      </select>
```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/5.3/forms/select/) as shown below: 

```
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

- <!---How---> The code in [Bootstrap](https://getbootstrap.com/docs/5.3/forms/select/) was implemented by placing it into my form
- <!---Why---> [Bootstrap](https://getbootstrap.com/docs/5.3/forms/select/)'s Code was used because I needed to have a select option for my users
- <!---How---> [Bootstrap](https://getbootstrap.com/docs/5.3/forms/select/)'s Code was modified by changing what the select dropdown values would be


### index.html

*Lines 47 - 87 *

```
      <div>
        <p class="form-label">Select Gender</p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="nonbinary"
          />
          <label class="form-check-label" for="nonbinary"> Non-binary </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="female"
          />
          <label class="form-check-label" for="female"> Female </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="male"
          />
          <label class="form-check-label" for="male"> Male </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="none"
          />
          <label class="form-check-label" for="none">
            Prefer not to answer
          </label>
        </div>
      </div>
```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/5.3/forms/checks-radios/) as shown below: 

```
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
```

- <!---How---> The code in [Bootstrap](https://getbootstrap.com/docs/5.3/forms/checks-radios/) was implemented by adding a radio element to the form
- <!---Why---> [Bootstrap](https://getbootstrap.com/docs/5.3/forms/checks-radios/)'s Code was used because I needed a radio element for users to select their gender
- <!---How---> [Bootstrap](https://getbootstrap.com/docs/5.3/forms/checks-radios/)'s Code was modified by updated the default values to be gender types.


## Acknowledgments

* 
