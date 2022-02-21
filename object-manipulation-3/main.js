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

var cardDeck = [
  {
    rank: 'Ace',
    suit: 'clubs',
    value: 11
  },
  {
    rank: '1',
    suit: 'clubs',
    value: 1
  },
  {
    rank: '2',
    suit: 'clubs',
    value: 2
  },
  {
    rank: '3',
    suit: 'clubs',
    value: 3
  },
  {
    rank: '4',
    suit: 'clubs',
    value: 4
  },
  {
    rank: '5',
    suit: 'clubs',
    value: 5
  },
  {
    rank: '6',
    suit: 'clubs',
    value: 6
  },
  {
    rank: '7',
    suit: 'clubs',
    value: 7
  },
  {
    rank: '8',
    suit: 'clubs',
    value: 8
  },
  {
    rank: '9',
    suit: 'clubs',
    value: 9
  },
  {
    rank: 'Jack',
    suit: 'clubs',
    value: 10
  },
  {
    rank: 'Queen',
    suit: 'clubs',
    value: 10
  },
  {
    rank: 'King',
    suit: 'clubs',
    value: 10
  },
  {
    rank: 'Ace',
    suit: 'diamonds',
    value: 11
  },
  {
    rank: '1',
    suit: 'diamonds',
    value: 1
  },
  {
    rank: '2',
    suit: 'diamonds',
    value: 2
  },
  {
    rank: '3',
    suit: 'diamonds',
    value: 3
  },
  {
    rank: '4',
    suit: 'diamonds',
    value: 4
  },
  {
    rank: '5',
    suit: 'diamonds',
    value: 5
  },
  {
    rank: '6',
    suit: 'diamonds',
    value: 6
  },
  {
    rank: '7',
    suit: 'diamonds',
    value: 7
  },
  {
    rank: '8',
    suit: 'diamonds',
    value: 8
  },
  {
    rank: '9',
    suit: 'diamonds',
    value: 9
  },
  {
    rank: 'Jack',
    suit: 'diamonds',
    value: 10
  },
  {
    rank: 'Queen',
    suit: 'diamonds',
    value: 10
  },
  {
    rank: 'King',
    suit: 'diamonds',
    value: 10
  },
  {
    rank: 'Ace',
    suit: 'hearts',
    value: 11
  },
  {
    rank: '1',
    suit: 'hearts',
    value: 1
  },
  {
    rank: '2',
    suit: 'hearts',
    value: 2
  },
  {
    rank: '3',
    suit: 'hearts',
    value: 3
  },
  {
    rank: '4',
    suit: 'hearts',
    value: 4
  },
  {
    rank: '5',
    suit: 'hearts',
    value: 5
  },
  {
    rank: '6',
    suit: 'hearts',
    value: 6
  },
  {
    rank: '7',
    suit: 'hearts',
    value: 7
  },
  {
    rank: '8',
    suit: 'hearts',
    value: 8
  },
  {
    rank: '9',
    suit: 'hearts',
    value: 9
  },
  {
    rank: 'Jack',
    suit: 'hearts',
    value: 10
  },
  {
    rank: 'Queen',
    suit: 'hearts',
    value: 10
  },
  {
    rank: 'King',
    suit: 'hearts',
    value: 10
  },
  {
    rank: 'Ace',
    suit: 'spades',
    value: 11
  },
  {
    rank: '1',
    suit: 'spades',
    value: 1
  },
  {
    rank: '2',
    suit: 'spades',
    value: 2
  },
  {
    rank: '3',
    suit: 'spades',
    value: 3
  },
  {
    rank: '4',
    suit: 'spades',
    value: 4
  },
  {
    rank: '5',
    suit: 'spades',
    value: 5
  },
  {
    rank: '6',
    suit: 'spades',
    value: 6
  },
  {
    rank: '7',
    suit: 'spades',
    value: 7
  },
  {
    rank: '8',
    suit: 'spades',
    value: 8
  },
  {
    rank: '9',
    suit: 'spades',
    value: 9
  },
  {
    rank: 'Jack',
    suit: 'spades',
    value: 10
  },
  {
    rank: 'Queen',
    suit: 'spades',
    value: 10
  },
  {
    rank: 'King',
    suit: 'spades',
    value: 10
  }
];

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

function findWinner(players) {
  for (let i = 0; i < players.length; i++) {
    if (players[i].score > highScore) {
      highScore = players[i].score;
      winner = players[i].name;
    }
  }
  return winner;
}

function playCardGame(players, numOfCards) {
  shuffleDeck(cardDeck);
  dealCards(numOfCards);
  scoreHands(players);
  findWinner(players);
  // console.log(players);
  // console.log('The winner is ' + winner + ' with a high score of ' + highScore);
}

playCardGame(players, 2);
