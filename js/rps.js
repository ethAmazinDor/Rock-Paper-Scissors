//add event listeners
let resultDisplay = document.querySelector('.results')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let buttons = document.getElementById('buttons')
//this is where the user's choice he selected will show up
let userPick = document.querySelector('.userSelection')
let computerPick = document.querySelector('.computerSelection')
let resetBtn = document.querySelector('.reset')

let userscore = document.querySelector('.userscore')
let botscore = document.querySelector('.botscore')

let yourChoice
let result



let playerScore = 0
let botScore = 0
let draw = 0


//resets the game 
resetBtn.addEventListener('click', () => location.reload())


buttons.addEventListener('click', clickListener)

function clickListener(e) {
    //if the target clicked inside the div's tag name doesn't equal 'BUTTON' return
    if (e.target.tagName != 'BUTTON') {
        return
    }
    //users choice on the button/ get id from target and set it to user choice
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
    checkWinner()

}

//function to check the winner 
function checkWinner() {
    if (playerScore === 5) {
        updateWinner('gamewon')
    } else if (botScore === 5) {
        updateWinner('botwon')
    }
}

//function to update the page on who the winner is
function updateWinner(winner) {
    if (winner === 'gamewon') {
        resultDisplay.textContent = gameWonMessage
    } else if (winner === 'botwon') {
        resultDisplay.textContent = gameLostMessage
    }

    buttons.removeEventListener('click', clickListener)
}



//winning messages
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


function gameScore(results) {
    //keep track of the score
    if (results === playerWin) {
        playerScore++
    } else if (results === botWon) {
        botScore++
    } else {
        draw++
    }

}







