<template>
	<view class="store-home">
		<view v-if="index === 0" class="">
			<view class="store-module_1" :style="{ backgroundImage: 'url(' + (doorPicInfo.filePath ? doorPicInfo.filePath : '') + ')' }">
				<!-- 占位 -->
				<view class="" @click="goQuanjing" style="width: 750rpx; height: 220rpx; display: flex; padding-top: 40rpx; align-items: center; justify-content: center; box-sizing: border-box;">
				<!-- <view class="" style="width: 750rpx; height: 220rpx; padding-left: 30rpx; display: flex; align-items: center; box-sizing: border-box;"> -->
					<!-- <image @click="toBack()" style="width: 64rpx; height: 56rpx;" src="../../static/arrow-left.png" mode=""></image> -->
					<image @click="" style="width: 84rpx; height: 56rpx;" src="../../../static/dpzy_VRquanjing.png" mode=""></image>
				</view>
				<view class="store-info">
					<image style="width: 124rpx; height: 124rpx; border-radius: 10rpx; position: absolute; top: -16rpx; right: 32rpx;" :src="storeInfo.shopImgUrl" mode=""></image>
					<!-- 商家名称 -->
					<view class="">
						<text class="store-info-name">{{ storeInfo.name }}</text>
					</view>
					<!-- 评分 配时 月售 人均 -->
					<view class="store-info-intro">
						<view class="store-info-score">
							<image style="width: 20rpx; height: 20rpx;" src="../../../static/star-fill.png" mode=""></image>
							<text class="">{{ storeInfo.score? Number(storeInfo.score).toFixed(1):'0.0' }}分</text>
						</view>
						<view class="store-info-ndtime">
							<image style="width: 20rpx; height: 20rpx;" src="../../../static/dpzy_clock.png" mode=""></image>
							<text class="">商家自配30分钟</text>
						</view>
						<view class="store-info-sales">
							<image style="width: 20rpx; height: 20rpx;" src="../../../static/dpzy_yueshou2x.png" mode=""></image>
							<text class="">月售{{ storeInfo.monthSellNum? storeInfo.monthSellNum:0 }}</text>
						</view>
						<view class="store-info-percapita">
							<image style="width: 17.6rpx; height: 18.4rpx;" src="../../../static/dpzy_daocha.png" mode=""></image>
							<text class="">人均￥{{ storeInfo.perCapita?Number(storeInfo.perCapita).toFixed(0):0 }}</text>
						</view>
					</view>
					<!-- 优惠券 -->
					<view class="store-info-disCoupons">
						<!-- 未领取 -->
						<view class="" style="display: flex; margin-right: 32rpx; margin-top: 10rpx;"
							v-for="(couponItem,couponIndex) in storeCouponCard" :key="couponIndex + 1">
							<view class="disCoupons-nc" :class="couponItem.received?'disCoupons-nc-isUsed':''">
								<text style="font-size: 18rpx; font-weight: 500;">￥</text><text
									class="disCoupons-num">{{ couponItem.reduceMoney }}</text><text
									class="disCoupons-condition">满{{ couponItem.fullMoney }}可用</text>
							</view>
							<view @click="receiveCoupon(couponItem)" class="disCoupons-s"
								:class="couponItem.received?'disCoupons-s-isUsed':''">
								<text class="disCoupons-status">{{ couponItem.received?'已领':'领' }}</text>
							</view>
						</view>
						<!-- 已领取 -->
						<view class="" style="display: flex;">
							<!-- <view class="disCoupons-nc disCoupons-nc-isUsed">
								<text class="disCoupons-num">￥3</text><text class="disCoupons-condition">满22可用</text>
							</view>
							<view class="disCoupons-s disCoupons-s-isUsed">
								<text class="disCoupons-status">已领</text>
							</view> -->
						</view>
					</view>
					<!-- 满减 -->
					<view class="store-info-act">
						<!-- <view class="act-fullreduce" v-if="storeInfo.selfMadeGoodCouponCard">
							<template v-for="(item,index) in storeInfo.selfMadeGoodFullReduceArr">
								<text class="fullreduce-text">{{ item }}</text>
								<text class="fullreduce-textline" :class="{'theLast': index == storeInfo.selfMadeGoodFullReduceArr.length - 1}"></text>
							</template>
						</view> -->
					</view>
					<!-- 公告 -->
					<view class="store-info-notice">
						<!-- 内容 -->
						<!-- <view > -->
							<text class="notice-content">公告：{{ storeInfo.shopNotice? storeInfo.shopNotice:'欢迎光临，很高兴为您服务～' }}</text>
						<!-- </view> -->
						<!-- 更多 -->
						<!-- <view class="notice-more"> -->
							<image style="width: 14rpx; height: 8rpx;" src="../../../static/bottom.png" mode=""></image>
						<!-- </view> -->
					</view>
				</view>
			</view>
			<!-- 筛选分类 -->
			<f-sticky :scrollTop="scrollTop" :offsetTop="156" :enable="enable" :zIndex="10">
			<view class="dp-tabs flex">
				<view class="fs-30 mg-right-60" style="position: relative;">
					<text @click="clickTabs(0)" :class="tabSelected == 0? 'actived':''">综合</text>
				</view>
				<view class="fs-30 mg-right-60" style="position: relative;">
					<text @click="clickTabs(1)" :class="tabSelected == 1? 'actived':''">销量</text>
				</view>
				<view class="fs-30 mg-right-60" style="position: relative;">
					<text @click="clickTabs(2)" :class="tabSelected == 2? 'actived':''">新品</text>
				</view>
				<view class="fs-30 flex" style="position: relative;">
					<text @click="clickTabs(3)" :class="(tabSelected == 3 || tabSelected == 4)? 'actived':''">价格</text>
					<!-- <view v-if="priceSort == 0" @click="clickTabsPrice()" class="" style="display: flex; flex-direction: column; margin-left: 10rpx; margin-top: 16rpx;">
						<image style="width: 8rpx; height: 6rpx; margin-bottom: 4rpx;" src="../../../static/sjzz_dp_sort3.png" mode=""></image>
						<image style="width: 8rpx; height: 6rpx;" src="../../../static/sjzz_dp_sort2.png" mode=""></image>
					</view> -->
					<view v-if="priceSort == 4" @click="clickTabsPrice()" class="" style="display: flex; flex-direction: column; margin-left: 10rpx; margin-top: 16rpx;">
						<image style="width: 8rpx; height: 6rpx; margin-bottom: 4rpx;" src="../../../static/sjzz_dp_sort1.png" mode=""></image>
						<image style="width: 8rpx; height: 6rpx;" src="../../../static/sjzz_dp_sort2.png" mode=""></image>
					</view>
					<view v-if="priceSort == 3" @click="clickTabsPrice()" class="" style="display: flex; flex-direction: column; margin-left: 10rpx; margin-top: 16rpx;">
						<image style="width: 8rpx; height: 6rpx; margin-bottom: 4rpx;" src="../../../static/sjzz_dp_sort3.png" mode=""></image>
						<image style="width: 8rpx; height: 6rpx;" src="../../../static/sjzz_dp_sort4.png" mode=""></image>
					</view>
				</view>
			</view>
			</f-sticky>
			<!-- 商品列表 -->
			<view class="" style="box-sizing: border-box; padding: 22rpx 0 0 18rpx; background-color: #FFFFFF;">
				<template v-for="(item,index) in goodslist">
					<view class="goods-item" @click="toDetails(item)">
						<image style="width: 350rpx; height: 276rpx; margin-bottom: 8rpx;" :src="item.imageUrl" mode=""></image>
						<view class="fw-500 fs-30">
							<text>{{ item.name }}</text>
						</view>
						<view class="fs-20" style="color: #F2C050;">
							<text>本店热销第{{ index + 1 }}名</text>
						</view>
						<view class="fs-32 fw-600" style="color: #F75732; margin-top: 8rpx"> 
							<text>￥{{ item.price }}</text>
							<text class="fs-16" style="color: #808080; margin-left: 24rpx;">200+付款</text>
						</view>
					</view>
				</template>
			</view>
			<view class="isBottom">
				<text class="isBottom-leftLine"></text>
				<!-- <text v-if="shopList.length >= shopTotal" class="isBottom-text">已经到底啦</text> -->
				<text class="isBottom-text">已经到底啦</text>
				<!-- <text v-else class="isBottom-text">加载中...</text> -->
				<text class="isBottom-rightLine"></text>
			</view>
		</view>
		<!-- 底部tabbar -->
		<!-- 页面 -->
		<!-- <shoppingCart v-if="index === 1"/>
		<mine v-if="index === 2" style="max-height: calc(100vh - 120rpx);"/> -->
		<!-- 底部导航 -->
		<!-- <foo-bar @toIndex="toIndex" :isFrom="isFrom"></foo-bar> -->
	</view>
</template>

<script>
	import shoppingCart from  '../shoppingCart/shopping-cart.vue'
	import mine from  '../mine/mine.vue'
	import fooBar from  '@/components/fooBar/fooBar'
	
	import file from '@/api/file/file.js'
	import shop from '@/api/shop/shop.js'
	import merchantsDoself from '@/api/merchantsDoself/merchantsDoself.js';
	export default {
	    components: {
			mine,
			shoppingCart,
			fooBar
	    },
		data() {
			return {
				shopId: '',
				index: 0,
	            scrollTop:0,
	            enable:true,//是否吸顶
	            offsetTop: '0',
				indexID: null,
				isFrom: '1',
				tabSelected: '0',
				priceSort: '3',
				scrollTop: 0,
				storeInfo: {},
				storeCouponCard: {},
				doorPicInfo:{},
				listPortForm: {
					shopId: '',
					sort: '0'
				},
				goodslist: []
			}
		},
		onLoad(option) {
	        this.indexID = option.ID;
			this.shopId = option.id;
			this.getShopDetailsById(option.id);
			this.getSelfMadeGoodCouponCard(option.id);
		},
		methods: {
	        toIndex(index){
	        	// index 当前页面的索引
	        	this.index = index
	        	// uni.setNavigationBarTitle({
	        	// 	title: none
	        	// });
	        },
			toBack() {
				uni.navigateBack({
					delta: 1,
					// animationType: 'slide-out-bottom',
					// animationDuration: 200
				});
			},
			clickTabs(index) {
				this.tabSelected = index;
				if(index == 3 && this.priceSort != '0') {
					this.listPortForm.sort = this.priceSort;
				}else {
					this.listPortForm.sort = index;
				}
				this.getListByShopId();
			},
			clickTabsPrice() {
				this.tabSelected = 3;
				switch (this.priceSort){
					case '0':
						this.priceSort = '3';
						break;
					case '3':
						this.priceSort = '4';
						break;
					case '4':
						this.priceSort = '3';
						break;
					default:
						break;
				}
				this.listPortForm.sort = this.priceSort;
				this.getListByShopId();
			},
			toDetails(item) {
				uni.navigateTo({
					url: '../mdoselfDetails/mdoself-details?id=' + item.id +'&shopId=' + item.shopId
				})
			},
			// 查询店铺详情
			getShopDetailsById(id) {
				// let id = this.listPortForm.pageNum;
				shop.getShopDetailsById(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.data)
						// console.log(res.data.isMyLikeShop);
						this.storeInfo = res.data;
						// if (res.data.enviroPic) {
						// 	this.getFileUrl(res.data.enviroPic)
						// }
						if (res.data.doorPic) {
							this.getDoorFileUrl(res.data.doorPic)
						}
						this.getListByShopId();
						// let webView = this.$mp.page.$getAppWebview();
						// if(res.data.isMyLikeShop){
						// 	webView.setTitleNViewButtonStyle(0, {
						// 		"text": '已收藏',
						// 		"width": "70px"
						// 	});
						// }else {
						// 	webView.setTitleNViewButtonStyle(0, {
						// 		"text": '收藏店铺',
						// 		"width": "80px"
						// 	});
						// }
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
						title: err,
						icon: 'none'
					});
					// console.log(err)
				});
			},
			goQuanjing(){
				if(this.doorPicInfo){
					uni.navigateTo({
						url: '/pages/store/quanjinWebView?imgPath='+this.doorPicInfo.filePath
					});
				}
			},
			getDoorFileUrl(fileid) {
				file.getFileUrl(fileid).then(res => {
					if (res.code == 200) {
						this.doorPicInfo = res.rows[0];
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
			getSelfMadeGoodCouponCard(id) {
				// let id = this.listPortForm.pageNum;
				merchantsDoself.getSelfMadeGoodCouponCard(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.rows)
						this.storeCouponCard = res.rows
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
			// 领取店铺优惠券
			receiveCoupon(item) {
				if (!item.received) {
					// console.log(item.id)
					this.getSelfMadeGoodUserCouponCard(item.id);
				}
			},
			getSelfMadeGoodUserCouponCard(id) {
				merchantsDoself.getSelfMadeGoodUserCouponCard(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						uni.showToast({
							title: '领取成功',
						});
						this.getSelfMadeGoodCouponCard(this.shopId);
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
			// 当前店铺自制商品列表
			getListByShopId() {
				let shopId = this.shopId;
				let sort = this.listPortForm.sort;
				
				merchantsDoself.getListByShopId(shopId, sort).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// pageNum pageSize
						this.goodslist = res.rows;
					} else if (res.code == 401) {
						this.returnMsg = res.msg + '，请重新登录';
						// this.dialogToggle();
					} else {
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
			}
		},
	    onPageScroll(e) {
	    	this.scrollTop = e.scrollTop;
	    },
	}
</script>

<style lang="scss" scoped>
	.flex {
		display: flex;
	}
	.fs-16 {
		font-size: 16rpx;
	}
	
	.fs-20 {
		font-size: 20rpx;
	}
	.fs-30 {
		font-size: 30rpx;
	}	
	.fs-24 {
		font-size: 24rpx;
	}
	.fs-32 {
		font-size: 32rpx;
	}
	.fw-600 {
		font-size: 600;
	}
	.fw-500 {
		font-weight: 500;
	}
	.store-home {
		.isBottom {
			position: relative;
			margin-top: 22rpx;
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
		width: 750rpx;
		// height: 1600rpx;
		// border-top: 0.2rpx solid #78DDFD;
		// padding-bottom: 120rpx;
		box-sizing: border-box;
		.dp-tabs {
			width: 750rpx;
			height: 80rpx;
			background-color: #FFFFFF;
			// margin-top: 18rpx;
			padding-left: 22rpx;
			padding-top: 18rpx;
			box-sizing: border-box;
			border-bottom: 0.6rpx solid #E3E3E3;
			color: #56575B;
			.mg-right-60 {
				margin-right: 60rpx;
			}
			.actived {
				color: #000000;
				font-weight: 500;
				::after {
				  content: '';
				  position: absolute;
				  width: 36rpx; // 边框的宽度
				  height: 2rpx;
				  // border-radius: 2rpx;
				  left: 50%; //距离 view 标签的距离
				  bottom: 0rpx;
				  background-color: #FFBD2B; //  颜色
				  transform: translateX(-50%);
				  
				}
			}
		}
		.goods-item {
			display: inline-block;
			margin-right: 14rpx;
			margin-bottom: 40rpx;
		}
		
	}
</style>
<style>
	.store-module_1 {
		/* background-image: url(../../../static/store-bag.png); */
		background-repeat: no-repeat;
		/* background-size: 100%; */
		background-size: cover;
		width: 750rpx;
		/* height: 430rpx; */
		background-color: rgb(0, 0, 0, 0.5);
		background-blend-mode: multiply;
	}
	.store-info {
		position: relative;
		width: 750rpx;
		/* height: 352rpx; */
		background-color: #FFFFFF;
		border-radius: 26rpx 26rpx 0 0;
		padding-left: 30rpx;
		padding-right: 46rpx;
		padding-top: 18rpx;
		padding-bottom: 80rpx;
		box-sizing: border-box;
	}
	.store-info-name {
		display: inline-block;
		line-height: 60rpx;
		height: 60rpx;
		font-size: 44rpx;
		font-weight: 500;
		color: #000000;
	} 
	.store-info-intro {
		margin-top: 8rpx;
		margin-bottom: 20rpx;
		display: flex;
	}
	.store-info-score {
		display: flex;
		align-items: center;
		margin-right: 22rpx;
	}
	.store-info-score text {
		display: inline-block;
		height: 28rpx;
		line-height: 28rpx;
		color: #F75732;
		font-size: 20rpx;
		font-weight: 500;
		margin-left: 4rpx;
	}
	.store-info-ndtime, .store-info-sales, .store-info-percapita {
		display: flex;
		align-items: center;
		margin-right: 22rpx;
	}
	.store-info-ndtime text, .store-info-sales text, .store-info-percapita text {
		display: inline-block;
		height: 28rpx;
		line-height: 28rpx;
		color: #000000;
		font-size: 20rpx;
		font-weight: 400;
		margin-left: 4rpx;
	}
	.store-info-disCoupons {
		/* height: 44rpx; */
		display: flex;
		flex-wrap: wrap;
	}
	.disCoupons-nc {
		height: 40rpx;
		/* line-height: 44rpx; */
		background-color: #F75732;
		border-radius: 4rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 2rpx 6rpx;
		box-sizing: border-box;
	}
	.disCoupons-status {
		font-size: 24rpx;
	}
	.disCoupons-nc-isUsed {
		background-color: #FFC7BA!important;
		color: #F75732!important;
		border-top: 0.6rpx solid #F75732!important;
		border-left: 0.6rpx solid #F75732!important;
		border-bottom: 0.6rpx solid #F75732!important;
	}
	.disCoupons-num {
		font-size: 24rpx;
		font-weight: 500;
	}
	.disCoupons-condition {
		font-size: 20rpx;
		margin-left: 14rpx;
	}
	.disCoupons-s {
		height: 40rpx;
		/* line-height: 44rpx; */
		background-color: #F75732;
		border-radius: 4rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 8rpx 14rpx;
		box-sizing: border-box;
		border-left: 0.6rpx dashed #FFFFFF;
	}
	.disCoupons-s-isUsed {
		background-color: #FFC7BA!important;
		color: #F75732!important;
		border-top: 0.6rpx solid #F75732!important;
		border-left: 0.6rpx dashed #F75732!important;
		border-bottom: 0.6rpx solid #F75732!important;
		border-right: 0.6rpx solid #F75732!important;
	}
	.store-info-act {
		display: flex;
		margin-top: 12rpx;
		margin-bottom: 24rpx;
	}
	.act-fullreduce {
		display: flex;
		flex-direction: row;
		height: 32rpx;
		/* line-height: 32rpx; */
		border-radius: 8rpx;
		border: 0.6rpx solid rgba(247, 87, 50, 0.7764705882352941);
		padding-top: 2rpx;
		padding-bottom: 2rpx;
		align-items: center;
	}
	.fullreduce-text {
		height: 28rpx;
		line-height: 28rpx;
		font-size: 20rpx;
		color: #F75732;
		/* border-right: 1px solid #000000; */
		padding-left: 14rpx;
		padding-right: 14rpx;
	}
	.fullreduce-textline {
		height: 18rpx;
		line-height: 18rpx;
		border-right: 0.6rpx solid rgba(247, 87, 50, 0.7764705882352941);
	}
	.theLast {
		border-right: none!important;
	}
	.store-info-notice {
		display: flex;
		width: 100%;
		
		justify-content: space-between;
		align-items: center;
	}
	.notice-content {
		display: inline-block;
		line-height: 28rpx;
		height: 28rpx;
		font-size: 20rpx;
		font-weight: 400;
		color: #808080;
	}
</style>
