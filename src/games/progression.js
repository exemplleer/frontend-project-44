import {
  getRandomNumber, questionAndInput, roundsCount, checkAnswer, win, fail,
} from '../index.js';

const progressionGame = () => {
  console.log('What number is missing in the progression?');
  const progressionLength = 10;

  for (let i = 0; i < roundsCount; i += 1) {
    const startPoint = getRandomNumber();
    const progressionStep = getRandomNumber(2, 10);
    const hiddenIndex = getRandomNumber(0, progressionLength - 1);

    const progression = [startPoint];
    let entryPoint = startPoint;
    for (let j = 1; j < progressionLength; j += 1) {
      entryPoint += progressionStep;
      progression.push(entryPoint);
    }

    const answer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    const userInput = questionAndInput(progression.join(' '));

    if (checkAnswer(Number(userInput), answer) === false) {
      return fail(userInput, answer);
    }
  }
  return win();
};

export default progressionGame;
