function topologicalSort(n, graph) {
  let ans = [];
  let visited = new Set();

  function dfs(curr) {
    visited.add(curr);
    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
    ans.push(curr);
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
    }
  }
  return ans.reverse();
}

const n = 6;
const edges = [[], [], [3], [1], [0, 1], [0, 2]];

console.log(topologicalSort(n, edges));
