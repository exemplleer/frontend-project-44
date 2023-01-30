import {
  getRandomNumber, questionAndInput, roundsCount, win, fail, correct,
} from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = getRandomNumber();

    const answer = isPrime(randomNumber);
    const userInput = questionAndInput(randomNumber).toLowerCase();

    if (userInput === answer) {
      correct();
    } else {
      return fail(userInput, answer);
    }
  }
  return win();
};

export default primeGame;
