let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

let menuBtnItem = document.querySelector('.menu-btn-item');
let menuItem = document.querySelector('.menu');
menuBtnItem.addEventListener('click', function () {
  menuBtnItem.classList.toggle('active');
  menu.classList.toggle('active');
});

new Swiper('.image-slider-1', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   StopOnLastSlide: true,
  //   disableOnInteraction: false,
  // },

});

new Swiper('.image__clothes-slider', {
  slidesPerView: 3,
});

new Swiper('.image-slider-3', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

});

new Swiper('.image-slider-4', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 77,
  breakpoints: {
    1100: {
      slidesPerView: 2,
    }
  },
  
});
