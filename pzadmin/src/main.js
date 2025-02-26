import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 获取插件中所有图标组件的键值对数组
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 路由挂载
app.use(router)
app.mount('#app')
