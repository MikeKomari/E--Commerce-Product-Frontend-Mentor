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

// const emptyCartMarkup = `<div class="pop-up_content empty">
// <h4 class="empty_text">Your cart is empty.</h4>
// </div>`;

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
let itemsInCart = 0;
const incrementButton = document.querySelector(".plus");
const decrementButton = document.querySelector(".minus");

const itemsInCartElement = document.querySelector(".item_count_index");

incrementButton.addEventListener("click", function (e) {
  itemsInCart += 1;
  itemsInCartElement.textContent = itemsInCart;
});

decrementButton.addEventListener("click", function (e) {
  if (itemsInCart > 0) {
    itemsInCart -= 1;
    itemsInCartElement.textContent = itemsInCart;
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

// ===================================

const cartContainerEl = document.querySelector(".cart__container");
const addToCartButton = document.querySelector(".add_to_cart");

function renderCartUI(count = itemsInCart) {
  const markup = `<div class="cart__item">
  <img src="images/image-product-1-thumbnail.jpg" />
  <div class="cart__desc">
    <p class="cart__title">Fall Limited Edition Sneakers</p>
    <p class="cart__price">
      $125.00 x ${count} <span class="cart__price-accent">$${
    125 * count
  }.00</span>
    </p>
  </div>
  <button class="remove">
                <svg
                  width="14"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
                </svg>
              </button>
</div>
`;

  cartContainerEl.insertAdjacentHTML("afterbegin", markup);

  const cartItem = document.querySelector(".cart__item");

  checkoutButton.addEventListener("click", function () {
    if (cartItem) {
      cartItem.remove();
    }
    checkoutButton.classList.add("hidden");
    numberInBucketCart = 0;
    checkItemCartNum();
  });

  const removeItemInCart = document.querySelector(".remove");

  removeItemInCart.addEventListener("click", function () {
    if (cartItem) {
      cartItem.remove();
    }
    numberInBucketCart -= 1;
    checkItemCartNum();
  });
}

//checkoutbutton
const checkoutButton = document.querySelector(".checkout");

let numberInBucketCart = 0;

const emptyCart = document.querySelector(".pop-up_content_empty");
addToCartButton.addEventListener("click", function () {
  renderCartUI();
  numberInBucketCart += 1;
  checkItemCartNum();
});

function checkItemCartNum() {
  if (numberInBucketCart != 0) {
    checkoutButton.classList.remove("hidden");
    emptyCart.classList.add("hidden");
    console.log("haerin");
  } else {
    checkoutButton.classList.add("hidden");
    emptyCart.classList.remove("hidden");
    console.log("minji");
  }
}
