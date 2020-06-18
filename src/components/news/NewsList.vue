<template>
	<div>

		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
				<router-link :to="'/home/newsinfo/' + item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h1>{{ item.title}}</h1>
						<p class='mui-ellipsis'>
							<span>发表时间：{{ item.add_time | dataFormat  }}</span>
							<span>点击：{{item.click}}次</span>
						</p>
					</div>
				</router-link>
			</li>

		</ul>

	</div>
</template>

<script>
	import {
		Toast
	} from "mint-ui"

	export default {
		data() {
			return { // 新闻列表
				newslist: [{
						id: 1,
						title: "AAAAA",
						add_time: "2016-04-16T03:50:28.000Z",
						zhaiyao: "业绩陆续公布AAAAA",
						click: 2,
						img_url: "http://b-ssl.duitang.com/uploads/item/201410/09/20141009224754_AswrQ.jpeg"
					},
					{
						id: 2,
						title: "BBBB",
						add_time: "2017-04-16T03:50:28.000Z",
						zhaiyao: "业绩陆续公布BBBB",
						click: 3,
						img_url: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
					}
				]
			};
		},
		created() {
			this.getNewsList();
		},
		methods: {
			getNewsList() {
				// // 获取新闻列表
				// this.$http.get("api/getnewslist").then(result => {
				// 	if (result.body.status === 0) {
				// 		// 如果没有失败，应该把数据保存到 data 上
				// 		this.newslist = result.body.message;
				// 	} else {
				// 		Toast("获取新闻列表失败！");
				// 	}
				// });
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mui-table-view {
		li {

			/* 14px */
			h1 {
				font-size: 0.875rem;
			}

			.mui-ellipsis {
				/* 12px */
				font-size: 0.75rem;
				color: #226aff;
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
