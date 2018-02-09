"use strict";

class LinkedList {
    constructor() {
        this.head = {};
        this.head.value = null;
        this.length = 0;

        let iter = this.head;
        iter.next = null;

        for (let i = 0; i < arguments.length; i++) {
            iter.next = {
                value: arguments[i],
                next: null
            };
            iter = iter.next;
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
        let iter = this.head;

        for (let i = 0; i < index + 1; i++) {
            iter = iter.next;
        }
        return iter.value;
    }

    set(index, value) {
        let iter = this.head;

        for (let i = 0; i < index + 1; i++) {
            iter = iter.next;
        }
        iter.value = value;
    }

    push() {
        let iter = this.head;

        for (let i = 0; i < this.length; i++) {
            iter = iter.next;
        }

        for (let i = 0; i < arguments.length; i++) {
            iter.next = {
                value: arguments[i],
                next: null
            };
            iter = iter.next;
            this.length++;
        }
    }

    pop() {
        let iter = this.head;


        for (let i = 0; i < this.length - 1; i++) {
            iter = iter.next;
        }

        let tmpValue = iter.next.value;
        iter.next = null;
        this.length--;

        return tmpValue;
    }

    unshift() {
        let iter = this.head;
        let tmpTail = this.head.next;

        for (let i = 0; i < arguments.length; i++) {
            iter.next = {
                value: arguments[i],
                next: null
            };
            iter = iter.next;
            this.length++;
        }

        iter.next = tmpTail;
    }

    shift() {
        this.head.next = this.head.next.next;
        this.length--;
    }
}

module.exports = LinkedList;