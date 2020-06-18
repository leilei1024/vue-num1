<template>
	<div>
		<!-- 这是顶部滑动条区域 -->
		<!-- 顶部滑动条区域 -->
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">
						{{ item.title }}
					</a>
				</div>
			</div>
		</div>

		<!-- 图片列表区域 -->
		<ul class="photo-list">
			<router-link tag='li' v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id">
				<img v-lazy="item.img_url">
				<div class="info">
					<h1 class="info-title">{{item.title}}</h1>
					<div class="info-body">{{item.zhaiyao}}</div>
				</div>
			</router-link>
		</ul>

	</div>
</template>

<script>
	import {
		Toast
	} from "mint-ui"

	// 导入js文件
	import mui from '../../lib/mui/js/mui.min.js'



	export default {
		data() {
			return {
				cates: [ //所以分类的列表数据
					{
						title: '全部',
						id: 0
					},
					{
						title: '家装生活',
						id: 14
					},
					{
						title: '摄影器材',
						id: 15
					},
					{
						title: '明星写真',
						id: 16
					},
					{
						title: '清纯美女',
						id: 17
					},
					{
						title: '古典美女',
						id: 18
					}
				],
				list: [ //图片列表的数组
					{
						id: 1,
						title: "AAA",
						img_url: "http://p3.qhimg.com//bdm//1280_1024_85//t01de6d3fa6be341e41.jpg",
						zhaiyao: "爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻"
					},{
						id: 2,
						title: "BBB",
						img_url: "http://p0.qhimg.com//bdm//1600_900_85//t0157678b977d6b422a.jpg",
						zhaiyao: "爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻"
					},{
						id: 3,
						title: "AAA",
						img_url: "http://p5.qhimg.com//bdr//__85//t01eff2f22c130abcd0.jpg",
						zhaiyao: "爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻爱死噻"
					}
				]
			}
		},
		created() {
			this.getAllCategory();
			this.getPhotoListByCateId(0); //默认进入页面
		},
		mounted() { //渲染好放进页面中后 执行
			// //初始化滑动组件
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick减速系数 越大速度越慢 滚动距离越小
			})
		},
		methods: {
			getAllCategory() {
				// 获取图片列表
				// this.$http.get("api/getimgcategory").then(result => {
				// 	if (result.body.status === 0) {
				// 		// 如果没有失败，应该把数据保存到 data 上
				// 		result.body.message.unshift({title:"全部",id:0});
				// 		this.cates=result.body.message;
				// 	} else {
				// 		Toast("获取失败！");
				// 	}
				// });
			},
			getPhotoListByCateId(cateId) {
				// this.$http.get("api/getimages/"+cateId).then(result => {
				// 	if (result.body.status === 0) {
				// 		this.list=result.body.message;
				// 	} else {
				// 		Toast("获取失败！");
				// 	}
				// });
			}
		}
	};
</script>

<style lang="scss" scoped>
	* {
		touch-action: pan-y;
	}

	.photo-list {
		list-style: none;
		margin: 0;
		padding: 10px;
		padding-bottom: 0;

		li {
			background-color: #ccc;
			text-align: center;
			margin-bottom: 10px;
			box-shadow: 0 0 9px #999;
			position: relative;

			img {
				width: 100%;
				vertical-align: middle;
			}

			img[lazy="loading"] {
				width: 40px;
				height: 300px;
				margin: auto;
			}
			
			.info {
				color: white;
				text-align: left;
				position: absolute;
				bottom: 0;
				background-color: rgba(0, 0, 0, 0.4);
				max-height: 84px;

				.info-title {
					font-size: 14px;
				}

				.info-body {
					font-size: 13px;
				}
			}
		}
	}
</style>
