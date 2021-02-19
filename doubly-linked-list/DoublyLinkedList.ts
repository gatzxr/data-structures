import ListNode from './ListNode';

export default class DoublyLinkedList {
    length: number;
    head: ListNode;
    tail: ListNode;
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value: any): DoublyLinkedList {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(): ListNode {
        if (!this.head) return undefined;
        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift(): ListNode {
        if (!this.head) return undefined;
        const shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;
    }

    unshift(value: any): DoublyLinkedList {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index: number): ListNode {
        if (index < 0 || index >= this.length) return undefined;
        if (!this.head) return undefined;
        const mid = this.length / 2;
        let current = index <= mid ? this.head : this.tail;
        let direction = index <= mid ? 'next' : 'prev';
        let steps = index <= mid ? index : this.length - 1 - index;
        while (steps > 0) {
            current = current[direction];
            steps--;
        }
        return current;
    }

    set(index: number, value: any): boolean {
        const foundNode = this.get(index);
        if (!foundNode) return false;
        return !!(foundNode.value = value);
    }

    insert(index: number, value: any): boolean {
        if (index < 0 || index > this.length) return false;
        if (index === 0 ) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        const beforeNode = this.get(index - 1);
        const nextNode = beforeNode.next;
        const newNode = new ListNode(value);

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++
        return true;
    }

    remove (index: number): ListNode {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const foundNode = this.get(index);

        foundNode.prev.next = foundNode.next;
        foundNode.next.prev = foundNode.prev;

        foundNode.prev = null;
        foundNode.next = null;
        this.length--;
        return foundNode;
    }
}
