function shortestDistance(graph, source) {
  let n = graph.length;
  let distance = new Array(n).fill(Infinity);
  distance[source] = 0;

  let q = [source];

  while (q.length) {
    let curr = q.shift();
    for (let neighbor of graph[curr]) {
      if (distance[neighbor] == Infinity) {
        distance[neighbor] = distance[curr] + 1;
        q.push(neighbor);
      }
    }
  }
  return distance;
}

const graph = [[1, 2], [3], [4], [5], [3], []];

console.log(shortestDistance(graph, 0));
