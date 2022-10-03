class Player {
  readonly first: string;
  readonly last: string;
  score: number = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const elton = new Player("Elton", "Steele");
elton.first = 'elton';