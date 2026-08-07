class MaxPriorityQueue{
    constructor(){
        this.heap = [];
    }

    enqueue(value, priority){
        this.heap.push({value, priority});
        let lastIndex = this.heap.length - 1;
        this.heapifyUp(lastIndex);
    }

    heapifyUp(i){
        while(i > 0){
            let parentIndex = Math.floor((i - 1) / 2);
            if(this.heap[i].priority > this.heap[parentIndex].priority){
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]];
                i = parentIndex;
            } else {
                break;
            }
        }
    }

    dequeue(){
        if(this.heap.length < 1) return null;

        let max = this.heap[0];
        let last = this.heap.pop();

         if(this.heap.length > 0){
            this.heap[0] = last;
            this.heapifyDown(0);
         }

         return max;
    }

    heapifyDown(i){
        let left = 2*i + 1;
        let right = 2*i + 2;
        let largest = i;
        let n = this.heap.length;

        if(left < n && this.heap[left].priority > this.heap[largest].priority){
            largest = left;
        }

        if(right < n && this.heap[right].priority > this.heap[largest].priority){
            largest = right;
        }

        if(largest != i){
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            this.heapifyDown(largest);
        }
    }

    peek(){
        return this.heap[0];
    }

    isEmpty(){
        return this.heap.length === 0;
    }

    size(){
        return this.heap.length;
    }

    toArray(){
        return this.heap.map(item => item.value);
    }

}

pq = new MaxPriorityQueue();
pq.enqueue("Task 1", 2);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 3);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.peek());
console.log(pq.isEmpty());
console.log(pq.size());
pq.enqueue("Task 4", 5);
pq.enqueue("Task 5", 4);
console.log(pq.toArray());



// class MinPriorityQueue {
//     constructor() {
//         this.heap = [];
//     }

//     enqueue(value, priority) {
//         this.heap.push({ value, priority });
//         let lastIndex = this.heap.length - 1;
//         this.heapifyUp(lastIndex);
//     }

//     heapifyUp(i) {
//         while (i > 0) {
//             let parentIndex = Math.floor((i - 1) / 2);

//             // For Min Heap, smaller priority comes above
//             if (this.heap[i].priority < this.heap[parentIndex].priority) {
//                 [this.heap[i], this.heap[parentIndex]] = 
//                 [this.heap[parentIndex], this.heap[i]];

//                 i = parentIndex;
//             } else {
//                 break;
//             }
//         }
//     }

//     dequeue() {
//         if (this.heap.length < 1) return null;

//         let min = this.heap[0];
//         let last = this.heap.pop();

//         if (this.heap.length > 0) {
//             this.heap[0] = last;
//             this.heapifyDown(0);
//         }

//         return min;
//     }

//     heapifyDown(i) {
//         let left = 2 * i + 1;
//         let right = 2 * i + 2;
//         let smallest = i;
//         let n = this.heap.length;

//         // Check left child
//         if (left < n && 
//             this.heap[left].priority < this.heap[smallest].priority) {
//             smallest = left;
//         }

//         // Check right child
//         if (right < n && 
//             this.heap[right].priority < this.heap[smallest].priority) {
//             smallest = right;
//         }

//         if (smallest !== i) {
//             [this.heap[i], this.heap[smallest]] = 
//             [this.heap[smallest], this.heap[i]];

//             this.heapifyDown(smallest);
//         }
//     }

//     peek() {
//         return this.heap[0];
//     }

//     isEmpty() {
//         return this.heap.length === 0;
//     }

//     size() {
//         return this.heap.length;
//     }

//     toArray() {
//         return this.heap.map(item => item.value);
//     }
// }