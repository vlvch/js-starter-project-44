#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  userWelcome, answerCounter, randomNumber, randomOperator, stringToNumber,
} from '../index.js';

const calcGame = () => {
  const userName = [];

  userWelcome(userName);

  console.log('What is the result of the expression?');

  const question = () => {
    for (let i = 0; i < 3; i += 1) {
      const randomExp = [randomNumber(0), randomOperator(), randomNumber(1)];

      const correctAnswer = stringToNumber(randomExp);

      console.log(`Question: ${randomExp.join(' ')}`);

      const userAnswer = readlineSync.question('You answer: ');

      answerCounter(Number(userAnswer), correctAnswer, i, userName[0]);
    }
  };
  question();
};
export default calcGame;
