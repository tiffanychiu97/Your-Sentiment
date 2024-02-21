import './common.js'

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

// lazyload
let images = document.querySelectorAll('img.lazyload');
lazyload(images);