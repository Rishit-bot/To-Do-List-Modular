declare const args: string[];
declare let command: string | undefined;
declare enum status {
    Pending = "Pending",
    Completed = "Completed"
}
export interface todo_Items {
    id: number;
    title: string;
    status: status;
}
export { args, command, status };
//# sourceMappingURL=command.d.ts.map