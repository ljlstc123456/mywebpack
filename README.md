# my-vue-webpack-template
基于vue-cli template修改，去掉单元测试和e2e测试，增加vuex的选择，默认添加axios
支持pc和mobile的选择

## 生成项目
``` bash
$ npm install -g vue-cli
$ vue init ljlstc123456/mywebpack#develop my-project
$ cd my-project
$ npm install
$ npm run dev
```

## 配置文件在根目录下configApi.js,可以配置api地址和经验文件router

``` bash
 //开发服务
 'dev':{
  	baseURL:'http://dev.api',
  	router:'/'
  },
  //测试
  'qa':{
  	baseURL:'http://qa.api',
  	router:'/'
  },
  //生产
  'production':{
  	baseURL:'/api',
  	router:'/'
  }
```
## 本地开发
``` bash
npm run dev
```
## 发布编译

``` bash
npm run build -- dev //开发环境
npm run build -- qa  //测试环境
npm run build -- production //生产环境
```