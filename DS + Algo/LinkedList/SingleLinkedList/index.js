/**
 * Single Linked List Operations
 * Add $
 * ** Add first $
 * ** Add Last $
 * ** insert at index $
 * Remove $
 * ** Remove from front $
 * ** Remove from Last $
 * ** Remove from index
 * Count
 * Iterate
 * reverse the linked list
 */


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SingleLL {
    constructor() {
        this.head = null;
        //  this.tail = null;
    }

    // add node at first
    addFirst(val) {
        const node = new Node(val);
        if (!this.head) {
            // head.next = this.tail;
            this.head = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }

    // add node at last
    addLast(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    // insert at a index
    insertAt(val, index) {
        const size = this.size();
        if(index > size || index < 0) {
            console.log(`Invalid index ${index}. Element ${val} can not be added to the list!`);
            return;
        }
        const node = new Node(val);
        if(index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let count = 0;
            let current = this.head;
            let prev;
            while(count < index) {
                count++;
                prev = current;
                current = current.next;
            }

            prev.next = node;
            node.next = current;
        }
    }

    // remove first
    removeFirst() {
        if(!this.head) {
            console.log('List is empty. Can\'t remove first element');
            return;
        }
        this.head = this.head.next;
    }

    // remove last
    removeLast() {
        if(!this.head) {
            console.log('List is empty. Can\'t remove last element');
            return;
        }
        if(this.size() === 1) {
            this.head = null;
            return;
        }
        let current = this.head;
        while(current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    // remove at index
    removeAt(index) {
        const size = this.size();
        if(size === 0 || index < 0 || index > size - 1) {
            console.log("Empty list or invalid index.");
            return;
        }
        if(index === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let prev;
        let count = 0;
        while(count < index) {
            count++;
            prev = current;
            current = current.next;
        }
        // console.log(count, prev);
        prev.next = current.next;
    }

    iterate() {
        if (!this.head) {
            console.log('List is empty!');
            return;
        }
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    size() {
        let size = 0;
        if (this.head) {
            let current = this.head;
            while (current) {
                size++;
                current = current.next;
            }
        }
        return size;
    }
}

const sll = new SingleLL();
sll.iterate();
console.log('Size ===', sll.size());
sll.removeFirst();
sll.removeLast();
sll.removeAt(0);
console.log('******staring addition********');
sll.addFirst(5);
sll.addFirst(16);
sll.insertAt('Rudra', 1);
sll.addLast('Akash');
sll.addFirst(6);
sll.addLast(666);
sll.insertAt('Ishu', 1);
sll.iterate();
console.log('Size ===', sll.size());
console.log('******staring deletion********');
sll.removeFirst();
sll.removeLast();
sll.removeAt(0);
sll.iterate();
console.log('Size ===', sll.size());
sll.removeFirst



