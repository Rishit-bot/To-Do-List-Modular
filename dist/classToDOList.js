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
exports.json = exports.todo_List = void 0;
const command_1 = require("./command");
const fs = __importStar(require("fs"));
const fileHandler_1 = require("./fileHandler");
Object.defineProperty(exports, "json", { enumerable: true, get: function () { return fileHandler_1.json; } });
// const json = JSON.parse(fs.readFileSync("data.json", "utf-8"))
class todo_List {
    list = [];
    constructor() {
    }
    add(item) {
        fs.writeFileSync('todo.txt', '', 'utf-8');
        fileHandler_1.json.push(item);
        for (const obj of fileHandler_1.json) {
            fs.appendFileSync('todo.txt', `${obj.id} - ${obj.title} - ${obj.status}; \n`, 'utf-8');
        }
    }
    remove(id) {
        const idx = fileHandler_1.json.findIndex((itm) => itm.id === id);
        if (idx === -1) {
            throw new Error("wrong ID");
        }
        fs.writeFileSync('todo.txt', '', 'utf-8');
        fileHandler_1.json.splice(idx, 1);
        for (const index in fileHandler_1.json) {
            fileHandler_1.json[index].id = Number(index) + 1;
        }
        for (const obj of fileHandler_1.json) {
            fs.appendFileSync('todo.txt', `${obj.id} - ${obj.title} - ${obj.status}; \n`, 'utf-8');
        }
    }
    toggle(id) {
        const idx = fileHandler_1.json.findIndex((itm) => itm.id == id);
        // console.log(json[idx])
        if (idx === -1) {
            throw new Error("wrong ID");
        }
        fs.writeFileSync('todo.txt', '', 'utf-8');
        fileHandler_1.json[idx].status = fileHandler_1.json[idx]?.status === command_1.status.Pending ? command_1.status.Completed : command_1.status.Pending;
        // console.log(json[idx])
        for (const obj of fileHandler_1.json) {
            fs.appendFileSync('todo.txt', `${obj.id} - ${obj.title} - ${obj.status}; \n`, 'utf-8');
        }
    }
}
exports.todo_List = todo_List;
//# sourceMappingURL=classToDOList.js.map