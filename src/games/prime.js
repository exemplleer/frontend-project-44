import { judgmentCorrect, roundsCount } from '../index.js';

const primeOrNot = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  judgmentCorrect(primeOrNot, roundsCount);
};

export default primeGame;
