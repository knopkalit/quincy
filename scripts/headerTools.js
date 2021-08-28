let navLinks = document.querySelectorAll('.header__linkMobile'),
    sideList = document.querySelectorAll('.header__linkSideList'),
    dropdown = document.querySelectorAll('.header__dropdownMenu-column');

if (dropdown.length > 5) {
    document.querySelector('.header__dropdownMenu-inner').classList.remove('fx-jc-c');
}

document.querySelector('.sidebar').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open-menu');
    document.querySelector('.header__navigation-mobile').classList.toggle('active--menu');
    for (let i = 0; i < sideList.length; i++) {
        sideList[i].classList.remove('emerald');
    }
    document.querySelector('.inside').classList.remove('hide');
    document.querySelector('.header__arrow').classList.remove('arrow-rotate');
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
document.querySelectorAll('.header__nav')[1].addEventListener('mouseenter', function() {
    document.querySelectorAll('.header__nav')[1].classList.add('focused');
    document.querySelector('.blur-bg').classList.add('aiming');
});
document.querySelectorAll('.header__nav')[1].addEventListener('mouseleave', function() {
    document.querySelectorAll('.header__nav')[1].classList.remove('focused');
    document.querySelector('.blur-bg').classList.remove('aiming');
});