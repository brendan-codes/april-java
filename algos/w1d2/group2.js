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
        if (this.head) {
            return true;
        } else {
            return false;
        }
    }


    // add given node to the head, if it exists. return void    /// so we do nothing for now ? think that's what the instructions are saying
    addToFront(node) {
        if (this.head) {
            // node.next = this.head;              // so this is getting ahead ??might be
            // this.head = node;                   //but it is the proper way to impliement a sll
            return null;                           //yeah, we're in js right now. void doesn't exist
        } else {
            this.head = node;
        }
    }

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) {
        this.head = new Node(data)           // ??it's a tad late to use addtofront() if this.head is already set to new node isn't it?   // yeah, we're just trying to think of a different way using the previous method| makes sense. I'd be a bit careful about have a function that lets you set things to the head without checking if anything is there. that deletes your entire list.
        // var newNod = new Node(data);
        // this.addToFront(newNod);
        return null;
    }
}