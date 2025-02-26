<template>
    <template v-for="(item, index) in props.menuData">
        <!-- 没有子菜单的情况 -->
        <el-menu-item 
            @click="handleClick(item, `${props.index}-${item.meta.id}`)"
            v-if="!item.children || item.children.length == 0" 
            :index="`${props.index}-${item.meta.id}`"
            :key="`${props.index}-${item.meta.id}`">

            <el-icon size="20">
                <component :is="item.meta.icon"></component>
            </el-icon>

            <span>{{ item.meta.name }}</span>

        </el-menu-item>

        <!-- 有子菜单的情况 -->
         <el-sub-menu v-else :index="`${props.index}-${item.meta.id}`">
            <template #title>
                <el-icon size="20">
                    <component :is="item.meta.icon"></component>
                </el-icon>

                <span>{{ item.meta.name }}</span>
            </template>

            <tree-menu 
            :index="`${props.index}-${item.meta.id}`"
            :menuData="item.children"/>
         </el-sub-menu>
    </template>
</template>


<script setup>
import { useRouter } from 'vue-router'
const props = defineProps(['menuData', 'index'])
// console.log(props, 'props')

// 创建router实例
const router = useRouter()

// 点击菜单
const handleClick = (item, active) =>{
    console.log(item, 'item')
    router.push(item.meta.path)
}
</script>

<style scoped>
</style>