import { randomNumber } from '../utils.js';

const getGcd = (firstNum, secondNum) => {
  let gcd = 0;
  let value = 0;

  while (value <= firstNum) {
    if (firstNum % value === 0 && secondNum % value === 0) {
      gcd = value;

      value += 1;
    } else {
      value += 1;
    }
  }
  return gcd;
};

const gcdGame = () => {
  const firstNum = randomNumber(1, 50);
  const secondNum = randomNumber(1, 50);

  const question = [firstNum, secondNum];
  const answer = getGcd(firstNum, secondNum);

  return [question.join(' '), answer];
};
export default gcdGame;
