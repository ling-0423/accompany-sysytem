// 创建路由实例，管理页面导航
// 创建基于 hash 模式的历史记录对象
import {createRouter, createWebHashHistory} from 'vue-router'

import Layout from '../views/Main.vue'
import Login from '../views/login/index.vue'

// 定义路由表
const routes = [
    {
        path:'/',
        component:Layout
    },

    {
        path:'/login',
        component:Login
    }
]

// 使用 createRouter 方法生成一个路由实例
const router = createRouter({
    routes,
    // 路由匹配模式
    history:createWebHashHistory()
})

// 导出路由实例
export default router