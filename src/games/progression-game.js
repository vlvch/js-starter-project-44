import { randomNumber } from '../utils.js';

const getProgression = (number, step, size) => {
  const progression = [number];
  let i = 0;

  while (i < size) {
    progression.push(progression[progression.length - 1] + step);

    i += 1;
  }
  return progression;
};

const progressionGame = () => {
  const number = randomNumber(1, 10);
  const step = randomNumber(1, 10);
  const size = randomNumber(8, 12);
  const index = randomNumber(1, size);

  const question = getProgression(number, step, size);

  const answer = question[index];

  question[index] = '..';

  return [question.join(' '), answer];
};
export default progressionGame;
