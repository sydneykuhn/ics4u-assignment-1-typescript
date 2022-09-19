/**
 * The program plays rock, paper, scissors
 *   with user input.
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2022-09-19
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// Get user input
console.log("Let's play Rock, Paper, Scissors!")
console.log('Rock (1)\nPaper (2)\nScissors (3)')
const userInputString = prompt('Enter a number 1, 2 or 3 to chose : ')

const userInput = parseFloat(userInputString)

// Gets random int
const min = 1
const max = 3
const randomInt = Math.floor(Math.random() * max + min)

if (userInput === randomInt) {
  console.log('You tied!')
} else if (userInput === 1 && randomInt === 2) {
  console.log('You lose!')
} else if (userInput === 1 && randomInt === 3) {
  console.log('You win!')
} else if (userInput === 2 && randomInt === 1) {
  console.log('You win!')
} else if (userInput === 2 && randomInt === 3) {
  console.log('You lose!')
} else if (userInput === 3 && randomInt === 1) {
  console.log('You lose!')
} else if (userInput === 3 && randomInt === 2) {
  console.log('You win!')
} else {
  console.log('\nInvalid Input Entered.\nDone.')
  process.exit(0)
}

// Show user what the computer chose
if (randomInt === 1) {
  console.log('\nThe computer chose rock.')
} else if (randomInt === 2) {
  console.log('\nThe computer chose paper.')
} else if (randomInt === 3) {
  console.log('\nThe computer chose scissors.')
} else {
  console.log('\nError Occured Please Try Again.')
}

console.log('\nDone.')
