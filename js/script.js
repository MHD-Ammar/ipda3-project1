$(document).ready(function(){
    $('.owl-carousel.for-you-carousel').owlCarousel({
        loop:true,
        rtl:true,
        nav:true,
        margin:5,
        center:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true,
            }
        }
    });
    
    $('.owl-carousel.our-customer-carousel').owlCarousel({
        loop:true,
        margin:150,
        rtl:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true,

            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    });

  });