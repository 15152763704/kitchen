<template>
	<view class="my-footprint">
		<view class="footprint-list">
			<view v-if="myFootprintList.length" class="footprint-li">
				<footprint-item :list="myFootprintList" @delect="accounts" :isCut="isCut"></footprint-item>
			</view>
			<view v-else class=""
				style="display: flex; flex-direction: column; align-items: center; margin-top: 360rpx; background-color:#F5F5F5">
				<image style="width: 96rpx;margin-bottom: 22rpx;" src="/static/none.png" mode="widthFix"></image>
				<text style="font-size: 24rpx; color: #56575B;">暂无足迹～</text>
			</view>
		</view>
	</view>
</template>

<script>
	import footprintItem from "./footprint-item.vue"
	import shop from '@/api/shop/shop.js'
	import * as util from '../../common/util.js'
	
	var renderTime = util.renderTime;
	export default {
		components: {
			footprintItem
		},
		data() {
			return {
				isCut: false,
				// goodsProducts: [{
				// 	name: '2022-05-31',
				// 	checked: 1,                     // 1未选，2选中
				// 	goods: [{
				// 		img: '/static/ycfs_pic5.png',
				// 		title: '咖喱鲜虾',
				// 		remark: '1碗',
				// 		price: '20.00',
				// 		number: 1,
				// 		checked: 1
				// 	}, {
				// 		img: '/static/ycfs_pic4.png',
				// 		title: '咖喱鲜虾',
				// 		remark: '1碗',
				// 		price: '5.20',
				// 		number: 1,
				// 		checked: 1
				// 	}],
				// 	packCost: '3.50',
				// 	dispatchingCost: '2.00',
				// 	discount: '8'
				// },{
				// 	name: '2022-05-30',
				// 	checked: 1,
				// 	goods: [{
				// 		img: '/static/ycfs_pic3.png',
				// 		title: '咖喱鲜虾',
				// 		remark: '1碗',
				// 		price: '12.00',
				// 		number: 1,
				// 		checked: 1
				// 	}, {
				// 		img: '/static/ycfs_pic2.png',
				// 		title: '咖喱鲜虾',
				// 		remark: '1碗',
				// 		price: '8.00',
				// 		number: 1,
				// 		checked: 1
				// 	}],
				// 	packCost: '2.50',
				// 	dispatchingCost: '0.00',
				// 	discount: '2'
				// }],
				myFootprintList: []
			}
		},
		onLoad: function(option) {
			this.findMyFootprint();
		},
		methods: {
			accounts(e){
				// console.log(e);
				// uni.navigateTo({
				// 	url: "/pages/orderForm/order-form"
				// })
				// uni.showModal({
				//     content: JSON.stringify(e)
				// })
			},
			// 获取足迹列表
			findMyFootprint() {
				shop.findMyFootprint().then(res => {
					if (res.code == 200) {
						this.myFootprintList = res.data;
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;

		},
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {
			this.isCut = !this.isCut;
			// console.log(e[0].text)
			// uni.showToast({
			// 	title: '点击了' + e.text
			// })
			// let webView = this.$mp.page.$getAppWebview();
			// webView.setTitleNViewButtonStyle(0, {
			// 	text: '',
			// });
			// console.log(this.isCut)
		}
		// #endif
	}
</script>

<style lang="scss" scoped>
	.my-footprint {
		
	}
</style>
