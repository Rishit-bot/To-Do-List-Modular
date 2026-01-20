import { status, todo_Items  } from "./command"
import { todo_List, json } from "./classToDOList"


const todo = new todo_List
function makeItem(title: string, status: status) {
    if (title == "") {
        throw new Error("title cannot be empty")
    }
    const item: todo_Items = {
        id: json.length + 1,
        title: title,
        status: status
    }
    todo.add(item)
}


// Function to Remove Task from task list
function removeItem(id: number) {
    todo.remove(id)
}

// Function to toggle status
function toggleStatus(id: number) {
    if (id === 0) {
        throw new Error("ID can never be 0")
    }
    todo.toggle(id)
}
export { makeItem, removeItem, toggleStatus}