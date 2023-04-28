#!/usr/bin/env node
import randomNumber from '../utils.js';

const primeGame = (question, answer) => {
  const number = randomNumber(1, 100);
  const primeNumbers = [2, 3, 5, 7, 11];
  const comparsion = (element) => number === element;
  const even = (element) => number % element === 0;

  if (primeNumbers.some(comparsion) === true) {
    answer.push('yes');
  } else if (primeNumbers.some(even) === true || number <= 1) {
    answer.push('no');
  } else {
    answer.push('yes');
  }
  question.push(number);
};
export default primeGame;
