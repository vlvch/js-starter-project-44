#!/usr/bin/env node
import randomNumber from '../utils.js';

const isPrime = (number) => {
  let result = true;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = false;
    }
  }
  return result;
};

const primeGame = () => {
  const number = randomNumber(1, 100);

  const rightAnswer = [number];

  if (isPrime(number) === true) {
    rightAnswer.push('yes');
  } else {
    rightAnswer.push('no');
  }
  return rightAnswer;
};
export default primeGame;
