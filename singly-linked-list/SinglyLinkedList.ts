import ListNode from './ListNode';

export default class SinglyLinkedList {
    length: number;
    head: ListNode;
    tail: ListNode;

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value: any) : SinglyLinkedList {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }

    pop() : ListNode {
        if (!this.head) return undefined;
        let temp;
        if (this.length === 1) {
            temp = this.head;
            this.head = null;
            this.tail = null;
        } else {
            let newTail = this.head;
            while (newTail.next && newTail.next.next) {
                newTail = newTail.next;
            }
            temp = newTail.next;
            newTail.next = null;
            this.tail = newTail;
        }
        this.length--;
        return temp;
    }

    shift() : ListNode {
        if (!this.head) return undefined;
        const currentNode = this.head;
        this.head = currentNode.next;
        this.length--;
        if (!this.length) this.tail = null;
        return currentNode;
    }

    unshift(value: any) : SinglyLinkedList {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.tail = newNode;
        } else {
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index: number) : ListNode {
        if (index < 0 || index >= this.length) return undefined;
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    }

    set(index: number, value: any) : boolean {
        const targetNode = this.get(index);
        if (!targetNode) return false;
        targetNode.value = value
        return true;
    }

    insert(index: number, value: any) : boolean {
        if (index < -1 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length)  return !!this.push(value);

        const insertAfterNode = this.get(index - 1);
        if (!insertAfterNode) return false
        const newNode = new ListNode(value);
        newNode.next = insertAfterNode.next;
        insertAfterNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index: number) : ListNode {
        if (index < -1 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        const previousNode = this.get(index - 1);
        if (!previousNode) return undefined;
        const toBeDeletedNode = previousNode.next;
        previousNode.next = toBeDeletedNode.next;
        this.length--;
        return toBeDeletedNode;
    }

    reverse() : SinglyLinkedList {
        let tempNode : ListNode = this.head;
        let previousNode : ListNode = null;
        let nextNode : ListNode = null;
        this.head = this.tail;
        this.tail = tempNode;
        for (let i = 0; i < this.length; i++) {
            nextNode = tempNode.next;
            tempNode.next = previousNode;
            previousNode = tempNode;
            tempNode = nextNode;
        }
        return this;
    }
}
