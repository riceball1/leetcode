/**
 * @param {Object} graph Node to array of neighboring nodes.
 * @param {string} source Source node to start traversal from. It has to exist as a node in the graph.
 * @return {Array<string>} A DFS-traversed order of nodes.
 */
function depthFirstSearch(graph, source) {
    if (Object.keys(graph).length === 0) return []
    const toBeVisited = [ source ] // store nodes to be visited
    const visited = new Set() // visited nodes

    while (toBeVisited.length > 0) {
        const node = toBeVisited.pop()
        visited.add(node)
        const neighbors = graph[ node ];
        for (let i = neighbors.length - 1; i >= 0; i--) {
            const neighbor = neighbors[ i ];
            if (!visited.has(neighbor)) {
                toBeVisited.push(neighbor);
            }
        }
    }
    return Array.from(visited);
}


const graph1 = {
    A: [ 'B', 'C', 'D' ],
    B: [ 'E', 'F' ],
    C: [ 'G', 'H' ],
    D: [ 'I', 'J' ],
    E: [ 'D' ],
    F: [],
    G: [],
    H: [],
    I: [],
    J: [],
};
const e = depthFirstSearch(graph1, 'A'); // ['A', 'B', 'E', 'D', 'I', 'J', 'F', 'C', 'G', 'H']
const f = depthFirstSearch(graph1, 'B'); // ['B', 'E', 'D', 'I', 'J', 'F']
console.log(e)
console.log(f)

const graph2 = {
    'A': [ 'B', 'C' ],
    'B': [ 'D', 'E' ],
    'C': [ 'F', 'G' ],
    'D': [],
    'E': [],
    'F': [],
    'G': [],
};
const a = depthFirstSearch(graph2, 'A'); // ['A', 'B', 'D', 'E', 'C', 'F', 'G']
const b = depthFirstSearch(graph2, 'E'); // ['E']
console.log(a)
console.log(b)