/*
The NewArray function is something I found on stackexchange.
*/

function decimal_to_binary(decimal) {
    const bitlength = 16;
    let bit = '0';
    const binary = NewArray(bitlength, bit);
    for (let i = bitlength-1; i >= 0; decimal = Math.floor(decimal / 2), i--) {
        if (decimal % 2 == 0) {
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

console.log(decimal_to_binary(process.argv[2]));
