#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from './greeting.js';

const gameStart = (description, runGame) => {
  const userName = greeting();

  console.log(description);

  let rounds = 0;

  for (;;) {
    if (rounds === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    const rightAnswer = runGame();

    console.log(`Question: ${rightAnswer[0]}`);

    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer === String(rightAnswer[1])) {
      console.log('Correct!');
      rounds += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer[1]}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};
export default gameStart;
