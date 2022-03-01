// document .addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName("button");

//     for (let button of buttons) {
//         button.addEventListener("click", function() {
//             if (this.getAttribute("data-type") === "submit") {
//                 checkAnswer();
//             } else {
//                let gameType = this.getAttribute("data-type");
//                runGame(gameType);
//             }
//         })
//     }

// Create deck

const suits = ['&hearts;', '&spades;', '&diams;', '&clubs;'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const deck = [];
suits.style.color = "red";

// let suitColor = suits['&hearts;' || '&diams;'];
// suitColor.fontColor = "red";

// if (suits.textContent == '&hearts;' || '&diams') {
//     suits.color = 'red';
// } else {
//     suits.color = 'black';
// }

for (let suit in suits) {
    for (let rank in ranks) {
        deck.push(ranks[rank] + suits[suit]);
    }
}
console.log(deck);


function startGame() {
	 for(let i in deck){
    let shuffle1 = Math.floor((Math.random() * deck.length));
    let shuffle2 = Math.floor((Math.random() * deck.length));
    let shuffled = deck[shuffle1];

    deck[shuffle1] = deck[shuffle2];
    deck[shuffle2] = shuffled;}

	let pileOne = document.getElementById('deck');
	pileOne.innerHTML = deck.pop();
    let startButton = document.getElementById('start-game');
    startButton.remove();

    // let startButton = document.getElementById('start-game');
    // const resetButton = document.createElement('button');
    // let gameContainer = document.getElementById('card-container');
    // resetButton.parentNode.replaceChild(startButton);
    
   }

function guess() {
	let pileTwo = document.getElementById('card');
	let pileOne = document.getElementById('deck');

    pileTwo.innerHTML = deck.pop();

    // if (pileTwo.value == pileOne.value) {
    //     pileOne.parentElement.replaceChild(pileTwo, pileOne);
    }

    // const pile = document.getElementsByClassName("pile");
    // pile.addEventListener("click", flipCard);
    // function flipCard() {
    //     pile.classList.toggle("flipCard");
    // }