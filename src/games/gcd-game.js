import { randomNumber } from '../utils.js';

const getGcd = (question) => {
  let answer = 0;
  let n = 0;

  while (n <= question[0]) {
    if (question[0] % n === 0 && question[1] % n === 0) {
      answer = n;

      n += 1;
    } else {
      n += 1;
    }
  }
  return answer;
};

const gcdGame = () => {
  const firstNum = randomNumber(1, 50);
  const secondNum = randomNumber(1, 50);

  const question = [firstNum, secondNum];
  const answer = getGcd(question);

  return [question.join(' '), answer];
};
export default gcdGame;
