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

  if (isEven(number) === true) {
    return [number, 'yes'];
  }
  return [number, 'no'];
};
export default evenGame;
