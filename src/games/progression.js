import {
  getRandomNumber, questionAndInput, roundsCount, win, fail, correct,
} from '../index.js';

const progressionGame = () => {
  console.log('What number is missing in the progression?');
  const progressionLength = 10;

  for (let i = 0; i < roundsCount; i += 1) {
    const startPoint = getRandomNumber();
    const progressionStep = Math.round(Math.random() * 8) + 2;
    const hiddenIndex = Math.round(Math.random() * (progressionLength - 1));

    const progression = [startPoint];
    let entryPoint = startPoint;
    for (let j = 1; j < progressionLength; j += 1) {
      entryPoint += progressionStep;
      progression.push(entryPoint);
    }

    const answer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    const userInput = questionAndInput(progression.join(' '));

    if (Number(userInput) === answer) {
      correct();
    } else {
      return fail(userInput, answer);
    }
  }
  return win();
};

export default progressionGame;
