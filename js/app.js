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

  let sr = ScrollReveal({
    reset: false,
    duration: 300,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3,
  });

  sr.reveal('.opening-section');
  sr.reveal('.skills');
  sr.reveal('.project');
});