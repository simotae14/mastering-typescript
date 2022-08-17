function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Jenkins" });
// define an object variable
// let coordinate: { x: number; y: number } = { x: 34, y: 2 };
// define an object return
// function randomCoordinate(): { x: number; y: number } {
//     return { x: Math.random(), y: Math.random() };
// }
// Excess properties
printName({ first: "Mick", last: "Jagger", age: 473 });
var singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);
var age = 24234;
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " -  ").concat(song.artist));
}
var mySong = {
    title: 'Unchained Melody',
    artist: 'Righthouse Brothers',
    numStreams: 12873321,
    credits: {
        producer: 'Phil Spector',
        writer: 'Alex North'
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
var myPoint = {
    x: 1,
    y: 3
};
