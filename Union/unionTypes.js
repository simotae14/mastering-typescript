var age = 21;
age = 23;
age = "24";
age = true;
var coordinates = {
    x: 1,
    y: 4
};
coordinates = {
    lat: 321.23,
    long: 23.45
};
function printAge(age) {
    console.log("You are ".concat(age, " years old"));
}
function calculateTax(price, tax) {
    if (typeof price === 'string') {
        price = price.replace('$', '');
        price = parseFloat(price);
    }
    return price * tax;
}
console.log(calculateTax(45, .07));
console.log(calculateTax("$45", .07));
