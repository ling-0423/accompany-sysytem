<!-- 模板，格式 -->
<template>
    <!-- 激活状态文本颜色、背景色、类名、默认激活项、文本颜色、监听 open 和 close 事件 -->
    <!-- 菜单组件 -->
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff" @open="handleOpen" @close="handleClose">
        <!-- 子菜单组件 -->
        <el-sub-menu index="1">
            <template #title>
                <!-- 显示图标 -->
                <el-icon>
                    <location />
                </el-icon>
                <span>Navigator One</span>
            </template>

            <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>

            <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>

        <el-menu-item index="2">
            <el-icon>
                <icon-menu />
            </el-icon>
            <span>Navigator Two</span>
        </el-menu-item>

        <el-menu-item index="3" disabled>
            <el-icon>
                <document />
            </el-icon>
            <span>Navigator Three</span>
        </el-menu-item>

        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <span>Navigator Four</span>
        </el-menu-item>
    </el-menu>
</template>

<!-- 定义组件中的逻辑部分 -->
<script setup>
// 子菜单打开时触发
const handleOpen = () => { }
const handleClose = () => { }
</script>

<!-- 类似于css，scoped保证样式只影响当前组件 -->
<style scoped></style>