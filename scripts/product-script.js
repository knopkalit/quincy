let sizeBlock = document.querySelector('.sizeBlock'),
sizeListItem = document.querySelectorAll('.sizeBlock__selectList');

sizeBlock.addEventListener('click', function(event) {
    document.querySelector('.sizeBlock__arrow').classList.toggle('arrow-rotate');
    document.querySelector('.sizeBlock__list').classList.toggle('undisplay');
    document.querySelector('.settings__select').classList.toggle('fe-45-1');
    document.querySelector('.settings__select').classList.toggle('fe-45-2');
    document.querySelector('.settings__color').classList.toggle('fe-45-1');
    document.querySelector('.settings__color').classList.toggle('fe-45-2');
    document.querySelector('.titleManagement').classList.toggle('fe-45-1');
    document.querySelector('.titleManagement').classList.toggle('fe-45-2');
    document.querySelector('.sizeBlock-inner').classList.toggle('fe-45-1');
});
for (let i = 0; i < sizeListItem.length; i++) {
    sizeListItem[i].addEventListener('click', function (event) {
        for (let j = 0; j < sizeListItem.length; j++) {
            if (i != j) {
                sizeListItem[j].classList.remove('fe-45-3');
            }
        }
        sizeListItem[i].classList.add('fe-45-3');
        document.querySelector('.sizeList-mobile').classList.remove('active--size');
        document.querySelector('.pageOverlay').classList.remove('visible');
        document.querySelector('.sizeBlock__selected').innerHTML = sizeListItem[i].innerHTML;
    });
}
document.querySelector('.sizeBlock-inner').addEventListener('click', function() {
    document.querySelector('.sizeList-mobile').classList.add('active--size');
    document.querySelector('.pageOverlay').classList.add('visible');
});
document.querySelector('.sizeList-mobile__close').addEventListener('click', function() {
    document.querySelector('.sizeBlock__arrow').classList.remove('arrow-rotate');
    document.querySelector('.sizeList-mobile').classList.remove('active--size');
    document.querySelector('.pageOverlay').classList.remove('visible');
});
document.querySelector('.pageOverlay').addEventListener('click', function(event) {
    if (!event.target.closest('.sizeList-mobile')) {
        document.querySelector('.sizeList-mobile').classList.remove('active--size');
        document.querySelector('.pageOverlay').classList.remove('visible');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
        document.querySelector('.sizeList-mobile').classList.remove('active--size');
        document.querySelector('.pageOverlay').classList.remove('visible');
    }
});

function addHandlers(count) {
    let minus = count.querySelector('.quantityBlock__minus'),
        total = count.querySelector('.quantityBlock__total'),
        plus = count.querySelector('.quantityBlock__plus'),
        newValue = 0;
    plus.addEventListener('click', function() {
        total.value++;
    });
    minus.addEventListener('click', function() {
        if (total.value > 1) {
            total.value--;
        }
    });
  }
  let quantityBlock = document.querySelectorAll('.quantityBlock');
  quantityBlock.forEach(addHandlers);
