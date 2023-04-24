#!/usr/bin/env node
import readlineSync from 'readline-sync'
import {
  userWelcome, answerCounter, randomNumber, randomOperator
} from '../index.js'

const calcGame = () => {
  const userName = []

  userWelcome(userName)

  console.log('What is the result of the expression?')

  const question = () => {
    for (let i = 0; i < 3; i += 1) {
      const randomExp = randomNumber(0) + randomOperator() + randomNumber(1)

      const randomExpFunct = new Function(`return ${randomExp}`)

      const correctAnswer = randomExpFunct()

      console.log(`Question: ${randomExp}`)

      const userAnswer = readlineSync.question('You answer: ')

      answerCounter(Number(userAnswer), correctAnswer, i, userName[0])
    }
  }
  question()
}
export default calcGame
