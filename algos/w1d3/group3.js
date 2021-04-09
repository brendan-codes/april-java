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
        var runner=this.head;
        while(runner != null){
            console.log(runner.data);
            runner = runner.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        //make a runner
        var runner=this.head;
        //have the runner run down the list until it finds a node with the value
        while(runner != null){
            //if it finds a node with the value, return true
            if(runner.data == value){
                return true;
            }
            runner = runner.next;
        }
        // if it doesn't find the data all the way through the list, return false
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        //put head node into a storage variable
        var nodeRemoved = this.head;
        //head node.next should become the new head node
        if(nodeRemoved == null){
            return nodeRemoved;
        }
        this.head = nodeRemoved.next;
        nodeRemoved.next = null;
        //return the old head node
        return nodeRemoved;
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
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
    }
}

