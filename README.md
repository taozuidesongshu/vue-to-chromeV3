# vue2-to-chromeV3
`vue-cli3` + `webpack4` + `element-ui`  实现编译打包Chrome浏览器插件

### 注意项目中的vue.config.js 文件
插件新增页面，都需要在此手动配置

## 环境安装
```
npm install
```

### 开发环境编译并热更新
```
npm run serve
or
npm run build-watch
```

### 生产环境打包
```
npm run build
```

### 分析包组件大小
```
npm run analyze
```

### Lints and fixes files
```
npm run lint
```
### 这是我对chromeV3的总结
[chromeV3总觉](https://taozuidesongshu.github.io/LonelyCityHallucination/)

### 以下是一些我读过的文档
See [Configuration Reference](https://cli.vuejs.org/config/).

[详细开发文档](https://mrli2016.github.io/notes/frontend/vue-cli3开发Chrome%20Extension实践.html)

### V3开发例子
[0](https://github.com/caifeng123/chrome-extension)
[1](https://www.jianshu.com/p/5464872fef93)
[2](http://liujinkai.com/2022/03/12/chrome-extensions-manifest-v3/)
[3](https://blog.csdn.net/ZK645968/article/details/126288400)

## 谷歌官方例子
[谷歌官方例子](https://github.com/GoogleChrome/chrome-extensions-samples)


## 不启用sourceMap
`devtool: "source-map"`// 主要防止VUE热更新chromeV3 报错

[vue3开发](https://github.dev/choumai555/vue-chrome-extension-mv3)，注意webpack.config.ts第19行

[使用Vue3+Element Plus开发Chrome插件](https://blog.csdn.net/yizhiliudaji/article/details/126388457)