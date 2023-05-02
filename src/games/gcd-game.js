#!/usr/bin/env node
import randomNumber from '../utils.js';

const getGcd = (firstNum, secondNum) => {
  const question = [firstNum, secondNum];
  const answer = [];

  let n = 0;

  while (n <= firstNum) {
    if (firstNum % n === 0 && secondNum % n === 0) {
      answer.push(n);

      n += 1;
    } else {
      n += 1;
    }
  }
  return [question.join(' '), answer.pop()];
};

const gcdGame = () => {
  const firstNum = randomNumber(1, 50);
  const secondNum = randomNumber(1, 50);

  const rightAnswer = getGcd(firstNum, secondNum);

  return rightAnswer;
};
export default gcdGame;
