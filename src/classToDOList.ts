import { status, todo_Items } from './command'; 
import * as fs from 'fs'
import { create, json } from './fileHandler';
// const json = JSON.parse(fs.readFileSync("data.json", "utf-8"))


class todo_List {
    list: todo_Items[] = [];
    constructor() {


    }
    add(item: todo_Items) {
        fs.writeFileSync('todo.txt', '', 'utf-8')

        json.push(item)
        for (const obj of json) {
            fs.appendFileSync('todo.txt', `${obj.id} - ${obj.title} - ${obj.status}; \n`, 'utf-8')


        }
    }
    remove(id: number) {
        const idx = json.findIndex((itm: any) => itm.id === id);

        if (idx === -1) {
            throw new Error("wrong ID")
        }
        fs.writeFileSync('todo.txt', '', 'utf-8')

        json.splice(idx, 1)
        for (const index in json) {
            json[index]!.id = Number(index) + 1
        }
        for (const obj of json) {
            fs.appendFileSync('todo.txt', `${obj.id} - ${obj.title} - ${obj.status}; \n`, 'utf-8')

        }
    }

    toggle(id: number) {
        const idx = json.findIndex((itm: any) => itm.id == id);
        // console.log(json[idx])
        if (idx === -1) {
            throw new Error("wrong ID")
        }
        fs.writeFileSync('todo.txt', '', 'utf-8')
        json[idx]!.status = json[idx]?.status === status.Pending ? status.Completed : status.Pending
        // console.log(json[idx])

        for (const obj of json) {
            fs.appendFileSync('todo.txt', `${obj.id} - ${obj.title} - ${obj.status}; \n`, 'utf-8')

        }
    }
}
export { todo_List, json}