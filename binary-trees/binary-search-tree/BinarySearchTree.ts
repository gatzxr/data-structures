import TreeNode from './TreeNode';

export default class BinarySearchTree {
    root: TreeNode;
    constructor() {
        this.root = null;
    }

    recursiveInsert(newNode: TreeNode, node: TreeNode): BinarySearchTree {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
                return this;
            }
            this.recursiveInsert(newNode, node.left);
        } else if (newNode.value > node.value) {
            if (!node.right) {
                node.right = newNode;
                return this;
            }
            this.recursiveInsert(newNode, node.right);
        } else {
            node.frequency++;
            return this;
        }
    }

    insert(value: any): BinarySearchTree {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        return this.recursiveInsert(newNode, this.root);
    }

    recursiveFind(value: any, node: TreeNode): number {
        if (value === node.value) return node.frequency;
        const searchDirection = value < node.value ? 'left' : 'right';
        return node[searchDirection] ? this.recursiveFind(value, node[searchDirection]) : -1;
    }

    find(value: any): number {
        if (!this.root) return -1;
        return this.recursiveFind(value, this.root);
    }

    bfs(value: any): number {
        const queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length) {
            if (node.value === value) return node.frequency;
            node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        return -1;
    }

    dfsPreOrder(value: any): number {
        let frequency = -1;
        const traverse = (node) => {
            if (node.value === value) return frequency = node.frequency;
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return frequency;
    }


    dfsPostOrder(value: any): number {
        let frequency = -1;
        const traverse = (node) => {
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            if (node.value === value) return frequency = node.frequency;
        }
        traverse(this.root);
        return frequency;
    }

    dfsInOrder(value: any): number {
        let frequency = -1;
        const traverse = (node) => {
            node.left && traverse(node.left);
            if (node.value === value) return frequency = node.frequency;
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return frequency;
    }
}





