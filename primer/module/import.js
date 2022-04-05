// 对应 `在声明前导出`
import { NAME } from "./export.js";

console.log(`NAME is ${NAME}`);


// 对应 `导出变量列表`
// 通常，我们把要导入的东西列在花括号 import {...} 中，就像这样：
import { sayHi, sayBye } from './export.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

// 但是如果有很多要导入的内容，我们可以使用 import * as <obj> 将所有内容导入为一个对象，例如：
import * as say from './export.js';

say.sayHi('John'); // Hello, John!
say.sayBye('John'); // Bye, John!


// 对应 `使用 as 重命名导出`
// 使用 as 重命名导入
import { increase as inc, decrease as dec } from './export.js';

console.log(inc(0)); // 1
console.log(dec(1)); // 0


// 对应 `默认导出`
import User from './export.js'; // 不需要花括号 {User}，只需要写成 User 即可

let user = new User('John');
console.log(`user.name is ${user.name}`);