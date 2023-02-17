import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
const userName = [];
const hello = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    userName.push(name);
  };
console.log(hello())
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const random = () => {
   return Math.floor((Math.random() * 100) + 1);
};
for (let i = 1; i <= 3; i++) {
const randomNumber = [];
randomNumber.push(random());
const question = () => {
    console.log(`${'Question'}: ${randomNumber[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if ((Number(randomNumber[0]) % 2) === 0 && answer === "yes") {
        randomNumber.pop();
        console.log('Correct!');
    } else if ((Number(randomNumber[0]) % 2) > 0 && answer === "no") {
        randomNumber.pop();
        console.log('Correct!');
    } else if ((Number(randomNumber[0]) % 2) > 0 && answer === "yes") {
        randomNumber.pop();
        i = 0;
        console.log(" 'yes' is wrong answer ;(. Correct answer was 'no'.")
        console.log(`${"Let's try again"}, ${userName.toString()}`);
    } else if ((Number(randomNumber[0]) % 2) === 0 && answer === "no") {
        randomNumber.pop();
        i = 0;
        console.log(" 'no' is wrong answer ;(. Correct answer was 'yes'.")
        console.log(`${"Let's try again"}, ${userName.toString()}`);
    };
  };
console.log(question());
};
console.log(`${'Congratulations'}, ${userName.toString()}!`);