function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Jenkins" });
// define an object variable
var coordinate = { x: 34, y: 2 };
// define an object return
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
// Excess properties
printName({ first: "Mick", last: "Jagger", age: 473 });
var singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);
