//a function that takes the computer play
function computerPlay() {
    let num = Math.random()

    if (num < .33) {
        return 'rock'
    } else if (num < .66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

//a function thats going to play a game of rock, paper, scissors
function singleRound(playerselection, computerselection) {
    let playerChoice = playerselection
    let botChoice = computerselection

    if ((playerChoice === 'rock' && botChoice === 'scissors') ||
        (playerChoice === 'paper' && botChoice === 'rock') ||
        (playerChoice === 'scissors' && botChoice === 'paper')) {
        return `You WIN! ${playerChoice} beats ${botChoice}`
    } else if (playerChoice === botChoice) {
        return `Draw!`
    } else {
        return `You Lost! ${botChoice} beats ${playerChoice}`
    }
}

let playerselection = 'rock'
let computerselection = computerPlay()

console.log(singleRound(playerselection, computerselection))