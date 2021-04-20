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

    // add node before target
    // target is the value of a node in the list
    // consider the edge case where you may have to move the head
    // conisder the edge case where you do not find the target
    prepend(target, node) {
        let runner = this.head;
        if (this.head.data == target) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            return;
        }
        while (runner.next) {
            if (runner.next.data == target) {
                node.next = runner.next;
                node.prev = runner;
                runner.next = node;
                node.next.prev = node;
                return;
            }
            runner = runner.next;
        }
    }

    // push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;

            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail; // set a temp
            this.head = null; // disconnect the head
            this.tail = null; // disconnect the tail
            return temp;
        }
        var temp = this.tail; // set a temp
        this.tail = tail.prev; // move the tail back
        this.tail.next = null; // null out the new tail's next
        temp.prev = null; // null out the temp's prev
        return temp;
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

// ----- FOR TESTING -----  //

// function readDLL(DLL) {
//     let runner = DLL.head;
//     while (runner) {
//         console.log(runner.data);
//         runner = runner.next;
//     }
// }

// function readDLLBackwards(DLL) {
//     let runner = DLL.tail;
//     while (runner) {
//         console.log(runner.data);
//         runner = runner.prev;
//     }
// }