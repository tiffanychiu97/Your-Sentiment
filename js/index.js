import './common.js'
// loading
$(document).ready(function () {
  

  setTimeout(function(){
    $(`.loading-wrapper`).fadeOut(500);
  }, 1000);

})


// 輪播
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

"(min-width: 768px)": () => {
  let pinWrap = $(`.pin-wrap`)
  let pinWrapWidth = pinWrap.width()
  gsap.to(".pin-wrap", {
  x: -pinWrapWidth,
    scrollTrigger: {
      trigger: "#sectionPin",
      start: "top 120",
    end: "bottom 262", 
    pin: true, 
    scrub: true,
    // snap: 0.25,
    // toggleClass: "active", //  class名稱 須為字串
    markers: false 
    }
    });
  }
});

// lazyload
let images = document.querySelectorAll('img.lazyload');
lazyload(images);