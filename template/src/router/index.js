import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

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
          path: 'banner',
          component: banner
        }
       ]
    }
   ]
   {{/if_eq}}
})


