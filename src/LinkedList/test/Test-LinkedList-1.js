"use strict";
exports.__esModule = true;
var LinkedList_1 = require("../LinkedList");
var assert_1 = require("assert");
var colors = require("colors");
var list = new LinkedList_1["default"]();
list.pushBack(1);
assert_1.strict.deepEqual([1], list.toArray());
assert_1.strict.equal(1, list.getSize());
list.pushFront(0);
assert_1.strict.deepEqual([0, 1], list.toArray());
assert_1.strict.equal(2, list.getSize());
list.removeHead();
assert_1.strict.deepEqual([1], list.toArray());
assert_1.strict.equal(1, list.getSize());
list.pushBack(2);
assert_1.strict.deepEqual([1, 2], list.toArray());
assert_1.strict.equal(2, list.getSize());
list.removeHead();
assert_1.strict.deepEqual([2], list.toArray());
assert_1.strict.equal(1, list.getSize());
console.log(colors.green('Passed!'));
//# sourceMappingURL=Test-LinkedList-1.js.map