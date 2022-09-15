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