// https://leetcode.com/problems/roman-to-integer/

/**
 * Given a roman numeral, convert it to an integer.
 */


 function romanToInt(s: string): number {
    // roman values
    const romanValues = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    };
    
    let total = 0;
    
    // O(n)
    for(let i = 0; i < s.length; i++) {

        /**
        Need to add conditonals to handle 
        IV, IX = 4 and 9
        XL XC = 40 and 90
        CD CM = 400 and 900
        */
        // compares the current value with the next value
        romanValues[s[i]] < romanValues[s[i+1]] ? total -= romanValues[s[i]]: total += romanValues[s[i]]
    }
    
    return total;
    

};