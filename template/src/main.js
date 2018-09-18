{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}

import api from './api'

// PC版本使用element
{{#if_eq projectType "PC"}}
import ElementUI from 'element-ui'
{{/if_eq}}

import store from './store'

Vue.config.productionTip = false

// 移动端设置 rem
{{#if_eq projectType "mobile"}}
document.documentElement.style.fontSize = '14px';
if ('addEventListener' in document) {
    document.addEventListener("touchstart", function() {},false);
}
{{/if_eq}}


Vue.prototype.$model = api;

router.beforeEach((to, from, next) => {
  next();
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
