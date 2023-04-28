#!/usr/bin/env node
import randomNumber from '../utils.js';

const evenGame = (question, answer) => {
  const number = randomNumber(1, 100);

  if (number % 2 === 0) {
    answer.push('yes');
  } else if (number % 2 !== 0) {
    answer.push('no');
  }
  question.push(number);
};
export default evenGame;
