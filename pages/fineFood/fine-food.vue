<template>
	<view class="fine-food">
		<view class="title">
			<view class="" style="margin-bottom: 30rpx; position: relative;">
				<image @click="toBack()"
					style="width: 17rpx; height: 30rpx; position: absolute; top: 12rpx; left: 30rpx;"
					src="../../static/bdjg_back.png" mode=""></image>
				<text>美食</text>
			</view>
			<!-- 搜索 -->
			<f-sticky :scrollTop="scrollTop" :offsetTop="offsetTop" :enable="enable" :zIndex="10">
				<view v-if="scrollTop >= 100" class="" style="width: 750rpx; height: 60rpx; background-color: #F2F3F4;">
				</view>
				<view class="search-ct" style="" :class="scrollTop >= 100?'actived':''">
					<view class="search" @click="gotoIndex()">
						<image src="/static/search.png" mode=""></image>
						<text>请输入商家或商品名称</text>
					</view>
				</view>
				<view class="" style="width: 750rpx; height: 18rpx; background-color: #F2F3F4;"></view>
			</f-sticky>
		</view>
		<!-- 推荐 -->
		<view class="recommended">
			<recommend-module :shopList="recommendObj" style="margin-left: 20rpx;"></recommend-module>
			<view class="filtrate-component">
			<f-sticky :scrollTop="scrollTop" :offsetTop="146" :enable="enable" :zIndex="10">
				<filtrate-component @sendShopTypeId="getShopTypeId" :scrollTopt="scrollTop" :filtrateList="filtrateList"
					:indexID="indexID" @sendSortType="getSortType" style="margin-top: 16rpx; margin-left: 20rpx;"></filtrate-component>
			</f-sticky>
			</view>
			<goods-list :shopList="shopList" style="margin-left: 20rpx;"></goods-list>
			<view class="isBottom">
				<text class="isBottom-leftLine"></text>
				<text v-if="shopList.length >= shopTotal" class="isBottom-text">已经到底啦</text>
				<text v-else class="isBottom-text">加载中...</text>
				<text class="isBottom-rightLine"></text>
			</view>
		</view>
		<!-- 购物车 -->
		<!-- <view class="bdjg-gouwuche">
			<image src="../../static/bdjg_gouwuche.png" mode=""></image>
		</view> -->

		<uni-popup ref="alertDialog" type="dialog" style="z-index: 9999">
			<uni-popup-dialog type="info" cancelText="关闭" confirmText="同意" title="" :content="returnMsg"
				@confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import goodsList from '@/components/goodslist/goodslist.vue';

	import shop from '@/api/shop/shop.js'; // 引入api

	export default {
		components: {
			goodsList
		},
		data() {
			return {
				scrollTop: 0,
				enable: true, //是否吸顶
				offsetTop: '0',
				offsetTop2: 0,
				indexID: null,
				shopList: [],
				shopTotal: null,
				listPortForm: {
					pageNum: 1,
					pageSize: 10,
					searchValue: '',
					shopTypeId: '',
					latitude: 0,
					longitude: 0,
					sortType: '1'
				},
				returnMsg: '',
				filtrateList: [{
					'shopTypeId': '32eefa57f384ab5c41f96292bf63cdff',
					'shopTypeName': '全部',
					'imgUrl': '/static/ms_all.png',
					'isChecked': true
				}],
				recommendObj: {},
				myLocation: {}
			}
		},
		onLoad(option) {
			this.$nextTick(() => {
			    this.getStickyH();
			});
			this.indexID = option.ID;
			this.listPortForm.shopTypeId = option.typeid;
			this.listPortForm.latitude = uni.getStorageSync('location_key').latitude;
			this.listPortForm.longitude = uni.getStorageSync('location_key').longitude;
			this.getShopListForRec();
			// this.getShopList();  // 放在getShopListForRec方法里
			this.getListByParentId(option.typeid);
			// console.log('this.scrollTop onLoad:', this.scrollTop)
		},
		methods: {
			// 获取元素距离顶部的高度
			getStickyH() {
			    uni.createSelectorQuery().select('.filtrate-component').boundingClientRect(data => {
			    	// console.log('data.top=======>', data.top)
					this.offsetTop2 = data.top-10;
			    }).exec();
			},
			toBack() {
				uni.navigateBack({
					delta: 1,
					// animationType: 'slide-out-bottom',
					// animationDuration: 200
				});
			},
			// 获取商家列表
			getShopListForRec() {
				let pageNum = 1;
				let pageSize = 1;
				let searchValue = '';
				let shopTypeId = this.listPortForm.shopTypeId;
				
				let latitude = this.listPortForm.latitude;
				let longitude = this.listPortForm.longitude;
				let sortType = this.listPortForm.sortType;
				shop.getShopList(pageNum, pageSize, searchValue, shopTypeId, latitude, longitude, sortType).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.recommendObj = res.rows[0]
						// console.log(this.shopList)
						this.getShopList();
					} else if (res.code == 401) {
						this.returnMsg = res.msg + '，请重新登录';
						this.dialogToggle();
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
						title: err.msg,
						icon: 'none'
					});
				});
			},
			getShopListForFilt() {
				let pageNum = this.listPortForm.pageNum;
				let pageSize = this.listPortForm.pageSize;
				let searchValue = this.listPortForm.searchValue;
				let shopTypeId = this.listPortForm.shopTypeId;
				
				let latitude = this.listPortForm.latitude;
				let longitude = this.listPortForm.longitude;
				let sortType = this.listPortForm.sortType;
				shop.getShopList(pageNum, pageSize, searchValue, shopTypeId, latitude, longitude, sortType).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.total)
						// console.log(res.rows)
						this.shopList = res.rows;
						this.shopTotal = res.total;
						// console.log(this.shopList)
					} else if (res.code == 401) {
						this.returnMsg = res.msg + '，请重新登录';
						this.dialogToggle();
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
						title: err.msg,
						icon: 'none'
					});
				});
			},
			getShopList() {
				let pageNum = this.listPortForm.pageNum;
				let pageSize = this.listPortForm.pageSize;
				let searchValue = this.listPortForm.searchValue;
				let shopTypeId = this.listPortForm.shopTypeId;
				
				let latitude = this.listPortForm.latitude;
				let longitude = this.listPortForm.longitude;
				let sortType = this.listPortForm.sortType;
				shop.getShopList(pageNum, pageSize, searchValue, shopTypeId, latitude, longitude, sortType).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.total)
						// console.log(res.rows)
						this.shopList = this.shopList.concat(res.rows);
						this.shopTotal = res.total;
						// console.log(this.shopList)
					} else if (res.code == 401) {
						this.returnMsg = res.msg + '，请重新登录';
						this.dialogToggle();
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
						title: err.msg,
						icon: 'none'
					});
				});
			},
			// 查询分类列表
			getListByParentId(parentId) {
				shop.getListByParentId(parentId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.filtrateList = this.filtrateList.concat(res.data)
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
						title: err.msg,
						icon: 'none'
					});
				});
			},
			getShopTypeId(shopTypeId) {
				// console.log(shopTypeId)
				// this.shopList = [];
				this.listPortForm.pageNum = 1;
				this.listPortForm.shopTypeId = shopTypeId;
				this.getShopListForFilt();
			},
			getSortType(sortType) {
				this.listPortForm.pageNum = 1;
				this.listPortForm.sortType = sortType;
				this.getShopListForFilt();
			},
			dialogToggle() {
				this.$refs.alertDialog.open()
			},
			dialogConfirm() {
				uni.removeStorageSync('token_key');
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			dialogClose() {
				// console.log('点击关闭')
				uni.removeStorageSync('token_key');
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			gotoIndex() {
				uni.navigateTo({
					url: '/pages/search/search?shopTypeId=' + this.listPortForm.shopTypeId,
					animationType: 'fade-in'
					// animationDuration: 200
				});
			},
		},
		onReachBottom() {
			// console.log('触底啦~')
			if (this.shopList.length >= this.shopTotal) return;
			this.listPortForm.pageNum++;
			this.getShopList();
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
			// console.log('this.scrollTop:', this.scrollTop)
			//获取距离顶部距离
			// const scrollTop = res.scrollTop;
			// if (scrollTop >= 0) {
			// 	// 导航条颜色透明渐变
			// 	if (scrollTop <= 20) {
			// 		this.opacityNum = 0
			// 	} else if (20 < scrollTop && scrollTop <= 100) {
			// 		this.opacityNum = scrollTop / 100
			// 	} else if (scrollTop > 100) {
			// 		this.opacityNum = 1
			// 	}
			// }
			// console.log(this.scrollTop)
		},
	}
</script>

<style lang="scss" scoped>
	page {
		// background: linear-gradient(to right, #FD8931 , #FD8931)!important;
	}

	.bdjg-gouwuche {
		width: 92rpx;
		height: 92rpx;
		border-radius: 50%;
		position: fixed;
		z-index: 10;
		bottom: 200rpx;
		right: 26rpx;

		image {
			width: 92rpx;
			height: 92rpx;
		}
	}

	.fine-food {
		width: 750rpx;
		// height: 1600rpx;
		border-top: 0.2rpx solid #FD8931;

		.isBottom {
			position: relative;
			margin-bottom: 22rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			.isBottom-text {
				font-size: 24rpx;
				color: rgb(186, 186, 186);
				text-align: center;
				margin: 0 20rpx;
			}
			.isBottom-leftLine {
				width: 160rpx;
				height: 4rpx;
				background: #e5e5e5;
			}
			
			.isBottom-rightLine {
				width: 160rpx;
				height: 4rpx;
				background: #e5e5e5;
			}
		}

		.title {
			.actived {
				border-radius: 0 !important;
			}

			width: 750rpx;
			height: 270rpx;
			font-size: 40rpx;
			color: #FFFFFF;
			font-weight: 500;
			background: linear-gradient(to right, #FD8931, #FD8931);
			// display: flex;
			// align-items: center;
			// justify-content: center;
			position: relative;
			// z-index: 9999999;
			text-align: center;
			padding-top: 102rpx;
			box-sizing: border-box;

			.search-ct {
				width: 750rpx;
				height: 94rpx;
				border-radius: 50rpx 50rpx 0 0;
				background-color: #F2F3F4;
				// position: absolute; 
				// bottom: -18rpx;
				box-sizing: border-box;
				padding-top: 22rpx;
				padding-left: 22rpx;
				padding-right: 22rpx;

				.search {
					width: 100%;
					height: 72rpx;
					background-color: #FFFFFF;
					border-radius: 32rpx;
					box-sizing: border-box;
					padding: 16rpx 0;
					font-size: 28rpx;
					color: #808080;
					display: flex;
					align-items: center;

					image {
						width: 28rpx;
						height: 28rpx;
						margin-left: 20rpx;
						margin-right: 16rpx;
					}
				}
			}
		}

		.recommended {
			width: 750rpx;
			// height: 5000rpx;
			// background-color: #fff;
			padding-top: 28rpx;
			// padding-left: 20rpx;
			padding-right: 20rpx;
			box-sizing: border-box;
			// display: flex;
		}
	}
</style>
