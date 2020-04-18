/**
 * Binary Search tree
 * ** add
 * ** find
 * ** remove
 * ** traverse
 * *** pre-prder
 * *** in-order
 * *** post-order
 */

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.count = 0;
    }

    /**
     * add a node to tree
     */
    add(val) {
        const node = new Node(val);

        const findAdd = (curr) => {
            if (!curr) {
                curr = node;
                return;
            }

            if (val >= curr.value) {
                if (!curr.right) {
                    curr.right = node;
                } else {
                    findAdd(curr.right);
                }
                return;
            }
            if (!curr.left) {
                curr.left = node;
            } else {
                findAdd(curr.left);
            }
        }
        if (!this.root) {
            this.root = node;
            this.count++;
            return;
        }
        findAdd(this.root);
        this.count++;
    }

    // pre-order traversal
    preOrderTrav() {
        if(!this.root) return console.log('Empty tree');

        const arr = [];
        const traverse = (curr) => {
            if (!curr) {
                return;
            }
            arr.push(curr.value);
            traverse(curr.left);
            traverse(curr.right);
        }
        traverse(this.root);
        console.log(arr.join(', '));
    }

    // in-order traversal
    inOrderTrav() {
        if(!this.root) return console.log('Empty tree');
        
        const arr = [];
        const traverse = (curr) => {
            if(curr.left) {
                traverse(curr.left);
            }
            if(curr) {
                arr.push(curr.value);
            }
            if(curr.right) {
                traverse(curr.right);
            }
        }
        traverse(this.root);
        console.log(arr.join(', '));
    }

    // post-order traversal
    postOrderTrav() {
        if(!this.root) return console.log('Empty tree');
        
        const arr = [];
        const traverse = (curr) => {
            if(curr.left) {
                traverse(curr.left);
            }
            if(curr.right) {
                traverse(curr.right);
            }
            if(curr) {
                arr.push(curr.value);
            }
        }
        traverse(this.root);
        console.log(arr.join(', '));
    }

    // find a value in tree
    find(val) {
        const search = (curr) => {
            if(!curr) return false;
            if(curr.value === val) {
                return true;
            }
            if(val >= curr.value) return search(curr.right);
            return search(curr.left);
        }
        return search(this.root);
    }

    // remove an item from the tree
    remove(val) {
        if(!this.find(val)) {
            return console.log('Item not found in the tree!');
        }

        // todo
    }

}

const bst = new BST();

console.log(bst.count);

bst.add(15);
bst.add(10);
bst.add(2);
bst.add(10);
bst.add(2);
bst.add(25);
bst.add(17);
bst.add(27);
bst.add(22);
bst.add(16);

console.log(bst.count, bst.root);
bst.preOrderTrav();
bst.inOrderTrav();
bst.postOrderTrav();
console.log(bst.find(272));
bst.remove(272);