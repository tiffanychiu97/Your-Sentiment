$(document).ready(function() {
    
    $('.owl-carousel').owlCarousel({
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            margin:10,
            nav: false,
            loop: true,
            touchDrag: true,
        },

        1000:{
            items: 3,
            margin: 5,
            nav:false,
            loop: false,
            touchDrag: true,
            mouseDrag: false
        },
        }
    })

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
