function bellmanFord(edges, V, src) {
  let dist = new Array(V).fill(Infinity);
  dist[src] = 0;

  // updated is used to check if any distance was updated in the current iteration -if not then we can break early.
  for (let i = 0; i < V - 1; i++) {
    let updated = false;
    for (let [u, v, w] of edges) {
      if (dist[u] !== Infinity &&dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        updated = true;
      }
    }
    if (!updated) break;
  }

  // check for negative weight cycles
  for (let [u, v, w] of edges) {
    if (dist[u] + w < dist[v]) {
      console.log("Graph contains negative weight cycle");
      return null;
    }
  }
  return dist;
}

const edges = [
  //[u, v, w]
  [0, 1, 6],
  [0, 2, 5],
  [0, 3, 5],
  [1, 4, -1],
  [2, 1, -2],
  [2, 4, 1],
  [3, 2, -2],
  [3, 5, -1],
  [4, 6, 3],
  [5, 6, 3],
];

// Negative weight cycle example
// const edges = [
// [0, 1, 4],
// [1, 2, -1],
// [2, 3, -2],
// [3,1,0]
//  ]

let V = 7;

console.log(bellmanFord(edges, V, 0));
