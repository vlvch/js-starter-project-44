import { randomNumber } from '../utils.js';

const isEven = (a) => a % 2 === 0;

const evenGame = () => {
  const number = randomNumber(1, 50);

  const answer = isEven(number) ? 'yes' : 'no';

  return [number, answer];
};
export default evenGame;
