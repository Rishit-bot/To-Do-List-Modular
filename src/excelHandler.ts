const ExcelJS = require('exceljs');
import * as fs from 'fs'


const json = JSON.parse(fs.readFileSync("data.json", "utf-8"))

let xlArray: string[][] = []
for (const item in json) {
    xlArray.push([`${json[item].id}`, `${json[item].title}`, `${json[item].status}`])


}


export async function createAndPopulateExcel() {
  // 1. Create a new workbook and add a worksheet
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('My Data Sheet');

  worksheet.columns = [
    { header: 'Id', key: 'id', width: 30 },
    { header: 'Task Name', key: 'name', width: 40 },
    { header: 'Status', key: 'Status', width: 20 }
  ];

  worksheet.getColumn('A').alignment = { vertical: 'top', horizontal: 'center' };
  worksheet.getColumn('B').alignment = { vertical: 'top', horizontal: 'center' };
  worksheet.getColumn('C').alignment = { vertical: 'top', horizontal: 'center' };

  

  const rowsToAdd = xlArray;
  worksheet.addRows(rowsToAdd);
  
  const targetColumn = worksheet.getColumn(3); 
  targetColumn.eachCell({ includeEmpty: true }, (cell: any, rowNumber: any) => {
            if (cell == 'Pending') {
              cell.fill = {
              type: 'pattern',
              pattern:'solid',
              fgColor:{argb:'F08080'},
              } 
            } else if (cell == 'Completed') {
              cell.fill = {
              type: 'pattern',
              pattern:'solid',
              fgColor:{argb:'90EE90'},
              }
            }
        })

  const fileName = 'List.xlsx';
  try {
    await workbook.xlsx.writeFile(fileName);
    console.log(`File created successfully: ${fileName}`);
  } catch (err) {
    console.error('Error writing file:', err);
  }
}


export { xlArray}
