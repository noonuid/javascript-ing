# JavaScript 模块

## 模块化的背景

> Javascript 程序本来很小——在早期，它们大多被用来执行独立的脚本任务，在你的 web 页面需要的地方提供一定交互，所以一般不需要多大的脚本。过了几年，我们现在有了运行大量 Javascript 脚本的复杂程序，还有一些被用在其他环境（例如 [Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js)）。
>
> 因此，近年来，有必要开始考虑提供一种将 JavaScript 程序拆分为可按需导入的单独模块的机制。Node.js 已经提供这个能力很长时间了，还有很多的 Javascript 库和框架 已经开始了模块的使用（例如， [CommonJS](https://en.wikipedia.org/wiki/CommonJS) 和基于 [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) 的其他模块系统 如 [RequireJS](https://requirejs.org/), 以及最新的 [Webpack](https://webpack.github.io/) 和 [Babel](https://babeljs.io/)）。

## 模块化方案

### 浏览器端的模块化

1).AMD(Asynchronous Module Definition,异步模块定义)。代表产品为：Require.js

2).CMD(Common Module Definition,通用模块定义)，代表产品为：Sea.js

### 服务器端的模块化

服务器端的模块化规范是使用CommonJS规范：

1).使用require引入其他模块或者包

2).使用exports或者module.exports导出模块成员

3).一个文件就是一个模块，都拥有独立的作用域

### ES6 模块化

ES6模块化规范中定义：

1).每一个js文件都是独立的模块

2).导入模块成员使用import关键字

3).暴露模块成员使用export关键字