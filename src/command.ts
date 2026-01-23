import chalk from "chalk"

const args: string[] = process.argv.slice(2);


if (args.length === 0) {
    console.log(chalk.red("No arguments provided."));
    console.log(chalk.blue("type help for list of commands"));
} else {
    console.log(chalk.green("Arguments passed:"));
    args.forEach((arg, index) => {
        console.log(chalk.green(`Arg ${index + 1}: ${arg}`));
    });
}
let command = args[0]?.toLowerCase()


enum status {
    Pending = "Pending",
    Completed = "Completed",
}

export interface todo_Items {
    id: number,
    title: string,
    status: status
}

export { args, command, status }