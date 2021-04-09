learclass Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // if data is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    // consider the edge case your list is empty
    // consider the edge case that your list does not contain the data
    delete(data) {
        var current = this.head;
        //Edge Case: if first Node == data
        if(current.data == data){
            this.head = current.next;
            current.next = null;
            return;
        }

        while(current.next){                        //loop till there is no next Node
            if(current.next.data == data){          //if the next Node's value = target data
                var nodeToDelete = current.next;    //create a variable to store the Node that we will delete
                current.next = current.next.next;   //change the pointer of current Node to bypass next Node, straight on to the next.next one.
                nodeToDelete.next = null;           //delete the target Node by assigning it's .next to null (no one is pointing to it + it is pointing to no one)
                break;
            }
            current = current.next;                 //if not a match, move on to the next Node
        }
        return;
    }

    // Return the total amount of nodes in the list
    size() {
        var outputSize = 0;
        var current = this.head;
        while(current){
            outputSize ++;
            current = current.next;
        }
        return outputSize;
    }

    // console log (print) the data of every node in the current list
    read() {
        var current = this.head; // set curret as the head, if it exists or not
        while (current) { // if current, log and move to current.next
            console.log(current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        // start at the head
        var runner = this.head;
        // while we have a runner
        while (runner) {
            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }
        // if the while loop completes, return false
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty()) return null; // nothing to remove

        var removed = this.head; // save the head in a temp variable
        this.head = this.head.next; // move the head
        removed.next = null; // make removed no longer reference the list
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