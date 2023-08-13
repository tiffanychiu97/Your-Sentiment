// 輪播
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
"(min-width: 200px)": () => {
  let pinWrap = $(`.pin-wrap`)
  let pinWrapWidth = pinWrap.width()
gsap.to(".pin-wrap", {
  x: -pinWrapWidth,
  scrollTrigger: {
    trigger: "#sectionPin", 
    start: "top 100",
    end: "bottom 262", 
    pin: true, 
    scrub: true,
    snap: 0.35,
    // toggleClass: "active", //  class名稱 須為字串
    markers: false 
    }
    });
  }
});


// loading
$(document).ready(function () {
  

  setTimeout(function(){
    $(`.loading-wrapper`).fadeOut(500);
  }, 1000);

})