<template>
	<div class='newsinfo-container'>
		<!-- 大标题 -->
		<h3 class='title'>{{newsinfo.title}}</h3>
		<!-- 子标题 -->
		<p class='subtitle'>
			<span>发表时间 {{newsinfo.add_time | dataFormat}}</span>
			<span>点击 {{newsinfo.click}} 次</span>
		</p>
		<hr />
		<!-- 内容区域 -->
		<div class='content' v-html="newsinfo.content"></div>
		
		<!-- 评论区域 -->
		<comment-box :id="this.id"></comment-box>
		
	</div>
</template>

<script>
	//导入评论子组件
	import comment from '../subcomponents/comment.vue'
	
	
	import {
		Toast
	} from "mint-ui"


	export default {
		data() {
			return {
				id: this.$route.params.id,
				newsinfo: {
					id: 1,
					title: "AAAA",
					click: 2,
					add_time: "2016-04-16T03:50:28.000Z",
					content: "<div>AAAA我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我在我</div>"
				} //新闻对象
			}
		},
		created() {
			this.getNewsInfo();
		},
		methods: {
			getNewsInfo() {
				// this.$http.get('api/getnew/' + this.id).then(result => {
				// 	if (result.body.status === 0) {
				// 		// 如果没有失败，应该把数据保存到 data 上
				// 		this.newsinfo = result.body.message[0];
				// 	} else {
				// 		Toast("获取新闻列表失败！");
				// 	}
				// })
			}
		},
		components:{//用来注册子组件
			'comment-box':comment
		}
	}
</script>

<style lang="scss">
	.newsinfo-container {
		padding: 0 0.25rem; //4px

		.title {
			font-size: 1rem; //16px
			text-align: center;
			margin: 0.9375rem 0; //15px
			color: red;
		}

		.subtitle {
			font-size: 0.8125rem; //13px
			color: #226aff;
			display: flex;
			justify-content: space-between;
		}

		.content {

			//去掉 scoped
			img {
				width: 100%;
			}
		}
	}
</style>
