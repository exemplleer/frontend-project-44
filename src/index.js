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
