import MaxBinaryHeap from '../binary-tree/binary-heap/MaxBinaryHeap';

describe('Max Binary Heap', () => {
    let heap;
    beforeEach(() => {
        heap = new MaxBinaryHeap();
        heap.insert(1);
        heap.insert(2);
        heap.insert(3);
        heap.insert(4);
        heap.insert(5);
        heap.insert(6);
        heap.insert(7);
        heap.insert(8);
        heap.insert(9);
    });
    it('should check heap\'s structure', () => {
        expect(heap.values).toEqual([9, 8, 6, 7, 3, 2, 5, 1, 4]);
    });
    it('should extract max from heap', () => {
        expect(heap.extractMax()).toBe(9);
        expect(heap.values).toEqual([8, 7, 6, 4, 3, 2, 5, 1]);
    });
});