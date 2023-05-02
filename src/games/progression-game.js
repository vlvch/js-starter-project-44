#!/usr/bin/env node
import randomNumber from '../utils.js';

const getProgression = (firstNum, stepNum, sizeNum) => {
  const progresion = [firstNum];
  let i = 0;

  while (i < sizeNum) {
    const newNumber = +progresion[progresion.length - 1];

    progresion.push(newNumber + stepNum);

    i += 1;
  }
  return progresion;
};

const progressionGame = () => {
  const firstNum = randomNumber(1, 10);
  const stepNum = randomNumber(1, 10);
  const sizeNum = randomNumber(8, 12);
  const randomPlace = randomNumber(1, sizeNum);

  const progression = getProgression(firstNum, stepNum, sizeNum);

  const answer = [progression[randomPlace]];
  const question = [];

  for (let i = 0; i <= sizeNum; i += 1) {
    if (i < randomPlace || i > randomPlace) {
      question.push(progression[i]);
    } else {
      question.push('..');
    }
  }
  return [question.join(' '), answer];
};
export default progressionGame;
