// https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/description/


/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const graph = new Array(n + 1).fill().map(() => []) 
    const visited = new Set([])

    // TIP: Transform the data to make it easier to navigate
    // create an adjaceny graph
    for (const [city1, city2, distance] of roads) {
        // make sure that if a location has been seen, make sure to add it the opposite way as well
        graph[city1].push([city2, distance])
        graph[city2].push([city1, distance])
    }

    // Setup up the places to traverse
    const queue = [1]
    visited.add(1) // first value
    let minDistance = Infinity; 

    // BFS traversal
    while (queue.length > 0) {
        const visitedCity = queue.shift(); // take value from front of the queue

        for (const [nextCity, distance] of graph[visitednextCity]) {
            minDistance = Math.min(minDistance, distance)
            if( visited.has(nextCity)) continue; // skip cycles
            visited.add(nextCity)
            queue.push(nextCity) // add next city to visit to the queue
        }
    }

    return minDistance;

};


// Test Cases
Input: n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]
Output: 5
// Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 4. The score of this path is min(9,5) = 5.
// It can be shown that no other path has less score.

