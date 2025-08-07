"use strict";

const textSlider = new Swiper(".text-slider", {
  spaceBetween: 24,
  slidesPerView: "auto",
  loop: true,
  speed: 30000,
  allowTouchMove: false,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
});
const textSlider2 = new Swiper(".text-slider2", {
  spaceBetween: 24,
  slidesPerView: "auto",
  loop: true,
  speed: 30000,
  allowTouchMove: false,
  autoplay: {
    delay: 1,
    reverseDirection: true,
    disableOnInteraction: false,
  },
});
const textSlider3 = new Swiper(".text-slider3", {
  spaceBetween: 24,
  slidesPerView: "auto",
  loop: true,

  speed: 30000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
});
const textSlider4 = new Swiper(".text-slider4", {
  spaceBetween: 24,
  slidesPerView: "auto",
  loop: true,

  speed: 30000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
});
const ourExpertiseSlider = new Swiper(".our-expertise-slider", {
  spaceBetween: 24,
  slidesPerView: "auto",
  loop: true,
  speed: 30000,
  autoplay: {
    delay: 1,
  },
});

const studioLife = new Swiper(".studio-life", {
  spaceBetween: 0,
  slidesPerView: "auto",
  loop: true,
  speed: 30000,
  autoplay: {
    delay: 1,
  },
});

const studioLife2 = new Swiper(".studio-life2", {
  spaceBetween: 0,
  slidesPerView: "auto",
  loop: true,
  speed: 30000,
  autoplay: {
    delay: 1,
    reverseDirection: true,
    disableOnInteraction: false,
  },
});

const letsWorkSlider = new Swiper(".lets-work-slider", {
  centeredSlides: true,
  autoplay: {
    delay: 3000, // Adjust delay as needed
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    370: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    580: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    670: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1700: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1800: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
  },
});

const sliderImages = document.querySelectorAll(".game-image-slide");
const sliderDetails = document.querySelectorAll(".game-details-slide");

letsWorkSlider.on("slideChange", () => {
  const currentIndex = letsWorkSlider.realIndex;

  sliderImages.forEach((item, idx) => {
    if (currentIndex === idx) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  sliderDetails.forEach((item, idx) => {
    if (currentIndex === idx) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

const testimonialSlider = new Swiper(".testimonial-slider", {
  spaceBetween: 24,
  slidesPerView: "auto",
  loop: true,

  speed: 30000,
  autoplay: {
    delay: 1,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 1.5,
    },
    1000: {
      slidesPerView: 2,
    },
    1250: {
      slidesPerView: 2.5,
    },
    1550: {
      slidesPerView: 3,
    },
  },
});
const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
  spaceBetween: 24,
  slidesPerView: "auto",
  loop: true,
  speed: 30000,
  autoplay: {
    delay: 1,
    reverseDirection: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 1.5,
    },
    1000: {
      slidesPerView: 2,
    },
    1250: {
      slidesPerView: 2.5,
    },
    1550: {
      slidesPerView: 3,
    },
  },
});

const expertiseSlider = new Swiper(".our-expertise", {
  centeredSlides: true,
  loop: "true",
  slidesPerView: "auto",
  spaceBetween: 12,
  navigation: {
    nextEl: document.querySelector(".ara-next"),
    prevEl: document.querySelector(".ara-prev"),
  },
});

const serviceDetailsSlider = new Swiper(".service-details", {
  freeMode: true,
  slidesPerView: 4,
  breakpoints: {
    0: {
      spaceBetween: 8,
    },
    500: {
      spaceBetween: 16,
    },
  },
});
const serviceDetailsSlider2 = new Swiper(".service-details2", {
  thumbs: {
    swiper: serviceDetailsSlider,
  },
});

const allGamesSlider = new Swiper(".all-games", {
  loop: "true",
  slidesPerView: "auto",
  breakpoints: {
    0: {
      spaceBetween: 8,
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 1.3,
      spaceBetween: 24,
    },
    1200: {
      spaceBetween: 24,
      slidesPerView: 2,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    // hide: true,
  },
});

//odometer in view function
const odometerElement = document.querySelectorAll(".odometer");

odometerElement &&
  odometerElement.forEach((el) => {
    const odometerElementHeight = el.clientHeight;

    document.addEventListener("scroll", odometerFunction);

    function inView() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const scrollPosition = scrollY + windowHeight;
      // get element position (distance from the top of the page to the bottom of the element)
      const elementPosition =
        el.getBoundingClientRect().top + scrollY + odometerElementHeight;

      // is scroll position greater than element position? (is element in view?)
      if (scrollPosition > elementPosition) {
        return true;
      }
      return false;
    }

    function odometerFunction() {
      // is element in view?
      if (inView()) {
        el.textContent = el.getAttribute("data-odometer-final");
      }
    }
  });
