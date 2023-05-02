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

  if (isPrime(number) === true) {
    return [number, 'yes'];
  }
  return [number, 'no'];
};
export default primeGame;
