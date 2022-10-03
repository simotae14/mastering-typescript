"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
        this.secretMethod();
    }
    secretMethod() {
        console.log("SECRET METHOD!");
    }
}
const elton = new Player("Elton", "Steele");
elton.score = 1;
elton.secretMethod();
