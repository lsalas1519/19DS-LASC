class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class ubbTree {
    constructor(data) {
        this.root = new Node(data);
    }
    insert(data) {
        let queue = [];
        queue.push(this.root);
        while (true) {
            let node = queue.pop();
            if (node.left === null) {
                node.left = new Node(data);
                return;
            } else {
                queue.unshift(node.left);
            }
            if (node.right === null) {
                node.right = new Node(data);
                return;
            } else {
                queue.unshift(node.right);
            }
        }
    }

    delete(data) {
        if(this.root === null){
            return null;
        }
        if(this.root.left === null && this.root.right === null){
            if (this.root.data === data){
                this.root.data = null;
            } else {
                return this.root;
            }
        }
        let key_node = null;
        let queue = [];
        queue.push(this.root);
        while(queue.length){
            let node = queue.pop();
            if (node.data === data){
                key_node = node;
            }
            if (node.left){
                queue.push(node.left.data);
            }
            if (node.right){
                queue.push(node.right.data);
            }
        }
        if (key_node){
            let x = node.data;
            this.deleteDeepest(data);
            key_node.data = x;
        }
        return this.root;
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
    bfs() {
        let node = this.root;
        const queue = [node];
        const finalData = []

        while (queue.length) {
            node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            finalData.push(node.data)
        }
        return finalData;
    }
    deleteDeepest(data){
        let queue = [];
        queue.push(this.root);
        while (queue.length) {
            let node = queue.pop();
            if (node.data === data) {
                node.data = null;
                return;
            }
            if (node.right){
                if (node.right.data === data){
                    node.right.data = null;
                    return;
                } else {
                    queue.push(node.right.data);
                }
            }
            if (node.left){
                if (node.left.data === data){
                    node.left.data = null;
                    return;
                } else {
                    queue.push(node.left.data);
                }
            }
        }
    }

}

let t = new ubbTree(1);
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
console.log(t);
console.log(t.bfs()); 
console.log(t.preOrder()); 
