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
