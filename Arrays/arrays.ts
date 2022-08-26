// define an empty array
// const activeUsers: [] = [];

// define an array of strings
const activeUsers: string[] = [];
activeUsers.push('Tony');

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;

// array alternative syntax
const bools: Array<boolean> = [];

// array of complex data
type Point = {
    x: number,
    y: number
};

const cords: Point[] = [];
cords.push({
    x: 23,
    y: 8
});
// cords.push({
//     y: 8
// });