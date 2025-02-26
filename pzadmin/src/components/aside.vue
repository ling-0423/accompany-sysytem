<!-- 模板，格式 -->
<template>
    <!-- 激活状态文本颜色、背景色、类名、默认激活项、文本颜色、监听 open 和 close 事件 -->
    <!-- 菜单组件 -->
    <el-menu 
        :style="{width:'230px'}"
        active-text-color="#ffd04b" background-color="#545c64" class="aside-container" default-active="2"
        text-color="#fff" @open="handleOpen" @close="handleClose">

        <p class="logo-lg">ling陪诊</p>

        <TreeMenu :menuData="menuData"/>
    </el-menu>
</template>

<!-- 定义组件中的逻辑部分 -->
<script setup>
import TreeMenu from './treeMenu.vue'
import {useRouter} from 'vue-router'
import { reactive } from 'vue'

const router = useRouter()
const menuData = reactive(router.options.routes[0].children)

// console.log(router, 'router')

// 子菜单打开时触发
const handleOpen = () => { }
const handleClose = () => { }
</script>

<!-- 类似于css，scoped保证样式只影响当前组件 -->
<style lang="less" scoped>
.aside-container{
    height: 100%;
    .logo-lg{
        font-size: 20px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        color: #fff;
    }
}
</style>