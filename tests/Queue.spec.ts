import { Queue } from '../index';

describe('Queue', () => {
    let queue;
    beforeEach(() => {
        queue = new Queue();
    });

    it ('should check queue is empty', () => {
        expect(queue.size).toBe(0);
        expect(queue.first).toBeNull();
        expect(queue.last).toBeNull();
    });
    it('should enqueue items to queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.size).toBe(3);
        expect(queue.first.value).toBe(1);
        expect(queue.last.value).toBe(3);
    });
    it('should dequeue items from queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue().value).toBe(1);
        expect(queue.dequeue().value).toBe(2);
        expect(queue.size).toBe(0);
    });
})
