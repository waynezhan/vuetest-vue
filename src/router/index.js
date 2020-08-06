import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import page1 from "../views/page1";
import page2 from "../views/page2";
import page3 from "../views/page3";
import page4 from "../views/page4";
import index from "../views/index";

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: '主页1',
  //   component: App
  // },
  {
    path: '/',
    name: '用户信息',
    component: index,
    redirect:'page1',
    children:[
      {
        path: '/page1',
        name: '用户信息查询页面',
        component: page1,
      },

        {
          path:'/page2',
          name:'用户信息增添页面',
          component: page2
        },
        ]
  },
    {
      path:'/navigation',
      name:'导航2',
      component: index,
      children: [
          {
        path:'/page3',
        name:'页面3',
        component: page3
      },
        {
          path:'/page4',
          name:'页面4',
          component: page4
        },

      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
