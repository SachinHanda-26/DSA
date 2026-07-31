function topologicalSortBFS(n, graph) {
  let indegree = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let node of graph[i]) {
      indegree[node]++;
    }
  }

  let q = [];
  for (let i = 0; i < n; i++) {
    if (indegree[i] == 0) {
      q.push(i);
    }
  }

  let ans = [];

  while (q.length) {
    let curr = q.shift();
    ans.push(curr);
    for (let neighbor of graph[curr]) {
      indegree[neighbor]--;
      if (indegree[neighbor] == 0) {
        q.push(neighbor);
      }
    }
  }
  if(ans.length != n) {
    console.log("Graph has a cycle, topological sort not possible");
    return [];
  }
  return ans;
}

const n = 6;
let edges = [[], [], [3], [1], [0, 1], [0, 2]];

// topological Sort not possible, cycle exists in the graph
let edges2 = [[], [2], [3], [1], [0, 1], [0, 2]];

console.log(topologicalSortBFS(n, edges));
console.log(topologicalSortBFS(n, edges2));
