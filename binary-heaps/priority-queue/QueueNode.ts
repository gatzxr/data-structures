
export default class QueueNode {
    value: any;
    priority: number;
    constructor(value: any, priority: number) {
        this.value = value;
        this.priority = priority;
    }
}