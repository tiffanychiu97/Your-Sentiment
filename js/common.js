// AOS
AOS.init();


// lazyload
let images = document.querySelectorAll('img.lazyload');
lazyload(images);


//下滑收合選單
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
    
//     if (window.matchMedia("(max-width: 1055.33px)").matches) {
      
//       $("body").click(function(){
//         $(".menu").hide();
//       });
      

//       $(".hb").click(function(e){
//         e.stopPropagation();
//       });
//     }
//   });
  
  
  
  
  