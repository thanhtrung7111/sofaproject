// MODAL
const modalMenus = document.querySelectorAll(".modal__menu");
const modalHeaderActive = document.querySelector(".modal__header-active");
const modalContent = document.querySelectorAll(".modal__form");
modalMenus.forEach((item) => {
  item.addEventListener("click", function () {
    var index = Array.prototype.indexOf.call(modalMenus, item);
    modalHeaderActive.style.transform = `translateX(${index * 100}%)`;
    modalForm(modalContent, item);
  });
});
function modalForm(list, itemValue) {
  list.forEach((item) => {
    item.classList.remove("modal__form-active");
  });
  list.forEach((item) => {
    if (
      itemValue.getAttribute("data-modal-header") ==
      item.getAttribute("data-modal-content")
    ) {
      item.classList.add("modal__form-active");
    }
  });
}

//CLOSE MODAL
const modal = document.getElementById("modal");
const closeModal = document.getElementById("modal-close");
const login = document.getElementById("login");
login.addEventListener("click", function () {
  modal.classList.add("modal__active");
});
closeModal.addEventListener("click", function () {
  modal.classList.remove("modal__active");
});

//CLOSE NAVMENU
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}
//CLOSE NAV-CART
const navCart = document.getElementById("nav-cart-container");
const navCartClose = document.getElementById("nav-cart-close");
const navCartToggle = document.getElementById("nav-cart-toggle");
if (navCartClose) {
  navCartClose.addEventListener("click", function () {
    try {
      navCart.classList.remove("show-cart");
    } catch (error) {
      console.log(error);
    }
  });
}
if (navCartToggle) {
  navCartToggle.addEventListener("click", function () {
    navCart.classList.add("show-cart");
  });
}

const dropdown = document.querySelectorAll(".dropdown-item");
const navItem = document.querySelectorAll(".nav__item>a.nav__link");
navItem.forEach((navitem) => {
  navitem.addEventListener("click", function () {
    dropdown.forEach((dropdownitem) => {
      dropdownitem.classList.remove("lg:show-dropdown");
    });
    navMenu.classList.remove("show-menu");
  });
});

const navItemp = document.querySelectorAll(".nav__item");
navItemp.forEach((navitemp) => {
  navitemp.addEventListener("click", function () {
    dropdown.forEach((item) => {
      item.classList.remove("lg:show-dropdown");
    });
    const dropdownitem = navitemp.querySelector(".dropdown-item");
    dropdownitem.classList.add("lg:show-dropdown");
  });
});

//BANER SWIPER
var bannerSwiper = new Swiper(".bannerSwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//SALE SWIPER
var saleSwiper = new Swiper(".saleSwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    568: {
      centeredSlides: false,
      slidesPerView: 2,
    },
    768: {
      centeredSlides: false,
      slidesPerView: 3,
    },
    1024: {
      centeredSlides: false,
      slidesPerView: 4,
    },
  },
});

//SCROLL UP
const scrollUp = document.getElementById("scrollUp");
window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});

//GALLERY
var galleryItems = document.querySelectorAll(".gallery__item");
var galleryImgs = document.querySelectorAll(".gallery__img");

galleryItems.forEach((galleryItem) => {
  galleryItem.addEventListener("click", function () {
    activeGalleryItem(galleryItems, galleryItem);
    var dataItem = galleryItem.getAttribute("data-gallery-item");
    console.log(dataItem);
    if (dataItem == "all") {
      galleryImgs.forEach((item) => {
        item.style.visibility = "visible";
        item.style.display = "block";
        item.style.opacity = "1";
      });
    } else {
      galleryImgs.forEach((item) => {
        item.style.visibility = "hidden";
        item.style.display = "none";
        item.style.opacity = "0";
      });
      galleryImgs.forEach((galleryImg) => {
        console.log(galleryImg.getAttribute("data-gallery-img"));
        if (galleryImg.getAttribute("data-gallery-img") == dataItem) {
          galleryImg.style.visibility = "visible";
          galleryImg.style.display = "block";
          galleryImg.style.opacity = "1";
        }
      });
    }
  });
});

function activeGalleryItem(galleryItems, galleryItem) {
  galleryItems.forEach((item) => {
    item.classList.remove("gallery-active");
  });
  galleryItem.classList.add("gallery-active");
}

// SWIPER IMAGE 
var swiper = new Swiper(".largeImageSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".imageSwiper", {
  spaceBetween: 10,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  thumbs: {
      swiper: swiper,
  },
});

//SCROLL REVEAL
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1500,
  reset: false,
});
sr.reveal(".reveal-right", { origin: "right", delay: "200" });
sr.reveal(".reveal-top", { delay: "200" });
sr.reveal(".reveal-left", { origin: "left", delay: "200" });
sr.reveal(".reveal-bottom", { origin: "bottom", delay: "200" });
sr.reveal(".reveal-interval", { interval: "200" });
