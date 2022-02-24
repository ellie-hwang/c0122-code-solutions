// console.log('Lodash is loaded:', typeof _ !== 'undefined');
/* function: For this challenge you will be writing a script that
runs a simple card game. You'll be dealing two cards to each of
four players and then declaring a winner by scoring their hands.
input: array of players and number of cards dealt
output: winner's name (a string)
-Create an array of 4 player objects, each has a name, hand, and score
-Create an array of 52 card objects, each has a rank, suit, and value
-Make a function to shuffle the cards with the cardDeck array as a parameter
  -Reference: Fisher-Yates shuffle
  -Create a variable to represent the number of unshuffled elements (m)
  -Create a variable to hold the unshuffled element (tempValue)
  -Create a variable to represent the random index (randomIndex)
  -While the number of unshuffled elements (m) is not zero,
    -Generate a random index
    -Decrement m
    -Store the value of the cardDeck[m] in the tempValue
    -Store the value of the cardDeck[randomIndex] in cardDeck[m]. This is the shuffle
    -Store the value of the tempValue in cardDeck[randomIndex]. This is the unshuffled element
    -All the shuffled elements are towards the back of the array and all the unshuffled elements
    are in the front of the array
    -Return the cardDeck array
-Make a function to deal the cards with the number of cards for each hand as a parameter
  -Take one card object from the shuffled cardDeck and assign it to the hand property in each
  player object
  -Repeat this process twice
-Make a function to score the hands with the players array as a parameter
  -Take each player object in the players array and add each value in the card object in the hand property of the player object
  -Make sure to reset the score to zero after each player object's hand is scored
  -Return the score of each player and store it in the score property of the player object
-Make a function to find the winner with the players array as a parameter
  -Set the highestScore as zero
  -Go through each value of the score property of each player object
  -If the score of the player object is higher than the highestScore, assign the player object's score
  to highestScore
  -Return the value of the name property of the player object, with the highest score
-Make a function for the game
  -Shuffle the deck
  -Deal the cards
  -Score the players' hands
  -Find the winner
-Call the playCardGame function
*/

var players = [
  {
    name: 'Tony Hawk',
    hand: [],
    score: null
  },
  {
    name: 'Shakira',
    hand: [],
    score: null
  },
  {
    name: 'Spongebob Squarepants',
    hand: [],
    score: null
  },
  {
    name: 'Courage',
    hand: [],
    score: null
  }
];

var cardDeck = [];
var card = {};

var suits = ['clubs', 'diamonds', 'hearts', 'spades'];

var ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Jack', 'Queen', 'King', 'Ace'];

function createDeck(suits, ranks) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      card.rank = ranks[j];
      card.suit = suits[i];
      if (ranks[j] === 'Jack' || ranks[j] === 'Queen' || ranks[j] === 'King') {
        card.value = 10;
      } else if (ranks[j] === 'Ace') {
        card.value = 11;
      } else {
        card.value = ranks[j];
      }
      cardDeck.push(card);
      card = {};
    }
  }
  return cardDeck;
}

function shuffleDeck(cardDeck) {
  var m = cardDeck.length;
  var tempValue = null;
  var randomIndex = null;

  while (m !== 0) {
    randomIndex = Math.floor(Math.random() * m);
    m--;
    tempValue = cardDeck[m];
    cardDeck[m] = cardDeck[randomIndex];
    cardDeck[randomIndex] = tempValue;
  }
  return cardDeck;
}

function dealCards(numOfCards) {
  for (let i = 0; i < numOfCards; i++) {
    for (let j = 0; j < players.length; j++) {
      players[j].hand.push(cardDeck[i]);
      cardDeck.splice(i, 1);
    }
  }
}

function scoreHands(players) {
  var score = null;
  for (let j = 0; j < players.length; j++) {
    for (let i = 0; i < players[j].hand.length; i++) {
      score += players[j].hand[i].value;
    }
    players[j].score = score;
    score = 0;
  }
}

var highScore = 0;
var winner = null;
var tiedWinners = [];

function findWinner(players) {
  for (let i = 0; i < players.length; i++) {
    if (players[i].score > highScore) {
      highScore = players[i].score;
      winner = players[i].name;
    }
  }
  for (let i = 0; i < players.length; i++) {
    if (players[i].score !== highScore) {
      players.splice(i, 1);
      tiedWinners = [...players];
      i--;
    }
  }

  if (players.length > 1) {
    console.log(tiedWinners);
    breakTie(players);
  } else {
    console.log(winner);
  }
}

function breakTie(players) {
  while (players.length > 1) {
    console.log('Starting tie-breaker...');
    dealCards(1);
    scoreHands(players);
    findWinner(players);
  }
}

function playCardGame(players, numOfCards) {
  createDeck(suits, ranks);
  shuffleDeck(cardDeck);
  dealCards(numOfCards);
  scoreHands(players);
  findWinner(players);
  console.log(players);
  // console.log(players);
  // console.log('The winner is ' + winner + ' with a high score of ' + highScore);
}

playCardGame(players, 2);
