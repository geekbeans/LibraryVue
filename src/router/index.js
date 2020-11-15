import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import App from "../App";
import BookManage from "../views/BookManage";
import AddBook from "../views/AddBook";
import Index from "../views/Index";
import BookUpdate from "../views/BookUpdate";
import fa from "element-ui/src/locale/lang/fa";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '图书管理',
    component: Index,
    redirect: "/BookManage",
    children: [
      {
        path: '/BookManage',
        name: '查询图书',
        component: BookManage
      },
      {
        path: '/AddBook',
        name: '添加图书',
        component: AddBook
      },
      {
        path: '/update',
        name: '更新图书',
        component: BookUpdate
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
