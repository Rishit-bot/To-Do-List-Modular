    import * as fs from 'fs'
    import { args, command, status } from './command';
    import { json } from './classToDOList';
    import { makeItem, toggleStatus, removeItem } from './functions';
    import { create } from './fileHandler';
    import chalk from "chalk"
    import { createAndPopulateExcel } from './excelHandler';    

    if (command == "help") {
        console.log(chalk.red("1.)Add", chalk.blue("\"status\" \"title\" ")));
        console.log(chalk.red("2.)Remove", chalk.blue("ID")));
        console.log(chalk.red("3.)Toggle", chalk.blue("ID")));

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
    } // View List
    else if (command == "view") {
        console.log(chalk.yellow("Your To-Do List:"))
        for (const obj of json) {
            console.log(chalk.green(`${obj.id}`) + chalk.red(` - ${obj.title}`) + chalk.cyan(` - ${obj.status}`))
        }
    } else {
        console.log(chalk.red("Invalid Command"))
        console.log(chalk.blue("type help for list of commands"))
    }

    const jsonDB = JSON.stringify(json)
    create("data.json", jsonDB)
    create('todo.txt', '')
    createAndPopulateExcel()
    for (const obj of json) {
        fs.appendFileSync('todo.txt', `${obj.id} - ${obj.title} - ${obj.status}; \n`, 'utf-8')
    }
