// Queue
// FIFO (First in, first out)

// - enqueue
// - dequeue
// - peek
// - isEmpty
// - count

class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
        this.length = 0;
    }

    // add to the back
    enqueue(node) {
        if (this.isEmpty()) {
            this.front = node;
            this.back = node;
            this.length++;
        } else {
            this.back.next = node;
            this.back = node;
            this.length++;
        }
    }

    // remove from the front
    dequeue() {
        if (this.isEmpty()) {
            return null;
        } else if (this.length == 1) {
            this.front = null;
            this.back = null;
            this.length--;
        } else {
            const secondInQueue = this.front.next;
            this.front.next = null;
            this.front = secondInQueue;
            this.length--;
        }
    }

    // check the front of the queue
    peek() {
        return this.front ? this.front.data : this.front;
    }

    // return if empty
    isEmpty() {
        return this.front === null;
    }

    // return length
    count() {
        return this.length;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue, dequeue, peek, isempty, and length
function readQueue(queue) {
    let extraQ = new Queue();
    let placeInQ = 1;
    while (!queue.isEmpty()) {
        console.log("Your Queue's slot " + placeInQ + " is : " + queue.front.data);
        extraQ.enqueue(queue.front);
        queue.dequeue();
        placeInQ++;
    }
    while (!extraQ.isEmpty()) {
        queue.enqueue(extraQ.front);
        extraQ.dequeue();
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    // remove from top
    pop() {
        if (this.top === null) return null;

        const removed = this.top; // store previous top
        this.top = this.top.next; // move top pointer
        removed.next = null; // remove pointer from stored node
        this.length--; // decrement length

        return removed; // return the node
    }

    // aka check top
    peek() {
        return this.top;
    }

    // check if empty
    isEmpty() {
        return this.top === null;
    }

    // length getter
    length() {
        return this.length;
    }
}

function countStack(stack) {
    let newStack = new slStack();

    let count = 0;

    while (!stack.isEmpty()) {
        let node = stack.pop();
        newStack.push(node);
        count++;
    }

    while (!newStack.isEmpty()) {
        stack.push(newStack.pop());
    }

    return count;
};