# 平行线百科C端项目

### 安装依赖
```
npm install
```

### 本地开发
```
npm run serve
```

### 开发环境
```
npm run build:dev
```

### 测试环境
```
npm run build:test
```

### 正式环境
```
npm run build:pro
```

### 环境配置说明
- .env的VUE_APP_BASE_API对应开发环境后端api地址。
- .env.testing的VUE_APP_BASE_API对应测试环境后端api地址。
- .env.production的VUE_APP_BASE_API对应正式环境后端api地址。

### 移动端适配说明
- 采用postcss-pxtorem、amfe-flexible方案，打包时会把px转化为rem，rootValue设置为37.5，按设计稿375规格来取px值。
- 同时兼容PC端，设置html的font-size: 64PX，body的font-size: 24PX，#app的max-width: 640PX，PX大写不会被pxtorem转化。