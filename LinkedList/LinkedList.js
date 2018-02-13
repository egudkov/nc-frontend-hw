"use strict";

class LinkedList {
    constructor() {
        this.head = {};
        this.head.value = null;
        this.head.next = null;
        this.length = 0;

        let elem = this.head;

        for (let i = 0; i < arguments.length; i++) {
            elem.next = {
                value: arguments[i],
                next: null
            };
            elem = elem.next;
        }

        this.length = arguments.length;
    }

    get length() {
        return this._length;
    }

    set length(value) {
        this._length = value;
    }

    get(index) {
        let elem = this.head;

        for (let i = 0; i < index + 1; i++) {
            elem = elem.next;
        }
        return elem.value;
    }

    set(index, value) {
        let elem = this.head;

        for (let i = 0; i < index + 1; i++) {
            elem = elem.next;
        }
        elem.value = value;
    }

    // Adds element to the list tail
    push() {
        let elem = this.head;

        for (let i = 0; i < this.length; i++) {
            elem = elem.next;
        }

        for (let i = 0; i < arguments.length; i++) {
            elem.next = {
                value: arguments[i],
                next: null
            };
            elem = elem.next;
            this.length++;
        }
    }

    // Removes one element from the end of the list and returns it
    pop() {
        let elem = this.head;

        for (let i = 0; i < this.length - 1; i++) {
            elem = elem.next;
        }

        let tmpValue = elem.next.value;
        elem.next = null;
        this.length--;

        return tmpValue;
    }

    // Adds one or more elements at the beginning if the list
    unshift() {
        let elem = this.head;
        let tmpTail = this.head.next;

        for (let i = 0; i < arguments.length; i++) {
            elem.next = {
                value: arguments[i],
                next: null
            };
            elem = elem.next;
            this.length++;
        }

        elem.next = tmpTail;
    }

    // Removes one element from the beginning of the list and returns it
    shift() {
        const firstElem = this.head.next;
        this.head.next = this.head.next.next;
        this.length--;

        return firstElem.value;
    }

    // Checks if an element exists in the list
    contains(value) {
        let elem = this.head;
        let isFound = false;

        for (let i = 0; i < this.length; i++) {
            elem = elem.next;
            if (elem.value === value) {
                isFound = true;
                break;
            }
        }

        return isFound;
    }

    toString() {
        let elem = this.head;
        let output = '[';

        for (let i = 0; i < this.length; i++) {
            elem = elem.next;
            switch (typeof elem.value) {
                case 'object':
                    // TODO: what if object is not empty?
                    output += '{}';
                    break;
                case 'string':
                    output += `"${elem.value}"`;
                    break;
                default:
                    output += elem.value;
            }

            if (i !== this.length - 1) {
                output += ', ';
            }
        }
        output += ']';

        return output;
    }
}

module.exports = LinkedList;