
/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.
*/

/* let gridLen = 12;
let chessStr = "";
let blank = true; // start the grid with a blank square
for (let y = 0; y < gridLen; y++) { // outer loop for height
    for (let x = 0; x < gridLen; x++) { // inner loop for width
        if (blank) {
            chessStr += " ";
        }
        else {
            chessStr += "#";
        }
        blank = !blank;
    }
    chessStr += "\n";
    if (gridLen % 2 == 0) {
        // if the board is an even x*x then flip blank back again for the next line
        blank = !blank;
    }
    // if it's an odd x*x then leave blank flipped for the next line
}
console.log(chessStr); */

