export default class HashMap {
    keyMap: any[];
    constructor(size=53) {
        this.keyMap = new Array(size)
    }

    _hash(key: string): number {
        let acc = 0;
        const PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0);
            acc = (acc * PRIME + value) % this.keyMap.length;
        }
        return acc;
    }

    set(key: string, value: any): void {
        const index= this._hash(key);
        !this.keyMap[index] && (this.keyMap[index] = []);
        this.keyMap[index].push([key, value]);
    }

    get(key: string): any {
        const index = this._hash(key);
        return this.keyMap[index] ? this.keyMap[index].find(item => item[0] === key)[1] : undefined;
    }

    values(): any[] {
        const valuesArr = [];
        this.keyMap.forEach(item => {
            item.forEach(pair => {
                valuesArr.indexOf(pair[1]) < 0 && valuesArr.push(pair[1]);
            })
        });
        return valuesArr;
    }

    keys(): string[] {
        const keysArr = [];
        this.keyMap.forEach(item => {
            item.forEach(pair => {
                keysArr.indexOf(pair[0]) < 0 && keysArr.push(pair[0]);
            })
        });
        return keysArr;
    }
}