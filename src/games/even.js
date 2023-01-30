import {
  questionAndInput, roundsCount, win, fail, correct, getRandomNumber,
} from '../index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = getRandomNumber();

    const answer = isEven(randomNumber);
    const userInput = questionAndInput(randomNumber).toLowerCase();

    if (userInput === answer) {
      correct();
    } else {
      return fail(userInput, answer);
    }
  }
  return win();
};

export default evenGame;
