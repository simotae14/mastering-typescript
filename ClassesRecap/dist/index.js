class Player {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  taunt() {
    console.log("BOOYA!");
  }
}

const player1 = new Player("blue", "steele ");
player1.taunt();
console.log(player1.first);
console.log(player1.last );

const player2 = new Player("charlie", "brown");
player2.taunt();