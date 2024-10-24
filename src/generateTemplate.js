// src/generateTemplate.js
const fs = require("fs");
const ejs = require("ejs");
const getTableColumns = require("./getTableColumns");

async function generateTemplate(tableName, outputPath) {
  const columns = await getTableColumns(tableName);


  const tableColumns = columns.map((column) => {
    const isTimeOrDate = column.endsWith("Time") || column.endsWith("Date");

    if(column.includes('_')){
        
    }
    
    return {
      prop: column,
      label: column,
      minWidth: 120,
      align: "center",
      render: isTimeOrDate
        ? `(param: { row: any; index: number }) {
      const { row, index } = param
      return <>{formatDateTime(row.${column})}</>
    }`
        : `(param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.${column}}</>
    }`,
    };
  });

  const template = `
  const tableColumns = reactive([
    <% tableColumns.forEach(column => { %>
    {
      prop: '<%= column.prop %>',
      label: '<%= column.label %>',
      minWidth: <%= column.minWidth %>,
      align: '<%= column.align %>',
      render <%- column.render %>
    },
    <% }) %>
  ]);
  `;

  const rendered = ejs.render(template, { tableColumns });

  fs.writeFileSync(outputPath, rendered);
}

generateTemplate("OTBPrepWorkOrder", "./output.ts")
  .then(() => console.log("Template generated successfully"))
  .catch((err) => console.error("Error generating template", err));
