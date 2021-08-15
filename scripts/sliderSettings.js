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
});