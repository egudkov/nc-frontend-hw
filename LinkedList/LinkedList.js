"use strict";

function LinkedList (inputArray) {
    this.head = {};
    this.head.value = null;

    let currentElement = this.head;
    currentElement['next'] = {};

    if (inputArray) {
        for (let i = 0; i < inputArray.length; i++) {
            currentElement.next = {
                value: inputArray[i],
                next: {}
            };
            currentElement = currentElement.next;
        }
    }
}

const inputArray = [1, 2, 3, "Hello World"];
const linkedList = new LinkedList(inputArray);
console.log(linkedList);