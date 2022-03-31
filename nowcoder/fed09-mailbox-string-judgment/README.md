# 邮箱字符串判断

## 题目描述

判断输入是否是正确的邮箱格式

## 输入描述:

```
邮箱字符串
```

## 输出描述:

```
true表示格式正确
```

## solution

```javascript
function isAvailableEmail(sEmail) {
    let reg = /^[\w]+(\.[\w]+)*@[\w]+(\.[\w]+)+$/;

    return reg.test(sEmail);
}
```

