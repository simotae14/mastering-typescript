function square(num) {
    return num * num;
}
var doSomething = function (person, age, isFunny) { };
square(3);
greet('simo');
doSomething("ChickenFace", 45, false);
// default value
function greet(person) {
    if (person === void 0) { person = 'stranger'; }
    return "Hi there, ".concat(person, "!");
}
greet();
// different return types
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
var add = function (x, y) {
    return x + y;
};
var colors = ["red", "orange", "yellow"];
colors.map(function (color) {
    return color.toUpperCase();
});
// void return
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
// never return
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("GAME LOOP RUNNING!");
    }
}
