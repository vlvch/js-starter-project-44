import { randomNumber } from '../utils.js';

const isPrime = (number) => {
  let result = true;
  result = number < 2 ? result = false : result = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = false;
    }
  }
  return result;
};

const primeGame = () => {
  const number = randomNumber(1, 100);

  const answer = isPrime(number) ? 'yes' : 'no';

  return [number, answer];
};
export default primeGame;
