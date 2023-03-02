let menuBtn = document.querySelector("#menuBar");
let menuLink = document.querySelector(".nav-list");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  menuLink.classList.toggle("active1");
});

toggle = () => {
  menuBtn.classList.toggle("fa-times");
  menuLink.classList.toggle("active1");
};

const li = document.querySelectorAll(".list-items");
const sec = document.querySelectorAll("section");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active-li"));
  li[len].classList.add("active-li");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

const slideRow = document.querySelector(".content-row");
const slide = document.querySelector(".col-slider");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const interval = 3000;
let sliderId;

let slides = document.querySelectorAll(".slide");
let index = 1;
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide.append(firstClone);
slide.append(lastClone);

const slideWidth = slides[index].clientWidth;
slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
  sliderId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll(".slide");

slide.addEventListener("transitionend", () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});
const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = ".7s";
};
const moveToPreviosSlide = () => {
  // if(index <= 0) return;
  index--;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = ".7s";
};
slideRow.addEventListener("mouseenter", () => {
  clearInterval(sliderId);
});
slideRow.addEventListener("mouseleave", startSlide);
nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPreviosSlide);
startSlide();

let button = document.querySelector(".about-button");
button.addEventListener("click", () => {
  const span = document.querySelector("a span");
  button.style.visibility = "visible";
  setTimeout(() => {
    span.style.visibility = "hidden";
    button.style.transition = "1s ease-in-out";
    button.paddingRight = "0px";
  }, 3000);
});


