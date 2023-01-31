import readlineSync from 'readline-sync';
import { user } from './cli.js';

export const roundsCount = 3;

export const getRandomNumber = () => Math.round(Math.random() * 100);

export const questionAndInput = (ask) => readlineSync.question(`Question: ${ask}\nYour answer: `);

export const win = () => {
  console.log(`Congratulations, ${user.username}!`);
};

export const fail = (current, correct) => {
  console.log(`'${current}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${user.username}!`);
};

export const correct = () => {
  console.log('Correct!');
};

export const checkAnswer = (currentAnswer, correctAnswer) => {
  if (currentAnswer === correctAnswer) {
    return correct();
  }
  return false;
};

export const judgmentCorrect = (checkFunction, repeat = 1) => {
  for (let i = 0; i < repeat; i += 1) {
    const randomNumber = getRandomNumber();
    const answer = checkFunction(randomNumber);
    const userInput = questionAndInput(randomNumber);

    if (checkAnswer(userInput, answer) === false) {
      return fail(userInput, answer);
    }
  }
  return win();
};
