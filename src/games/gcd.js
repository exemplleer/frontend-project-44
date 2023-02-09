import {
  getRandomNumber, questionAndInput, roundsCount, checkAnswer, win, fail,
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
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);

    const answer = getGcd(firstNumber, secondNumber);
    const userInput = questionAndInput(`${firstNumber} ${secondNumber}`);

    if (checkAnswer(Number(userInput), answer) === false) {
      return fail(userInput, answer);
    }
  }
  return win();
};

export default gcdGame;
