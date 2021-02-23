import QueueNode from './QueueNode';

export default class Queue {
    first: QueueNode;
    last: QueueNode;
    size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value: any): number {
        const newNode = new QueueNode(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(): QueueNode {
        if (!this.first) return null;
        const firstNode = this.first;
        if (this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return firstNode;
    }
}