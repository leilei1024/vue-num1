<template>
	<div>
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in lubotuList" :key="item.id">
				<img :src='item.url' />
			</mt-swipe-item>
		</mt-swipe>

		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src='../../images/menu1.png' />
					<div class="mui-media-body">新闻资讯</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src='../../images/menu2.png' />
					<div class="mui-media-body">图片分享</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src='../../images/menu3.png' />
					<div class="mui-media-body">商品购买</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src='../../images/menu4.png' />
					<div class="mui-media-body">留言反馈</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src='../../images/menu5.png' />
					<div class="mui-media-body">视频专区</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src='../../images/menu6.png' />
					<div class="mui-media-body">联系我们</div>
				</a></li>
		</ul>


	</div>
</template>

<script>
	// 如果我们通过全局配置了，请求的数据接口 根域名，则 ，在每次单独发起 http 请求的时候，请求的 url 路径，应该以相对路径开头，前面不能带 /  ，否则 不会启用根路径做拼接；
	// Vue.http.options.root = 'https://leilei1024.github.io/';
	// // 全局启用 emulateJSON 选项
	// Vue.http.options.emulateJSON = true;

	import {
		Toast
	} from 'mint-ui'

	export default {
		data() {
			return {
				lubotuList: [{
						"id": 1,
						"name": "num1",
						"url": "http://p5.qhimg.com//bdr//__85//t01eff2f22c130abcd0.jpg"
					},
					{
						"id": 2,
						"name": "num2",
						"url": "http://p0.qhimg.com//bdm//1600_900_85//t0157678b977d6b422a.jpg"
					},
					{
						"id": 3,
						"name": "num3",
						"url": "http://p3.qhimg.com//bdm//1280_1024_85//t01de6d3fa6be341e41.jpg"
					}
				]
			};
		},
		created() {
			this.getLubotu();
		},
		methods: {
			getLubotu() { //  获取有问题
				// this.$http.get('https://leilei1024.github.io/api/photo-demo.json').then(response => {
				// 	// 注意： 通过 $http 获取到的数据，都在 result.body 中放着
				// 	var response = result.body
				// 	if (response.status === 0) {
				// 		this.lubotuList = response.message;
				// 		Toast(' 加载成功');
				// 	} else {
				// 		// 失败了
				// 		Toast(' 加载失败'); //失败
				// 	}
				// })

				// var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
				// this.$http.get(api).then( (response) => {
				// 	console.log(response.body);
				// 	// console.log(response.body.result);
				// 	this.list=response.data;
				// 	if(response.body.status === 0){
				// 		this.lubotuList=rlist;// 成功
				// 		Toast(' 加载成功');
				// 	}else{
				// 		Toast(' 加载失败');//失败
				// 	}
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mint-swipe {
		height: 12.5rem; //200px

		.mint-swipe-item {
			&:nth-child(1) {
				background-color: red;
			}

			&:nth-child(2) {
				background-color: yellow;
			}

			&:nth-child(3) {
				background-color: greenyellow;
			}
		}

		img {
			width: 100%;
			height: 100%;
		}
	}
	
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body{
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
