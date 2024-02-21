import './common.js'

$(document).ready( function(){

   $(window).scroll(function() {
     const scrollTop = $(this).scrollTop();
   
     const fastTranslation = scrollTop * 0.1; 
     const slowTranslation = scrollTop * 0.04;
   
     $(".fast").css("transform", `translateZ(${fastTranslation}px) translateY(-${fastTranslation* 0.1}px)`);
     $(".slow").css("transform", `translateZ(${slowTranslation}px) translateY(-${slowTranslation * 1}px)`);
   });

   if($(window).width() < 1000)
   {
      $(this).removeClass("transform");
   } 
})

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

// $(document).ready(function() {
//    const mediaQuery = window.matchMedia('(min-width: 1000px)');

//    function handleScroll() {
//      const scrollTop = $(window).scrollTop();
//      const fastTranslation = scrollTop * 0.1; 
//      const slowTranslation = scrollTop * 0.04;

//      $(".fast").css("transform", `translateZ(${fastTranslation}px) translateY(-${fastTranslation * 0.1}px)`);
//      $(".slow").css("transform", `translateZ(${slowTranslation}px) translateY(-${slowTranslation * 1}px)`);
//    }

  
