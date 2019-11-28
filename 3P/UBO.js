class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class uobTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        }
        let current = this.root;
        while (true) {
            if (data === current.data) return;
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                }
                current = current.right;
            }
        }
    }

    deleteNode(key) {
        return !(this.deleteNodeHelper(this.root, key) === false);
    }

    deleteNodeHelper(root, key) {
        if (root === null) {
            // arbol vacio regresa falso;
        }
        if (key < root.data) {
            root.left = this.deleteNodeHelper(root.left, key);
            return root;
        } else if (key > root.data) {
            root.right = this.deleteNodeHelper(root.right, key);
            return root;
        } else {
            // sin hijos 
            //case 1 - a leaf node
            if (root.left === null && root.right === null) {
                root = null;
                return root;
            }
            // Single Child cases
            if (root.left === null) return root.right;
            if (root.right === null) return root.left;

            // Both children, so need to find successor
            let currNode = root.right;
            while (currNode.left !== null) {
                currNode = currNode.left;
            }
            root.data = currNode.data;

            // Delete the value from right subtree.
            root.right = this.deleteNodeHelper(root.right, currNode.data);
            return root;
        }
    }
    preOrder(node = this.root) {
        if (node.data !== null) {
            console.log(node.data);
        }
        if (node.left !== null) {
            this.preOrder(node.left);
        }
        if (node.right !== null) {
            this.preOrder(node.right);
        }
    }

    bfs(){
        let node = this.root;
        const queue = [node];
        const finalData = [ ]
    
        while(queue.length){
          node= queue.shift()
          if(node.left) queue.push(node.left)
          if(node.right) queue.push(node.right)
          finalData.push(node.data)
        }
        return finalData;
     }

}

let t = new uobTree();
t.insert(8);
t.insert(12);
t.insert(52);
t.insert(54);
t.insert(27);
t.insert(5);
t.insert(6);
t.insert(78);
t.insert(15);
t.insert(19);
t.insert(20);

//console.log(tree.inOrder()); //9,12,14,17,19,23,50,54,67,72,76
console.log(t.preOrder());
console.log(t.bfs());
t.deleteNode(12);
console.log(t);