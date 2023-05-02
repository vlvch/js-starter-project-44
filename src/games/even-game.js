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
  const question = randomNumber(1, 50);

  let answer = '';

  if (isEven(question) === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question, answer];
};
export default evenGame;
