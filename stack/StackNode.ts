
export default class StackNode {
    value: any;
    next: StackNode;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}