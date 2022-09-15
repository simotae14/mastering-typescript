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
}

const thomas: Person = {
    id: 21837,
    first: "Thomas",
    last: "Hardy",
    nickname: 'Tom'
}

thomas.first = 'John';
// thomas.id = 3456 give error
