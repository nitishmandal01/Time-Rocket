const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

// slideer review part --->

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// innertext change starts here

function myFunction2() {
  var x = document.getElementById("innerText_change1");
  let y = document.getElementById("innerText_change2");
  let z = document.getElementById("innerText_change3");
  if (x.innerText === "₹660") {
    x.innerText = "₹613.33";
  }
  if (y.innerText === "₹960") {
    y.innerText = "₹923.56";
  }
  if (z.innerText === "₹1540") {
    z.innerText = "₹1400.57";
  }
}

function myFunction1() {
  var x = document.getElementById("innerText_change1");
  let y = document.getElementById("innerText_change2");
  let z = document.getElementById("innerText_change3");

  x.innerText = "₹660";
  y.innerText = "₹960";
  z.innerText = "₹1540";
}


function myFun1() {
    var x = document.getElementById("innerText_change1");
    let y = document.getElementById("innerText_change2");
    let z = document.getElementById("innerText_change3");
  
    x.innerText = "₹660";
  y.innerText = "₹960";
  z.innerText = "₹1540";
  }


function myFun2() {
  var x = document.getElementById("innerText_change1");
  let y = document.getElementById("innerText_change2");
  let z = document.getElementById("innerText_change3");

  x.innerText = "$30.54";
  y.innerText = "$42.10";
  z.innerText = "$70.88";
}


function myFun3() {
    var x = document.getElementById("innerText_change1");
    let y = document.getElementById("innerText_change2");
    let z = document.getElementById("innerText_change3");
  
    x.innerText = "€80.54";
    y.innerText = "€110.10";
    z.innerText = "€145.88";
  }