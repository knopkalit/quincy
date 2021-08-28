let productCard = document.querySelectorAll('.productCard'),
    sizeLine = document.querySelectorAll('.productCard__sizeLine');

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