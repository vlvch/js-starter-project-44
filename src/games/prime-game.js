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

  let answer = '';

  if (isPrime(number) === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [number, answer];
};
export default primeGame;
