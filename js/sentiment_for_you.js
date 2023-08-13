$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:50,
    responsive:{
        0:{
            nav: true,
            items:1
        },
        600:{
            items:3,
            nav:true
        },
      //   1000:{
      //       items:5
      //   }
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
