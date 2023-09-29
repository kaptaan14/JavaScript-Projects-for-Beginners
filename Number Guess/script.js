let random  = Math.floor((Math.random()*100)+1)

const userInput = document.querySelector('#guessField')
const guessSubmit = document.querySelector('#submit')
const guesses = document.querySelector('.Guesses')
const remaining = document.querySelector('.remaining')
const lowOrHigh = document.querySelector('.lowOrHigh')
const result = document.querySelector('.result')


let p = document.createElement('p')
let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    guessSubmit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter valid number")
    }
    else if(guess > 100){
        alert("Please enter number smaller than 100")
    }
    else if(guess < 1){
        alert("Please enter a number greater than 1")
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. Random Number was ${random}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess) 
        }
    }
}

function checkGuess(guess){
    if(guess === random){
        displayMessage(`You Guesses the right number. WOOHOOO!!!`)
        endGame()
    }
    else if(guess > random){
        displayMessage(`Your number is greater`)
    }
    else{
        displayMessage(`Your number is smaller`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guesses.innerHTML += `${guess}  `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
     lowOrHigh.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h4 id="newGame">New Game</h4>`
    result.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton  = document.querySelector('#newGame')
    newGameButton.addEventListener('click',()=>{
        random = Math.floor((Math.random()*100)+1)
        prevGuess = []
        numGuess = 1
        guesses.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        result.removeChild(p)
        playGame = true
        displayMessage(`Enter the number`)
    })
}
