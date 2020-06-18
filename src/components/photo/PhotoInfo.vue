<template>
	<div class='photoinfo-container'>
		<h3>{{photoinfo.title}}</h3>
		<p class="subtitle">
			<span>发表时间：{{photoinfo.add_time | dataFormat}}</span>
			<span>点击 {{photoinfo.click}} 次</span>
		</p>
		<hr />

		<!-- 缩略图区域 -->
		<div class="thumbs">
			<img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)"
			 :key="item.src">
		</div>

		<!-- 图片内容 -->
		<div class='content' v-html="photoinfo.content"></div>

		<!-- 评论子组件 -->
		<cmt-box :id="id"></cmt-box>

	</div>
</template>

<script>
	
	import {
		Toast
	} from "mint-ui"
	
	import comment from '../subcomponents/comment.vue'

	export default {
		data() {
			return {
				id: this.$route.params.id,
				photoinfo: {
					id: 1,
					title: "萨迪哈市的",
					click: 3,
					add_time: "2018-04-16T03:50:28.000Z",
					content: "萨迪哈市的萨迪哈市的萨迪哈市的萨迪哈市的萨迪哈市的萨迪哈市的萨迪哈市的萨迪哈市的萨迪哈市的萨迪哈市的萨迪哈市的萨迪哈市的萨迪哈市的"
				},
				list:[
					{
						src: "http://p3.qhimg.com//bdm//1280_1024_85//t01de6d3fa6be341e41.jpg"
					},{
						src: "http://p0.qhimg.com//bdm//1600_900_85//t0157678b977d6b422a.jpg"
					},{
						src: "http://p5.qhimg.com//bdr//__85//t01eff2f22c130abcd0.jpg"
					}
				]
			}
		},
		created() {
			this.getPhotoInfo();
			this.getThumbs();
		},
		methods: {
			getPhotoInfo() {
				// this.$http.get("api/getimageInfo/"+this.id).then(result => {
				// 	if (result.body.status === 0) {
				// 		this.photoinfo=result.body.message[0];
				// 	} else {
				// 		Toast("获取失败！");
				// 	}
				// });
			},
			getThumbs(){//获取预览
				// this.$http.get("api/getthumimages/"+this.id).then(result => {
				// 	if (result.body.status === 0) {
				// 		result.body.message.forEach(item=>{
				// 			item.w=600;
				// 			item.h=400;
				// 		});
				// 		this.list=result.body.message;
				// 	} else {
				// 		Toast("获取失败！");
				// 	}
				// });
			}
		},
		components: {
			'cmt-box': comment
		}
	}
</script>

<style lang="scss" scoped>
	.photoinfo-container {
		padding: 3px;

		h3 {
			color: #26A2FF;
			font-size: 15px;
			text-align: center;
			margin: 15px 0;
		}

		.subtitle {
			display: flex;
			justify-content: space-between;
			font-size: 13px;
		}

		.content {
			font-size: 13px;
			line-height: 30px;

		}
		.thumbs{
			img{
				margin: 10px;
				box-shadow: 0 0 8px #999;
			}
		}
	}
</style>
