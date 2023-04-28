#!/usr/bin/env node
import readlineSync from 'readline-sync';
import calcGame from './games/calc-game.js';
import evenGame from './games/even-game.js';
import primeGame from './games/prime-game.js';
import gcdGame from './games/gcd-game.js';
import progressionGame from './games/progression-game.js';

const gameStart = (gameName) => {
  const userWelcome = (userName) => {
    const name = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${name}`);

    userName.push(name);
  };

  const answerCounter = (userAnswer, correctAnswer, i, userName) => {
    const stringUserAnswer = String(userAnswer);
    const stringCorrectAnswer = String(correctAnswer);

    if (stringUserAnswer === stringCorrectAnswer && i === 2) {
      console.log(`Congratulations, ${userName}!`);
    } else if (stringUserAnswer === stringCorrectAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      process.exit();
    }
  };

  const userName = [];
  const question = [];
  const answer = [];

  userWelcome(userName);

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

  for (let i = 0; i < 3; i += 1) {
    if (gameName === 'calcGame') {
      calcGame(question, answer);
    } else if (gameName === 'evenGame') {
      evenGame(question, answer);
    } else if (gameName === 'gcdGame') {
      gcdGame(question, answer);
    } else if (gameName === 'primeGame') {
      primeGame(question, answer);
    } else {
      progressionGame(question, answer);
    }

    console.log(`Question: ${question.join(' ')}`);

    const userAnswer = readlineSync.question('You answer: ');

    answerCounter(userAnswer, answer, i, userName);

    question.length = 0;
    answer.length = 0;
  }
};
export default gameStart;
