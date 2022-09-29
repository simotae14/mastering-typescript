class Player {
  score = 0;
  numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  taunt() {
    console.log("BOOYA!");
  }
  loseLife() {
    this.numLives -= 1;
  }
}

const player1 = new Player("blue", "steele ");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);
console.log(player1.numLives);
player1.loseLife();
console.log(player1.numLives);
player1.score = -124293;
console.log(player1);

// const player2 = new Player("charlie", "brown");
// player2.taunt();