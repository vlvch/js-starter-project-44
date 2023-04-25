#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  answerCounter, progressionMake, randomNumber, userWelcome,
} from '../index.js';

const progressionGame = () => {
  const numArray = [];
  const hiddenNum = [];
  const userName = [];

  userWelcome(userName);

  console.log('What number is missing in the progression?');

  const question = () => {
    for (let i = 0; i < 3; i += 1) {
      const firstNum = randomNumber();
      const secondNum = randomNumber();

      progressionMake(firstNum, secondNum, numArray, hiddenNum);

      const userAnswer = readlineSync.question('You answer: ');

      answerCounter(Number(userAnswer), hiddenNum.pop(), i, userName);

      numArray.length = 0;
      hiddenNum.length = 0;
    }
  };
  question();
};
export default progressionGame;
