import { randomNumber } from '../utils.js';

const calc = (question) => {
  let answer = 0;

  if (question[1] === '-') {
    answer = question[0] - question[2];
  } else if (question[1] === '+') {
    answer = question[0] + question[2];
  } else {
    answer = question[0] * question[2];
  }
  return answer;
};

const calcGame = () => {
  const operators = ['+', '-', '*'];
  const firstNum = randomNumber(1, 20);
  const secondNum = randomNumber(1, 20);

  const question = [firstNum, operators[randomNumber(1, 3)], secondNum];
  const answer = calc(question);

  return [question.join(' '), answer];
};
export default calcGame;
