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
        return this.head ? false : true;
    }
  
  
    // add given node to the head, if it exists. return void
    addToFront(node) {
      !this.isEmpty() ? node.next = this.head : null;
      this.head = node;
    }
  
    // create a new node with given data, add it to the head. return void
    addDataToFront(data) {
      this.addToFront(new Node(data));
    }
  }
  