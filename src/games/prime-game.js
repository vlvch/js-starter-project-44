#!/usr/bin/env node
import readlineSync from 'readline-sync'
import {
  randomHundered, userWelcome, answerCounter, primeFinding
} from '../index.js'

const primeGame = () => {
  const userName = []

  userWelcome(userName)

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  const question = () => {
    for (let i = 0; i < 3; i += 1) {
      const correctAnswer = []

      const number = randomHundered()

      console.log(`Question: ${number}`)

      primeFinding(number, correctAnswer)

      const userAnswer = readlineSync.question('You answer: ')

      answerCounter(userAnswer, correctAnswer[0], i, userName)
    }
  }
  question()
}
export default primeGame
