import {createStore} from 'vuex'
import menu from './menu'

// 接收一个配置对象，用于定义模块等内容
export default createStore({
    modules:{
        menu
    }
})