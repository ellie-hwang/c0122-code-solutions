// console.log('Lodash is loaded:', typeof _ !== 'undefined');

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
