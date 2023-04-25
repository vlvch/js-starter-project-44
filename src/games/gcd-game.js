#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  randomNumber, userWelcome, gcdFinding, answerCounter,
} from '../index.js';

const gcdGame = () => {
  const userName = [];

  userWelcome(userName);

  console.log('Find the greatest common divisor of given numbers.');

  const question = () => {
    for (let i = 0; i < 3; i += 1) {
      const firstNum = randomNumber(0);
      const secondNum = randomNumber(1);

      console.log(`Question: ${firstNum} ${secondNum}`);

      const userAnswer = readlineSync.question('You answer: ');

      const correctAnswer = gcdFinding(firstNum, secondNum);

      answerCounter(Number(userAnswer), correctAnswer, i, userName);
    }
  };
  question();
};
export default gcdGame;
