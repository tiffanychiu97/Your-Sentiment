gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
"(min-width: 200px)": () => {
  let pinWrap = $(`.pin-wrap`)
  let pinWrapWidth = pinWrap.width()
gsap.to(".pin-wrap", {
  x: -pinWrapWidth,
  scrollTrigger: {
    trigger: "#sectionPin", 
    start: "top 100", // (物件開始位置, 卷軸開始位置) top center bottom px
    end: "bottom 262", //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
    pin: true, 
    scrub: true,
    snap: 0.35,
    // toggleClass: "active", //  class名稱 須為字串
    markers: false 
    }
    });
  }
});

$(document).ready(function () {
  

  setTimeout(function(){
    $(`.loading-wrapper`).fadeOut(500);
  }, 1000);

})