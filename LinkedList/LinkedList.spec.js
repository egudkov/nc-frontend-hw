const LinkedList = require('./LinkedList');

let list;
let emptyList;

beforeEach(() => {
    setUpList();
});

function setUpList() {
    list = new LinkedList(1, 23, 44, 'dsfs', {});
    emptyList = new LinkedList();
}

/* --- actual tests --- */

test('List length should be correct', () => {
    expect(list.length).toBe(5);
});

test('List get() returns correct element', () => {
    expect(list.get(3)).toBe('dsfs');
});

test('List get() throws error if index is out of range', () => {
    expect(() => {
        list.get(5)
    }).toThrowError("Index is out of list's range. Exiting...");
});

test('List set() sets correct element', () => {
    list.set(1, 'aaaaaaa');
    expect(list.get(1)).toBe('aaaaaaa');
});

test('List push() adds element to the list tail', () => {
    list.push('dsdf', 12);
    expect(list.get(5)).toBe('dsdf');
});

test('List unshift() adds one or more elements at the beginning if the list', () => {
    list.unshift('sdd', 222);
    expect(list.get(0)).toBe('sdd');
    expect(list.get(1)).toBe(222);
});

test('List pop() removes one element from the end of the list and returns it', () => {
    list.pop();
    const lastElement = list.pop();
    expect(list.length).toBe(3);
    expect(lastElement).toBe('dsfs');
});

test('List shift() removes one element from the beginning of the list and returns it', () => {
    const firstElement = list.shift();
    expect(list.length).toBe(4);
    expect(firstElement).toBe(1);
});

test('List contains() checks if an element exist in the list', () => {
    expect(list.contains(1)).toBe(true);
    expect(list.contains('asdfasdf')).toBe(false);
});

test('List toString() returns correct string representation of the list', () => {
    expect(list.toString()).toBe('[1, 23, 44, "dsfs", {}]');
});

test('List reverse() returns correct string representation of the list', () => {
    expect(list.reverse().toString()).toBe('[{}, "dsfs", 44, 23, 1]');
});

/* --- emptyList tests --- */

test('List length should be correct', () => {
    expect(emptyList.length).toBe(0);
});

// test('List get() returns correct element', () => {
//     expect(list.get(3)).toBe('dsfs');
// });
//
// test('List set() sets correct element', () => {
//     list.set(1, 'aaaaaaa');
//     expect(list.get(1)).toBe('aaaaaaa');
// });

test('List push() adds element to the list tail', () => {
    list.push('dsdf', 12);
    expect(emptyList.get(0)).toBe('dsdf');
    expect(emptyList.get(1)).toBe(12);
});

test('List unshift() adds one or more elements at the beginning if the list', () => {
    list.unshift('sdd', 222);
    expect(emptyList.get(0)).toBe('sdd');
    expect(emptyList.get(1)).toBe(222);
});

// test('List pop() removes one element from the end of the list and returns it', () => {
//     list.pop();
//     const lastElement = list.pop();
//     expect(list.length).toBe(3);
//     expect(lastElement).toBe('dsfs');
// });

// test('List shift() removes one element from the beginning of the list and returns it', () => {
//     const firstElement = list.shift();
//     expect(list.length).toBe(4);
//     expect(firstElement).toBe(1);
// });

test('List contains() checks if an element exist in the list', () => {
    // expect(list.contains(1)).toBe(true);
    expect(emptyList.contains('asdfasdf')).toBe(false);
});

test('List toString() returns correct string representation of the list', () => {
    expect(emptyList.toString()).toBe('[]');
});

test('List reverse() returns correct string representation of the list', () => {
    expect(emptyList.reverse().toString()).toBe('[]');
});