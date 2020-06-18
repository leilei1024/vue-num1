<template>
	<div class='cmt-container'>
		<h3>评论子组件</h3>
		<hr />
		<textarea placeholder="请输入要评论的内容" maxlength="120" v-model="msg"></textarea>

		<mt-button @click="postComment" type='primary' size='large' >发表评论</mt-button>
		<div class='cmt-list'>

			<div class='cmt-item' v-for="(item,i) in comments" :key="item.add_time">
				<div class='cmt-title'>
					第 {{i+1}} 楼 &nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dataFormat}}
				</div>
				<div class='cmt-body'>
					{{item.content === 'undefined' ? '没有发表评论' : item.content}}
				</div>
			</div>

		</div>
		<mt-button @click="getMore" type='primary' size='large' plain>加载更多</mt-button>
	</div>
</template>

<script>
	import {
		Toast
	} from "mint-ui"

	export default {
		data() {
			return {
				pageindex: 1,
				comments: [ //本来是请求赋值数组，不过用了假数组
					{
						user_name: "小明",
						add_time: "2016-04-16T03:50:28.000Z",
						content: "我来了A"
					},
					{
						user_name: "小张",
						add_time: "2018-04-16T03:50:28.000Z",
						content: "我来了B"
					},
					{
						user_name: "小红",
						add_time: "2019-04-16T03:50:28.000Z",
						content: "我来了C"
					}
				],
				msg:"" //输入内容
			}
		},
		created() {
			this.getComment();
		},
		methods: {
			getComment() {
				// this.$http.get("/api/getcomments/"+this.id+"?pageindex="+this.pageindex)
				// .then(result => {
				// 		if (result.body.status === 0) {
				// 			// this.comments = result.body.message;
				// 			//老数据+新数据
				// 			this.comments =this.comments.concat(result.body.message);
				// 		} else {
				// 			Toast("获取评论列表失败！");
				// 		}
				// });
			},
			getMore(){//获取评论
				// this.pageindex++;
				// this.getComment();
			},
			postComment(){//发表评论
				if (this.msg.trim().length === 0) {
					return Toast("评论内容不能为空");
				}
				//参数1 请求的url
				//参数2 提交给服务器的数据对象  ｛content: this.msg｝
				//参数3 提交时候 表单数据格式 {emulateJSON:true} 
				//下面可以实现 但是 api 不行
				// this.$http.post('/api/postcomment/'+ this.$route.params.id,{
				// 	content:this.msg.trim();
				// })
				// .then(result => {
				// 		if (result.body.status === 0) {
				// 			var cmt={
				// 				user_name:"匿名用户",
				// 				add_time:Date.now(),
				// 				content:this.msg.trim()
				// 			};
				// 			this.comments.unshift(cmt);
				// 			this.msg="";
				// 		} else {
				// 			Toast("发表评论失败！");
				// 		}
				// });
			}
			
		},
		props: ["id"] //父子组件传值 使用父组件的id
	}
</script>

<style lang="scss" scoped>
	.cmt-container {
		h3 {
			font-size: 1.125rem; //18px
		}

		textarea {
			font-size: 0.875rem; //14px
			height: 5.3125rem; //85px
			margin: 0;
		}

		.cmt-list {
			margin: 0.3125rem 0; //5px

			.cmt-item {
				font-size: 0.8125rem; //13px

				.cmt-title {
					line-height: 1.875rem; //30px
					background-color: #ccc;
				}

				.cmt-body {
					line-height: 2.1875rem; //35px
					text-indent: 2em;
				}
			}

		}


	}
</style>
