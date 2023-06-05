import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import Login from '../views/Login'
import UserList from '../views/user/List'
import UserProfile from '../views/user/Profile'
import Notfound from "../views/Notfound";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/',
      name: 'main',
      component: Main,
      children: [{
        path: '/user/profile/:id/:username',
        name: 'UserProfile',
        component: UserProfile,
        props: true
      }, {
        path: '/user/list',
        component: UserList
      }, {
        path: '/goHome',
        redirect: '/'
      }]
    }, {
      path: "*",
      component: Notfound
    }
  ]
});
