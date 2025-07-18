/*
Returns a binary string representation of a decimalNumber number.
The function takes a decimal number as input and converts it to a binary string of a fixed length (16 bits).
It uses a helper function, NewArray, to create an array of a specified size filled with a default value ('0').
(The NewArray function is something I found on stackexchange. It forces an array to be of a certain size, filling it with a default value;
useful for creating a binary string of a fixed length.)
The binary string is built by repeatedly dividing the decimal number by 2 and checking the remainder.
*/

function decimal_to_binary(decimalNumber) {
    const bitlength = 16; // default to 16 bits if not specified
    let bit = '0';
    const binary = NewArray(bitlength, bit); // fills the array with '0's; the bits needed for the conversion will be replaced; the rest will be '0's
    for (let i = bitlength-1; i >= 0; decimalNumber = Math.floor(decimalNumber / 2), i--) {
        if (decimalNumber % 2 == 0) {
            bit = '0';
        }
        else {
            bit = '1';
        }
        binary[i] = bit;
    }
    let binaryStr = '';
    for (let i = 0; i < bitlength; i++) {
        binaryStr += binary[i];
    }
    return binaryStr;
}

function NewArray(size, data) {
    let x = [];
    for (let i = 0; i < size; i++) {
        x[i] = data;
    }
    return x;
}

// usage: node decimal_to_binary.js <decimalNumber>
console.log(decimal_to_binary(process.argv[2]));
