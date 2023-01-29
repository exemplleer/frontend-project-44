import readlineSync from 'readline-sync';

let userName = 'user';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greeting;

export const questionAndInput = (ask) => readlineSync.question(`Question: ${ask}\nYour answer: `);

export const win = () => {
  console.log(`Congratulations, ${userName}!`);
};

export const fail = (current, correct) => {
  console.log(`'${current}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${userName}!`);
};

export const correct = () => {
  console.log('Correct!');
};
