# 查找元素位置

## 题目描述

在数组 arr 中，查找值与 item 相等的元素出现的所有位置

## 示例1

### 输入

```
['a','b','c','d','e','f','a','b','c'] 'a'
```

### 输出

```
[0, 6]
```

## solution

```javascript
function findAllOccurrences(arr, target) {
    let ans = [];
    arr.forEach((currentValue, index) => {
        if (currentValue === target) {
            ans.push(index);
        }
    });
    return ans;
}
```

