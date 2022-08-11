function square(num: number) {
    return num * num;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
greet('simo');
doSomething("ChickenFace", 45, false);

// default value
function greet(person: string = 'stranger') {
    return `Hi there, ${person}!`;
}

greet();
