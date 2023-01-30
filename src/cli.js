import readlineSync from 'readline-sync';

export const user = {
  username: 'Guest',
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  user.username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user.username}!`);
};

export default greeting;
