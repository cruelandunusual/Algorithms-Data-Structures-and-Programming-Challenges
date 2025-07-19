
// Grids and Histograms exercises
// These exercises are from Eloquent JavaScript, Chapter 1, Exercise 13
// Working on that exercise above prompted me to dig out
// the old C code I wrote to print a histogram vertically
const histogram = [4, 3, 7, 10, 3, 9, 2, 1];
let max = 0;
for (let i = 0; i < histogram.length; i++) {
    if (histogram[i] > max) {
        max = histogram[i]; // store the largest number in the array
    }
}

let starStr = ""; // initialise a string for printing each line
for (let y = max; y > 0; y--) { // loop down from highest value to lowest
    for (let x = 0; x < histogram.length; x++) {
        if (histogram[x] < y) {
            starStr += "  "; // append space if current element is less than max
        }
        else {
            starStr += "* "; // else append a star
        }
    }
    console.log(starStr);
    starStr = "";
}

