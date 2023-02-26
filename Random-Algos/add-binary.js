// https://leetcode.com/problems/add-binary/description/



/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {


    let string = [] // collect each sum value for the binary string

    // use two pointer approach to iterate
    let i = a.length - 1; 
    let j = b.length - 1;

    // keep a carry for counting
    let carry = 0;


    // iterate
    while(i >= 0 || j >=0) {
        let sum = carry; // maintain sum
        
        // check out of bounds
        // find the value at each part of the a and b strings
        if(i >= 0) sum += a.charAt(i--) - '0';
        if(j >= 0) sum += b.charAt(j--) - '0';

        // take that sum and push it to the string array using the modulo
        // 2 is used because it is binary
        string.push(sum % 2);

        // any remainder is added to carry
        carry = Math.floor(sum / 2)
    }

    // if there is any carry, which should be at most 1 added to string arr
    if (carry != 0) {
        string.push(carry);
    }

    // string array will be in backwards order, so need to reverse
    // convert the array to a string for the proper output
    return string.reverse().join("")
};