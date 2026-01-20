"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = exports.command = exports.args = void 0;
const args = process.argv.slice(2);
exports.args = args;
if (args.length === 0) {
    console.log("No arguments provided.");
    console.log("type help for list of commands)");
    throw new Error("No Argument Provided");
}
else {
    console.log("Arguments passed:");
    args.forEach((arg, index) => {
        console.log(`Arg ${index + 1}: ${arg}`);
    });
}
let command = args[0]?.toLowerCase();
exports.command = command;
var status;
(function (status) {
    status["Pending"] = "Pending";
    status["Completed"] = "Completed";
})(status || (exports.status = status = {}));
//# sourceMappingURL=command.js.map