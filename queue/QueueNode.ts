export default class QueueNode {
    value: any;
    next: QueueNode;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}