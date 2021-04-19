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
        // what if the list is empty?
        // what if there are many nodes?
		if (this.isEmpty()) {
			this.head = node;
			this.tail = node;
		} else {
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
		if (!this.isEmpty()) {
			let node = this.tail;
			if (this.head === this.tail) this.head = this.tail = null;
			else {
				this.tail = node.prev;
				this.tail.next = null;
				node.prev = null;
			}
			return node;
		}
		return null;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
		if (this.isEmpty()) {
			this.head = node;
			this.tail = node;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		}
	}

    // pop from head
    removeHead() {
		if (!this.isEmpty()) {
			let node = this.head;
			if (this.head === this.tail) this.head = this.tail = null;
			else {
				this.head = node.next;
				this.head.prev = null;
				node.next = null;
			}
			return node;
		}
		return null;
	}
}

const list = new DLList();
console.log(`list ${list.isEmpty() ? "is" : "is not"} empty`);
console.log("...adding to head...");
for (let i = 1; i < 9; i++) list.addHead(new DLLNode(i));
console.log(`list ${list.isEmpty() ? "is" : "is not"} empty`);
console.log("...removing from tail...");
for (let i = 8; i > 0; i--) console.log(list.removeTail().data);
console.log(`list ${list.isEmpty() ? "is" : "is not"} empty`);
console.log("...adding to tail...");
for (let i = 1; i < 9; i++) list.addTail(new DLLNode(i));
console.log(`list ${list.isEmpty() ? "is" : "is not"} empty`);
console.log("...removing from head...");
for (let i = 8; i > 0; i--) console.log(list.removeHead().data);
console.log(`list ${list.isEmpty() ? "is" : "is not"} empty`);
