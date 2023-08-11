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

        769:{
            items: 3,
            nav:false,
            loop: false,
            touchDrag: true,
            mouseDrag: false
        },

        // 1000:{
        //     items: 4,
        //     nav: true,
        //     loop:false,
        //     touchDrag: false,
        //     mouseDrag: true
        // }
    }
})