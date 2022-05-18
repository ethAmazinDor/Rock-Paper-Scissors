//add event listeners
let resultDisplay = document.querySelector('.results')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let buttons = document.getElementById('buttons')
//this is where the user's choice he selected will show up
let userPick = document.querySelector('.userSelection')
let computerPick = document.querySelector('.computerSelection')

let userscore = document.querySelector('.userscore')
let botscore = document.querySelector('.botscore')

let yourChoice
let result



let playerScore = 0
let botScore = 0
let draw = 0




buttons.addEventListener('click', clickListener)

function clickListener(e) {
    if (e.target.tagName != 'BUTTON') {
        return
    }
    yourChoice = e.target.id
    const playerselection = e.target.className
    const computerselection = computerPlay()
    singleRound(playerselection, computerselection)
    userPick.innerHTML = yourChoice
    computerPick.innerHTML = computerselection
    resultDisplay.innerHTML = result
    gameScore(result)
    userscore.textContent = playerScore
    botscore.textContent = botScore



}







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


    if ((playerselection === 'rock' && computerselection === 'scissors') ||
        (playerselection === 'paper' && computerselection === 'rock') ||
        (playerselection === 'scissors' && computerselection === 'paper')) {
        //console.log(playerWin) 

        result = playerWin

    } else if (playerselection === computerselection) {
        //return drawInGame
        result = drawInGame
    } else {
        //return botWon
        result = botWon
    }

}




// function game() {
//     //play the game 5 times and reports the winner/loser at the end
//     //keeps score 
//     for (let i = 0; i < 5; i++) {
//         singleRound()
//     }

//     gameScore()
//     console.log(`your score is: ${playerScore}`)
//     console.log(`bot score is: ${botScore}`)

//     if (playerScore > botScore) {
//         alert(gameWonMessage)
//     } else if (botScore > playerScore) {
//         alert(gameLostMessage)
//     } else {
//         alert('Game ended in a Draw')
//     }
// }


//keep score

function gameScore(results) {
    //keep track of the score
    if (results === playerWin) {
        playerScore++
        // return `this is the bots score: ${botScore}
        //         this is your score: ${playerScore}`
    } else if (results === botWon) {
        botScore++
        // return `this is the bots score: ${botScore} 
        //         this is player score: ${playerScore}`
    } else {
        draw++
    }

}

//validate user 






