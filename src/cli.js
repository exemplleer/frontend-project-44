import readlineSync from 'readline-sync';

let userName = 'user';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greeting;

export const win = () => {
  console.log(`Congratulations, ${userName}!`);
};

export const fail = () => {
  console.log(`Let's try again, ${userName}!`);
};
