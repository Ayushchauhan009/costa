// const sliderInner = document.querySelector(".slider-inner");
// let slideIndex = 0;

// setInterval(() => {
//   slideIndex = (slideIndex + 1) % 3;
//   sliderInner.style.transform = `translateX(-${slideIndex * 100}%)`;
// }, 3000);

const sliderInner = document.querySelector(".slider-inner");
const slides = document.querySelectorAll(".slide");
const slideCount = slides.length;
let currentIndex = 0;
let interval;

function startSlider() {
  interval = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 3000);
}

function goToSlide(index) {
  slides[currentIndex].classList.remove("active");
  currentIndex = (index + slideCount) % slideCount;
  slides[currentIndex].classList.add("active");
}

startSlider();

const testimonialSlider = document.querySelector(".testimonial-slider");
const testimonials = Array.from(testimonialSlider.children);
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

// // let currentIndex = 0;

// function showTestimonials() {
//   testimonials.forEach((testimonial, index) => {
//     const distanceFromCurrent = index - currentIndex;
//     const translateXValue = distanceFromCurrent * 33.33;

//     testimonial.style.transform = `translateX(${translateXValue}%)`;
//     testimonial.style.opacity = 1;
//   });

//   // Reorder testimonials based on the currentIndex
//   const testimonialsOrder = [...testimonials];
//   const middleIndex = Math.floor(testimonialsOrder.length / 2);
//   const sortedTestimonials = testimonialsOrder
//     .slice(middleIndex)
//     .concat(testimonialsOrder.slice(0, middleIndex));

//   testimonialSlider.innerHTML = "";
//   sortedTestimonials.forEach((testimonial) => {
//     testimonialSlider.appendChild(testimonial);
//   });
// }

// prevButton.addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
//   showTestimonials();
// });

// nextButton.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % testimonials.length;
//   showTestimonials();
// });

// showTestimonials();
