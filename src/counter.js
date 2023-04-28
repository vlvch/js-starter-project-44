#!/usr/bin/env node

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
export default answerCounter;
