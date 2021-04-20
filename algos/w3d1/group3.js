// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // == Main Methods ==

    // push to head
    addHead(node) {//why make a new node when the new node is being passed in?
        // what if the list is empty?
        // what if there are many nodes?
        if (!this.head){
            this.head = node;
            this.tail = node; //so just take it out completely?
        // got it, thank you thank you!!
            //maybe, depends on what you want. I guess in theory you could return the entire object to chain if that was what you were planning, but most things return a true/false to indicate success/fail
            //add could also just be a void method too, so it can also just return nothing. In the end, it's really up to you.
        // no problem
        } else { //I think I'm getting confused with the head and tail so please correct me if I'm wrong
            //for this else, you know the head has something in there
            // so you have to make it so both the current head's previous points to the new node, and the new node's next points to the current head
            //and with that, the nodes are all linked, you just need to point the head to the new node

        }
    }
    addHead(node) {
        // what if the list is empty?
        // what if there are many nodes?
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

    }

    // pop from tail
    removeTail() {
        // what if the list is empty?
        // what if we only have one node left?
        // what if there are many nodes?
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {}

    // pop from head
    removeHead() {}
}