"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeItem = makeItem;
exports.removeItem = removeItem;
exports.toggleStatus = toggleStatus;
const classToDOList_1 = require("./classToDOList");
const todo = new classToDOList_1.todo_List;
function makeItem(title, status) {
    if (title == "") {
        throw new Error("title cannot be empty");
    }
    const item = {
        id: classToDOList_1.json.length + 1,
        title: title,
        status: status
    };
    todo.add(item);
}
// Function to Remove Task from task list
function removeItem(id) {
    todo.remove(id);
}
// Function to toggle status
function toggleStatus(id) {
    if (id === 0) {
        throw new Error("ID can never be 0");
    }
    todo.toggle(id);
}
//# sourceMappingURL=functions.js.map