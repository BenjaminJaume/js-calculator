let result = 0;
let buffer = '';
let symbolClicked = '';
let resultDisplayed = document.querySelector('.result');

// Select the container called 'calculator'
document
  .querySelector('.calculator')
  .addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      buttonClick(event.target.innerHTML);
    }
  });

// Called each time a button is clicked. Making the
// difference between a symbol and a number
var buttonClick = data => {
  if (isNaN(data)) {
    handleSymbol(data);
  } else {
    handleNumber(data);
  }
};

// If the button is NaN (so it's a Symbol)
var handleSymbol = data => {
  if (data === 'C') {
    clear();
  } else if (data === '←') {
    deleteOne();
  } else if (data === '=') {
    equals();
  } else {
    // Else it's a math symbol
    symbolClicked = data;
    buffer = resultDisplayed.innerHTML;
    resultDisplayed.innerHTML = '0';
  }
};

// If the button is a number
var handleNumber = data => {
  if (resultDisplayed.innerHTML === '0') {
    result = data;
  } else {
    result += data;
  }
  updateDisplay(result);
};

// When '=' is cliqued
var equals = () => {
  if (symbolClicked === '+') {
    result = +parseInt(buffer) + parseInt(resultDisplayed.innerHTML);
  } else if (symbolClicked === '-') {
    result = parseInt(buffer) - parseInt(resultDisplayed.innerHTML);
  } else if (symbolClicked === '/') {
    result = parseInt(buffer) / parseInt(resultDisplayed.innerHTML);
  } else if (symbolClicked === '*') {
    result = parseInt(buffer) * parseInt(resultDisplayed.innerHTML);
  }
  updateDisplay(result);
};

var updateDisplay = props => {
  resultDisplayed.innerHTML = props.toString();
};

// Clear the calculator
var clear = () => {
  result = 0;
  buffer = '';
  symbolClicked = '';
  updateDisplay(result);
};

// Delete one character at the end
var deleteOne = () => {
  if (parseInt(resultDisplayed.innerHTML) > 9) {
    resultDisplayed.innerHTML = resultDisplayed.innerHTML.slice(
      0,
      resultDisplayed.innerHTML.length - 1
    );
    result = parseInt(resultDisplayed.innerHTML);
  } else {
    resultDisplayed.innerHTML = '0';
    result = 0;
  }
  updateDisplay(result);
};
