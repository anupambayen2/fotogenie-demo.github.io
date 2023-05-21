const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide")
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide")
}

window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}


const swiper = new Swiper('.first-slider', {
    loop: true, // creates a infinite loop of slides
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    navigation: { // activate navigation with navigation buttons
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {// activate paginations
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    // keyboard and mousewheel navigation
    keyboard: true,
    // mousewheel: true,

 
});


var swiper1 = new Swiper(".card-slider", {
    slidesPerView: 6,
    spaceBetween: 2,
    loop: true,
    keyboard: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: { // activate navigation with navigation buttons
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
  });

  
var swiper1 = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    keyboard: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: { // activate navigation with navigation buttons
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
  });