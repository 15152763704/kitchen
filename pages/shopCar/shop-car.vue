<template>
	<view class="">
		<shop-car-cpt :list="goodsProducts" @accounts="accounts">
			
		</shop-car-cpt>
	</view>
</template>

<script>
	export default {
		components: {
			// goodsList
		},
		data() {
			return {
				// searchValue: ""
				goodsProducts: [
					{
					name: '杏园茶坊（虹桥坊店）',
					checked: 1,                     // 1未选，2选中
					goods: [{
						img: '/static/ycfs_pic5.png',
						title: '咖喱鲜虾',
						remark: '1碗',
						price: '20.00',
						number: 1,
						checked: 1
					}, {
						img: '/static/ycfs_pic4.png',
						title: '咖喱鲜虾',
						remark: '1碗',
						price: '5.20',
						number: 1,
						checked: 1
					}],
					packCost: '3.50',
					dispatchingCost: '2.00',
					discount: '8'
				},{
					name: '杏园茶坊（虹桥坊店）',
					checked: 1,
					goods: [{
						img: '/static/ycfs_pic3.png',
						title: '咖喱鲜虾',
						remark: '1碗',
						price: '12.00',
						number: 1,
						checked: 1
					}, {
						img: '/static/ycfs_pic2.png',
						title: '咖喱鲜虾',
						remark: '1碗',
						price: '8.00',
						number: 1,
						checked: 1
					}],
					packCost: '2.50',
					dispatchingCost: '0.00',
					discount: '2'
				},
				],
			}
		},
		onLoad: function(option) {

		},
		methods: {
			// #ifdef APP-PLUS  
			// toBack() {
			// 	let webView = this.$mp.page.$getAppWebview();  
			// 	webView.setTitleNViewButtonStyle(0, {
			// 	    text: 'hello',  
			// 	});
			// },
			// #endif
			// delect(e){
			// 	console.log(e);
			// },
			accounts(e){
				console.log(e);
				uni.navigateTo({
					url: "/pages/orderForm/order-form"
				})
			}
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;

		},
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {
			// console.log(e[0].text)
			uni.showToast({
				title: '点击了' + e.text
			})
			// let webView = this.$mp.page.$getAppWebview();
			// webView.setTitleNViewButtonStyle(0, {
			// 	text: '',
			// });
		}
		// #endif
	}
</script>

<style lang="scss" scoped>
.shop-car {
		width: 750rpx;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #F5F5F5;
	}
</style>
