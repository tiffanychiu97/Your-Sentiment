$(document).ready( function(){

   $(window).scroll(function() {
     const scrollTop = $(this).scrollTop();
   
     const fastTranslation = scrollTop * 0.1; 
     const slowTranslation = scrollTop * 0.04;
   
     $(".fast").css("transform", `translateZ(${fastTranslation}px) translateY(-${fastTranslation* 0.1}px)`);
     $(".slow").css("transform", `translateZ(${slowTranslation}px) translateY(-${slowTranslation * 1}px)`);
   });

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