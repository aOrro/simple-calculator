let firstInput, secondInput;

let sumButton = document.getElementById('sum');
let diffButton = document.getElementById('diff');
let multiplyButton = document.getElementById('multiply');
let divideButton = document.getElementById('divide');

let buttonsArray = Array.from(document.getElementsByClassName('operationBtn'));

let result = document.getElementById('result');

let resetButton = document.getElementById('resetButton');

const declareInputs = () => {
  firstInput = document.getElementById('input-one');
  secondInput = document.getElementById('input-two');
};

const reset = () => {
  declareInputs();
  firstInput.value = '';
  firstInput.placeholder = 'Write a number...';
  firstInput.style.border = 'revert';
  secondInput.value = '';
  secondInput.placeholder = 'Write a number...';
  secondInput.style.border = 'revert';
  result.innerHTML = '';
  buttonsArray.forEach(btn => {
    btn.style.background = 'revert';
  });
};

const operationToDo = (btnClicked) => {
  declareInputs();
  let inputsArray = [firstInput, secondInput];
  
  inputsArray.forEach(element => {
    if(element.value === '') {
      element.style.border = '2px solid red';
      result.innerHTML = '';
      element.placeholder = 'Missing input!!';
    } else {
        element.style.border = 'revert';
        switch(btnClicked.innerHTML) {
          case '+':
            result.innerHTML = Number(firstInput.value) + Number(secondInput.value);
            break;
          case '-':
            result.innerHTML = Number(firstInput.value) - Number(secondInput.value);
            break;
          case 'x':
            result.innerHTML = Number(firstInput.value) * Number(secondInput.value);
            break;
          case '/':
            result.innerHTML = Number(firstInput.value) / Number(secondInput.value);
            break;
        }
    } 
  });
};

let randomCalculationButton = document.getElementById('randomCalculationButton');

const randomCalculation = () => {
  declareInputs();
  reset();
  let firstNumber = Math.floor(Math.random() * 100) + 1;
  let secondNumber = Math.floor(Math.random() * 100) + 1;
  let randomIndex = Math.floor(Math.random() * 4);
  let calculationResult;
  
  firstInput.value = firstNumber;
  secondInput.value = secondNumber;
  buttonsArray[randomIndex].style.background = 'blue';
  
  switch(buttonsArray[randomIndex].innerHTML) {
    case '+':
      calculationResult = firstNumber + secondNumber;
      result.innerHTML = calculationResult; 
      break;
    case '-':
      calculationResult = firstNumber - secondNumber;
      result.innerHTML = calculationResult; 
      break;
    case 'x':
      calculationResult = firstNumber * secondNumber;
      result.innerHTML = calculationResult; 
      break;
    case '/':
      calculationResult = firstNumber / secondNumber;
      result.innerHTML = calculationResult; 
      break;
  };
};


buttonsArray.forEach(btn => {
  btn.addEventListener('click', (event) => {
    operationToDo(btn);
  });
});

randomCalculationButton.addEventListener('click', randomCalculation);
resetButton.addEventListener('click', reset);
