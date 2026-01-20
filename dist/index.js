"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const command_1 = require("./command");
const classToDOList_1 = require("./classToDOList");
const functions_1 = require("./functions");
const fileHandler_1 = require("./fileHandler");
if (command_1.command == "help") {
    console.log("1.)Add \"status\" \"title\" ");
    console.log("2.)Remove ID");
    console.log("3.)Toggle ID");
} // REMOVE 
else if (command_1.command == "remove") {
    let ID = Number(command_1.args[1]);
    (0, functions_1.removeItem)(ID);
} // TOGGLE
else if (command_1.command == "toggle") {
    let ID = Number(command_1.args[1]);
    (0, functions_1.toggleStatus)(ID);
} // ADD 
else if (command_1.command == "add") {
    if (command_1.args[1] == undefined) {
        throw new Error("Undefined");
    }
    let title = '';
    for (const string of command_1.args.slice(2)) {
        title += ` ${string}`;
    }
    let statusOF = command_1.args[1];
    if (statusOF == "pending") {
        (0, functions_1.makeItem)(title, command_1.status.Pending);
    }
    else if (statusOF == "completed") {
        (0, functions_1.makeItem)(title, command_1.status.Completed);
    }
}
console.log(classToDOList_1.json);
const jsonDB = JSON.stringify(classToDOList_1.json);
(0, fileHandler_1.create)("data.json", jsonDB);
(0, fileHandler_1.create)('todo.txt', '');
for (const obj of classToDOList_1.json) {
    fs.appendFileSync('todo.txt', `${obj.id} - ${obj.title} - ${obj.status}; \n`, 'utf-8');
}
//# sourceMappingURL=index.js.map