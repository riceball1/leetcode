// https://neetcode.io/problems/is-anagram?list=neetcode150

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // edge case: length is one each or length does not match?

        if (s.length !== t.length) return false

        // solution 1: loop through one and create a hash map of s characters
        // then compare the hashmap with the t string by subtracting 
        // from the value for that character in the hashmap, if the 
        // value checked is 0 or doesn't exist, then return false
        // otherwise if we get through all of t, then return true

        const sMap = new Map()

        for(let i = 0; i < s.length; i++) {
            if(sMap.has(s[i])) {
                const value = sMap.get(s[i])
                sMap.set(s[i], value + 1)
            } else {
                sMap.set(s[i], 1)
            }
        }

        // compare the sMap and t string
        for (let j = 0; j < t.length; j++) {
            // should check if it exists or is already at zero
            if (!sMap.has(t[j]) || sMap.get(t[j]) === 0) {
                return false
            }
            // decrement
            sMap.set(t[j], sMap.get(t[j]) - 1)
        }

        return true



        // solution 2: sort both and use two pointers
        // const sortedS = s.split('').sort().join('')
        // const sortedT = t.split('').sort().join('')
        // return sortedS == sortedT
    }
}
