class PriorityQueue{
    constructor(){
        this.queue = [];
    }

    enqueue(value, priority){
        this.queue.push({value, priority});
        this.queue.sort((a, b) => b.priority - a.priority);
    }

    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    size(){
        return this.queue.length;
    }
}

pq = new PriorityQueue();
pq.enqueue("Task 1", 2);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 3);
console.log(pq.dequeue()); 
console.log(pq.dequeue());
console.log(pq.peek());
console.log(pq.isEmpty());
console.log(pq.size());