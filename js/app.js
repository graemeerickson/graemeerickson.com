$(document).ready(function () {

  $("#logo").click(function() {
    $("html, body").animate({
      scrollTop: $("body").offset().top
    }, 800);
  });

  $("#projects-link").click(function() {
    $("html, body").animate({
      scrollTop: $("#projects").offset().top
    }, 800);
  });

  $("#more-arrow-container").click(function() {
    $("html, body").animate({
      scrollTop: $("#skills").offset().top
    }, 800);
  });

  AOS.init(); // scroll animations
});