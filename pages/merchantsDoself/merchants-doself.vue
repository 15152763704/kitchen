<template>
	<view class="merchants-doself">
		<view v-if="index === 0" class="">
			<view class="title">
				<view class="" style="margin-bottom: 30rpx; position: relative;">
					<image @click="toBack()" style="width: 17rpx; height: 30rpx; position: absolute; top: 12rpx; left: 30rpx;" src="../../static/bdjg_back.png" mode=""></image>
					<text>商家自制</text>
				</view>
				<!-- 搜索 -->
				<f-sticky :scrollTop="scrollTop" :offsetTop="offsetTop" :enable="enable" :zIndex="10">
					<view v-if="scrollTop >= 110" class="" style="width: 750rpx; height: 60rpx; background-color: #F2F3F4;"></view>
					<view class="search-ct" style="" :class="scrollTop >= 110?'actived':''">
						<view class="search">
							<image src="/static/search.png" mode=""></image>
							<text>请输入商家或商品名称</text>
						</view>
					</view>
					<view class="" style="width: 750rpx; height: 18rpx; background-color: #F2F3F4;"></view>
				</f-sticky>	
			</view>
			<!-- 推荐 -->
			<view class="recommended">
				<recommend-module-mdoself :shopList="recommendObj" style="margin-left: 20rpx;"></recommend-module-mdoself>
				<f-sticky :scrollTop="scrollTop" :offsetTop="146" :enable="enable" :zIndex="10">
					<filtrate-component @sendShopTypeId="getShopTypeId" @sendSortType="getSortType" :filtrateList="filtrateList" :scrollTopt="scrollTop" :indexID="indexID" style="margin-top: 16rpx; margin-left: 20rpx;"></filtrate-component>
				</f-sticky>	
				<cgood-list-mdoself :shopList="shopList" :indexID="indexID" style="margin-left: 20rpx;"></cgood-list-mdoself>
				<view class="isBottom">
					<text class="isBottom-leftLine"></text>
					<!-- <text v-if="shopList.length >= shopTotal" class="isBottom-text">已经到底啦</text> -->
					<text class="isBottom-text">已经到底啦</text>
					<!-- <text v-else class="isBottom-text">加载中...</text> -->
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
		<!-- 底部tabbar -->
		<!-- 页面 -->
		<shoppingCart v-if="index === 1"/>
		<mine v-if="index === 2"/>
		<!-- 底部导航 -->
		<foo-bar @toIndex="toIndex" :zlyd="zlyd" :isFrom="isFrom"></foo-bar>
	</view>
</template>

<script>
	import mine from  './mine/mine.vue'
	import shoppingCart from  './shoppingCart/shopping-cart.vue'
	import fooBar from  '@/components/fooBar/fooBar'
	
	import merchantsDoself from '@/api/merchantsDoself/merchantsDoself.js';
	export default {
	    components: {
			mine,
			shoppingCart,
			fooBar
	    },
		data() {
			return {
				index: 0,
				zlyd: 0, // 再来一单
	            scrollTop:0,
	            enable:true,//是否吸顶
	            offsetTop: '0',
				indexID: null,
				isFrom: "1",
				filtrateList: [
					{
						'shopTypeId': '',
						'shopTypeName': '全部',
						'imgUrl':'/static/sjzz_all.png',
						'isChecked': true
					}
				],
				shopList: [],
				shopTotal: null,
				listPortForm: {
					pageNum: 1,
					pageSize: 10,
					searchValue: '',
					goodTypeId: '',
					latitude: 0,
					longitude: 0,
					sortType: '1'
				},
				returnMsg: '',
				recommendObj: {},
				myLocation: {}
			}
		},
		onLoad(option) {
			if(option.zlyd) {
				this.zlyd = 1;
				this.index = 1;
			}
	        this.indexID = option.ID;
			this.listPortForm.latitude = uni.getStorageSync('location_key').latitude;
			this.listPortForm.longitude = uni.getStorageSync('location_key').longitude;
			this.getShopListForRec();
			this.getSelfMadeGoodType();
		},
		methods: {
	        toIndex(index){
	        	// index 当前页面的索引
	        	this.index = index
	        },
			toBack() {
				uni.navigateBack({
					delta: 1,
					// animationType: 'slide-out-bottom',
					// animationDuration: 200
				});
			},
			getShopTypeId(shopTypeId) {
				// console.log(shopTypeId)
				// this.shopList = [];
				this.listPortForm.pageNum = 1;
				this.listPortForm.goodTypeId = shopTypeId;
				this.getShopListForFilt();
			},
			getSortType(sortType) {
				this.listPortForm.pageNum = 1;
				this.listPortForm.sortType = sortType;
				this.getShopListForFilt();
			},
			// 获取商家列表
			getShopListForRec() {
				let pageNum = 1;
				let pageSize = 1;
				let searchValue = '';
				let goodTypeId = this.listPortForm.goodTypeId;
				
				let latitude = this.listPortForm.latitude;
				let longitude = this.listPortForm.longitude;
				let sortType = this.listPortForm.sortType;
				merchantsDoself.getSelfMadeShopList(pageNum, pageSize, searchValue, goodTypeId, latitude, longitude, sortType).then(res => {
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
				let goodTypeId = this.listPortForm.goodTypeId;
				
				let latitude = this.listPortForm.latitude;
				let longitude = this.listPortForm.longitude;
				let sortType = this.listPortForm.sortType;
				merchantsDoself.getSelfMadeShopList(pageNum, pageSize, searchValue, goodTypeId, latitude, longitude, sortType).then(res => {
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
				let goodTypeId = this.listPortForm.goodTypeId;
				
				let latitude = this.listPortForm.latitude;
				let longitude = this.listPortForm.longitude;
				let sortType = this.listPortForm.sortType;
				merchantsDoself.getSelfMadeShopList(pageNum, pageSize, searchValue, goodTypeId, latitude, longitude, sortType).then(res => {
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
			getSelfMadeGoodType() {
				merchantsDoself.getSelfMadeGoodType().then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.rows)
						for (var i = 0; i < res.rows.length; i++) {
							res.rows[i].shopTypeId = res.rows[i].id;
							res.rows[i].shopTypeName = res.rows[i].name;
							res.rows[i].imgUrl = res.rows[i].url;
							res.rows[i].isChecked = false;
						}
						this.filtrateList = this.filtrateList.concat(res.rows);
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
		},
		onReachBottom() {
			// console.log('触底啦~')
			if (this.shopList.length >= this.shopTotal) return;
			this.listPortForm.pageNum++;
			this.getShopList();
		},
	    onPageScroll(e) {
	    	this.scrollTop = e.scrollTop;
	    },
	}
</script>

<style lang="scss" scoped>
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
	.merchants-doself {
		.isBottom {
			position: relative;
			// margin-top: 22rpx;
			margin-bottom: 42rpx;
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
		width: 750rpx;
		// height: 1600rpx;
		// border-top: 0.2rpx solid #78DDFD;
		.title {
			.actived {
				border-radius: 0!important;
			}
			width: 750rpx;
			height: 270rpx;
			font-size: 40rpx;
			color: #FFFFFF;
			font-weight: 500;
			background: linear-gradient(to right, #69B8D1 , #78DDFD);
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
			padding-bottom: 88rpx;
		}
	}
</style>
