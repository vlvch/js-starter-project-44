#!/usr/bin/env node
import randomNumber from '../utils.js';

const calc = (firstNum, secondNum, operator) => {
  const question = [firstNum, operator, secondNum];
  let answer = 0;

  if (question[1] === '-') {
    answer = question[0] - question[2];
  } else if (question[1] === '+') {
    answer = question[0] + question[2];
  } else {
    answer = question[0] * question[2];
  }
  return [question.join(' '), answer];
};

const calcGame = () => {
  const randomOperator = () => {
    const operators = ['+', '-', '*'];
    const result = operators[randomNumber(1, 3)];

    return result;
  };
  const firstNum = randomNumber(1, 20);
  const secondNum = randomNumber(1, 20);

  const rightAnswer = calc(firstNum, secondNum, randomOperator());

  return rightAnswer;
};
export default calcGame;
