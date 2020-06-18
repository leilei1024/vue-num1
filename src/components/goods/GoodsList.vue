<template>
	<div class="goods-list">
		
		<div class="goods-item">
			<img src="../../images/menu1.png">
			<h1 class="title">啊就是都旧爱</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥999</span>
					<span class="old">￥888</span>
				</p>
				 <p class="sell">
					 <span>热卖中</span>
					 <span>剩6件</span>
				 </p>
			</div>
		</div>
		
		<div class="goods-item">
			<img src="../../images/menu1.png">
			<h1 class="title">啊就是都旧爱啊就是啊就是都旧爱啊就是都旧爱</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥999</span>
					<span class="old">￥888</span>
				</p>
				 <p class="sell">
					 <span>热卖中</span>
					 <span>剩6件</span>
				 </p>
			</div>
		</div>
		
		<div class="goods-item">
			<img src="../../images/menu1.png">
			<h1 class="title">啊就是都旧爱</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥999</span>
					<span class="old">￥888</span>
				</p>
				 <p class="sell">
					 <span>热卖中</span>
					 <span>剩6件</span>
				 </p>
			</div>
		</div>
		
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		padding: 7px;
		justify-content: space-between;
		
		.goods-item{
			width: 49%;
			border: 1px solid #ccc;
			box-shadow: 0 0 8px #ccc;
			margin: 3px 0;
			padding: 2px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			min-height: 293px;
			
			img{
				width: 100%;
			}
			.title{
				font-size: 14px;
			}
			.info{
				background-color: #eee;
				border-radius: 10px;
				p{
					margin: 0;
					padding: 5px;
				}
				.price{
					.now{
						color: red;
						font-weight: bold;
						font-size: 16px;
					}
					.old{
						text-decoration: line-through;
						font-size: 12px;
						margin-left: 10px;
					}
				}
				.sell{
					display: flex;
					justify-content: space-between;
					font-size: 12px;
				}
			}
		}
		
	}
</style>
