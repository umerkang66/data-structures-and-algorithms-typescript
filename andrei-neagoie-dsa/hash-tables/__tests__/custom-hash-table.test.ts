import { CustomHashTable } from '../custom-hash-table';

let hashTable: CustomHashTable | null = null;

beforeEach(() => {
  hashTable = new CustomHashTable(50);
});

test('has correct size of memory', () => {
  if (hashTable) expect(hashTable.data.length).toBe(50);
});

test('can correctly set items', () => {
  if (hashTable) {
    hashTable.set('umer', [1, 2, 3]);
    hashTable.set('umer', 'umer');
    hashTable.set('test', 'jest');

    const address = hashTable._hash('umer');
    expect(hashTable.data[address]).toEqual([
      ['umer', [1, 2, 3]],
      ['umer', 'umer'],
    ]);

    const address2 = hashTable._hash('test');
    expect(hashTable.data[address2]).toEqual([['test', 'jest']]);
  }
});

test('can get items through their key', () => {
  if (hashTable) {
    hashTable.set('umer', [1, 2, 3]);
    expect(hashTable.get('umer')).toEqual([1, 2, 3]);
  }
});

test('can return all the keys correctly', () => {
  if (hashTable) {
    hashTable.set('test', [1, 2, 3]);
    hashTable.set('hash', [1, 2, 3]);
    hashTable.set('nums', [1, 2, 3]);
    hashTable.set('arrays', [1, 2, 3]);

    expect(hashTable.keys()).toEqual(['test', 'nums', 'hash', 'arrays']);
  }
});

test('can return all the values correctly', () => {
  if (hashTable) {
    hashTable.set('test', [1]);
    hashTable.set('hash', [1, 2]);
    hashTable.set('nums', [1, 2, 3]);
    hashTable.set('arrays', [1, 2, 3, 4]);

    expect(hashTable.values()).toEqual([[1], [1, 2, 3], [1, 2], [1, 2, 3, 4]]);
  }
});
