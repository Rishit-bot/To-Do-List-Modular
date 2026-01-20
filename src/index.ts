    import * as fs from 'fs'
    import { args, command, status } from './command';
    import { json } from './classToDOList';
    import { makeItem, toggleStatus, removeItem } from './functions';
    import { create } from './fileHandler';


    if (command == "help") {
        console.log("1.)Add \"status\" \"title\" ");
        console.log("2.)Remove ID");
        console.log("3.)Toggle ID");

    } // REMOVE 
    else if (command == "remove") {
        let ID: number = Number(args[1])
        removeItem(ID)
    } // TOGGLE
    else if (command == "toggle") {
        let ID: number = Number(args[1])
        toggleStatus(ID)
    } // ADD 
    else if (command == "add") {
        if (args[1] == undefined) {
            throw new Error("Undefined")

        }
        let title: string = ''
        for (const string of args.slice(2)) {
            title += ` ${string}`
        }

        let statusOF: string = args[1]
        if (statusOF == "pending") {

            makeItem(title, status.Pending)
        } else if (statusOF == "completed") {
            makeItem(title, status.Completed)

        }
    }

    const jsonDB = JSON.stringify(json)
    create("data.json", jsonDB)
    create('todo.txt', '')
    for (const obj of json) {
        fs.appendFileSync('todo.txt', `${obj.id} - ${obj.title} - ${obj.status}; \n`, 'utf-8')
    }
