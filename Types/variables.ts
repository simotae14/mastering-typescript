let movieTitle: string = 'Amadeus';
movieTitle = 'Arrival';
// movieTitle = 9;
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = 'zero'

let gameOver: boolean = false;
gameOver = true;
// gameOver = 'true';

null
undefined
let nothing: null = null;
let foo: undefined = undefined;


// Type Inference
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = "asd";


// the any type
let thing: any =  "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: string;

for (let movie of movies) {
    if (movie === "Amadues") {
        foundMovie = "Amadeus";
    }
}
