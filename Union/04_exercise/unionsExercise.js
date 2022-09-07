// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore = 50;
highScore = false;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff;
stuff = [1, 2, 3];
stuff = ['c', 'i', 'a', 'o'];
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [
    {
        r: 255,
        g: 0,
        b: 14
    },
    {
        h: 1,
        s: 1,
        l: 1
    }
];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(name) {
    if (Array.isArray(name) && name.length > 0) {
        name.forEach(function (n, index) {
            greet(n);
            delete name[index];
            return greet(name);
        });
    }
    else {
        console.log("Hello, ".concat(name));
    }
}
greet('Simone');
greet(['Paola', 'Riki', 'Lorenzo']);
