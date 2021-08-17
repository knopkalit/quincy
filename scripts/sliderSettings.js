let gallery = new Swiper('.product__gallery', {
    navigation: {
        nextEl: '.slide-button-next',
        prevEl: '.slide-button-prev'
    },
    simulateTouch: true,
    slidesPerView: 3,
    spaceBetween: 10,
    watchOverFlow: true,
    slideToClickedSlide: true,
    breakpoints: {
        991: {
            slidesPerView: 4,
            spaceBetween: 14,
        }, 769: {
            slidesPerView: 3,
            spaceBetween: 16
        }, 481: {
            spaceBetween: 14
        }, 320: {
            spaceBetween: 12,
        }
    }
});
let single = new Swiper('.product__single', {
    slidesPerView: 1,
    simulateTouch: false,
    slideToClickedSlide: true,
    thumbs: {
        swiper: gallery
    }
});
let popularProd = new Swiper('.popularProd-inner', {
    navigation: {
        nextEl: '.slide-button-next',
        prevEl: '.slide-button-prev'
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    simulateTouch: false,
    breakpoints: {
        1440: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        }, 991: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        }, 575: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }, 400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        }
    }
});
let presentation = new Swiper('.presentation-inner', {
    navigation: {
        nextEl: '.slide-button-next',
        prevEl: '.slide-button-prev'
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    simulateTouch: false,
    breakpoints: {
        1440: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        }, 991: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        }, 575: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }, 400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        }
    }
});