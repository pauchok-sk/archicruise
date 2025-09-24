export default function sliders() {
  const partnersAboutSlider = document.querySelector(
    ".s-about__partners-slider"
  );

  if (partnersAboutSlider) {
    const swiper = new Swiper(partnersAboutSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 40,
      autoplay: {
        delay: 3500,
      },
    });
  }

  const speakersSlider = document.querySelector(".s-speakers__slider");

  if (speakersSlider) {
    const swiper = new Swiper(speakersSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 16,
      autoplay: {
        delay: 3200,
      },
    });
  }

  const gallerySliders = document.querySelectorAll(".s-gallery__slider");

  if (gallerySliders.length) {
    gallerySliders.forEach(slider => {
      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: "auto",
        spaceBetween: 8,
        autoplay: {
          delay: 3500,
        },
        navigation: {
          prevEl: ".s-gallery .slider-nav__btn._prev",
          nextEl: ".s-gallery .slider-nav__btn._next"
        },
        breakpoints: {
          768: {
            slidesPerView: "auto",
            spaceBetween: 16,
          },
        },
      });
    })
  }
}
