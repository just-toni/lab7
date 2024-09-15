# Lab 1

* *Date Created*: 13 09 2024
* *Last Modification Date*: DD MMM YYYY
* *Lab URL*: <https://web.cs.dal.ca/~oadeniyi/csci3172/lab1/>
* *GitLab URL*: <https://git.cs.dal.ca/oadeniyi/csci-3172/-/tree/main/labs/lab1>

## Authors

If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* [Toni Adeniyi](ol618725@dal.ca) - (Author)


## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Bootstrap](https://getbootstrap.com/docs/5.3) - CSS framework used

## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.


### index.html 

*Lines 10 - 40

```
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">OLAF</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#about">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contactUs">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/5.3/components/navbar/) as shown below: 

```
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

```

- <!---How---> The code in [Bootstrap](https://getbootstrap.com/docs/5.3/components/navbar/) was implemented by copying the structure of the navbar
- <!---Why---> [Bootstrap](https://getbootstrap.com/docs/5.3/components/navbar/)'s Code was used because I wanted to have a nice looking navbar with Bootstrap
- <!---How---> [Bootstrap](https://getbootstrap.com/docs/5.3/components/navbar/)'s Code was modified by removing the default navbar items and adding mine

*Repeat as needed*


### index.html

*Lines 84 - 96

```
      <form class="row g-3">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Text me"></textarea>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary" id="bbtn">Submit</button>
        </div>
      </form>
```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/5.3/forms/form-control/) as shown below: 

```
<form class="row g-3">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form>
```

- <!---How---> The code in [Bootstrap](https://getbootstrap.com/docs/5.3/forms/form-control/) was implemented by copying the various parts of Bootstrao forms and editing it to suit my needs
- <!---Why---> [Bootstrap](https://getbootstrap.com/docs/5.3/forms/form-control/)'s Code was used because I like how Bootstrao forms look like
- <!---How---> [Bootstrap](https://getbootstrap.com/docs/5.3/forms/form-control/)'s Code was modified by changing the structure and the names of various elements and adding a placeholder

*Repeat as needed*

### 

*Lines 33 - 79

```
<div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./img/DSC07917.JPG" class="d-block w-90" alt="a house">
            <div class="carousel-caption d-none d-md-block">
              <h5>PHOTOGRAPHY</h5>
              <p><strong>Why Photography.</strong> 
                IDK tbh, I enjoy saving things to look at the later LOL! <br>
                Photography is a great way to save memories. <br>
                I love Street Photography and faith-based event photography!</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./img/DSC08183.JPG" class="d-block" alt="the wall on the street">
            <div class="carousel-caption d-none d-md-block">
              <h5>READING</h5>
              <p><strong>Reading?! seriously.</strong> 
                I've read books all my life <br>
                It was my escape routre for the longest time. <br>
                I liked to read murder, crime, mystery and science-fiction</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./img/DSC09960.JPG" class="d-block" alt="a street with a white van">
            <div class="carousel-caption d-none d-md-block">
              <h5>MUSIC</h5>
              <p><strong>Hmm... so what do you like to listen too?</strong> 
                Honestly I listen to a lot of music! <br>
                My go to genre with lost of other genres is Christian & Gospel <br>
                HIGHLY RECOMMENDED!!!</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/5.3/components/carousel/) as shown below: 

```
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
```

- <!---How---> The code in [Bootstrap](https://getbootstrap.com/docs/5.3/components/carousel/) was implemented by copying the various parts of Bootstrao forms and editing it to suit my needs
- <!---Why---> [Bootstrap](https://getbootstrap.com/docs/5.3/components/carousel/)'s Code was used because I wanted a way to display pictures and also have captions
- <!---How---> [Bootstrap](https://getbootstrap.com/docs/5.3/components/carousel/)'s Code was modified by changing the images, adding custom css and my own information.

*Repeat as needed*

## Acknowledgments

* All photos were taken by me, Toni Adeniyi.
Below is the metadata for these photos:
DSC08183
Date taken: 2024-05-11
Authors: olaf
Copyright: Oluwatoni F. Adeniyi
Program name: ILCE-7M3 v4.01

DSC07917
Date taken: 2024-05-07
Authors: olaf
Copyright: Oluwatoni F. Adeniyi
Program name: ILCE-7M3 v4.01

DSC09960
Date taken: 2024-05-25
Authors: olaf
Copyright: Oluwatoni F. Adeniyi
Program name: ILCE-7M3 v4.01
