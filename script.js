"use strict";

//CART POP UP LOGIC
const cartButton = document.querySelector(".cart");
const popUp = document.querySelector(".pop-up-wrapper");
const container = document.querySelector(".container");
const body = document.querySelector("body");

cartButton.addEventListener("click", function (e) {
  popUp.classList.toggle("hidden");
});

container.addEventListener("click", function (e) {
  if (e.target === container) {
    popUp.classList.add("hidden");
  }
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

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !sliderWrapper.classList.contains("hidden")) {
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

//slider tapi mencet logic
const smallThumbnail = document.querySelectorAll(".small_images");
const bigThumbnail = document.querySelector(".big_image_tn");

const bigImage1 = "images/image-product-1.jpg";
const bigImage2 = "images/image-product-2.jpg";

const mainFunctionChangingThumbnail = (e) => {
  if (e.target.alt === "img1") {
    bigThumbnail.innerHTML = `<img src="images/image-product-1.jpg" alt="imgBig1" />`;
  } else if (e.target.alt === "img2") {
    bigThumbnail.innerHTML = `<img src="images/image-product-2.jpg" alt="imgBig2" />`;
  } else if (e.target.alt === "img3") {
    bigThumbnail.innerHTML = `<img src="images/image-product-3.jpg" alt="imgBig3" />`;
  } else if (e.target.alt === "img4") {
    bigThumbnail.innerHTML = `<img src="images/image-product-4.jpg" alt="imgBig4" />`;
  }
};

smallThumbnail.forEach((img) => {
  img.addEventListener("mouseover", function (e) {
    // console.log(e.target.alt);
    mainFunctionChangingThumbnail(e);
  });
});

smallThumbnail.forEach((img) => {
  img.addEventListener("click", function (e) {
    // console.log(e.target.alt);
    mainFunctionChangingThumbnail(e);
  });
});
