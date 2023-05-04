import readlineSync from 'readline-sync';

const randomNumber = (minNum, maxNum) => {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);

  return Math.floor(Math.random() * (max - min)) + min;
};

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);

  return [name];
};

export { randomNumber, greeting };
