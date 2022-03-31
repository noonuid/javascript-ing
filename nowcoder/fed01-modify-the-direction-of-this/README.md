# 修改 this 指向

## 题目描述

封装函数 f，使 f 的 this 指向指定的对象

## 示例1

### 输入

```
无
```

### 输出

```
无
```

## solution

```javascript
function bindThis(f, oTarget) {
    return function () {
        return f.apply(oTarget, arguments);
    };
}
```

