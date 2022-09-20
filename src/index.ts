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

// Set constants
const rock = 1
const paper = 2
const scissor = 3

// Gets random int
const min = 1
const max = 3
const randomInt = Math.floor(Math.random() * max + min)

if (userInput === randomInt) {
  console.log('You tied!')
} else if (userInput === rock && randomInt === paper) {
  console.log('You lose!')
} else if (userInput === rock && randomInt === scissor) {
  console.log('You win!')
} else if (userInput === paper && randomInt === rock) {
  console.log('You win!')
} else if (userInput === paper && randomInt === scissor) {
  console.log('You lose!')
} else if (userInput === scissor && randomInt === rock) {
  console.log('You lose!')
} else if (userInput === scissor && randomInt === paper) {
  console.log('You win!')
} else {
  console.log('\nInvalid Input Entered.\nDone.')
  process.exit(0)
}

// Show user what the computer chose
if (randomInt === rock) {
  console.log('\nThe computer chose rock.')
} else if (randomInt === paper) {
  console.log('\nThe computer chose paper.')
} else if (randomInt === scissor) {
  console.log('\nThe computer chose scissors.')
} else {
  console.log('\nError Occured Please Try Again.')
}

console.log('\nDone.')
