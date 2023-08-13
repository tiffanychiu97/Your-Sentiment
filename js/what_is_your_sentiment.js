$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav: false,
            loop: true,
            touchDrag: true,
        },

        1000:{
            items:3,
            nav:false,
            loop:false,
            touchDrag: false,
            mouseDrag: false
        }
    }
})
$(function (){
$(window).scroll(function (){
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
  
    $('.typing1').each(function (){
      var thisPos = $(this).offset().top;
      if ((windowHeight + scrollPos) >= thisPos){
        $(`.typing1 span::after`).css("animation", "typing 3s steps(25) forwards");
      };
    });
  });
})