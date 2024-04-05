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

const emptyCartMarkup = `<div class="pop-up_content empty">
<h4 class="empty_text">Your cart is empty.</h4>
</div>`;

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
const addToCartButton = document.querySelector(".add_to_cart");
const itemsInCartElement = document.querySelector(".item_count_index");

incrementButton.addEventListener("click", function (e) {
  itemsInCart += 1;
  itemsInCartElement.textContent = itemsInCart;
  updateUI("Add To Cart");
});

decrementButton.addEventListener("click", function (e) {
  if (itemsInCart > 0) {
    itemsInCart -= 1;
    itemsInCartElement.textContent = itemsInCart;
    updateUI("Remove From Cart");
  }
});

addToCartButton.addEventListener("click", () => {});

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

const itemList = [
  {
    id: "ITEM-1",
    name: "Adidas Shoes",
    priceDollar: 375,
    imageLink: "image-product-1-thumbnail.jpg",
  },
  {
    id: "ITEM-2",
    name: "Adidas Underwear",
    priceDollar: 55000,
    imageLink: "image-product-2-thumbnail.jpg",
  },
  {
    id: "ITEM-3",
    name: "Adidas Bra",
    priceDollar: 125,
    imageLink: "image-product-3-thumbnail.jpg",
  },
];

const cartItemList = [];

const itemAddButtonList = document.querySelectorAll(".add-item-test");

itemAddButtonList.forEach((button) => {
  button.addEventListener("click", function () {
    const clickedItemId = this.dataset.itemId;

    const itemDetails = itemList.find((item) => item.id === clickedItemId);
    cartItemList.push({ ...itemDetails });
    renderCartUI({
      title: itemDetails.title,
      price: itemDetails.priceDollar,
      image: `images/${itemDetails.imageLink}`,
      count: 1,
    });
  });
});
// JSDOC

/**
 *
 * @param {"Add To Cart" | "Remove From Cart"} action
 */
function updateUI(action) {
  cartContainerEl.innerHTML = itemsInCart === 0 ? emptyCartMarkup : "";

  switch (action) {
    case "Add To Cart":
      renderCartUI({ count: itemsInCart });
      break;
    case "Remove To Cart":
      renderCartUI({ count: itemsInCart });
      break;
    default:
      console.log("Unknown action");
  }
}

function renderCartUI({
  title = "Adidas Shoes",
  price = 125,
  count = 3,
  image = "images/image-product-1-thumbnail.jpg",
}) {
  const markup = `
    <div class="cart__item">
      <img src="${image}" />
      <div class="cart__desc">
        <p class="cart__title">${title}</p>
        <p class="cart__price">
          $${price} x${count} <span class="cart__price-accent">$${
    price * count
  }</span>
        </p>
      </div>
    </div>
  `;

  cartContainerEl.insertAdjacentHTML("afterbegin", markup);
}

function addToCart() {}
