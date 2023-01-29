import readlineSync from 'readline-sync';
import { win, fail } from './cli.js';

const getRandomNumber = () => Math.round(Math.random() * 100);
const getRandomCalcOperation = () => {
  const ranodomNumber = (Math.round(Math.random() * 10) % 3) + 1;
  switch (ranodomNumber) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return null;
  }
};

const calcGame = () => {
  console.log('What is the result of the expression?');
  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const operation = getRandomCalcOperation();

    const getCalcAnswer = () => {
      switch (operation) {
        case '+':
          return firstNumber + secondNumber;
        case '-':
          return firstNumber - secondNumber;
        case '*':
          return firstNumber * secondNumber;
        default:
          return null;
      }
    };
    const answer = getCalcAnswer();

    const userInput = readlineSync.question(`Question: ${firstNumber} ${operation} ${secondNumber}\nYour answer: `);

    if (Number(userInput) === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return fail();
    }
  }
  return win();
};

export default calcGame;
