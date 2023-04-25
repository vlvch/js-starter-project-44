#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userWelcome = (userName) => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);

  userName.push(name);
};

const answerCounter = (userAnswer, correctAnswer, i, userName) => {
  if (userAnswer === correctAnswer && i === 2) {
    console.log(`Congratulations, ${userName}!`);
  } else if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    process.exit();
  };
};

const randomNumber = () => Math.floor((Math.random() * 10) + 1);

const randomHundered = () => Math.floor((Math.random() * 100) + 1);

const randomOperator = () => {
  const operatorsArray = ['+', '-', '*'];

  const result = Math.floor(Math.random() * 3);

  const randomResult = operatorsArray[result];

  return randomResult;
};

const gcdFinding = (firstNum, secondNum) => {
  const divisorArray = [];
  let n = 0;

  while (n <= firstNum) {
    if (firstNum % n === 0 && secondNum % n === 0) {
      divisorArray.push(n);

      n += 1;
    } else {
      n += 1;
    }
  };
  return divisorArray.pop();
};

const progressionMake = (firstNum, secondNum, numArray, hiddenNum) => {
  let i = 1;

  const randomPlace = randomNumber(0);

  numArray.push(firstNum);

  while (i <= 10) {
    const newNumber = +numArray[numArray.length - 1];

    numArray.push(newNumber + secondNum);

    i += 1;
  };

  hiddenNum.push(numArray[randomPlace]);

  numArray[randomPlace] = '..';

  console.log(`Question: ${numArray.join(' ')}`);

  return hiddenNum;
};

const primeFinding = (number, array) => {
  const primeNumbers = [1, 2, 3, 5, 7, 11];
  const comparsion = (element) => number === element;
  const even = (element) => number % element === 0;

  if (primeNumbers.some(comparsion) === true) {
    array.push('yes');
  } else if (primeNumbers.slice(1, 5).some(even) === true) {
    array.push('no');
  } else {
    array.push('yes');
  };
};

const evenFinding = (number, array) => {
  if (number % 2 === 0) {
    array.push('yes');
  } else {
    array.push('no');
  };
};

const stringToNumber = (array) => {
  let exp = 0;
  
  if (array[1] === '-') {
    return exp = array[0] - array[2];
  } else if (array[1] === '+') {
    return exp = array[0] + array[2];
  } else if (array[1] === '*') {
    return exp = array[0] * array[2];
  }
};

export {
  randomHundered, progressionMake, gcdFinding,
  userWelcome, answerCounter, randomNumber,
  randomOperator, primeFinding, evenFinding, stringToNumber,
};
