import {
  getRandomNumber, questionAndInput, roundsCount, win, fail, correct,
} from '../index.js';

export const getGcd = (firstNumber, secondNumber) => {
  const maxNumber = Math.max(firstNumber, secondNumber);
  for (let i = maxNumber; i > 1; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      return i;
    }
  }
  return 1;
};

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

    const answer = getGcd(firstNumber, secondNumber);
    const userInput = questionAndInput(`${firstNumber} ${secondNumber}`);

    if (Number(userInput) === answer) {
      correct();
    } else {
      return fail(userInput, answer);
    }
  }
  return win();
};

export default gcdGame;
