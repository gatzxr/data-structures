import { BinarySearchTree } from '../index';

describe('Binary Search Tree', () => {
    let tree;
    beforeAll(() => {
        tree = new BinarySearchTree();
        tree.insert(10);
        tree.insert(10);
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(4);
        tree.insert(6);
        tree.insert(14);
        tree.insert(16);
    });

    it('should insert item to tree', () => {
        expect(tree.root.value).toBe(10);
        expect(tree.root.frequency).toBe(3);
    });
    it('should find an item', () => {
        expect(tree.find(100)).toBe(-1);
        expect(tree.find(4)).toBe(1);
        expect(tree.find(10)).toBe(3);
    });
    it('should traverse tree breadth first', () => {
        expect(tree.breadthFirstTraversal()).toEqual([10, 5, 15, 4, 6, 14, 16]);
    });
    it('should traverse tree depth first - pre order', () => {
        expect(tree.depthFirstTraversalPreOrder()).toEqual([10, 5, 4, 6, 15, 14, 16]);
    });
    it('should traverse tree depth first - post order', () => {
        expect(tree.depthFirstTraversalPostOrder()).toEqual([4, 6, 5, 14, 16, 15, 10]);
    });
    it('should traverse tree depth first - in order', () => {
        expect(tree.depthFirstTraversalInOrder()).toEqual([4, 5, 6, 10, 14, 15, 16]);
    });
});
