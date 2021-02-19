export default class TreeNode {
    value: any;
    left: TreeNode;
    right: TreeNode;
    frequency: number;
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.frequency = 1;
    }
}