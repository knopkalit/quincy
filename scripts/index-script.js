let navLinks = document.querySelectorAll('.header__linkMobile'),
    sideList = document.querySelectorAll('.header__linkSideList'),
    productCard = document.querySelectorAll('.productCard'),
    sizeLine = document.querySelectorAll('.productCard__sizeLine');

document.querySelector('.sidebar').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open-menu');
    document.querySelector('.header__navigation-mobile').classList.toggle('active--menu');
    for (let i = 0; i < sideList.length; i++) {
        sideList[i].classList.remove('emerald');
    }
    document.querySelector('.inside').classList.remove('hide');
    document.body.classList.toggle('lock');
});
document.querySelector('.cart').addEventListener('click', function() {
    document.querySelector('.cartArea').classList.add('active--cart');
    document.querySelector('.pageOverlay').classList.add('visible');
});
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.cartArea').classList.remove('active--cart');
    document.querySelector('.pageOverlay').classList.remove('visible');
});
document.querySelector('.pageOverlay').addEventListener('click', function(event) {
    if (!event.target.closest('.cartArea')) {
        document.querySelector('.cartArea').classList.remove('active--cart');
        document.querySelector('.pageOverlay').classList.remove('visible');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
        document.querySelector('.cartArea').classList.remove('active--cart');
        document.querySelector('.pageOverlay').classList.remove('visible');
    }
});
navLinks[1].addEventListener('click', function() {
    document.querySelector('.inside').classList.toggle('hide');
    document.querySelector('.header__arrow').classList.toggle('arrow-rotate');
});
for (let i = 0; i < navLinks.length; i++) {
    navLinks[1].addEventListener('click', function() {
        sideList[0].classList.toggle('emerald');
    });
}
for (let i = 0; i < productCard.length; i++) {
    productCard[i].addEventListener('mouseenter', function() {
        let heightSizeLine = sizeLine[i].clientHeight;
        sizeLine[i].style.top = 'calc(100% - ' + heightSizeLine + 'px)';
        for (let j = 0; j < productCard.length; j++) {
            if (i != j) {
                //productCard[j].style.opacity = '0.5';
                //productCard[j].style.transition = '0.3s';
            }
        }
    });
    productCard[i].addEventListener('mouseleave', function() {
        sizeLine[i].style.top = 'calc(100% - 10px)';
        for (let j = 0; j < productCard.length; j++) {
                //productCard[j].style.opacity = '1';
                //productCard[j].style.transition = '0.3s';
        }
    });
}