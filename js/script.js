// import Typed from '../typed/typed.js-main/src/typed.js'

// window scroll
$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $("body").addClass("fixed-header");
  } else {
    $("body").removeClass("fixed-header");
  }
});

// Document Ready
$(document).ready(function () {
  // typing animation
  new Typed("#type-it", {
    strings: ["Designer", "Developer", "Learner", "Scrum Practitioner"],
    typeSpeed: 100,
    loop: true,
  });

  // Owl Carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    items:2,
    margin:30,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        },
    }
})
});
