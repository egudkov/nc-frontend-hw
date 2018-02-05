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
}