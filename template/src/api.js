/**
 * 
 * @authors Your Name (ljl)
 * @date    2018-09-18 14:34:17
 * @version $Id$
 */


import axios from 'axios';
import qs from 'qs';
import Vue from 'vue';
import router from './router'

axios.defaults.withCredentials = true ;
const instance = axios.create({
  baseURL: process.env.baseURL,
  timeout: 8000,
  headers: { "content-type": "application/json;charset=utf-8" }
});

instance.interceptors.response.use(function(response) {
  //对响应数据做些事
  if (response.data.code != 0) {
    Vue.prototype.$message({
      message: response.data.msg,
      type: 'warning'
    });
    //Vue.prototype.$router.replace("/login") ;
    if(response.data.code == 501){
      router.replace("/login") ;
    }
    return Promise.reject(0);
  } else {
    return response.data;
  }
}, function(error) {
  Vue.prototype.$message.error("服务器请求出错");
  //请求错误时做些事
  return Promise.reject(erro);
});


window.onerror = function(msg, url, line, col, error) {
  // 直接将错误打印到控制台
  console.log(arguments)
}
const post = (url, param) => instance.post(url, param);
const get = (url, param) => instance.post(url + "?" + qs.stringify(param));

export default {

  //登录相关
  login: (param) => post("/backend/login", param),
  logout: (param) => post("/backend/login/logout", param),
  
  //banner
}
