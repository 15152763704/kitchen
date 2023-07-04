<template>
	<view style="background-color: #F1F1F1;">
		<view class="cont">
			<sjzz-car :list="orderList" @accounts="accounts" @delect="delect">

			</sjzz-car>
		</view>
	</view>
</template>

<script>
	import merchantsDoself from '@/api/merchantsDoself/merchantsDoself.js';
	export default {
		data() {
			return {
				orderList: []
			}
		},
		mounted() {
			// console.log('getListAllUserCar');
			this.getListAllUserCar('');
		},
		onShow() {
			
		},
		onLoad() {
			// console.log(555)
		},
		methods: {
			// 查询全部店铺购物车
			getListAllUserCar(userCarIds) {
				// let id = this.listPortForm.pageNum;
				merchantsDoself.getListAllUserCar(userCarIds).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.data)
						this.orderList = res.data;
					} else if (res.code == 401) {
						// this.returnMsg = res.msg + '，请重新登录';
						// this.dialogToggle();
					} else {
						// uni.hideLoading();
						// console.log(res.msg)
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
					}

				}).catch(err => {
					// uni.hideLoading();
					uni.showToast({
						title: err,
						icon: 'none'
					});
					// console.log(err)
				});
			},
			// 删除
			delect(foodId) {
				// console.log(foodId)
				this.deleteUserCarByFoodId(foodId);
			},
			// 批量删除接口
			deleteUserCarByFoodId(foodId) {
				merchantsDoself.deleteUserCarByFoodId(foodId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						uni.showToast({
							title: "从购物车移除",
							icon: 'success'
						})
						// this.getShopFoodTree(this.shopId);
						this.orderList = [];
						this.getListAllUserCar('');
					} else if (res.code == 401) {
						// this.returnMsg = res.msg + '，请重新登录';
						// this.dialogToggle();
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
			}
		}
	}
</script>

<style>
	.cont {
		width: 100vw;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
