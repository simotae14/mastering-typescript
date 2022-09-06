let age: number | string | boolean = 21;
age = 23;
age = "24";
age = true;


type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = {
    x: 1,
    y: 4
};
coordinates = {
    lat: 321.23,
    long: 23.45
};

function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number) {
    
    if (typeof price === 'string') {
        price = price.replace('$', '');
        price = parseFloat(price);
    } 
    return price * tax;
}

console.log(calculateTax(45, .07));
console.log(calculateTax("$45", .07));