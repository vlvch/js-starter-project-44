#!/usr/bin/env node
import readlineSync from 'readline-sync'
import {
  randomHundered, userWelcome, answerCounter, evenFinding
} from '../index.js'

const evenGame = () => {
  const userName = []

  userWelcome(userName)

  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i += 1) {
    const question = () => {
      const number = randomHundered()
      const correctAnswer = []

      console.log(`Question: ${number}`)

      const userAnswer = readlineSync.question('You answer: ')

      evenFinding(number, correctAnswer)

      answerCounter(userAnswer, correctAnswer[0], i, userName)
    }
    question()
  }
}
export default evenGame
