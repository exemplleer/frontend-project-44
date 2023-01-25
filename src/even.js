import readlineSync from 'readline-sync';
import { win, fail } from './cli.js';

const evenGame = () => {
  const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = Math.round(Math.random() * 100);
    const userInput = readlineSync
      .question(`Question: ${randomNumber}\nYour answer: `)
      .toLowerCase();

    if (userInput !== isEven(randomNumber)) {
      console.log(`${userInput} is wrong answer ;(. Correct answer was ${isEven(randomNumber)}.`);
      return fail();
    }
    console.log('Correct!');
  }
  return win();
};

export default evenGame;
