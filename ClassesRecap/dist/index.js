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
const elton = new Player("Elton", "Steele", 100);
elton.fullName;
elton.score = 99;
