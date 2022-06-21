// search field effect

id = 0;
function searchbar() {
  var inpField = document.querySelector(".search-tab-container");
  var inp = document.getElementById("search-field");
  var search = document.querySelector(".search-tab-logo");
  inpField.style.backgroundColor = "white";
  inpField.style.width = "500px";
  inp.style.color = "black";
  inp.style.border = "none";
  search.style.opacity = "0";
  if (id == 0) {
    var img = document.createElement("img");
    img.src = "https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png";
    inpField.append(img);
    img.style.float = "right";
    img.style.width = "5.5%";
    img.style.marginTop = "-25px";
    img.style.zIndex = "10";
  }
  id++;
}

//back to original search field

function closesearch() {
  var inpField = document.querySelector(".search-tab-container");
  var inp = document.getElementById("search-field");
  var search = document.querySelector(".search-tab-logo");
  inpField.style.backgroundColor = "#212121";
  inpField.style.width = "245px";
  search.style.opacity = "1";
}

//hover div over category and brand

function showCategory() {
  var category = document.querySelector(".category");
  var category_arrow = document.querySelector(".category-arrow");
  category_arrow.style.transform = "rotate(180deg)";
}
function closeCategory() {
  var category = document.querySelector(".category");
  var category_arrow = document.querySelector(".category-arrow");
  category_arrow.style.transform = "rotate(0)";
}

function showBrand() {
  var brand = document.querySelector(".brand");
  var brand_arrow = document.querySelector(".brand-arrow");
  brand_arrow.style.transform = "rotate(180deg)";
}
function closeBrand() {
  var brand = document.querySelector(".brand");
  var brand_arrow = document.querySelector(".brand-arrow");
  brand_arrow.style.transform = "rotate(0)";
}

// sticky nav bar
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//modal_container
const modal_container = document.querySelector(".modal-container");
const close = document.querySelector("fa fa-times");

function showCheckout() {
  modal_container.classList.add("showModal");
}

function closeModal() {
  modal_container.classList.remove("showModal");
}

// Every slide is carousel and have setinterval

function slideShow() {
  const arr = [
    "<img src='https://assets.tatacliq.com/medias/sys_master/images/30514247073822.jpg'></img>",
    "<img src='https://assets.tatacliq.com/medias/sys_master/images/30507526389790.jpg'></img>",
    "<img src='https://assets.tatacliq.com/medias/sys_master/images/30507526586398.jpg'></img>",
    "<img src = 'https://assets.tatacliq.com/medias/sys_master/images/30507526324254.jpg'>",
    "<img src='https://assets.tatacliq.com/medias/sys_master/images/30507526520862.jpg'>",
  ];
  let headline = document.getElementById("carousel");
  headline.innerHTML = arr[0];
  let i = 0;
  setInterval(function () {
    if (i == arr.length) {
      i = 0;
    }
    headline.innerHTML = arr[i];
    i++;
  }, 2000);
}
slideShow();

// carousel slide 1

function slideShow1() {
  const arr = [
    "<img src='https://assets.tatacliq.com/medias/sys_master/images/30507526389790.jpg'></img>",
    "<img src='https://assets.tatacliq.com/medias/sys_master/images/30534076596254.jpg'></img>",
    "<img src = 'https://assets.tatacliq.com/medias/sys_master/images/30524038184990.jpg'>",
    "<img src='https://assets.tatacliq.com/medias/sys_master/images/30524038250526.jpg'>",
    "<img src='https://assets.tatacliq.com/medias/sys_master/images/30524038316062.jpg'></img>",
  ];
  let headline = document.getElementById("carousel1");
  headline.innerHTML = arr[0];
  let i = 0;
  setInterval(function () {
    if (i == arr.length) {
      i = 0;
    }
    headline.innerHTML = arr[i];
    i++;
  }, 2000);
}
slideShow1();

// carousel slide 2

function slideShow2() {
  const arr = [
    "<img src='https://assets.tatacliq.com/medias/sys_master/images/30507526586398.jpg'></img>",
    "<img src='https://assets.tatacliq.com/medias/sys_master/images/30507526324254.jpg'></img>",
    "<img src='https://assets.tatacliq.com/medias/sys_master/images/30514247073822.jpg'></img>",
    "<img src = 'https://assets.tatacliq.com/medias/sys_master/images/30507526389790.jpg'>",
    "<img src='https://assets.tatacliq.com/medias/sys_master/images/30507526520862.jpg'>",
  ];
  let headline = document.getElementById("carousel2");
  headline.innerHTML = arr[0];
  let i = 0;
  setInterval(function () {
    if (i == arr.length) {
      i = 0;
    }
    headline.innerHTML = arr[i];
    i++;
  }, 2000);
}
slideShow2();

// Carousel

const carouselSlide = document.querySelector(".main-carousel");
const carouselImages = document.querySelectorAll("carousel img");
let counter = 0;
var size = 100;

// previous button to show previous

function prev() {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "%)";
}

// next button to show next

function frd() {
  if (counter >= 2) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "%)";
}

// End of Carousel

// carousel of Products

const carouselProductSlide = document.querySelector(".carousel-slider");
const carouselProductImages = document.querySelectorAll(".carousel-slider img");
let count = 0;
var s = 25;

// previous button to show previous 4 slides

function prevProduct() {
  if (count <= 0) return;
  carouselProductSlide.style.transition = "transform 0.3s ease-in-out";
  count--;
  carouselProductSlide.style.transform = "translateX(" + -s * count + "%)";
}

// next button to show next 4 slides

function nextProduct() {
  if (count >= 4) return;

  carouselProductSlide.style.transition = "transform 0.3s ease-in-out";
  count++;
  carouselProductSlide.style.transform = "translateX(" + -s * count + "%)";
}

// End of Carousel

// carousel of Products

const carouselProductSlide1 = document.querySelector(".carousel-slider1");
const carouselProductImages1 = document.querySelectorAll(
  ".carousel-slider1 img"
);
let countr = 0;
var si = 33.33;

// previous button to show previous 4 slides

function prevProduct1() {
  if (countr <= 0) return;
  carouselProductSlide1.style.transition = "transform 0.3s ease-in-out";
  countr--;
  carouselProductSlide1.style.transform = "translateX(" + -si * countr + "%)";
}

// next button to show next 4 slides

function nextProduct1() {
  if (countr >= 3) return;

  carouselProductSlide1.style.transition = "transform 0.3s ease-in-out";
  countr++;
  carouselProductSlide1.style.transform = "translateX(" + -si * countr + "%)";
}

const carouselProductSlide2 = document.querySelector(".carousel-slider2");
let count2 = 0;
var size2 = 25;

function prevProduct2() {
  if (count2 <= 0) return;
  carouselProductSlide2.style.transition = "transform 0.3s ease-in-out";
  count2--;
  carouselProductSlide2.style.transform =
    "translateX(" + -size2 * count2 + "%)";
}

function nextProduct2() {
  if (count2 >= 4) return;

  carouselProductSlide2.style.transition = "transform 0.3s ease-in-out";
  count2++;
  carouselProductSlide2.style.transform =
    "translateX(" + -size2 * count2 + "%)";
}

const carouselProductSlide3 = document.querySelector(".carousel-slider3");
let count3 = 0;
var size3 = 25;

function prevProduct3() {
  if (count3 <= 0) return;
  carouselProductSlide3.style.transition = "transform 0.3s ease-in-out";
  count3--;
  carouselProductSlide3.style.transform =
    "translateX(" + -size3 * count3 + "%)";
}

function nextProduct3() {
  if (count3 >= 4) return;
  carouselProductSlide3.style.transition = "transform 0.3s ease-in-out";
  count3++;
  carouselProductSlide3.style.transform =
    "translateX(" + -size3 * count3 + "%)";
}

// End of Carousel

// red circle over bag

let x = 1;
function redCircle() {
  var red = document.getElementById("getTheTotalCount");

  red.style.visibility = "visible";
  red.innerHTML = `${x}`;
  x++;
}

function xxxNikhil() {
  window.location.href = "../products/navigationCOPY.html";
}

function gobackLeave() {
  window.location.href = "index.html";
}
