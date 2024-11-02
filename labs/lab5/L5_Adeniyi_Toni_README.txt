# Lab 5

* *Date Created*: 16 OCT 2024
* *Last Modification Date*: 16 OCT 2024
* *Lab URL*: <https://web.cs.dal.ca/~oadeniyi/csci3172/lab5>
* *Gitlab URL*: <https://git.cs.dal.ca/oadeniyi/csci-3172/-/tree/main/labs/lab5>


## Authors

If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* [Toni Adeniyi ](ol618725@dal.ca) - (Author)


## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.


### index.html

*Lines 17 - 33*

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

The code above was created by adapting the code in [Bootstap](https://getbootstrap.com/docs/5.3/forms/overview/) as shown below: 

```
<div class="mb-3">
        <label
          type="text"
          name="numbers"
          id="numbers"
          placeholder="e.g., 20, 31, 1, 55, 6"
          class="form-label"
          >Enter each number separated by a comma</label
        >
        <br />
        <input
          type="text"
          name="numbers"
          id="numbers"
          placeholder="e.g., 20, 31, 1, 55, 6"
        />
      </div>
```

- <!---How---> The code in [Bootstap](https://getbootstrap.com/docs/5.3/forms/overview/)  was implemented by copying the code and changing the information
- <!---Why---> [Bootstap](https://getbootstrap.com/docs/5.3/forms/overview/) 's Code was used because I liked the CSS styling for it.
- <!---How---> [Bootstap](https://getbootstrap.com/docs/5.3/forms/overview/) 's Code was modified by removing all the other inputs and just having a test input for the numbers

*Repeat as needed*


### index.html

*Lines 34 - 61*

```
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
```

The code above was created by adapting the code in [Bootstap](https://getbootstrap.com/docs/5.3/components/dropdowns/) as shown below: 

```
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

- <!---How---> The code in [Bootstap](https://getbootstrap.com/docs/5.3/components/dropdowns/) was implemented by using the Bootstap docs
- <!---Why---> [Bootstap](https://getbootstrap.com/docs/5.3/components/dropdowns/)'s Code was used because I wanted to have a dropdown button for users to decide what loop would generate the outputs
- <!---How---> [Bootstap](https://getbootstrap.com/docs/5.3/components/dropdowns/)'s Code was modified by changing the color and text for each button


## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
