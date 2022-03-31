# 添加元素

## 题目描述

在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组

## 示例1

### 输入

```
[1, 2, 3, 4],  10
```

### 输出

```
[1, 2, 3, 4, 10]
```

## solution

### 1

```javascript
function append(arr, item) {
    let newArr=[], n=arr.length;
    
    for(let i=0; i < n; ++i){
        newArr.push(arr[i]);
    }
    newArr.push(item);
    
    return newArr;
}
```

### 2

```javascript
function append(arr, item) {
    let newArr = arr.slice();
    newArr.push(item);
    return newArr;
}
```

### 3

```javascript
function append(arr, item) {
    return arr.concat(item);
}
```

### 