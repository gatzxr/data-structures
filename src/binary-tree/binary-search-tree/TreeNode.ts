export default class TreeNode {
    value: number;
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
