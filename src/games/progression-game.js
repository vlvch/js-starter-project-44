import { randomNumber } from '../utils.js';

const getProgression = (firstNum, stepNum, sizeNum) => {
  const progression = [firstNum];
  let i = 0;

  while (i < sizeNum) {
    progression.push(progression[progression.length - 1] + stepNum);

    i += 1;
  }
  return progression;
};

const progressionGame = () => {
  const firstNum = randomNumber(1, 10);
  const stepNum = randomNumber(1, 10);
  const sizeNum = randomNumber(8, 12);
  const index = randomNumber(1, sizeNum);

  const question = getProgression(firstNum, stepNum, sizeNum);

  const answer = question[index];

  question[index] = '..';

  return [question.join(' '), answer];
};
export default progressionGame;
