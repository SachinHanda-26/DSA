class MinPriorityQueue {
    constructor(options = {}) {
        this.heap = [];
        this.priorityFn = options.priority || ((x) => x);
    }

    enqueue(value) {
        let priority = this.priorityFn(value);

        this.heap.push({ value, priority });

        let lastIndex = this.heap.length - 1;
        this.heapifyUp(lastIndex);
    }

    heapifyUp(i) {
        while (i > 0) {
            let parentIndex = Math.floor((i - 1) / 2);

            if (this.heap[i].priority < this.heap[parentIndex].priority) {
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
        if (this.heap.length === 0) return null;

        let min = this.heap[0];
        let last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }

        return min;
    }

    heapifyDown(i) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let smallest = i;
        let n = this.heap.length;

        if (
            left < n &&
            this.heap[left].priority < this.heap[smallest].priority
        ) {
            smallest = left;
        }

        if (
            right < n &&
            this.heap[right].priority < this.heap[smallest].priority
        ) {
            smallest = right;
        }

        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[i],
            ];

            this.heapifyDown(smallest);
        }
    }

    peek() {
        return this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }

    toArray() {
        return this.heap.map((item) => item.value);
    }
}

function primMST(n, graph) {
  let visited = new Array(n).fill(false);
  let pq = new MinPriorityQueue({ priority: (x) => x[1] });
  pq.enqueue([0, 0]); // [node, weight]

  let mstCost = 0;
  let edgesUsed = 0;

  while (!pq.isEmpty() && edgesUsed < n) {
    let [node, weight] = pq.dequeue().value;
    if (visited[node]) continue;
    visited[node] = true;
    edgesUsed++;
    mstCost += weight;

    for (let [edge, edgeW] of graph[node]) {
      if (!visited[edge]) {
        pq.enqueue([edge, edgeW]);
      }
    }
  }
//   console.log("Edges used in MST:", edgesUsed);
//   console.log(pq.toArray());
  return mstCost;
}

const graph = [
  [
    [1, 2],
    [3, 1],
    [4, 4],
  ],
  [
    [0, 2],
    [3, 3],
    [2, 3],
    [5, 7],
  ],
  [
    [1, 3],
    [3, 5],
    [5, 8],
  ],
  [
    [0, 1],
    [4, 9],
    [2, 5],
    [1, 3],
  ],
  [
    [0, 4],
    [3, 9],
  ],
  [
    [1, 7],
    [2, 8],
  ],
];

console.log(primMST(6, graph));
