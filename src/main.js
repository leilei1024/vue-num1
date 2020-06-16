// 入口文件
import Vue from 'vue'

//导入路由-1.1
import VueRouter from 'vue-router'
//安装路由-1.2
Vue.use(VueRouter)

//导入-2.1
import VueResource from 'vue-resource'
//安装-2.2
Vue.use(VueResource)

//导入Mui
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//按需导入Mint-UI中的组件
import { Header,Swipe,SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

//导入路由模块-1.3
import router from './router.js'


//导入App组件
import app from './App.vue'



var vm=new Vue({
	el:'#app',
	render:c => c(app),
	router //挂载-1.4
	
})