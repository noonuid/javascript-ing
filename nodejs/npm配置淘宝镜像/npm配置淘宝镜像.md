# npm配置淘宝镜像

## 方法一：更改获取包的位置

1. ### 设置获取包的位置

```
npm config set registry https://registry.npm.taobao.org
```

2. ### 验证设置

```shell
npm config get registry
```

配置成功后输出：

```shell
https://registry.npmjs.org/
```

## 方法二：使用cnpm

1. 安装

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

2. 使用

```shell
cnpm install xxx
```

