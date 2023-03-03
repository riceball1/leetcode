
// https://structy.net/problems/has-path

/*

Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

*/

// DFS approach
const hasPathDFS = (graph, src, dst) => {
    const stack = [ src ]

    while (stack.length > 0) {
        const current = stack.pop();

        if (current === dst) {
            return true;
        }

        for (let neighbors of graph[ current ]) {
            stack.push(neighbors)
        }
    }

    return false;

};


// BFS approach
const hasPathBFS = (graph, src, dst) => {
    const queue = [ src ]

    while (queue.length > 0) {
        const current = queue.shift();

        if (current === dst) {
            return true;
        }

        for (let neighbors of graph[ current ]) {
            queue.push(neighbors)
        }
    }

    return false;

};


// Recursive approach
const hasPathRecursive = (graph, src, dst) => {

    if (src === dst) return true;

    for (let neighbor of graph[ src ]) {
        if (hasPathRecursive(graph, neighbor, dst) === true) {
            return true;
        }
    }

    return false;


};




const graph = {
    f: [ 'g', 'i' ],
    g: [ 'h' ],
    h: [],
    i: [ 'g', 'k' ],
    j: [ 'i' ],
    k: []
};

const a = hasPathDFS(graph, 'f', 'k'); // true
const b = hasPathBFS(graph, 'f', 'k'); // true
const c = hasPathRecursive(graph, 'f', 'k'); // true
console.log(a, b, c)