// https://leetcode.com/problems/evaluate-reverse-polish-notation/


/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [] // hold the numbers

    // iterate over the tokens
    for (const val of tokens) {
        if (val === '+') {
            const a = stack.pop()
            const b = stack.pop()
            stack.push(b + a)
        } else if (val === '*') {
            const a = stack.pop()
            const b = stack.pop()
            stack.push(b * a)
        } else if (val === '-') {
            const a = stack.pop()
            const b = stack.pop()
            stack.push(b - a)
        } else if (val === '/') {
            const a = stack.pop()
            const b = stack.pop()
            if (a === 0) {
                throw new Error('Division by zero')
            }
            stack.push(Math.trunc(b / a))
        } else {
            stack.push(parseInt(val))
        }
    }

    if (stack.length !== 1) {
        throw new Error('Invalid input')
    }

    return stack.pop()


};

// Test Cases

const tokens1 = [ "2", "1", "+", "3", "*" ]
console.log(evalRPN(tokens1))
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

const tokens2 = [ "4", "13", "5", "/", "+" ]
console.log(evalRPN(tokens2))
// Output: 6
// Explanation: (4 + (13 / 5)) = 6