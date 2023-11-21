const swiper = new Swiper(".swiper", {
    // slidesPerView: 3,
    // spaceBetween: 15,
    autoplay: {
    delay: 5000,
    },
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });