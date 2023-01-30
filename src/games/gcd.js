import {
  win, fail, correct, questionAndInput,
} from '../cli.js';
import { roundsCount, getRandomNumber, getGcd } from '../index.js';

const gcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < roundsCount; i += 1) {
    let firstNumber = getRandomNumber();
    let secondNumber = getRandomNumber();

    if (firstNumber === 0) {
      firstNumber += 1;
    } else if (secondNumber === 0) {
      secondNumber += 1;
    }

    const userInput = questionAndInput(`${firstNumber} ${secondNumber}`);
    const answer = getGcd(firstNumber, secondNumber);

    if (Number(userInput) === answer) {
      correct();
    } else {
      return fail(userInput, answer);
    }
  }
  return win();
};

export default gcdGame;
