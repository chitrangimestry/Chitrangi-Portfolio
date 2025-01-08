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
});
