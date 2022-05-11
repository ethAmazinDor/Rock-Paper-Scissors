let playerScore = 0
let botScore = 0
let draw = 0

let playerWin = 'You won the round'
let botWon = 'the Bot won this round'
let drawInGame = 'Draw!'
let gameWonMessage = 'you won the game!'
let gameLostMessage = 'you lost the game'

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
        return playerWin
    } else if (playerChoice === botChoice) {
        return drawInGame
    } else {
        return botWon
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
        gameScore(results)
        console.log(`your score is: ${playerScore}`)
        console.log(`bot score is: ${botScore}`)

    }

    if (playerScore > botScore) {
        alert(gameWonMessage)
    } else if (botScore > playerScore) {
        alert(gameLostMessage)
    } else {
        alert('Game ended in a Draw')
    }


}



//keep score

function gameScore(game) {
    //keep track of the score
    if (game === playerWin) {
        playerScore++
        return `this is the bots score: ${botScore}
                this is your score: ${playerScore}`
    } else if (game === botWon) {
        botScore++
        return `this is the bots score: ${botScore} 
                this is player score: ${playerScore}`
    } else {
        draw++
    }


}





game()