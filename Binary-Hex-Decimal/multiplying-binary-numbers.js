/*
pass the whole multiplicand and one digit from the multiplier
compute the result for each multiplier
add the results together (using my add function)
DOESN'T WORK YET...
*/
function multiplyBinaryNumbers(multiplier, multiplicand, carry = 0) {
    let result = 0;
    let finalArray = [];
    let tempResultArray = [result, carry];
    let resultStr = "";
    const bitlength = 4;
    let op_1 = 0;
    let op_2 = 0;
    let carry_ = 0;
    function binaryMultiplyTwoBits(op1, op2, carry) {
        op_1 = Number(op1);
        op_2 = Number(op2);
        carry_ = Number(carry);
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
        finalArray = binaryMultiplyTwoBits(op_1[i], op_2[i], tempResultArray[INDEX_CARRY]);
        resultStr += finalArray[INDEX_RESULT];
    }
    if (finalArray[1] == '1') {
        resultStr += finalArray[INDEX_CARRY]
    }
    return resultStr.split("").reverse().join("");
}

console.log("multiplying 4 * 2");
console.log((multiplyBinaryNumbers(4, lookUpTable.b2)));