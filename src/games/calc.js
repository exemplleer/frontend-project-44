import {
  getRandomNumber, questionAndInput, roundsCount, checkAnswer, win, fail,
} from '../index.js';

const getRandomOperator = () => {
  const randomNumber = getRandomNumber(1, 3);
  switch (randomNumber) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return null;
  }
};

const getOperationResult = (firstOperand, operator, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return null;
  }
};

const calcGame = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const operator = getRandomOperator();

    const answer = getOperationResult(firstNumber, operator, secondNumber);
    const userInput = questionAndInput(`${firstNumber} ${operator} ${secondNumber}`);

    if (checkAnswer(Number(userInput), answer) === false) {
      return fail(userInput, answer);
    }
  }
  return win();
};

export default calcGame;
