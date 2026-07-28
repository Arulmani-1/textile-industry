/* 
   STACKLY PREMIUM TEXTILE INDUSTRY WEBSITE 
   Swiper Sliders Initialization
*/

document.addEventListener('DOMContentLoaded', () => {

  // 0. Hero Slider
  if (document.querySelector('.hero-slider')) {
    new Swiper('.hero-slider', {
      slidesPerView: 1,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      }
    });
  }

  // 1. Featured Products Slider
  if (document.querySelector('.products-slider')) {
    new Swiper('.products-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }
    });
  }

  // 2. Testimonials Slider
  if (document.querySelector('.testimonial-slider')) {
    new Swiper('.testimonial-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      effect: 'fade', // Premium fade effect
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.testimonial-pagination',
        clickable: true,
      }
    });
  }

  // 3. Client Logos Slider (Infinite Auto Scroll)
  if (document.querySelector('.client-slider')) {
    new Swiper('.client-slider', {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      speed: 3000, // Slow continuous speed
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      allowTouchMove: false, // Disable drag to just let it scroll
      breakpoints: {
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 6,
        },
      }
    });
  }

  // 4. News Slider (Auto Scroll)
  if(document.querySelector('.news-slider')) {
    new Swiper('.news-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      }
    });
  }

});
