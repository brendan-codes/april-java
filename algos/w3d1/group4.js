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
    addHead(node) {
        if (this.head===null){
            this.tail=node;
        }
        else{
            node.next=this.head;
            this.head.prev=node;
        }
        this.head=node;
    }

    // pop from tail
    removeTail() {
        // what if the list is empty?
        // what if we only have one node left?
        // what if there are many nodes?
        if(this.isEmpty()) return null;
        temp=this.tail;
        if (this.tail.prev===null)
            this.head=null;
        else
            temp.prev.next=null;
        this.tail=temp.prev;
        return temp;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
        if (this.tail===null){
            this.head=node;
        }
        else{
            node.prev=this.tail;
            this.tail.next=node;
        }
        this.tail=node;
    }

    // pop from head
    removeHead() {
        if(this.isEmpty()) return null;
        temp=this.head;
        if (this.head.next===null)
            this.tail=null;
        else
            temp.next.prev=null;
        this.head=temp.next;
        return temp;
    }
}