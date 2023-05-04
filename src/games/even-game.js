import { randomNumber } from '../utils.js';

const isEven = (number) => {
  let result = false;

  if (number % 2 === 0) {
    result = true;
  }
  return result;
};

const evenGame = () => {
  const number = randomNumber(1, 50);

  const answer = isEven(number) ? 'yes' : 'no';

  return [number, answer];
};
export default evenGame;
