let colorBlock = document.querySelector('.colorBlock');
colorBlock.addEventListener('click', function(event) {
    document.querySelector('.colorBlock__arrow').classList.toggle('arrow-rotate');
    document.querySelector('.colorBlock__list').classList.toggle('undisplay');
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