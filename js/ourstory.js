$(document).ready( function(){

   $(window).scroll(function() {
     const scrollTop = $(this).scrollTop();
   
     const fastTranslation = scrollTop * 0.1; 
     const slowTranslation = scrollTop * 0.04;
   
     $(".fast").css("transform", `translateZ(${fastTranslation}px) translateY(-${fastTranslation* 0.1}px)`);
     $(".slow").css("transform", `translateZ(${slowTranslation}px) translateY(-${slowTranslation * 1}px)`);
   });

})