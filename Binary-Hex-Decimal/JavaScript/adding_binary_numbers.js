/*
My idea here was to use a lookup table containing strings storing the first 10 whole
numbers as bit patterns. The algorithm adds the least significant bit for each
operand, stores the result incrementally in a string; after computation is finished
the string is reversed so that the least significant bit is correctly at the rightmost side.
Operands can be stacked up by calling the function as a parameter to another instance
of calling the function, to overcome the limitation of adding just two operands at once.
*/

import { binary_to_decimal } from './binary-to-decimal_function.js';

let lookUpTable = {
    b0: "0000",
    b1: "0001",
    b2: "0010",
    b3: "0011",
    b4: "0100",
    b5: "0101",
    b6: "0110",
    b7: "0111",
    b8: "1000",
    b9: "1001"
};

console.log("print the lookup table: ");
for (let key in lookUpTable) {
    console.log(`${key}: ${lookUpTable[key]}`);
}
//console.log(lookUpTable.b1);
console.log("print the results of 0 || 1: ", 0 || 1);
console.log(0 || 1);


const INDEX_RESULT = 0;
const INDEX_CARRY = 1;

function addBinaryNumbers(op_1, op_2, carry_ = 0) {
    let result = 0;
    let finalArray = [];
    let tempResultArray = [result, carry_];
    let resultStr = "";
    const bitlength = 4;
    function binaryAddTwoBits(op_1, op_2, carry_) {
        op_1 = Number(op_1);
        op_2 = Number(op_2);
        carry_ = Number(carry_);
    if (op_1 && op_2 && carry_) {
        result = '1', carry_ = '1';
    }
    else if (op_1 && op_2) {
        result = '0', carry_ = '1';
    }
    else if ((op_1 || op_2) && carry_) {
        result = '0', carry_ = '1';
    }
    else if (op_1 || op_2) {
        result = '1', carry_ = '0';
    }
    else if (carry_) {
        result = '1', carry_ = '0';
    }
    else {
        result = carry_ = '0';
    }
        tempResultArray = [result, carry_];
        return tempResultArray;
    }
    for (let i = bitlength-1; i >= 0; i--) {
        finalArray = binaryAddTwoBits(op_1[i], op_2[i], tempResultArray[INDEX_CARRY]);
        resultStr += finalArray[INDEX_RESULT];
    }
    if (finalArray[1] == '1') {
        resultStr += finalArray[INDEX_CARRY]
    }
    return resultStr.split("").reverse().join("");
}

console.log(binary_to_decimal((addBinaryNumbers(lookUpTable.b5,addBinaryNumbers(lookUpTable.b2, addBinaryNumbers(lookUpTable.b1, lookUpTable.b6))))));

console.log((addBinaryNumbers(lookUpTable.b5,addBinaryNumbers(lookUpTable.b2, addBinaryNumbers(lookUpTable.b1, lookUpTable.b6)))));

