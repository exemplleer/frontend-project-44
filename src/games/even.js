import {
  questionAndInput, roundsCount, win, fail, correct,
} from '../index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = Math.round(Math.random() * 100);
    const userInput = questionAndInput(randomNumber).toLowerCase();
    const answer = isEven(randomNumber);

    if (userInput === answer) {
      correct();
    } else {
      return fail(userInput, answer);
    }
  }

  return win();
};

export default evenGame;
