
## 配置文件在根目录下configApi.js,可以配置api地址和静态文件router

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