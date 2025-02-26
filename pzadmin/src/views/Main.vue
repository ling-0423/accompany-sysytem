<template>
  <div class="common-layout">
    <el-container>
      <!-- <el-aside width="200px">Aside</el-aside> -->

      <Aside />
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Aside from '../components/aside.vue'
</script>

<!-- 类似于css，scoped保证样式只影响当前组件 -->
<style lang="less" scoped>
.common-layout {
  height: 100%;

  .el-container {
    height: 100%;
  }
}
</style>