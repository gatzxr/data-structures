import PriorityQueue from '../binary-tree/binary-heap/priority-queue/PriorityQueue';
import Queue from '../queue/Queue';

describe('PriorityQueue', () => {
    let queue;
    beforeEach(() => {
        queue = new PriorityQueue();
        queue.enqueue('A', 7);
        queue.enqueue('B', 8);
        queue.enqueue('C', 9);
        queue.enqueue('D', 4);
        queue.enqueue('E', 5);
        queue.enqueue('F', 6);
        queue.enqueue('G', 2);
        queue.enqueue('H', 3);
        queue.enqueue('I', 1);
    });
    it('should check heap\'s structure', () => {
        expect(queue.values.map(item => item.value)).toEqual(['I', 'G', 'D', 'H', 'A', 'C', 'F', 'B', 'E']);
    });
    it('should extract highest priority from heap', () => {
        expect(queue.dequeue().value).toBe('I');
        expect(queue.dequeue().value).toBe('G');
        expect(queue.dequeue().value).toBe('H');
        expect(queue.dequeue().value).toBe('D');
        expect(queue.dequeue().value).toBe('E');
        expect(queue.dequeue().value).toBe('F');
        expect(queue.dequeue().value).toBe('A');
        expect(queue.dequeue().value).toBe('B');
        expect(queue.dequeue().value).toBe('C');
    });
})