/*
Classic binary to decimal algorithm,
multiplying the value of each position
by an increasing power of two.
*/

function binary_to_decimal(binary) {
    let result = 0;
    let multiplier = 1;
    for (let i = binary.length - 1; i >= 0; i--) {
        result += binary[i] * multiplier;
        multiplier *= 2;
    }
    return result;
}

myString = "1101010101010010101010101010";
console.log(binary_to_decimal(myString));


// module.exports = {
//     binary_to_decimal: binary_to_decimal
// };


