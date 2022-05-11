let playerScore = 0
let botScore = 0
let draw = 0

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

// let playerselection = 'rock'
// let computerselection = computerPlay()

function game() {
    //play the game 5 times and reports the winner/loser at the end
    //if the user puts in rock 
    //the computer will make a choice
    //keeps score 

    for (let i = 0; i < 5; i++) {
        let userInput = prompt('Rock, Paper, Or Scissors?: ').toLowerCase()
        let computerselection = computerPlay()
        let results = singleRound(userInput, computerselection)

        console.log(results)

    }

}

game()
