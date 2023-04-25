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
  }
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
  }
  return divisorArray.pop();
};

const progressionMake = (firstNum, secondNum, numArray, hiddenNum) => {
  let i = 0;

  const randomPlace = randomNumber(0);
  const dots = ['..'];
  const bufferArr = [];

  bufferArr.push(firstNum);

  while (i < 10) {
    const newNumber = +bufferArr[bufferArr.length - 1];

    bufferArr.push(newNumber + secondNum);

    i += 1;
  }

  hiddenNum.push(bufferArr[randomPlace]);

  let x = 0;

  while (x <= 10) {
    if (x < randomPlace || x > randomPlace) {
      numArray.push(bufferArr[x]);
      x += 1;
    } else {
      numArray.push(dots[0]);
      x += 1;
    }
  }

  console.log(`Question: ${numArray.join(' ')}`);

  return hiddenNum;
};

const primeFinding = (number, array) => {
  const primeNumbers = [2, 3, 5, 7, 11];
  const comparsion = (element) => number === element;
  const even = (element) => number % element === 0;

  if (primeNumbers.some(comparsion) === true) {
    array.push('yes');
  } else if (primeNumbers.some(even) === true || number <= 1) {
    array.push('no');
  } else {
    array.push('yes');
  }
};

const evenFinding = (number, array) => {
  if (number % 2 === 0) {
    array.push('yes');
  } else {
    array.push('no');
  }
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

export {
  randomHundered, progressionMake, gcdFinding,
  userWelcome, answerCounter, randomNumber,
  randomOperator, primeFinding, evenFinding, stringToNumber,
};
