#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greeting = (gameName, userName) => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);

  userName.push(name);

  if (gameName === 'calcGame') {
    console.log('What is the result of the expression?');
  } else if (gameName === 'evenGame') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  } else if (gameName === 'gcdGame') {
    console.log('Find the greatest common divisor of given numbers.');
  } else if (gameName === 'primeGame') {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  } else {
    console.log('What number is missing in the progression?');
  }
};
export default greeting;
