import readlineSync from 'readline-sync';
import { greeting } from './utils.js';

const gameStart = (description, runGame) => {
  const userName = greeting();

  console.log(description);

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = runGame();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameStart;
