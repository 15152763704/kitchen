<template>
	<view class="goods-details" style="">
		<!-- 背景+操作按钮 -->
		<view class="gd-module_1"
			:style="{ backgroundImage: 'url(' + (goodsInfo.imageUrl ? goodsInfo.imageUrl : '') + ')' }">
			<view class="handle flex flex-space-between">
				<view class="left">
					<view class="vessel" @click="toBack()">
						<image src="../../../static/dpzy_bottom.png" mode=""></image>
					</view>
				</view>
				<!-- <view class="right flex">
					<view class="vessel" style="margin-right: 12rpx;">
						<image src="../../../static/dpzy_contact.png" mode=""></image>
					</view>
					<uni-badge class="" :text="99" absolute="rightTop" size="small">
						<view class="vessel">
							<image src="../../../static/dpzy_more.png" mode=""></image>
						</view>
					</uni-badge>
				</view> -->
			</view>
		</view>
		<!-- 商品信息 -->
		<view class="gd-module_2">
			<view class="flex flex-space-between mg-bottom-18">
				<view class="pd-left-30 pd-top-30">
					<view class="fs-38 fw-500">
						<text>{{ goodsInfo.name }}</text>
					</view>
					<view class="fs-20" style="margin-top: 8rpx;">
						<text class="info-1" style="">月售{{ goodsInfo.monthSell? goodsInfo.monthSell: 0 }}</text><text
							class="info-1">仅剩{{ goodsInfo.foodNum == '-1'? 999: goodsInfo.foodNum }}件</text>
					</view>
				</view>
				<view class="pd-right-56 pd-top-30" style="text-align: center;">
					<!-- <image style="width: 42rpx; height: 42rpx; vertical-align: middle" src="../../../static/star.png"
						mode=""></image>
					<view class="">
						<text class="c808080 fs-24">收藏</text>
					</view> -->
				</view>
			</view>
			<view class="flex flex-space-between flex-align-items"
				style="padding-left: 24rpx; padding-right: 38rpx; padding-bottom: 24rpx;">
				<view class="">
					<text class="cF75732 fs-44">￥{{ goodsInfo.price }}</text><text v-if="goodsInfo.priceOld"
						class="fs-20"
						style="margin-left: 18rpx; color: #BABABA; text-decoration: line-through;">￥{{ goodsInfo.priceOld }}</text>
				</view>
			</view>
			<!-- <view class="flex">
				<view class="goods-info-fullreduce">
					<template v-for="(item,index) in fullreduceData">
						<image v-if="item.imgurl" style="width: 20rpx; margin-left: 12rpx;" :src="item.imgurl" mode="widthFix"></image>
						<text class="fullreduce-text">{{ item.fullreduce }}</text>
						<text class="fullreduce-textline" :class="{'theLast': index == fullreduceData.length - 1}"></text>
					</template>
				</view>
			</view> -->
		</view>

		<!-- 详情 -->
		<!-- <view class="gd-module_4">
			<view class="fs-24" style="margin-bottom: 16rpx;">
				<text class="c56575B" style="display: inline-block;margin-right: 2rpx; width: 116rpx; color: #808080;">选择</text>
				<text>口味/规格</text>
			</view>
			<view class="fs-24" style="">
				<text class="c56575B" style="display: inline-block;margin-right: 2rpx; width: 116rpx; color: #808080;">参数</text>
				<text>生产日期 品牌...</text>
			</view>
		</view> -->
		<!-- 评价 -->
		<view class="gd-module_5">
			<view class="flex flex-space-between">
				<view class="evaluation-title">
					<text class="fs-36 fw-500">店铺评价</text>
					<text class="fs-24 c56575B">{{'（'+evalList.length+'+）'}}</text>
				</view>
				<view class="evaluation-more" @click="gotoMoreEva()">
					<text class="fs-24">查看全部</text>
					<image style="width: 17rpx; height: 17rpx; margin-left: 4rpx;" src="../../../static/right-2.png"
						mode=""></image>
				</view>
			</view>
			<evaluation-list @evalFilterType="getEvalFilterType" :shopEvalStatics="shopEvalStatics" :evalList="evalList" :marginTop="40" :pdBottom="40"></evaluation-list>
		</view>
		<!-- 商品详情 -->
		<view class="gd-module_6">
			<view class="title">
				<text class="fs-36 fw-500">商品详情</text>
			</view>
			<view class="">
				<uni-swiper-dot class="uni-swiper-dot-box" :info="goodPicList" :current="swiperCurrent" mode="default">
					<swiper :autoplay="false" class="swiper-box" style="width: 686rpx; height: 540rpx"
						@change="swiperChange">
						<swiper-item v-for="(item ,index) in goodPicList" :key="index">
							<view class="swiper-item" style="width: 100%; height: 100%">
								<image style="width: 100%; height: 100%" :src="item.filePath" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>
			<view class="introduce">
				<text>{{ goodsInfo.description }}</text>
			</view>
		</view>
		<!-- 商品导航 -->
		<view class="goods-carts">
			<uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
		<!-- 弹出层 购物车 -->
		<uni-popup ref="popup" type="bottom" background-color="" style="z-index: 9999;">
			<view class="" style="background-color: #FFFFFF;border-radius: 14rpx 14rpx 0 0;">
				<car-cmpt-mdoself :goodsInfo="goodsInfo"></car-cmpt-mdoself>
				<!-- <car-cmpt-mdoself @clearShopcar="clearShopcar" @receviceGoodsNum="receviceGoodsNum"
					:shopCarList.sync="shopCarList" :fullReduceNum="fullReduceNum" :packagePrice="packagePrice"
					:payPrice="payPrice"></car-cmpt-mdoself> -->
			</view>
		</uni-popup>
	</view>
</template>

<script>
	// import carCmptMdoself from '@/components/car-cmpt-mdoself/car-cmpt-mdoself.vue';
	// import  from ""
	import merchantsDoself from '@/api/merchantsDoself/merchantsDoself.js';
	import file from '@/api/file/file.js'
	import shop from '@/api/shop/shop.js'

	export default {
		components: {

		},
		data() {
			return {
				shopId: '',
				scrollTop: 0,
				enable: true, //是否吸顶
				offsetTop: '0',
				evalList: [],
				shopEvalStatics: {},
				goodsInfo: {},
				goodPicList: [],
				swiperCurrent: 0,
				options: [{
					icon: 'shop',
					text: '店铺',
					// info: 2,
					// infoBackgroundColor: '#007aff',
					// infoColor: "#f5f5f5",
				}, {
					icon: 'cart',
					text: '购物车',
					info: 0
				}],
				customButtonGroup: [{
						text: '加入购物车',
						backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
						color: '#fff'
					}
				],
				userCar: {
					goodId: '',
					goodNum: 1
				}
				// fullreduceData: [{
				// 		"imgurl": '/static/dpzy_youhui.png',
				// 		"fullreduce": "6.22折"
				// 	},
				// 	{
				// 		"fullreduce": "限3份"
				// 	}
				// ]
			}
		},
		onLoad(options) {
			// console.log(options.id)
			this.shopId = options.shopId;
			this.getSelfMadeGood(options.id);
		},
		onShow() {
			this.getListUserCar(this.shopId);
		},
		mounted() {
			
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
			// console.log(this.scrollTop)
		},
		methods: {
			toBack() {
				uni.navigateBack({
					delta: 1,
					animationType: 'slide-out-bottom',
					animationDuration: 200,
				});
			},
			gotoMoreEva() {
				uni.navigateTo({
					url: '/pages/merchantsDoself/mine/orders/evaluation?shopId=' + this.shopId
				})
			},
			onClick(e) {
				// uni.showToast({
				// 	title: `点击${e.content.text}`,
				// 	icon: 'none'
				// })
				switch (e.index) {
					case 0:
						uni.navigateBack();
						break;
					default:
						uni.navigateTo({
							url: '/pages/merchantsDoself/mdoselfDetails/shopping-cart?shopId=' + this.shopId
						})
						break;
				}
			},
			buttonClick(e) {
				// console.log(e)
				// this.options[1].info++
				switch (e.index) {
					case 0:
						// console.log('加入购物车')
						// console.log(this.goodsInfo.id)
						this.addSelfMadeGoodUserCar();
						break;
					default:
						// console.log('立即购买')
						// if (this.scPopupShow) {
						// 	this.$refs.popup.close(type)
						// } else {
						// 	this.$refs.popup.open(type)
						// }
						// this.scPopupShow = !this.scPopupShow; // 购物车popup show
						this.$refs.popup.open();
						break;
				}
			},
			// 查询商品详情
			getSelfMadeGood(id) {
				// let id = this.listPortForm.pageNum;
				merchantsDoself.getSelfMadeGood(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.goodsInfo = res.data;
						this.userCar.goodId = res.data.id;
						if (res.data.goodPic) {
							this.getFileUrl(res.data.goodPic);
						}
						this.getShopEvalList(this.shopId, '', '4', '')
						this.findShopEvalStatics(this.shopId, '4');
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
			// 获取文件地址（图片）
			getFileUrl(fileid) {
				file.getFileUrl(fileid).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.rows);
						this.goodPicList = res.rows
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
			getEvalFilterType(type) {
				// console.log(type)
				let recType = type == '-1'? '': type;
				this.getShopEvalList(this.shopId, recType, '4', '');
			},
			findShopEvalStatics(shopId, evalType) {
				shop.findShopEvalStatics({
					shopId,
					evalType
				}).then(res => {
					if (res.code == 200) {
						this.shopEvalStatics = res.data;
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			// 获取评论列表
			getShopEvalList(shopId, filterType, evalType, foodId) {
				shop.getShopEvalList(shopId, filterType, evalType, foodId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res)
						this.evalList = res.rows
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
			// 查询指定店铺购物车
			getListUserCar(id) {
				// let id = this.listPortForm.pageNum;
				merchantsDoself.getListUserCar(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.options[1].info = res.data.totalGoodNum
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
			// 加入购物车
			addSelfMadeGoodUserCar() {
				// this.userCar
				merchantsDoself.addSelfMadeGoodUserCar(this.userCar).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: "加入购物车成功",
							icon: 'success'
						})
						this.getListUserCar(this.shopId);
					} else if (res.code == 401) {
						// this.returnMsg = res.msg + '，请重新登录';
						// this.dialogToggle();
					} else {
						uni.showToast({
							title: err.msg,
							icon: 'none'
						})
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			swiperChange(e) {
				this.swiperCurrent = e.detail.current
			},
		}
	}
</script>

<style lang="scss" scoped>
	.flex {
		display: flex;
	}

	.flex-space-between {
		justify-content: space-between;
	}

	.flex-items-center {
		align-items: center;
	}

	.fs-20 {
		font-size: 20rpx;
	}

	.fs-24 {
		font-size: 24rpx;
	}

	.fs-30 {
		font-size: 30rpx;
	}

	.fs-32 {
		font-size: 32rpx;
	}

	.fs-36 {
		font-size: 36rpx;
	}

	.fs-38 {
		font-size: 38rpx;
	}

	.fs-44 {
		font-size: 44rpx;
	}

	.fw-500 {
		font-weight: 500;
	}

	.cF18A25 {
		color: #F18A25;
	}

	.c808080 {
		color: #808080;
	}

	.c56575B {
		color: #56575B;
	}

	.c56575B {

		color: #56575B;
	}

	.cF75732 {
		color: #F75732;
	}

	.pd-left-30 {
		padding-left: 30rpx;
	}

	.pd-top-30 {
		padding-top: 30rpx;
	}

	.pd-right-56 {
		padding-right: 56rpx;
	}

	.mg-bottom-18 {
		margin-bottom: 10rpx;
	}

	.mg-right-60 {
		margin-right: 60rpx;
	}

	.gd-module_1 {
		border-top: 0.2rpx solid transparent;
		width: 750rpx;
		height: 564rpx;
		// background-image: url(../../../static/dpzy_goodsPIC3.png);
		background-repeat: no-repeat;
		background-size: cover;

		// background-color: rgb(0, 0, 0, 0.5);
		// background-blend-mode: multiply;
		.handle {
			margin-top: 96rpx;
			padding-left: 30rpx;
			padding-right: 30rpx;

			.vessel {
				width: 58rpx;
				height: 58rpx;
				background: rgba(0, 0, 0, 0.6078431372549019);
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;

				image {
					width: 58rpx;
					height: 58rpx;
				}
			}
		}
	}

	.gd-module_2 {
		width: 750rpx;
		// height: 312rpx;
		background-color: #FFFFFF;
		padding-bottom: 38rpx;

		.info-1 {
			// padding: 2rpx 14rpx;
			// background-color: #F5F6F7;
			// border-radius: 6rpx;
			color: #808080;
			margin-right: 26rpx;
		}

		.info-2 {
			padding: 2rpx 14rpx;
			background-color: #FFF2BC;
			border-radius: 6rpx;
			margin-right: 16rpx;
		}

		.info-3 {
			color: #808080;
		}

	}



	.gd-module_4 {
		// height: 1600rpx;
		// background-color: #4CD964;
		margin-top: 18rpx;
		box-sizing: border-box;
		padding: 22rpx 30rpx 44rpx;
		background-color: #FFFFFF;
	}

	.gd-module_5 {
		margin-top: 18rpx;
		background-color: #FFFFFF;
		padding: 30rpx 26rpx 0;
		box-sizing: border-box;
	}

	.gd-module_6 {
		margin-top: 16rpx;
		background-color: #F5F6F7;
		padding: 18rpx 30rpx 172rpx;

		.title {
			margin-bottom: 28rpx;
		}

		.introduce {
			// margin-top: 10rpx;
			text-align: center;

			text {
				font-size: 24rpx;
				text-align: center;
			}
		}
	}

	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0;
		// z-index: 9999999;
	}

	.goods-info-fullreduce {
		display: flex;
		flex-direction: row;
		height: 32rpx;
		/* line-height: 32rpx; */
		border-radius: 4rpx;
		border: 0.6rpx solid rgba(247, 87, 50, 0.7764705882352941);
		padding-top: 2rpx;
		padding-bottom: 2rpx;
		align-items: center;
		margin-left: 30rpx;
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
		border-right: none !important;
	}
</style>
