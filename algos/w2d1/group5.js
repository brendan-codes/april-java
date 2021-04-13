// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// push - add to top
// pop - remove from top
// peek - check the top
// isEmpty - check if the stack is empty, true/false
// length - return size of stack

// an arrStack is a simple stack implementation using
// a javascript array as the certain data structure.
class arrStack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        if (this.items.length === 0) {
            return true;
        }
        return false;
    }

    length() {
        return this.items.length;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// slStack must be implemented using Nodes and pointers
class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        if (!this.top){                //adds the new node if empty
            this.top = newNode;
            return this.top;
        }
        var runner = this.top;         // while there is a runner.next, move it over to the current one
        while (runner.next){
            runner = runner.next;
        }
        runner.next = newNode;          // add the new node to runner.next
        this.length++;                  // adds the new node into the length on line 55
        return this.top;

    }

    // remove from top
    pop() {
        if (!this.top){
            return null;
        }
        if (this.top.next === null){    // assuming that there is no next
            this.top = null;            // null the current top
            this.length--;              // removes node from length on line 55
            return this.top;
        }
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

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function countStack(stack) {};