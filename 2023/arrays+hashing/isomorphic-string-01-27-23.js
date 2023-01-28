// https://leetcode.com/problems/isomorphic-strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


// Time O(s) Space O(s + t)
var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false;

    // use two hashMap in order to compare the values
    let letterMapA = new Map()
    let letterMapB = new Map()

    for(let i = 0; i < s.length; i ++) {
        // check if the s[i] exists
        // if not we want to set s[i] = t[i]
        if(!letterMapA.has(s[i])) {
            letterMapA.set(s[i], t[i])
            // check that if t[i] already exists, if so check it equals to s[i]
            // otherwise we return false early
            if(letterMapB.has(t[i]) && letterMapB.get(t[i]) !== s[i]) {
                return false;
            }
            // set the t[i] = s[i] to 2nd hashmap in case it's not return false early
            letterMapB.set(t[i], s[i])
        } else {
            // if s[i] exists we want to compare the two mappings
            let letterA = letterMapA.get(s[i])
            let letterB = letterMapB.get(letterA)
            if(letterB != s[i] || letterA != t[i]) {
                return false;
            }
        } 
    }

    return true
    
};