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

    // return true or false if this.head is null
    isEmpty() {
        return this.head == null;
    }


    // add given node to the head, if it exists. return void
    addToFront(node) {
        if (this.isEmpty()){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) {
        this.addToFront(new Node(data));
    }
}


var mySLL = new SLL();
mySLL.head = new Node(10);
mySLL.head.next = new Node(7);
mySLL.head.next.next = new Node(22);

mySLL.addToFront(new Node(1));
mySLL.addDataToFront(2);

console.log(mySLL);