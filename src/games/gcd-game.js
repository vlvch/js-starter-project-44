#!/usr/bin/env node
import randomNumber from '../utils.js';

const gcdGame = (question, answer) => {
  const firstNum = randomNumber(1, 20);
  const secondNum = randomNumber(1, 20);

  const divisorArray = [];

  let n = 0;

  while (n <= firstNum) {
    if (firstNum % n === 0 && secondNum % n === 0) {
      divisorArray.push(n);

      n += 1;
    } else {
      n += 1;
    }
  }
  question.push(firstNum, secondNum);
  answer.push(divisorArray.pop());
};
export default gcdGame;
