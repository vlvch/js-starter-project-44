#!/usr/bin/env node
import randomNumber from '../utils.js';
import trueOrFalse from '../truefalse.js';

const isEven = (number) => {
  let result = false;

  if (number % 2 === 0) {
    result = true;
  }
  return result;
};

const evenGame = () => {
  const number = randomNumber(1, 50);

  const answer = trueOrFalse(isEven(number));

  return [number, answer];
};
export default evenGame;
