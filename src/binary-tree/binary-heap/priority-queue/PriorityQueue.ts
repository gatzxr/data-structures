import QueueNode from './QueueNode';

export default class PriorityQueue {
    values: QueueNode[];
    constructor() {
        this.values = [];
    }

    bubbleUp(): void {
        let index = this.values.length - 1;
        let parentIdx = Math.floor((index - 1) / 2);
        while (index > 0 && this.values[parentIdx].priority >= this.values[index].priority) {
            [this.values[parentIdx], this.values[index]] = [this.values[index], this.values[parentIdx]]
            index = parentIdx;
            parentIdx = Math.floor((index - 1) / 2);
        }
    };

    enqueue(value: any, priority: number): PriorityQueue {
        const newNode = new QueueNode(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this;
    }

    sinkDown(idx = 0): void {
        const length = this.values.length;
        let swap = null;
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChildPriority = leftChildIdx < length && this.values[leftChildIdx].priority;
        let rightChildPriority = rightChildIdx < length && this.values[rightChildIdx].priority;

        if (leftChildPriority && leftChildPriority < this.values[idx].priority) swap = leftChildIdx;
        if (rightChildPriority
            && ((!swap && rightChildPriority < this.values[idx].priority)
            || (swap && rightChildPriority < leftChildPriority))) {
            swap = rightChildIdx;
        }

        if (!swap || !this.values[swap]) return;
        [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]];
        this.sinkDown(swap);
    }

    dequeue(): any {
        if (!this.values.length) return undefined;
        const lastIdx = this.values.length - 1;
        [this.values[0], this.values[lastIdx]] = [this.values[lastIdx], this.values[0]]
        const removedItem = this.values.pop();
        this.sinkDown();
        return removedItem;
    }
}