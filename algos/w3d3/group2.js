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

    // return true or false if a node exists with data === val
    exists(val) {
        var curNode = this.head;

        while (curNode){
            if (curNode.data === val){
                return true;
            }
        curNode = curNode.next;
        }
        return false;
    }
	exists2(val) {
		let runner = this.head;
		while (runner && runner.data !== val) runner = runner.next;
		return runner ? true : false;
    }
    // remove and return the first node with data === val, if it exists
    // what if the list empty?
    // what if the target val is the head?
    // what if the target val is the tail?
    // what if the target val is the only node in the list?
    removeVal(val) {
        // what if the list is empty?
        if(this.head === null) return;
        // what if the target val is the head?
        if(this.head.data === val){
            var temp = this.head; // set a temp
            this.head = head.next; // move the head back
            this.head.prev = null; // null out the new head's prev
            temp.next = null; // null out the temp's prev
            return temp;
        }
        // what if the target val is the tail?
        if(this.tail.data===val) this.removeTail();
        // standard case
        let runner = this.head.next;
        while(runner){
            if(runner.data === val){
                runner.prev.next = runner.next;
                runner.next.prev = runner.prev;
                runner.next = null;
                return runner;
            } else {
                runner = runner.next;
            }
        }
    }
	removeVal2(val) {
		let runner = this.head;
		while (runner && runner.data !== val) runner = runner.next;
		if (runner) {
			let before = runner.prev;
			let after = runner.next;
			if (before) before.next = after;
			else this.head = after;
			if (after) after.prev = before;
			else this.tail = before;
			runner.prev = runner.next = null;
		}
		return runner;
	}



    // add before target
    prepend(target, node) {
        if (this.head !== null) { // Must have at least one node
            var curNode = this.head;
            if (curNode.data === target) { // Edge case: first node only
                node.next = curNode; // Connect nodes
                curNode.prev = node;
                this.head = node; // Move this.head to new node
            } else {
                while (curNode.next !== null) {
                    curNode = curNode.next; // Move to next node
                    if (curNode.data === target) {
                        // Link this new node to the others
                        node.next = curNode;
                        node.prev = curNode.prev;
                        // Link other nodes to this new node
                        curNode.prev.next = node;
                        curNode.prev = node;
                        return; // Exit while loop assuming only before first instance of target
                    }
                }
            }
        }
    }

    // cleaner add before target
    prependClean(target, node) {
        var runner = this.head; // set a runner
        if(runner.data === target){
            this.addHead(node);
            return;
        }
        while (runner) { // loop
            if (runner.data !== target) { // check runner data against the target
                runner = runner.next;     // move forward if no match
            } else {                      // else we found a match
                node.next = runner;       // point the node at the matched runner
                node.prev = runner.prev;  // point the node's prev to the matched runner's prev
                node.prev.next = node;    // link previous node next
                runner.prev = node;       // link runner to node
                return;
            }
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

            // this.tail.next = node;
            // node.prev = this.tail;
            // this.tail = node;
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

    append(target, node){}
}