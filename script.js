let result = 0;
let temp = 0;

document
  .querySelector('.calculator')
  .addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      switch (event.target.innerHTML) {
        case 'C':
          clear();
          break;

        case '←':
          console.log('You clicked ←');
          break;

        default:
          console.log('Error');
          break;
      }
    }
  });

var updateDisplay = props => {
  let resultDisplayed = document.querySelector('.result');
  resultDisplayed.innerHTML = props;
};

var clear = () => {
  result = 0;
  updateDisplay(result);
};
