const xlsx = require("node-xlsx");
const fs = require("fs");
const path = require("path");

const source = fs.readFileSync(path.join(__dirname, "data", "source.xlsx"));

const xlsxData = xlsx.parse(source)[0];
xlsxData.data = xlsxData.data.filter(x => x[0] !== '隔壁软软-钟敏睿');

const newXlsxData = xlsx.build([xlsxData]);

fs.writeFileSync(path.join(__dirname, "data", "result.xlsx"), newXlsxData);