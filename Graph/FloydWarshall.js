function floydWarshall(V, edges) {
  let dist = Array.from({ length: V }, () => Array(V).fill(Infinity));

  for (let i = 0; i < V; i++) {
    dist[i][i] = 0;
  }

for(let [u, v, w] of edges){
    dist[u][v] = w;
}

for(let k = 0; k < V; k++){
    for(let i = 0; i < V; i++){
        for(let j = 0; j < V; j++){
            dist[i][j] = Math.min(dist[i][k] + dist[k][j], dist[i][j]);
        }
    }
}

  return dist;
}

const edges = [
  [0, 1, 2],
  [1, 0, 7],
  [1, 2, 3],
  [2, 1, 8],
  [2, 3, 2],
  [3, 0, 1],
  [3, 1, 5],
];

console.log(floydWarshall(4, edges));
