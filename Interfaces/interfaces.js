var pt = { x: 123, y: 1234 };
var thomas = {
    id: 21837,
    first: "Thomas",
    last: "Hardy",
    nickname: 'Tom',
    sayHi: function () {
        return "Hello!";
    }
};
thomas.first = 'John';
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
var elton = {
    name: "Elton",
    age: 0.5,
    breed: "Autralian Shepherd",
    bark: function () {
        return "WOOF WOOF!";
    }
};
var chewy = {
    name: 'Chewy',
    age: 4.5,
    breed: 'Lab',
    bark: function () {
        return 'Bark!';
    },
    job: 'guide dog'
};
var pierre = {
    name: 'Pierre',
    id: 123897,
    email: 'pierre@gmail.com',
    level: 'senior',
    languages: ['JS', 'Python']
};
