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
        let runner = this.head;
        while(runner);
        console.log(runner);
        runner = runner.next;
    }


    // find: return true / false if current list contains a data equal to value
    contains(value) {
        //create a runner
        var runner = this.head;
// have runner go through the nodes as long as it is not null
        while (runner != null){
//if the runner finds a node with the value return true
            if (runner.data === value){

                return true;
            }
            // runner will keep going in the while loop until it  hits null or last node
            runner = runner.next;
        }
// if no value is found return false
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if(this.isEmpty()) return null; //nothing is removed

        var removed = this.head; // save the head in temp variable
        this.head = this.head.next; // move the head
        removed.next = null; //make removed no longer reference the list
        return removed;
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