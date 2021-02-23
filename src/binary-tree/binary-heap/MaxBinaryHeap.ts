
export default class MaxBinaryHeap {
    values: number[];
    constructor() {
        this.values = [];
    }

    bubbleUp(): void {
        let index = this.values.length - 1;
        let parentIdx = Math.floor((index - 1) / 2);
        while (index > 0 && this.values[parentIdx] < this.values[index]) {
            [this.values[parentIdx], this.values[index]] = [this.values[index], this.values[parentIdx]]
            index = parentIdx;
            parentIdx = Math.floor((index - 1) / 2);
        }
    };

    insert(value: number): MaxBinaryHeap {
        this.values.push(value);
        this.bubbleUp();
        return this;
    }


    sinkDown(idx = 0): void {
        const length = this.values.length;
        let swap = null;
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChildValue = leftChildIdx < length && this.values[leftChildIdx];
        let rightChildValue = rightChildIdx < length && this.values[rightChildIdx];

        if (leftChildValue && leftChildValue > this.values[idx]) swap = leftChildIdx;
        if (rightChildValue
            && ((!swap && rightChildValue > this.values[idx]))
                || (swap && rightChildValue > leftChildValue)
        ) {
            swap = rightChildIdx;
        }

        if (!swap) return;
        [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]];
        this.sinkDown(swap);
    }

    extractMax(): number {
        if (!this.values.length) return undefined;
        const lastIdx = this.values.length - 1;
        [this.values[0], this.values[lastIdx]] = [this.values[lastIdx], this.values[0]]
        const removedItem = this.values.pop();
        this.sinkDown();
        return removedItem;
    }
}

