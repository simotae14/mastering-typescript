function printName(person: { first: string; last: string }): void {
    console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Jenkins" });

// define an object variable
let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// define an object return
function randomCoordinate(): { x: number; y: number } {
    return { x: Math.random(), y: Math.random() };
}