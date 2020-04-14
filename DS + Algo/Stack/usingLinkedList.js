/**
 * Stack implementation
 * LIFO operations
 * ** push()
 * ** pop()
 * ** print()
 */

 class Node {
     constructor(value, next = null) {
         this.value = value;
         this.next = next;
     }
 }

 class Stack {
     constructor() {
         this.top = null;
     }

     // push() - inserts a value at the top of stack
     push(val) {
         const node = new Node(val);
         if(!this.top) {
            this.top = node;
            return;
         }

         node.next = this.top;
         this.top = node;
     }

     // pop() - removes an item from the top of the stack
     pop() {
         if(!this.top) {
             console.log('Stack is empty!');
             return;
         }

         const val = this.top.value;
         this.top = this.top.next;
         return val;
     }
 }


 const stack = new Stack();

 stack.push(200);
 stack.push("Test");
 stack.push(false);

 console.log('popped = ', stack.pop());
 console.log('popped = ', stack.pop());
 console.log('popped = ', stack.pop());
 console.log('popped = ', stack.pop());