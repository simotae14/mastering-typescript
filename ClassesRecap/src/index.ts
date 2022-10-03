class Player {
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    this.secretMethod();
  }

  private secretMethod(): void {
    console.log("SECRET METHOD!");
  }
}

const elton = new Player("Elton", "Steele");
elton.score = 1;
elton.secretMethod();