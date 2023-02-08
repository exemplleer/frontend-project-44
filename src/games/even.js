import { judgmentCorrect, roundsCount } from '../index.js';

const evenOrNot = (num) => (num % 2 === 0 ? 'yes' : 'no');

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  judgmentCorrect(evenOrNot, roundsCount);
};

export default evenGame;
