/**
 * Queue implementation using Linked List
 * FIFO Operations
 * ** Enqueue
 * ** Dequeque
 * ** Print
 */


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // enqueque
    enQ(val) {
        const node = new Node(val);
        if (!this.tail) {
            this.tail = node;
            this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    // dequeque
    deQ() {
        if(!this.head) {
            console.log('Queue is empty!');
            return;
        }
        const val = this.head.value;
        this.head = this.head.next;
        return val;
    }

    // print all values
    print() {
        if (!this.tail) {
            console.log('Queue is empty!');
            return;
        }
        let cur = this.head;
        while (cur) {
            console.log(cur.value);
            cur = cur.next;
        }
    }
}


const q = new Queue();
q.print();
console.log('Start adding to queue');

q.enQ(5);
q.enQ("Akash");
q.enQ(77);
q.enQ(false);

q.print();

console.log('dequeque item === ', q.deQ());
console.log('dequeque item === ', q.deQ());
console.log('dequeque item === ', q.deQ());
console.log('dequeque item === ', q.deQ());
console.log('dequeque item === ', q.deQ());

