// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     this.secretMethod();
//   }

//   private secretMethod(): void {
//     console.log("SECRET METHOD!");
//   }
// }

// const elton = new Player("Elton", "Steele");
// elton.score = 1;
// elton.secretMethod();

class Player {
  // public readonly first: string;
  // public readonly last: string;
  // private score: number = 0;
  constructor(
    public first: string,
    public last: string,
    protected __score: number
  ) {}

  private secretMethod(): void {
    console.log("SECRET METHOD!");
  }

  // GETTER
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score(): number {
    return this.__score;
  }

  // SETTER
  set score(newScore: number) {
    if(newScore < 0) {
      throw new Error('Score cannot be negative:');
    }
    this.__score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this.__score = 9999;
  }
}

const elton = new Player("Elton", "Steele", 100);
elton.fullName;
elton.score = 99;

// CLASSES AND INTERFACES
interface Colorful {
  color: string;
}

interface Printable {
  print(): void
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {};
  print() {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike("red");

const jacket1 = new Jacket("Prada", "black");

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("HELLO!");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
