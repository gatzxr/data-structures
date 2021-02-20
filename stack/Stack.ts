import StackNode from './StackNode';

export default class Stack {
    first: StackNode;
    last: StackNode;
    size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value: any): number {
        const newNode = new StackNode(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop(): any {
        if (!this.first) return null;
        const temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}