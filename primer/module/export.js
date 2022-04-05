// 在声明前导出
// 我们可以通过在声明之前放置 export 来标记任意声明为导出，无论声明的是变量，函数还是类都可以。
export const NAME = "export";


// 导出与声明分开
function sayHi(user) {
    console.log(`Hello, ${user}!`);
}

function sayBye(user) {
    console.log(`Bye, ${user}!`);
}

// 导出变量列表
export { sayHi, sayBye };
    
    
function plusOne(x) {
    return x + 1;
}
    
function minusOne(x) {
    return x - 1;
}

// 使用 as 重命名导出，将函数导出为 increase 和 decrease：
export { plusOne as increase, minusOne as decrease };


// 默认导出
// 每个文件只可能有一个 export default：
export default class User { // 只需要添加 "default" 即可
    constructor(name) {
        this.name = name;
    }
}