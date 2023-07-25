function sendMail(event, formId) {
  event.preventDefault();

  const myName = document.querySelector(`#${formId} .myName`).value;
  const myEmail = document.querySelector(`#${formId} .myEmail`).value;
  const myPhone = document.querySelector(`#${formId} .myPhone`).value;

  const params = {
    from_name: myName,
    from_email: myEmail,
    from_phone: myPhone,
  };

  const serviceID = "service_costa";
  const templateID = "template_jfn1sha";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      if (formId === "form1") {
        window.location.href = "./thankyou.html";
      } else if (formId === "form2") {
        window.location.href = "./thankyou.html";
      }
    })
    .catch((err) => console.log(err));
}

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  if (menu.style.visibility === "visible") {
    menu.style.visibility = "hidden";
  } else {
    menu.style.visibility = "visible";
  }
});

const sliderInner = document.querySelector(".slider-inner");
const slides = document.querySelectorAll(".slide");
const slideCount = slides.length;
let currentIndex = 0;
let interval;

function startSlider() {
  goToSlide(0);
  interval = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 8000);
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
let isVideoPlaying = false;

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
    aboutContent.classList.add("hidden-content");
    isVideoPlaying = true;
  });

  video.addEventListener("ended", () => {
    playButton.classList.remove("playing");
    isVideoPlaying = false;
    aboutContent.classList.remove("hidden-content");
  });
}

playButton.addEventListener("click", () => {
  if (!isVideoLoaded) {
    loadVideo();
  } else {
    if (!isVideoPlaying) {
      video.play();
      playButton.classList.add("playing");
      aboutContent.classList.add("hidden-content");
      isVideoPlaying = true;
    } else {
      video.pause();
      playButton.classList.remove("playing");
      aboutContent.classList.remove("hidden-content");
      isVideoPlaying = false;
    }
  }
});

let buttonIcon;

function toggleDropdown(button) {
  const item = button.closest(".item");
  const dropdownContent = item.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");

  buttonIcon = button.querySelector(".button-icon");

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
    const buttonIcon = button.querySelector(".button-icon");

    if (
      !button.contains(event.target) &&
      dropdownContent.classList.contains("show")
    ) {
      dropdownContent.classList.remove("show");
      buttonIcon.src = "./images/arrowsmall.png";
    }
  });
});

function initializeTestimonialsForLargerScreens() {
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

if (window.innerWidth >= 768) {
  initializeTestimonialsForLargerScreens();
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

  testimonials[3].classList.remove("hidden");
  testimonials[0].classList.add("hidden");

  initializeTestimonialsForLargerScreens();
}

function showPrevious() {
  const testimonialsContainer = document.querySelector(
    ".testimonials-container"
  );
  const testimonials = document.querySelectorAll(".testimonial");

  testimonialsContainer.appendChild(testimonials[0]);

  testimonials[3].classList.remove("hidden");
  testimonials[0].classList.add("hidden");

  initializeTestimonialsForLargerScreens();
}

function toggleItinerary(button) {
  const item = button.closest(".item");
  const itineraryDetails = item.querySelector(".itinerary-details");

  item.classList.toggle("flipped");

  itineraryDetails.classList.toggle("hide");

  closeItinerary(item);
}

function closeItinerary(exceptItem) {
  const items = document.querySelectorAll(".item");

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

const bookNowButtons = document.querySelectorAll(".bookNow");
const closeButton = document.getElementById("closeButton");
const popupForm = document.getElementById("popupForm");

function togglePopupForm() {
  if (popupForm.style.display === "block") {
    popupForm.style.display = "none";
  } else {
    popupForm.style.display = "block";
  }
}

bookNowButtons.forEach((button) => {
  button.addEventListener("click", togglePopupForm);
});

closeButton.addEventListener("click", togglePopupForm);

function openPopupAfterTime(time) {
  setTimeout(() => {
    popupForm.style.display = "block";
  }, time);
}

openPopupAfterTime(20000);
const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    const headerOffset = 60;
    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });

    const menu = document.querySelector(".menu");
    menu.classList.remove("active");
  });
});

function openWhatsApp(phoneNumber) {
  const message = "";
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  window.open(whatsappURL, "_blank");
}
