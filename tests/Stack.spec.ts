import Stack from '../stack/Stack';

describe('Stack', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    })
    it ('should check stack is empty', () => {
        expect(stack.size).toBe(0);
        expect(stack.first).toBeNull();
        expect(stack.last).toBeNull();
    });
    it('should push items to stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.size).toBe(3);
        expect(stack.first.value).toBe(3);
        expect(stack.last.value).toBe(1);
    });
    it('should pop items from stack', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.pop().value).toBe(2);
        expect(stack.pop().value).toBe(1);
        expect(stack.size).toBe(0);
    });
});