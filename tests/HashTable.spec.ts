import HashTable from '../src/hash-table/HashTable';
describe('Hash table', () => {
    let table;
    beforeAll(() => {
        table = new HashTable(4);
        table.set('a', 1);
        table.set('b', 2);
        table.set('c', 3);
        table.set('d', 4);
        table.set('e', 5);
        table.set('f', 6);
        table.set('h', 7);
        table.set('i', 8);
    });

    it('should have inserted elements in table', () => {
        expect(table.keyMap[0][0][0]).toBe('d');
        expect(table.keyMap[0][1][0]).toBe('h');
        expect(table.keyMap[1][0][0]).toBe('a');
        expect(table.keyMap[1][1][0]).toBe('e');
        expect(table.keyMap[1][2][0]).toBe('i');
        expect(table.keyMap[2][0][0]).toBe('b');
        expect(table.keyMap[2][1][0]).toBe('f');
        expect(table.keyMap[3][0][0]).toBe('c');
    });
    it('should get table values', () => {
        expect(table.values()).toEqual([4, 7, 1, 5, 8, 2, 6, 3]);
    });
    it('should get table values', () => {
        expect(table.keys()).toEqual(['d', 'h', 'a', 'e', 'i', 'b', 'f', 'c']);
    });
    it('should get elements by keys', () => {
        expect(table.get('d')).toBe(4);
        expect(table.get('f')).toBe(6);
        expect(table.get('i')).toBe(8);
    });

})
