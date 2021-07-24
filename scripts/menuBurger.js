let navLinks = document.querySelectorAll('.header__linkMobile');

document.querySelector('.sidebar').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open-menu');
    document.querySelector('.header__navigation-mobile').classList.toggle('active--menu');
    for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('emerald');
    }
    document.querySelector('.inside').classList.remove('hide');
});
document.querySelector('.cart').addEventListener('click', function() {
    document.querySelector('.header__cartArea').classList.add('active--cart');
    document.querySelector('.pageOverlay').classList.add('visible');
});
document.querySelector('.cartArea__close').addEventListener('click', function() {
    document.querySelector('.header__cartArea').classList.remove('active--cart');
    document.querySelector('.pageOverlay').classList.remove('visible');
});
navLinks[1].addEventListener('click', function() {
    document.querySelector('.inside').classList.toggle('hide');
});
for (let i = 0; i < navLinks.length; i++) {
    navLinks[1].addEventListener('click', function(event) {
        navLinks[1].classList.toggle('emerald');
    });
}