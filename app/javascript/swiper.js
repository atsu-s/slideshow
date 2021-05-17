// const carouselModule = (() => {
//   return {
//     configure: () => {
//       const mySwiper = new Swiper('.swiper-container', {
//         loop: true,
//         slidesPerView: 3,
//         spaceBetween: 10,
//         speed: 1000,
//         centeredSlides: true,
//         autoplay: {
//           delay: 5000,
//         },
//         pagination: {
//           el: '.swiper-pagination',
//         },
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         },
//         breakpoints: {
//           1023: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//             autoplay: {
//               delay: 3000,
//             },
//           }
//         }
//       });
//     },
//   }
// })();

// $(window).on('load', function() {
//   $('.stopbtn').on('click', function() {
//       var _class = $(this).attr('class');
//       if (_class == 'stopbtn stop') {
//           $(this)
//               .addClass('start')
//               .removeClass('stop');
//               swiper.autoplay.stop();
//       } else {
//           $(this)
//               .addClass('stop')
//               .removeClass('start');
//               swiper.autoplay.start();
//       }
//   });
// });
