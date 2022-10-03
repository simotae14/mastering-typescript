"use strict";
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
    constructor(first, last, __score) {
        this.first = first;
        this.last = last;
        this.__score = __score;
    }
    secretMethod() {
        console.log("SECRET METHOD!");
    }
    // GETTER
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this.__score;
    }
    // SETTER
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('Score cannot be negative:');
        }
        this.__score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this.__score = 9999;
    }
}
const elton = new Player("Elton", "Steele", 100);
elton.fullName;
elton.score = 99;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    ;
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("HELLO!");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
