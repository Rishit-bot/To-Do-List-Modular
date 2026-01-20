import { todo_Items } from './command';
import { json } from './fileHandler';
declare class todo_List {
    list: todo_Items[];
    constructor();
    add(item: todo_Items): void;
    remove(id: number): void;
    toggle(id: number): void;
}
export { todo_List, json };
//# sourceMappingURL=classToDOList.d.ts.map