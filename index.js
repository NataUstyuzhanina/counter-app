const btnCounter = document.getElementById('btnCounter');
const btnReset = document.getElementById('btnReset');
const counterText = document.querySelector('.counter');

const COUNTER_INITIAL_VALUE = 0;
let counter = COUNTER_INITIAL_VALUE;


btnCounter.addEventListener('click', function () {
  counter = counter + 1;
  counterText.innerText = counter;
});

btnReset.addEventListener('click', function() {
  counter = COUNTER_INITIAL_VALUE;
  counterText.innerText = counter;
}) 