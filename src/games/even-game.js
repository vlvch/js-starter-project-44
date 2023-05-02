#!/usr/bin/env node
import randomNumber from '../utils.js';

const isEven = (number) => {
  let result = false;

  if (number % 2 === 0) {
    result = true;
  }
  return result;
};

const evenGame = () => {
  const number = randomNumber(1, 50);

  const rightAnswer = [number];

  if (isEven(number) === true) {
    rightAnswer.push('yes');
  } else {
    rightAnswer.push('no');
  }
  return rightAnswer;
};
export default evenGame;
