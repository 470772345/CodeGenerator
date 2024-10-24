const fs = require('fs');
const ejs = require('ejs');

const csharpEnum = `
public enum xxxStatus
{
    /// <summary>
    /// 新的
    /// </summary>
    New,

    /// <summary>
    /// 开始
    /// </summary>
    Begin,

    /// <summary>
    /// 开始 拣货
    /// </summary>
    InPicking,

    /// <summary>
    /// 拣货完成
    /// </summary>
    FinishPicking,

    /// <summary>
    /// 完成处理
    /// </summary>
    Processed,

    /// <summary>
    /// 取消
    /// </summary>
    Cancelled,

    /// <summary>
    /// 待仓库人员确认
    /// </summary>
    OnHold,
}
`;

function parseCsharpEnum(csharpEnum) {
  const enumNameMatch = csharpEnum.match(/public enum (\w+)/);
  const enumName = enumNameMatch ? enumNameMatch[1] : '';

  const enumValues = [];
  const enumValueRegex = /\/\/\/ <summary>\s*([\s\S]*?)\s*\/\/\/ <\/summary>\s*(\w+),/g;
  let match;

  while ((match = enumValueRegex.exec(csharpEnum)) !== null) {
    enumValues.push({ comment: match[1].trim(), name: match[2].trim() });
  }

  return { enumName, enumValues };
}

const { enumName, enumValues } = parseCsharpEnum(csharpEnum);

// const template = fs.readFileSync('enumTemplate.ejs', 'utf-8');

const template = `
        export const enum <%= enumName %> {
        <% enumValues.forEach(value => { %>
        /// <summary>
        /// <%= value.comment %>
        /// </summary>
        <%= value.name %> = '<%= value.name %>',
        <% }) %>
        }
`;
const output = ejs.render(template, { enumName, enumValues });

fs.writeFileSync(`${enumName}.ts`, output);
console.log(`${enumName}.ts has been generated.`);
