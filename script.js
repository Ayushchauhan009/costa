// const sliderInner = document.querySelector(".slider-inner");
// let slideIndex = 0;

// setInterval(() => {
//   slideIndex = (slideIndex + 1) % 3;
//   sliderInner.style.transform = `translateX(-${slideIndex * 100}%)`;
// }, 3000);

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

const sliderInner = document.querySelector(".slider-inner");
const slides = document.querySelectorAll(".slide");
const slideCount = slides.length;
let currentIndex = 0;
let interval;

function startSlider() {
  interval = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 5000);
}

function goToSlide(index) {
  slides[currentIndex].classList.remove("active");
  currentIndex = (index + slideCount) % slideCount;
  slides[currentIndex].classList.add("active");
}

startSlider();

const playButton = document.getElementById("playButton");
const videoContainer = document.getElementById("videoContainer");
const aboutContent = document.getElementById("about-content");
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
      aboutContent.classList.add("hiddenContent");
    } else {
      video.pause();
      playButton.classList.remove("playing");
    }
  }
});
let buttonIcon; // Declare the buttonIcon variable outside the toggleDropdown() function

function toggleDropdown(button) {
  const item = button.closest(".item");
  const dropdownContent = item.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");

  // Get the button icon element
  buttonIcon = button.querySelector(".button-icon");

  // Toggle the icon based on the dropdown visibility
  if (dropdownContent.classList.contains("show")) {
    buttonIcon.src = "./images/cancel.png";
  } else {
    buttonIcon.src = "./images/arrowsmall.png";
  }
}

document.addEventListener("click", (event) => {
  const dropdownContents = document.querySelectorAll(".dropdown-content");

  dropdownContents.forEach((dropdownContent) => {
    const item = dropdownContent.closest(".item");
    const button = item.querySelector(".expand-button");
    const buttonIcon = button.querySelector(".button-icon"); // Get the button icon element

    if (
      !button.contains(event.target) &&
      dropdownContent.classList.contains("show")
    ) {
      dropdownContent.classList.remove("show");
      buttonIcon.src = "./images/arrowsmall.png"; // Set the icon back to the initial state when the dropdown is closed
    }
  });
});
// With this change, the buttonIcon variable is accessible within both functions, and the button icon should now change appropriately when the dropdown content is shown or hidden.

function initializeTestimonials() {
  const testimonials = document.querySelectorAll(".testimonial");
  testimonials.forEach((testimonial, index) => {
    if (index < 3) {
      testimonial.classList.remove("hidden");
      testimonial.classList.add("blur");
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

function toggleItinerary(button) {
  const item = button.closest(".item");
  const itineraryDetails = item.querySelector(".itinerary-details");

  // Toggle the .flipped class on the item
  item.classList.toggle("flipped");

  // Toggle the .hide class for the itinerary details
  itineraryDetails.classList.toggle("hide");

  // Close other open itinerary details
  closeItinerary(item);
}

function closeItinerary(exceptItem) {
  const items = document.querySelectorAll(".item");

  // Close all itinerary details and remove the .flipped class from all items except the clicked one
  items.forEach((item) => {
    if (item !== exceptItem) {
      item.classList.remove("flipped");
      const itineraryDetails = item.querySelector(".itinerary-details");
      if (!itineraryDetails.classList.contains("hide")) {
        itineraryDetails.classList.add("hide");
      }
    }
  });
}
