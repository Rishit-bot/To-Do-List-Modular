const args: string[] = process.argv.slice(2);


if (args.length === 0) {
    console.log("No arguments provided.");
    console.log("type help for list of commands)");
    throw new Error("No Argument Provided")
} else {
    console.log("Arguments passed:");
    args.forEach((arg, index) => {
        console.log(`Arg ${index + 1}: ${arg}`);
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