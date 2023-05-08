import { randomNumber } from '../utils.js';

const calc = (a, operator, b) => {
  switch (operator) {
    case '-':
      return (a - b);
    case '+':
      return (a + b);
    case '*':
      return (a * b);
    default:
      throw new Error('Operator must be +/-/*');
  }
};

const calcGame = () => {
  const operators = ['+', '-', '*'];
  const firstNum = randomNumber(1, 20);
  const secondNum = randomNumber(1, 20);
  const operator = operators[randomNumber(1, 3)];

  const question = [firstNum, operator, secondNum];
  const answer = calc(firstNum, operator, secondNum);

  return [question.join(' '), answer];
};
export default calcGame;
