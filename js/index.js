gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
"(min-width: 768px)": () => {
let pinWrap = document.querySelector(".pin-wrap");
let pinWrapWidth = pinWrap.offsetWidth;
let horizontalScrollLength = pinWrapWidth - window.innerWidth;
gsap.to(".pin-wrap", {
  x: -1650,
  scrollTrigger: {
    trigger: ".carousel-item", //觸發的物件
    ease: "power1.inOut",
    start: "top 200", // (物件開始位置, 卷軸開始位置) top center bottom px
    end: "bottom 262", //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
    pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
    scrub: true, // 物件動畫根據卷軸捲動程度跑
    // toggleClass: "active", //  class名稱 須為字串
    markers: false // 顯示標記
  }
});
}
});
