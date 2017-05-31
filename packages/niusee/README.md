## 项目结构

```
+--- src              # 源代码目录
|--- node_modules     # npm软件包
|--- public           # 静态资源目录，图片、字体、全局样式、脚本等静态资源
|--- package.json     # package.json
|--- .roadhog         # roadhog配置文件
|--- .roadhog.mock.js # 模拟接口数据配置
```

### 源代码结构
前端采用MVVM模式， 容器组件由路由组件实现，代表每个独立的页面。 通用性的呈现组件放置到components目录下面。其他路由组件都可以自由调用这些呈现组件。
每个页面都对应唯一的state， 每个state都对应models下面的唯一model文件。里边包含初始化state, 以及变化引起state变化的逻辑。 对于异步请求，通过fetch实现的request来获取API数据。
services目录提供异步请求的实现。

```
+--- src
      |------ routes           # 路由组件: 容器组件
                |-----  app.js # 总容器组件
                |-----  weixin # 微信公共号入口路由组件
                |-----  ...... # 其他平行路由组件
      |------ services         # 异步请求: ajax, fetch服务目录
      |------ components       # 公共组件: 一般是通用性的呈现组件
      |------ utils            # 工具函数库: 包括fetch的封装、以及其他辅助函数
      |------ models           # 模型: 包括每个页面所需的state以及state管理相关的结构
      |------ router.js        # 总路由配置
      |------ index.js         # 入口js文件
      |------ index.html       # 入口页面html
```


## 示例运行

首先下载代码https://github.com/walkerqiao/amazeui/tree/master/packages/niusee到自己的目录中。

### 安装
```
npm install
```

### 运行
```
npm run start
```

### 构建
```
npm run build
```

