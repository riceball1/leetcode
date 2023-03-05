// https://structy.net/problems/undirected-path

/*
Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
*/

// Time: O(e) -> number of edges; Space: O(n) -- number of nodes
const undirectedPath = (edges, nodeA, nodeB) => {
  // make it easier to traverse by turning the edges into an adjacency list
  let adjacencyList = generateAdjancencyList(edges)
  // make sure to guard against cycles to avoid infinite loop
  return hasPath(adjacencyList, nodeA, nodeB, new Set())
};

const hasPath = (adjacencyList, source, destination, visited) => {
  if (source === destination) return true;

  // guard against a cycle by checking if the source has been visited before using a set -- O(1) lookup time
  if (visited.has(source)) return false;
  visited.add(source)

  // iterate over the edges to check if it will traverse to the destination
  for (let neighbor of adjacencyList[ source ]) {
    if (hasPath(adjacencyList, neighbor, destination, visited) === true) {
      return true;
    }
  }

  // if no destination was found after hitting all possible nodes, then return false
  return false;
}

const generateAdjancencyList = (edges) => {
  const adjacencyList = {}
  // iterate over the edges
  // convert this to an adjacency list
  for (let edge of edges) {
    // edge => [ 'i', 'j' ]
    const [ a, b ] = edge;
    if (!(a in adjacencyList)) {
      adjacencyList[ a ] = []
    }

    if (!(b in adjacencyList)) {
      adjacencyList[ b ] = []
    }
    adjacencyList[ a ].push(b)
    adjacencyList[ b ].push(a)

  }
  return adjacencyList;
}


// Test Cases
// every edge represents a connection
const edges = [
  [ 'i', 'j' ],
  [ 'k', 'i' ],
  [ 'm', 'k' ],
  [ 'k', 'l' ],
  [ 'o', 'n' ]
];

const u = undirectedPath(edges, 'j', 'm'); // true
console.log(u)