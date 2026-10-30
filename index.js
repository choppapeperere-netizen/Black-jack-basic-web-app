let player = {
    name: "Andile",
    chips: 78
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": " + "$" + player.chips

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] 
    sum = firstCard + secondCard

    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10 ) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function renderGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
   

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "sum: " + sum
    cardsEl.textContent = "cards: "

     for (let i = 0; i < cards.length ; i++) {
        cardsEl.textContent += cards[i] + " "
    }

}

function newCard() {
    if (isAlive === true && hasBlackJack === false ) {
     let card = getRandomCard()
     sum += card
     cards.push(card)
   renderGame() 
    }

}

 