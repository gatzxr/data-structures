export default class ListNode {
    next: ListNode;
    prev: ListNode;
    value: any
    constructor(value: any) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}