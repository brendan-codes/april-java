class Node { // name of our class
    constructor(data) { // constructor
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

    // add given node to the head, if it exists.
    // return void
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
        this.head = newNode; // move the head to the new node
    }

}




var mySLL = new SLL();
mySLL.head = new Node(10);
mySLL.head.next = new Node(7);
mySLL.head.next.next = new Node(22);


console.log(mySLL);

var mySLL2 = new SLL();
mySLL2.addToFront(new Node(13));
mySLL2.addToFront(new Node(13));
mySLL2.addToFront(new Node(13));
mySLL2.addToFront(new Node(13));
mySLL2.addToFront(new Node(13));
mySLL2.addToFront(new Node(13));
mySLL2.addToFront(new Node(13));
mySLL2.addToFront(new Node(13));
console.log(mySLL2);
var runner = mySLL2.head;
while(runner){
    console.log(runner);
    runner = runner.next;
}
//  head: {
//     data: 10,
//     next: {
//         data: 7,
//         next: {
//             data: 22,
//             next: {

//             }
//         }
//     }
// }





































