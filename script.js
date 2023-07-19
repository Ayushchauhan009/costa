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
function initializeTestimonials() {
  const testimonials = document.querySelectorAll(".testimonial");
  testimonials.forEach((testimonial, index) => {
    if (index === 1) {
      testimonial.classList.remove("blur");
      testimonial.style.transform = "scale(1)";
    } else {
      testimonial.classList.add("blur");
      testimonial.style.transform = "scale(0.9)";
    }
  });
}
function initializeTestimonials() {
  const testimonials = document.querySelectorAll(".testimonial");
  testimonials.forEach((testimonial, index) => {
    if (index === 1) {
      testimonial.classList.remove("blur");
      testimonial.style.transform = "scale(1)";
    } else {
      testimonial.classList.add("blur");
      testimonial.style.transform = "scale(0.9)";
    }
  });
}

function showNext() {
  const testimonialsContainer = document.querySelector(
    ".testimonials-container"
  );
  const testimonials = document.querySelectorAll(".testimonial");

  testimonialsContainer.insertBefore(
    testimonials[testimonials.length - 1],
    testimonials[0]
  );
  initializeTestimonials();
}

function showPrevious() {
  const testimonialsContainer = document.querySelector(
    ".testimonials-container"
  );
  const testimonials = document.querySelectorAll(".testimonial");

  testimonialsContainer.appendChild(testimonials[0]);
  initializeTestimonials();
}

// Initialize testimonials on page load
initializeTestimonials();
