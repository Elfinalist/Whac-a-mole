const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole') //searching for class element
const timeLeft = document.querySelector('#time-left') //searching for element with id # can alsouse get element by id
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 10
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    }) //for each square in the squares array we get the square and remove the class of mole

    let randomSquare = squares[Math.floor(Math.random() * 9)] //were going to pass in a random number 0-8 within the array squares
    randomSquare.classList.add('mole')


    hitPosition = randomSquare.id //geting id of random square and saving it to random position
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition  = null
        }
    })
})


function moveMole() {
    timerId = setInterval(randomSquare, 1000)
} //mole moves to a random square every 500 milliseconds

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)