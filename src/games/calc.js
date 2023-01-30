import {
  win, fail, correct, questionAndInput,
} from '../cli.js';
import {
  roundsCount, getRandomNumber, getRandomOperator, getOperationResult,
} from '../index.js';

const calcGame = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const operator = getRandomOperator();
    const answer = getOperationResult(firstNumber, operator, secondNumber);

    const userInput = questionAndInput(`${firstNumber} ${operator} ${secondNumber}`);

    if (Number(userInput) === answer) {
      correct();
    } else {
      return fail(userInput, answer);
    }
  }
  return win();
};

export default calcGame;
