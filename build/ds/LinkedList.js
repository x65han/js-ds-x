"use strict";
exports.__esModule = true;
var LinkedListNode = (function () {
    function LinkedListNode(value) {
        if (value === void 0) { value = 0; }
        this.prev = null;
        this.next = null;
        this.value = value;
    }
    return LinkedListNode;
}());
var LinkedList = (function () {
    function LinkedList(inputArray) {
        this.size = 0;
        this.head = null;
        this.tail = null;
        if (inputArray) {
            for (var _i = 0, inputArray_1 = inputArray; _i < inputArray_1.length; _i++) {
                var value = inputArray_1[_i];
                this.pushBack(value);
            }
        }
    }
    LinkedList.prototype.toArray = function () {
        var res = [];
        var temp = this.head;
        while (temp) {
            res.push(temp.value);
            temp = temp.next;
        }
        return res;
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.pushBack = function (value) {
        if (this.size === 0) {
            this.head = new LinkedListNode(value);
            this.tail = this.head;
        }
        else {
            var oldTail = this.tail;
            this.tail = new LinkedListNode(value);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
        this.size++;
    };
    LinkedList.prototype.pushFront = function (value) {
        if (this.size === 0) {
            this.pushBack(value);
        }
        else {
            this.size++;
            var oldHead = this.head;
            this.head = new LinkedListNode(value);
            this.head.next = oldHead;
            oldHead.prev = this.head;
        }
    };
    LinkedList.prototype.removeHead = function () {
        if (this.size === 0) {
            throw '[Failed to remove head] LinkedList is empty';
        }
        this.removeLinkedListNode(this.head);
    };
    LinkedList.prototype.removeTail = function () {
        if (this.size === 0) {
            throw '[Failed to remove tail] LinkedList is empty';
        }
        this.removeLinkedListNode(this.tail);
    };
    LinkedList.prototype.remove = function (value) {
        var temp = this.head;
        while (temp) {
            if (temp.value === value) {
                this.removeLinkedListNode(temp);
                return true;
            }
            temp = temp.next;
        }
        return false;
    };
    LinkedList.prototype.removeLinkedListNode = function (node) {
        if (node == this.head) {
            var oldHead = this.head;
            var newHead = this.head.next;
            if (newHead) {
                newHead.prev = null;
            }
            else {
                this.tail = this.head = null;
            }
            this.head = newHead;
            this.cutLinkedListNodeConnection(oldHead);
        }
        else if (node == this.tail) {
            var oldTail = this.tail;
            var newTail = this.tail.prev;
            if (newTail) {
                newTail.next = null;
            }
            else {
                this.tail = this.head = null;
            }
            this.cutLinkedListNodeConnection(oldTail);
        }
        else {
            var prev = node.prev;
            var next = node.next;
            prev.next = next;
            next.prev = prev;
            this.cutLinkedListNodeConnection(node);
        }
        this.size--;
    };
    LinkedList.prototype.cutLinkedListNodeConnection = function (node) {
        node.prev = node.next = null;
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
//# sourceMappingURL=LinkedList.js.map