// https://leetcode.com/problems/queue-reconstruction-by-height/description/


/**
 * @param {number[][]} people
 * @return {number[][]}
 * 
 * time: O(n log n) 
 */
var reconstructQueue = function(people) {
    let res = []
    // sort the people array
    people.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0])
    // for each 
    people.forEach(kPeople => {
        // inserts at kPeople[1] 
        // (start, deletCount, item)
        res.splice(kPeople[1], 0, kPeople)
    })
    return res
};