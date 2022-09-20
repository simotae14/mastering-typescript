interface Point {
    x: number;
    y: number;
}

const pt: Point = { x: 123, y: 1234 }

interface Person {
    // readonly pty
    readonly id: number;
    first: string;
    last: string;
    // optional
    nickname?: string;
    sayHi: () => string; // sayHi(): string;
}

const thomas: Person = {
    id: 21837,
    first: "Thomas",
    last: "Hardy",
    nickname: 'Tom',
    sayHi: () => {
        return "Hello!";
    },
}

thomas.first = 'John';
// thomas.id = 3456 give error

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
}

console.log(shoes.applyDiscount(0.4));

// Reopening Interfaces
interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Autralian Shepherd",
    bark() {
        return "WOOF WOOF!";
    }
}

// EXTENDING INTERFACES
interface ServingDog extends Dog {
    job: 'drog sniffer' | 'bomb' | 'guide dog';
}

const chewy: ServingDog = {
    name: 'Chewy',
    age: 4.5,
    breed: 'Lab',
    bark() {
        return 'Bark!'
    },
    job: 'guide dog'
}; 

// Interface Multiple Inheritance
interface Human {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends Human, Employee {
    level: string,
    languages: string[]
}

const pierre: Engineer = {
    name: 'Pierre',
    id: 123897,
    email: 'pierre@gmail.com',
    level: 'senior',
    languages: ['JS', 'Python']
}
