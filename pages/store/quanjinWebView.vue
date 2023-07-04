<template>
	<view>
		<web-view :src="param" ></web-view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				param : '',
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.imgPath); //打印出上个页面传递的参数。
			this.param = '../../hybrid/html/quanjin.html?imgPath='+option.imgPath;
		}
	}
</script>

<style>
</style>