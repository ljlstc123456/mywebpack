import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

{{#if_eq projectType "PC"}}
import layout from '@/pages/layout'
import login from '@/pages/login'
import module1 from '@/pages/manager/module1'
{{/if_eq}}

Vue.use(Router)

export default new Router({
  {{#if_eq projectType "mobile"}}
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
  {{/if_eq}}
  {{#if_eq projectType "PC"}}
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    { path: '/', component: layout,
      children: [
        {
          path: '',
          component: module1
        }
       ]
    }
   ]
   {{/if_eq}}
})


