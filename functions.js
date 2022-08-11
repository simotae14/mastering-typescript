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
