/*
Classic binary to decimal algorithm,
multiplying the value of each position
by an increasing power of two.
*/

export function binary_to_decimal(binaryString) {
    let result = 0;
    let multiplier = 1;
    for (let i = binaryString.length - 1; i >= 0; i--) {
        result += binaryString[i] * multiplier;
        multiplier *= 2;
    }
    return result;
}
