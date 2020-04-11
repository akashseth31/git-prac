/**
 * Single Linked List Operations
 * Add
 * ** Add first
 * ** Add Last
 * Remove
 * ** Remove from front
 * ** Remove from Last
 * Count
 * Iterate
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
         this.tail = null;
     }

     addFirst (val) {
         const head = new Node(val);
         if(!this.head) {
            head.next = this.tail;
            this.head = head;
            return;
         }
         head.next = this.head;
         this.head = head;
     }

     iterate () {
         let current = this.head;
         while(current) {
             console.log(current.value);
             current = current.next;
         }
     }
 }

 const sll = new SingleLL();
 sll.addFirst(5);
 sll.addFirst(16);
 sll.addFirst(6);
 sll.iterate();
 

