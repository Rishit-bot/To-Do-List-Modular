import XLSX from 'xlsx'
import * as fs from 'fs'
import {status, todo_Items} from './command'

const json = JSON.parse(fs.readFileSync("data.json", "utf-8"))

let xlArray: string[][] = [['Serial Number', 'Task Name', 'Status']]
for (const item in json) {
    xlArray.push([`${json[item].id}`, `${json[item].title}`, `${json[item].status}`])


}
    console.log(xlArray)

var worksheet = XLSX.utils.aoa_to_sheet(xlArray);
var workbook = XLSX.utils.book_new();
let wscols = [
    {wch : 20},
    {wch : 20},
    {wch : 20}

]
let wsrows = [
    {hpt : 40},

]
worksheet['!cols'] = wscols
worksheet['!rows'] = wsrows

XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
XLSX.writeFile(workbook, "Report.xlsb");


