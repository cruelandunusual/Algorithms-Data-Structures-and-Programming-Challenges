/*
My idea here was to use a lookup table containing strings storing the first 10 whole
numbers as bit patterns. The algorithm adds the least significant bit for each
operand, stores the result incrementally in a string; after computation is finished
the string is reversed so that the least significant bit is correctly at the rightmost side.
Operands can be stacked up by calling the function as a parameter to another instance
of calling the function, to overcome the limitation of adding just two operands at once.
*/

import { binary_to_decimal } from './decimal_to_binary1.js';

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

console.log(lookUpTable.b1);
console.log("print the results of 0 || 1: ", 0 || 1);
console.log(0 || 1);


const INDEX_RESULT = 0;
const INDEX_CARRY = 1;

function addBinaryNumbers(op1, op2, carry = 0) {
    let result = 0;
    let finalArray = [];
    let tempResultArray = [result, carry];
    let resultStr = "";
    const bitlength = 4;
    function binaryAddTwoBits(op1, op2, carry) {
        op1 = Number(op1);
        op2 = Number(op2);
        carry = Number(carry);
    if (op1 && op2 && carry) {
        result = '1', carry = '1';
    }
    else if (op1 && op2) {
        result = '0', carry = '1';
    }
    else if ((op1 || op2) && carry) {
        result = '0', carry = '1';
    }
    else if (op1 || op2) {
        result = '1', carry = '0';
    }
    else if (carry) {
        result = '1', carry = '0';
    }
    else {
        result = carry = '0';
    }
        tempResultArray = [result, carry];
        return tempResultArray;
    }
    for (let i = bitlength-1; i >= 0; i--) {
        finalArray = binaryAddTwoBits(op1[i], op2[i], tempResultArray[INDEX_CARRY]);
        resultStr += finalArray[INDEX_RESULT];
    }
    if (finalArray[1] == '1') {
        resultStr += finalArray[INDEX_CARRY]
    }
    return resultStr.split("").reverse().join("");
}

console.log(binary_to_decimal((addBinaryNumbers(lookUpTable.b5,addBinaryNumbers(lookUpTable.b2, addBinaryNumbers(lookUpTable.b1, lookUpTable.b6))))));

console.log((addBinaryNumbers(lookUpTable.b5,addBinaryNumbers(lookUpTable.b2, addBinaryNumbers(lookUpTable.b1, lookUpTable.b6)))));


/*
pass the whole multiplicand and one digit from the multiplier
compute the result for each multiplier
add the results together (using my add function)
*/
function multiplyBinaryNumbers(multiplier, multiplicand, carry = 0) {
    let result = 0;
    let finalArray = [];
    let tempResultArray = [result, carry];
    let resultStr = "";
    const bitlength = 4;
    function binaryMultiplyTwoBits(op1, op2, carry) {
        op1 = Number(op1);
        op2 = Number(op2);
        carry = Number(carry);
    if (op1 && op2 && carry) {
        result = '1', carry = '1';
    }
    else if (op1 && op2) {
        result = '0', carry = '1';
    }
    else if ((op1 || op2) && carry) {
        result = '0', carry = '1';
    }
    else if (op1 || op2) {
        result = '1', carry = '0';
    }
    else if (carry) {
        result = '1', carry = '0';
    }
    else {
        result = carry = '0';
    }
        tempResultArray = [result, carry];
        return tempResultArray;
    }
    for (let i = bitlength-1; i >= 0; i--) {
        finalArray = binaryMultiplyTwoBits(op1[i], op2[i], tempResultArray[INDEX_CARRY]);
        resultStr += finalArray[INDEX_RESULT];
    }
    if (finalArray[1] == '1') {
        resultStr += finalArray[INDEX_CARRY]
    }
    return resultStr.split("").reverse().join("");
}