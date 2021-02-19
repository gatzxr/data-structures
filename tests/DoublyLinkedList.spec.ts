import DoublyLinkedList from '../doubly-linked-list/DoublyLinkedList';

describe("Doubly linked list", () => {
    let list;
    beforeEach(() => {
        list = new DoublyLinkedList();
        list.push(1);
        list.push(2);
        list.push(3);
    })
    it("should have 3 items", () => {
        expect(list.length).toBe(3);
        expect(list.head.value).toBe(1);
    });
    it("should pop all list items", () => {
        expect(list.pop().value).toBe(3);
        expect(list.tail.value).toBe(2);
        expect(list.pop().value).toBe(2);
        expect(list.tail.value).toBe(1);
        expect(list.pop().value).toBe(1);
        expect(list.tail).toBe(null);
    });
    it("should shift all list items", () => {
        expect(list.shift().value).toBe(1);
        expect(list.shift().value).toBe(2);
        expect(list.shift().value).toBe(3);
        expect(list.head).toBe(null);
    });
    it('should unshift 1 item', () => {
        list.unshift(4);
        expect(list.head.value).toBe(4);
        expect(list.length).toBe(4);
    })
    it('should get an item from list', () => {
        expect(list.get(2).value).toBe(3);
        expect(list.get(-1)).toBeUndefined();
        expect(list.get(100)).toBeUndefined();
    });
    it('should change an items value', () => {
        expect(list.set(2, 10)).toBeTrue();
        expect(list.set(-1, 10)).toBeFalse();
        expect(list.set(100, 10)).toBeFalse();
        expect(list.get(2).value).toBe(10);
    });

    it('should insert a new item to list', () => {
        expect(list.insert(-1, 10)).toBeFalse();
        expect(list.insert(10, 10)).toBeFalse();
        expect(list.insert(2, 10)).toBeTrue();
        expect(list.get(2).value).toBe(10);
    });
    it('should remove an item from list', () => {
        expect(list.remove(-1)).toBeUndefined();
        expect(list.remove(10)).toBeUndefined();
        expect(list.remove(1).value).toBe(2);
        expect(list.remove(1).value).toBe(3);
        expect(list.remove(0).value).toBe(1);
        expect(list.length).toBe(0);
    });
});

