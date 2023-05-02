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

  let answer = '';

  if (isEven(number) === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [number, answer];
};
export default evenGame;
