function possibleVacations(flightTable, homeCity, destinationList) {

    if (!flightTable[ homeCity ].length) return {};

    let queue = [ homeCity ];
    let map = {}
    let distance = 0;
    // need to maintain a visited list to ensure that we do not visit the same places we've seen twice, due to potentially there being a cycle
    let visited = new Set()

    while (queue.length > 0) {
        let currentLength = queue.length;
        // iterate over the cities 

        // maintain children of the current city
        let nextQueue = [];

        for (let i = 0; i < currentLength; i++) {
            let city = queue.pop();

            // check if already visited
            if (visited.has(city)) continue;
            visited.add(city)

            if (flightTable[ city ][ i ] !== undefined) {
                nextQueue.push(flightTable[ city ][ i ])
            }
            // checks whether the current city is one of the destinationList cities to output
            if (destinationList.includes(city)) {
                map[ city ] = distance;
            }
        }
        // update the queue with the city's cities
        queue = nextQueue;
        // update distance
        distance++;

    }

    return map;
}

console.log(possibleVacations(
    { 'Phoenix': [ 'Seattle' ], 'Seattle': [ 'Boston', 'Phoenix' ], 'Boston': [ 'Phoenix' ] },
    'Phoenix',
    [ 'Seattle', 'Boston' ]
))
// return {seattle: 1, boston: 2}

console.log(possibleVacations(
    { 'Phoenix': [], 'Seattle': [] },
    'Phoenix',
    [ 'Seattle' ]
))
// return {}

console.log(possibleVacations(
    { 'Phoenix': [ 'Seattle' ], 'Seattle': [] },
    'Phoenix',
    [ 'Seattle' ]
))
  // // returns {'Seattle': 1}