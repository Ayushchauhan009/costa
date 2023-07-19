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

const playButton = document.getElementById("playButton");
const videoContainer = document.getElementById("videoContainer");
const video = document.createElement("video");
let isVideoLoaded = false;

function loadVideo() {
  video.src = "CostaVideo.mp4";
  video.loop = true;
  video.muted = false;
  video.autoplay = true;

  video.addEventListener("loadeddata", () => {
    isVideoLoaded = true;
    videoContainer.innerHTML = "";
    videoContainer.appendChild(video);
    video.play();
    playButton.classList.add("playing");
  });

  video.addEventListener("ended", () => {
    playButton.classList.remove("playing");
  });
}

playButton.addEventListener("click", () => {
  if (!isVideoLoaded) {
    loadVideo();
  } else {
    if (video.paused) {
      video.play();
      playButton.classList.add("playing");
    } else {
      video.pause();
      playButton.classList.remove("playing");
    }
  }
});
function toggleDropdown(button) {
  const item = button.closest(".item");
  const dropdownContent = item.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
}

document.addEventListener("click", (event) => {
  const dropdownContents = document.querySelectorAll(".dropdown-content");
  const expandButtons = document.querySelectorAll(".expand-button");

  for (let i = 0; i < dropdownContents.length; i++) {
    if (
      !event.target.closest(".item") &&
      dropdownContents[i].classList.contains("show")
    ) {
      dropdownContents[i].classList.remove("show");
    }
  }
});

function initializeTestimonials() {
  const testimonials = document.querySelectorAll(".testimonial");
  testimonials.forEach((testimonial, index) => {
    if (index < 3) {
      testimonial.classList.remove("hidden");
      if (index === 1) {
        testimonial.classList.remove("blur");
        testimonial.style.transform = "scale(1)";
      } else {
        testimonial.classList.add("blur");
        testimonial.style.transform = "scale(0.9)";
      }
    } else {
      testimonial.classList.add("hidden");
    }
  });
}

// Rest of the code...

function showNext() {
  const testimonialsContainer = document.querySelector(
    ".testimonials-container"
  );
  const testimonials = document.querySelectorAll(".testimonial");

  testimonialsContainer.insertBefore(
    testimonials[testimonials.length - 1],
    testimonials[0]
  );

  // Show the fourth testimonial and hide the first testimonial
  testimonials[3].classList.remove("hidden");
  testimonials[0].classList.add("hidden");

  initializeTestimonials();
}

function showPrevious() {
  const testimonialsContainer = document.querySelector(
    ".testimonials-container"
  );
  const testimonials = document.querySelectorAll(".testimonial");

  testimonialsContainer.appendChild(testimonials[0]);

  // Show the fourth testimonial and hide the first testimonial
  testimonials[3].classList.remove("hidden");
  testimonials[0].classList.add("hidden");

  initializeTestimonials();
}
