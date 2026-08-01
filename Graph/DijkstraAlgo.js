class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  enqueue(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);
      if (this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[i],
        ];
        i = parentIndex;
      } else {
        break;
      }
    }
  }

  dequeue() {
    if (this.heap.length < 1) return null;

    let min = this.heap[0];
    let last = this.heap.length - 1;

    [this.heap[0], this.heap[last]] = [this.heap[last], this.heap[0]];

    this.heap.pop();

    this.heapifyDown(0);

    return min;
  }

  heapifyDown(i) {
    let left = this.getLeftChildIndex(i);
    let right = this.getRightChildIndex(i);
    let smallest = i;
    let n = this.heap.length;

    if (left < n && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < n && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest != i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.heapifyDown(smallest);
    }
  }

  peek() {
    if (!this.heap.length) return null;
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

function dijkstra(graph, src) {
  let n = graph.length;
  let dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  let pq = new MinHeap();
  pq.enqueue([src, 0]);

  while (pq.size()) {
    let [node, nodeDist] = pq.dequeue();
    if (nodeDist > dist[node]) continue;

    for (let [neighbor, edgeWeight] of graph[node]) {
      let newDist = dist[node] + edgeWeight;
      if (newDist < dist[neighbor]) {
        dist[neighbor] = newDist;
        pq.enqueue([neighbor, newDist]);
      }
    }
  }
  return dist;
}

const graph = [
  // [node, weight]
  [
    [1, 2],
    [2, 4],
  ],
  [
    [3, 7],
    [2, 1],
  ],
  [
    [4, 3],
    [5, 1],
  ],
  [[6, 1]],
  [
    [3, 2],
    [6, 5],
  ],
  [
    [3, 3],
    [6, 8],
  ],
  [],
];

console.log(dijkstra(graph, 0));
