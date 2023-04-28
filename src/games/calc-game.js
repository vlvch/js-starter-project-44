#!/usr/bin/env node
import randomNumber from '../utils.js';

const calcGame = (question, answer) => {
  const randomOperator = () => {
    const operatorsArray = ['+', '-', '*'];
    const randomResult = operatorsArray[randomNumber(1, 3)];

    return randomResult;
  };

  const stringToNumber = (array) => {
    let i = 0;

    if (array[1] === '-') {
      i = array[0] - array[2];
    } else if (array[1] === '+') {
      i = array[0] + array[2];
    } else {
      i = array[0] * array[2];
    }
    return i;
  };

  const firstNum = randomNumber(1, 10);
  const secondNum = randomNumber(1, 10);
  const operator = randomOperator();
  const calcQuestion = [firstNum, operator, secondNum];
  const correctAnswer = stringToNumber(calcQuestion);

  question.push(firstNum, operator, secondNum);
  answer.push(correctAnswer);
};
export default calcGame;
