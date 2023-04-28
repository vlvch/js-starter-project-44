#!/usr/bin/env node
import randomNumber from '../utils.js';

const progressionGame = (question, answer) => {
  const firstNum = randomNumber(1, 10);
  const secondNum = randomNumber(1, 10);
  const randomPlace = randomNumber(1, 10);
  const bufferArr = [];

  bufferArr.push(firstNum);

  let i = 0;

  while (i < 10) {
    const newNumber = +bufferArr[bufferArr.length - 1];

    bufferArr.push(newNumber + secondNum);

    i += 1;
  }

  answer.push(bufferArr[randomPlace]);

  let x = 0;

  while (x <= 10) {
    if (x < randomPlace || x > randomPlace) {
      question.push(bufferArr[x]);
      x += 1;
    } else {
      question.push('..');
      x += 1;
    }
  }
};
export default progressionGame;
