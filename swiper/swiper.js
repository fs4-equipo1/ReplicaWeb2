  const swiperPrincipal = new Swiper(".swiperPrincipal", {
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

  const swiperSecundario = new Swiper(".swiperSecundario", {
    // slidesPerView: 3,
    // spaceBetween: 15,

    direction: "horizontal",
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });