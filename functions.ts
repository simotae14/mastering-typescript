function square(num: number): number {
    return num * num;
}

const doSomething = (person: string, age: number, isFunny: boolean): void => {};

square(3);
greet('simo');
doSomething("ChickenFace", 45, false);

// default value
function greet(person: string = 'stranger'): string {
    return `Hi there, ${person}!`;
}

greet();

// different return types
function rando(num: number) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

const add = (x: number, y: number): number => {
    return x + y;
}

const colors = ["red", "orange", "yellow"];
colors.map(color => {
    return color.toUpperCase();
})

// void return
function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
}