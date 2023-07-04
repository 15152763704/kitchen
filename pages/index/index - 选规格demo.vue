<template>
	<view class="sku-page">
		<echone-sku 
			:show="popupShow" 
			 mode="forbidden"
			:theme-color="themeColor" 
			:combinations="combinations" 
			:specifications="specifications" 
			:default-select-index="selectedIndex" 
			:combinations-props="combinationsProps"
			:specifications-props="specificationsProps"
			@close="handleClose" 
			@confirm="handleConfirm"
		></echone-sku>
	</view>
</template>

<script>
	import echoneSku from '@/components/echone-sku/echone-sku'
	
	export default {
		components:{
			echoneSku
		},
		data() {
			return {
				themeColor: '#F18A25',
				popupShow: false,
				combinationsProps: {
					id: 'skuId',
					value: 'skuValue',
					image: 'skuImage',
					price: 'skuPrice',
					stock: 'skuStock'
				},
				specificationsProps: {
					id: 'id',
					list: 'skuList',
					name: 'skuName'
				},
				combinations: [
					{
					  skuId: '1',
					  skuValue: '单人份约220g ￥15,不辣,标准',
					  
					  // skuPrice: 80.0,
					  // skuStock: 1000,
					},
					{
					  skuId: '1',
					  skuValue: '单人份约220g ￥15,不辣,不加香菜',
					  
					  // skuPrice: 80.0,
					  // skuStock: 1000,
					},
					{
					  skuId: '2',
					  skuValue: '单人份约220g ￥15,微辣,标准'
					  
					},
					{
					  skuId: '2',
					  skuValue: '单人份约220g ￥15,微辣,不加香菜'
					  
					},
					{
					  skuId: '1',
					  skuValue: '单人份约220g ￥15,中辣,标准',
				
					},
					{
					  skuId: '1',
					  skuValue: '单人份约220g ￥15,中辣,不加香菜',
									
					},
					{
					  skuId: '2',
					  skuValue: '单人份约220g-￥15,重辣,标准'
					  
					},
					{
					  skuId: '2',
					  skuValue: '单人份约220g-￥15,重辣,不加香菜'
					  
					},
					{
					  skuId: '1',
					  skuValue: '2-3人份约480g ￥30,不辣,标准',
					},
					{
					  skuId: '1',
					  skuValue: '2-3人份约480g ￥30,不辣,不加香菜',
					},
					{
					  skuId: '2',
					  skuValue: '2-3人份约480g ￥30,微辣,标准'
					  
					},
					{
					  skuId: '2',
					  skuValue: '2-3人份约480g ￥30,微辣,不加香菜'
					  
					},
					{
					  skuId: '1',
					  skuValue: '2-3人份约480g ￥30,中辣,标准',
					},
					{
					  skuId: '1',
					  skuValue: '2-3人份约480g ￥30,中辣,不加香菜',
					},
					{
					  skuId: '2',
					  skuValue: '2-3人份约480g ￥30,重辣,标准'
					  
					},
					{
					  skuId: '2',
					  skuValue: '2-3人份约480g ￥30,重辣,不加香菜'
					  
					}
					
				],
				specifications: [
					{
					  skuName: '分量',
					  id: '123',
					  skuList: ['单人份约220g ￥15', '2-3人份约480g ￥30'],
					  // skuList: ['成都市锦江区', '成都市青羊区','成都市武侯区','成都市成华区','成都市金牛区'],
					},
					{
					  skuName: '辣度',
					  id: '456',
					  skuList: ['不辣', '微辣','中辣', '重辣'],
					},
					{
					  skuName: '辅料',
					  id: '789',
					  skuList: ['标准', '不加香菜'],
					},
				],
				selectedIndex: 0,
			}
		},
		onLoad() {
			//异步请求示例
			//this.initData()
		},
		methods: {
			selectSku() {
				this.popupShow = true
			},
			//异步请求示例
			// initData() {
			// 	uni.request({
			// 		url: 'http://xxx/sku/info',
			// 		method: 'GET'
			// 	}).then(res => {
			// 		const result = res[1].data.data
			// 		this.combinations = result.combinations
			// 		this.specifications = result.specifications
			// 		this.selectedSkuIdx = result.selectedSkuIdx
			// 	})
			// },
			handleClose() {
				this.popupShow = false
			},
			handleConfirm(obj) {
				console.log(obj)
				this.popupShow = false
			}
		}
	}
</script>

<style lang="scss">
	.sku-page {
		
	}
</style>
