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