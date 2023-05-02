#!/usr/bin/env node
import randomNumber from '../utils.js';
import trueOrFalse from '../truefalse.js';

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

  const answer = trueOrFalse(isPrime(number));

  return [number, answer];
};
export default primeGame;
