$(document).ready(function(){
    $('.popularProd-inner').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            } , {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.presentation-inner').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            } , {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.product__choose-inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        draggable: false,
        asNavFor: '.product__single-inner',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.product__single-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        draggable: false,
        touchMove: false,
        asNavFor: '.product__choose-inner',
        responsive: [ 
            {
                breakpoint: 575,
                settings: {
                    touchMove: true,
                    fade: false,
                }
            }
        ]
    });
});