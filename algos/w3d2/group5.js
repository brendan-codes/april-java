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
    // consider the edge case where you do not find the target
    prepend(target, node) {
        if (this.isEmpty()) return;
        if(this.head.data == target){
            this.addHead(node);
            return;
        }
        let runner = this.head.next;
        while(runner){
            if(runner.data == target){
                node.next = runner;
                node.prev = runner.prev;
                runner.prev.next = node;
                runner.prev = node;
                return;
            } else {
                runner = runner.next;
            }
        }
    }

    // push to head
    addHead(node) {
        if (this.isEmpty()) this.tail = node;else {node.next = this.head;this.head.prev = node;}this.head = node;
    }

    // pop from tail
    removeTail() {
        if (this.isEmpty()) return null;
        let node = this.tail;
        this.tail = node.prev;
        if (this.tail === null) this.head = null;
        else this.tail.next = node.prev = null;
        return node;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
		if (this.isEmpty()) this.head = node;
		else {
			node.prev = this.tail;
			this.tail.next = node;
		}
		this.tail = node;
	}

    // pop from head
    removeHead() {
		if (this.isEmpty()) return null;
		let node = this.head;
		this.head = node.next;
		if (this.head === null) this.tail = null;
		else this.head.prev = node.next = null;
		return node;
	}

    append(target, node) {
        if (this.isEmpty()) return;
        if(this.tail.data == target){
            this.addTail(node);
            return;
        }
        let runner=this.tail;
        while(runner){
            if(runner.data == target){
                node.prev = runner;
                node.next = runner.next;
                runner.next.prev = node;
                runner.next = node;
                return;
            } else {
                runner = runner.prev;
            }
        }
    }
}