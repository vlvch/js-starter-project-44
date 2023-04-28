#!/usr/bin/env node
import readlineSync from 'readline-sync';
import answerCounter from './counter.js';
import calcGame from './games/calc-game.js';
import evenGame from './games/even-game.js';
import primeGame from './games/prime-game.js';
import gcdGame from './games/gcd-game.js';
import progressionGame from './games/progression-game.js';
import greeting from './greeting.js';

const gameStart = (gameName) => {
  const question = [];
  const answer = [];
  const userName = [];

  greeting(gameName, userName);

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
