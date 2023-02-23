import readlineSync from 'readline-sync';
import { user } from './cli.js';

// Number of rounds for all games
export const roundsCount = 3;

// Get a random number in the range. The default is 0 to 100.
export const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * max) + min;

// Sets the question passed in the "ask" attribute, then accepts user input
export const questionAndInput = (ask) => readlineSync.question(`Question: ${ask}\nYour answer: `);

// Output to the console when a player wins
export const win = () => {
  console.log(`Congratulations, ${user.username}!`);
};

// Output to the console when a player defeat
export const fail = (current, correct) => {
  console.log(`'${current}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${user.username}!`);
};

// Output to the console when an answer is correct
export const correct = () => {
  console.log('Correct!');
};

// Checks if two elements specified in the attributes are equal
export const checkAnswer = (currentAnswer, correctAnswer) => {
  if (currentAnswer === correctAnswer) {
    return correct();
  }
  return false;
};

// Template for a game with true or false judgments
export const judgmentCorrect = (checkFunction, repeat = 1) => {
  for (let i = 0; i < repeat; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    const answer = checkFunction(randomNumber);
    const userInput = questionAndInput(randomNumber);

    if (checkAnswer(userInput, answer) === false) {
      return fail(userInput, answer);
    }
  }
  return win();
};
