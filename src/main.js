// 入口文件
import Vue from 'vue'

//导入路由-1.1
import VueRouter from 'vue-router'
//安装路由-1.2
Vue.use(VueRouter)

//导入格式化时间的插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
	// cnpm i moment -S
	return moment(dataStr).format(pattern);
})

//导入-2.1
import VueResource from 'vue-resource'
//安装-2.2
Vue.use(VueResource)

//设置请求的跟路径
// Vue.http.options.root='http://vue.study.io'
Vue.http.options.root='http://wallpaper.apc.360.cn'
//设置全局post 表单数据形式
Vue.http.options.emulateJSON=true;


//导入Mui
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//按需导入Mint-UI中的组件
// import { Header,Swipe,SwipeItem,Button,Lazyload } from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Button.name,Button)
// Vue.use(Lazyload);
import MintUI from "mint-ui"
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//安装图片预览
import VuePreView from 'vue-preview'
Vue.use(VuePreView)

//导入路由模块-1.3
import router from './router.js'


//导入App组件
import app from './App.vue'



var vm=new Vue({
	el:'#app',
	render:c => c(app),
	router //挂载-1.4
	
})