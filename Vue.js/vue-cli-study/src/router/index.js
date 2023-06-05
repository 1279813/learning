import Vue from 'vue'
// 导入路由插件
import Router from 'vue-router'
// 导入上面定义的组件
import Content from '../components/Content'
import Main from '../components/Main'
import Lin from "../components/Lin"

// 安装路由
Vue.use(Router);

// 配置路由
export default new Router({
  routes: [{
    // 路由路径
    path: '/content',
    // 路由名称
    name: 'content',
    // 跳转到组件
    component: Content
  },
  {
    // 路由路径
    path: '/main',
    // 跳转到组件
    component: Main
  },
  {
      // 路由路径
      path: '/lin',
      // 跳转到组件
      component: Lin
    }]
});
