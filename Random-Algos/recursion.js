
/**
 * 
 * Given an input of number check how many combinations
 * are valid it must be inclusive of 1 >= int <= 26;
 */
let counter = 0;
function combinations(num) {
    if(!num) return counter++;
    // is valid number
    let validOne = num[0] >= 1 && num[0] <= 26;
    let validTwo = num.slice(0,2).length >= 2 && num[0] != 0 && num.slice(0,2) >= 1 && num.slice(0,2) <= 26;
    if (validOne) {
        // nothing to see counter += 1
        // if something more to see recursion
        // console.log('valid', num[0])
        // check the rest of the values from first index onwards
        combinations(num.slice(1,));
    } 

    if (validTwo) {
        // console.log('validTwo', num.slice(0,2))
        // check the rest of the values from next index onwards
        combinations(num.slice(2,));
    }
}

// function numberOfCombinations(num) {
//     let counter = 0;
//     combinations('1226')
//     return counter;
// }

combinations('306')
console.log(counter)