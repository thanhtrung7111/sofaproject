const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

//CLOSE NAVMENU
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
      console.log(error)
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

//SCROLL REVEAL
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: false,
});

//SCROLL UP
const scrollUp = document.getElementById("scrollUp");
window.addEventListener('scroll',function(){
  if(this.window.scrollY >=350){
    scrollUp.classList.add("show-scroll");
  }else{
    scrollUp.classList.remove("show-scroll");
  }
})

sr.reveal(".reveal-right", { origin: "right", delay: "200" });
sr.reveal(".reveal-top", { delay: "200" });
sr.reveal(".reveal-left", { origin: "left", delay: "200" });
sr.reveal(".reveal-bottom", { origin: "bottom", delay: "200" });
sr.reveal(".reveal-interval", { interval: "200" });
