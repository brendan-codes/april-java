class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // console log (print) the data of every node in the current list
    read() {
        if(this.isEmpty()) {
            console.log("[~empty~]");
            return;
        }
        let runner = this.head;
        do {
            console.log(runner.data);
            runner = runner.next;
        }while(runner != null)
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        if(this.isEmpty()) return false;
        let runner = this.head;
        do {
            if(runner.data === value) return true;
            runner = runner.next;
        }while(runner != null)
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if(this.isEmpty()) return null;
        let node = this.head;
        this.head = this.head.next;
        return node;
    }

    // return true or false if this.head is null
    isEmpty() {
        return this.head == null;
    }

    // add given node to the head, if it exists. return void
    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        let newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = newNode; // move the head to the new node
		// or, alternatively...
		// this.addToFront(new Node(data));
    }
}

var sll = new SLL();
sll.read();
sll.addDataToFront(10);
sll.addDataToFront(11);
sll.read();

if (sll.contains(10)) console.log("sll contains 10");
if (!sll.contains(20)) console.log("sll does not contain 20");

let removed = sll.removeFromFront();
console.log("removed the first node, data = " + removed.data);
if (sll.contains(11)) console.log("sll contains 11");
else console.log("sll does not contain 11");
