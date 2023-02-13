let menuBtn = document.querySelector("#menuBar");
let menuLink = document.querySelector(".nav-list");
//  let section = document.querySelector("section");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  menuLink.classList.toggle("active1");
});

toggle = () => {
  menuBtn.classList.toggle("fa-times");
  menuLink.classList.toggle("active1");
};
// links.addEventListener("click",()=>{
//     menuLink.classList.remove("removeStyle")

// })

// const activePage = window.location.pathname;
// const navLinks = document.querySelector('.nav-list .list-items a').forEach(link =>{
//     if(link.href.includes(`$activePage`)){
//         link.classList.add('active');
//     }
// })

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

// const canvas = document.getElementById("canvas1");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// let particlesArray;

// let mouse = {
//   x: null,
//   y: null,
//   radius: (canvas.height / 80) * (canvas.width / 80),
// };
// window.addEventListener("mousemove", function (event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
// });

// //particles

// class Particle {
//   constructor(x, y, directionX, directionY, size, color) {
//     this.x = x;
//     this.y = y;
//     this.directionX = directionX;
//     this.directionY = directionY;
//     this.size = size;
//     this.color = color;
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
//     ctx.fillStyle = "#2FE013";
//     ctx.fill();
//   }
//   update() {
//     if (this.x > canvas.width || this.x < 0) {
//       this.directionX = -this.directionX;
//     }
//     if (this.y > canvas.height || this.y < 0) {
//       this.directionY = -this.directionY;
//     }

//     let dx = mouse.x - this.x;
//     let dy = mouse.y - this.y;
//     let distance = Math.sqrt(dx * dx + dy * dy);

//     if (distance < mouse.radius + this.size) {
//       if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
//         this.x += 10;
//       }
//       if (mouse.x > this.x && this.x > this.size * 10) {
//         this.x -= 10;
//       }
//       if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
//         this.y += 10;
//       }
//       if (mouse.y > this.y && this.y > this.size * 10) {
//         this.y -= 10;
//       }
//     }
//     this.x += this.directionX;
//     this.y += this.directionY;
//     this.draw();
//   }
// }

// function init() {
//   particlesArray = [];
//   let numberOfParticles = (canvas.height * canvas.width) / 18000;
//   for (let i = 0; i < numberOfParticles; i++) {
//     let size = (Math.random() * 5) + 1;
//     let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
//     let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
//     let directionX = (Math.random() * 5) - 2.5
//     let directionY = (Math.random() * 5) - 2.5
//     let color = "#2FE013";
//     particlesArray.push(
//       new Particle(x, y, directionX, directionY, size, color)
//     );
//   }
// }
// function connect() {
//     let opacityValue = 1;
//   for (let a = 0; a < particlesArray.length; a++) {
//     for (let b = a; b < particlesArray.length; b++) {
//       let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y))
//       if (distance < (canvas.width/7) * (canvas.height/7)) {
//         opacityValue = 1 -(distance/20000)
//         ctx.strokeStyle = 'rgba(255,255,255)';
//         ctx.linewidth = 1;
//         ctx.beginPath();
//         ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
//         ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
//         ctx.stroke();
//       }
//     }
//   }
// }
// //animation loop

// function animate() {
//   requestAnimationFrame(animate);
//   ctx.clearRect(0, 0, innerWidth, innerHeight);

//   for (let i = 0; i < particlesArray.length; i++) {
//     particlesArray[i].update();
//   }
//   connect();
// }

// //resize
// window.addEventListener('resize',
// function(){
//     canvas.width=innerWidth;
//     canvas.height =innerHeight;
//     mouse.radius = ((canvas.height/80) * (canvas.height/80));
//     init();

// })

// window.addEventListener('mouseout' ,
// function(){
//     mouse.x=undefined;
//     mouse.x=undefined;
// })

// init();
// animate();
