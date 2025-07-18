/*
Aborted attempt at using recursion to split a
string recursively into chunks of two cells,
compute the results of each two-cell unit,
and then compute the result of the whole thing.
I might return to this, it's an interesting challenge.
*/
function binary_to_decimal(num_as_bin) {
    let left = "";
    let right = ""
    let split = num_as_bin.length / 2;
    for (let i = 0; i < split; i++) {
        left += num_as_bin[i];
        right += num_as_bin[i + split];
    }
    left = Number(left);
    right = Number(right);
    return (2 * left) + right;
}

console.log(binary_to_decimal(process.argv[2]));