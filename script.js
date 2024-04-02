"use strict";

//CART POP UP LOGIC
const cartButton = document.querySelector(".cart");
const popUp = document.querySelector(".pop-up-wrapper");

cartButton.addEventListener("click", function (e) {
  popUp.classList.toggle("hidden");
});

//SLIDER LOGIC
const MAX_IMAGE_INDEX = 3;
let activeImage = 0;

const imageFlag = document.querySelector(".big_image_tn");
const sliderWrapper = document.querySelector(".modal_bg");

const nextButtonImage = document.querySelector(".next-button");
const prevButtonImage = document.querySelector(".prev-button");
const slider = document.querySelector(".slider");
const image = document.getElementById("slide_1");
const closeButtonSlider = document.querySelector(".close_slider");
const sliderToggle = document.querySelector(".slider_toggle");

const closeModal = function () {
  sliderWrapper.classList.toggle("hidden");
};

imageFlag.addEventListener("click", function (e) {
  sliderWrapper.classList.remove("hidden");
});

//pencet selain slider jadi tutup
sliderWrapper.addEventListener("click", function (e) {
  if (e.target === sliderWrapper) {
    closeModal();
  }
});

nextButtonImage.addEventListener("click", function (e) {
  // activeImage = Math.min(MAX_IMAGE_INDEX, activeImage + 1);

  activeImage = (activeImage + 1) % (MAX_IMAGE_INDEX + 1);
  slider.style.transform = `translateX(-${activeImage * 400}px)`;
});

prevButtonImage.addEventListener("click", function (e) {
  activeImage = activeImage - 1 < 0 ? MAX_IMAGE_INDEX : activeImage - 1;
  slider.style.transform = `translateX(-${activeImage * 400}px)`;
});

closeButtonSlider.addEventListener("click", function (e) {
  closeModal();
});

// counter logic
let counterIndex = 0;
const counterPlus = document.querySelector(".plus");
const counterMinus = document.querySelector(".minus");
const counterValue = document.querySelector(".item_count_index");

counterPlus.addEventListener("click", function (e) {
  counterIndex += 1;
  counterValue.textContent = counterIndex;
  console.log(counterIndex);
});

counterMinus.addEventListener("click", function (e) {
  if (counterIndex > 0) {
    counterIndex -= 1;
    counterValue.textContent = counterIndex;
  }
});
