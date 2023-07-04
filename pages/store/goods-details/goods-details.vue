<template>
	<view class="goods-details" style="">
		<!-- 背景+操作按钮 -->
		<view class="gd-module_1"  v-bind:style="{backgroundImage: 'url(' +(food.imageUrl?food.imageUrl:'')+ ')'}">
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
						<text>{{food.name}}</text>
					</view>
					<!-- <view class="fs-20" style="margin-top: 14rpx; margin-bottom: 14rpx;">
						<text class="info-1" style="">不加香菜</text><text class="info-1">原味</text>
					</view>
					<view class="fs-20 cF18A25">
						<text class="info-2" style="">门店销售第1名</text><text class="info-2">点评网友推荐</text>
					</view> -->
					<view class="" style="">
						<text class="info-3 fs-20">月售{{food.monthSell}}</text>
					</view>
				</view>
				<!-- <view class="pd-right-56 pd-top-30" style="text-align: center;">
					<image style="width: 42rpx; height: 42rpx; vertical-align: middle" src="../../../static/star.png"
						mode=""></image>
					<view class="">
						<text class="c808080 fs-24">收藏</text>
					</view>
				</view> -->
			</view>
			<view class="flex flex-space-between flex-align-items"
				style="padding-left: 24rpx; padding-right: 38rpx; padding-bottom: 28rpx;">
				<view class="">
					<text class="cF75732 fs-44">￥{{food.price}}</text>
					<text class="fs-20 c808080"
						style="text-decoration: line-through;margin-left: 20rpx;">{{food.priceOld == 0?"":food.priceOld}}</text>
				</view>
				<!-- <view class=""
					style="background: linear-gradient(to right, #F0C819 , #FF9D00); width: 192rpx; height: 56rpx; line-height: 56rpx; border-radius: 10rpx; padding: 2rpx 0rpx; text-align: center;">
					<text class="fw-500 fs-28" style="">选规格</text>
				</view> -->
			</view>
		</view>
		<!-- 详情，评价，商家 锚点控制 -->
		<f-sticky :scrollTop="scrollTop" :offsetTop="offsetTop" :enable="enable" :zIndex="10">
			<view v-if="scrollTop >= 276" class="" style="width: 750rpx; height: 80rpx; background-color: #FFFFFF;">
			</view>
			<view v-else style="width: 750rpx; height: 18rpx; background-color: #F5F6F7;"></view>
			<view class="gd-module_3 flex">
				<view class="c56575B fs-32 mg-right-60" style="position: relative;">
					<text @click="clickTabs(1)" :class="tabSelected == 1? 'actived':''">详情</text>
				</view>
				<view class="c56575B fs-32 mg-right-60" style="position: relative;">
					<text @click="clickTabs(2)" :class="tabSelected == 2? 'actived':''">评价</text>
				</view>
				<view class="c56575B fs-32" style="position: relative;">
					<text @click="clickTabs(3)" :class="tabSelected == 3? 'actived':''">商家</text>
				</view>
			</view>
		</f-sticky>
		<!-- 详情 -->
		<view class="gd-module_4">
			<!-- <view class="fs-28" style="margin-bottom: 10rpx;">
				<text class="c56575B" style="display: inline-block; width: 146rpx; margin-right: 38rpx;">掌柜描述：</text>
				<text>随即四种素菜搭配，享受多重美味。</text>
			</view> -->
			<view class="fs-28" style="margin-bottom: 10rpx;">
				<text class="c56575B" style="display: inline-block; width: 106rpx; margin-right: 38rpx;">食材：</text>
				<text>{{food.ingredients}}</text>
			</view>
			<view class="fs-28" style="margin-bottom: 10rpx;">
				<text class="c56575B" style="display: inline-block; width: 106rpx; margin-right: 38rpx;">份量：</text>
				<text>{{food.weight}}</text>
			</view>
			<view class="fs-28" style="margin-bottom: 10rpx;">
				<text class="c56575B" style="display: inline-block; width: 106rpx; margin-right: 38rpx;">口味：</text>
				<text>{{food.flavor}}</text>
			</view>
		</view>
		<!-- 评价 -->
		<view class="gd-module_5">
			<view class="flex flex-space-between">
				<view class="evaluation-title">
					<text class="fs-36 fw-500">外卖评价</text>
					<text
						class="fs-24 c56575B">（好评度{{foodEvaluation.totalNum == 0 ? '0' : foodEvaluation.praiseRate}}%）</text>
				</view>
				<view class="evaluation-more" @click="gotoMoreEva()">
					<text class="fs-24 c56575B">{{foodEvaluation.totalNum}}条评论</text>
					<image style="width: 17rpx; height: 17rpx; margin-left: 4rpx;" src="../../../static/right-2.png"
						mode=""></image>
				</view>
			</view>
			<!-- <evaluation-list :marginTop="60"></evaluation-list> -->
		</view>
		<!-- 商家 -->
		<view class="gd-module_6">
			<!-- 地址 联系 -->
			<view class="pd-left-30">
				<view class="flex flex-items-center flex-space-between">
					<view class="flex flex-items-center">
						<image style="width: 28rpx; height: 36rpx; margin-right: 16rpx;"
							src="../../../static/sj_location2.png" mode=""></image>
						<text class="fs-30"
							style="white-space: nowrap; width: 530rpx; overflow:hidden; text-overflow:ellipsis">{{shop.address}}</text>
					</view>
					<view class="flex">
						<view class="" style="width: 36rpx; height: 46rpx; border-left: 0.6rpx solid #A7A7A7;"></view>
						<image style="width: 38.8rpx; height: 37.6rpx; margin-right: 48rpx;"
							@click="callPhone(shop.tel)" src="../../../static/sj_dh.png" mode=""></image>
					</view>
				</view>
				<scroll-view scroll-x="true"
					style="margin-top: 58rpx; margin-bottom: 40rpx; white-space: nowrap; width: 100%; overflow: hidden;">
					<view class="" style="display: inline-block;" v-for="(item,index) in shopEnviroList" :key="index"
						@click="previewImg(1)">
						<image style="width: 188rpx; height: 144rpx; border-radius: 8rpx; margin-right: 18rpx;"
							:src="item.filePath" mode=""></image>
					</view>
				</scroll-view>
				<!-- <view class="flex flex-items-center" style="margin-bottom: 30rpx;">
					<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;" src="../../../static/sj_zz.png"
						mode=""></image>
					<text class="fs-30">查看商家资质</text>
				</view> -->
			</view>
			<view class="" style="width: 750rpx; height: 24rpx; background-color: #F3F4F5;"></view>
			<view class="pd-left-30" style="padding-top: 32rpx;">
				<view class="flex flex-items-center" style="">
					<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;" src="../../../static/sj_zz.png"
						mode=""></image>
					<text class="fs-30">商家资质</text>
				</view>
				<scroll-view scroll-x="true"
					style="margin-top: 58rpx; margin-bottom: 40rpx; white-space: nowrap; width: 100%; overflow: hidden;">
					<view class="" style="display: inline-block;" v-for="(item,index) in shopZzPicList" :key="index"
						@click="previewImg(2)">
						<image style="width: 188rpx; height: 144rpx; border-radius: 8rpx; margin-right: 18rpx;"
							:src="item.filePath" mode=""></image>
					</view>
				</scroll-view>
			</view>
			<view class="" style="width: 750rpx; height: 24rpx; background-color: #F3F4F5;"></view>
			<!-- 配送信息 -->
			<view class="distribution-info pd-left-30" style="">
				<view class="flex flex-items-center" style="margin-bottom: 40rpx;">
					<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;" src="../../../static/sj_pssj.png"
						mode=""></image>
					<text class="fs-30">营业日期：<text
							v-if="shop.weekMon || shop.weekTue || shop.weekWen || shop.weekThu || shop.weekFri || shop.weekSat ||shop.weekSun">周</text>{{ shop.weekMon?'一':'' }}{{ shop.weekTue?'、':'' }}{{ shop.weekTue?'二':'' }}{{ shop.weekWen?'、':'' }}{{ shop.weekWen?'三':'' }}{{ shop.weekThu?'、':'' }}{{ shop.weekThu?'四':'' }}{{ shop.weekFri?'、':'' }}{{ shop.weekFri?'五':'' }}{{ shop.weekSat?'、':'' }}{{ shop.weekSat?'六':'' }}{{ shop.weekSun?'、':'' }}{{ shop.weekSun?'日':'' }}</text>
				</view>
				<view class="flex flex-items-center" style="margin-bottom: 40rpx;">
					<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;" src="../../../static/sj_pssj.png"
						mode=""></image>
					<text class="fs-30">营业时间：{{ shop.openTime }}-{{ shop.closeTime }}</text>
				</view>
				<view class="flex flex-items-center" style="margin-bottom: 20rpx;">
					<image style="width: 28rpx; height: 32rpx; margin-right: 16rpx;" src="../../../static/sj_psfw.png"
						mode=""></image>
					<text class="fs-30">配送服务：{{ shop.distribution? '商家自配': '平台配送' }}</text>
				</view>
			</view>
			<view class="" style="width: 750rpx; height: 24rpx; background-color: #F3F4F5;"></view>
			<!-- 商家公告 -->
			<view class="distribution-info pd-left-30">
				<view class="flex flex-items-center" style="margin-bottom: 40rpx;">
					<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;" src="../../../static/sj_gg.png"
						mode=""></image>
					<text class="fs-30">商家公告：{{ shop.shopNotice }}</text>
				</view>
				<view class="flex flex-items-center" style="margin-bottom: 40rpx;">
					<view class="flex flex-items-center">
						<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;"
							src="../../../static/sj_sjfw.png" mode=""></image>
						<text class="fs-30">商家服务：</text>
					</view>
					<view class="flex flex-items-center" style="margin-right: 20rpx;">
						<image style="width: 26rpx; height: 26rpx; margin-right: 10rpx;"
							src="../../../static/sj_fp2.png" mode=""></image>
						<text class="fs-30">{{ shop.invoice? '无': '可开发票' }}</text>
					</view>
					<!-- <view class="flex flex-items-center">
						<image style="width: 29rpx; height: 26rpx; margin-right: 10rpx;"
							src="../../../static/sj_ktyd.png" mode=""></image>
						<text class="fs-30">跨天预定</text>
					</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import food from "@/api/food/food.js"
	import shop from '@/api/shop/shop.js'
	import file from '@/api/file/file.js'

	export default {
		components: {

		},
		data() {
			return {
				scrollTop: 0,
				enable: true, //是否吸顶
				offsetTop: '0',
				tabSelected: 1,
				evaNum: 2,

				food: { //外卖菜品信息
					id: "",
					imageUrl: ''
				},
				shop: {}, //店铺信息
				shopApply: {}, //店铺信息
				shopEnviroList: [], //店铺环境图片列表信息
				shopZzPicList: [], //店铺资质图片列表信息
				foodEvaluation: {}, //外卖菜品评价信息
				hearderImg: ''
			}
		},
		onLoad(option) {
			this.food.id = option.id;
			this.food.shopId = option.shopId

			this.initFoodInfo()
			this.initShopInfo()
			this.initFoodEvaluationStatics()
		},
		mounted() {

		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
			// console.log(this.scrollTop)
		},
		methods: {
			/* 初始化外卖菜品统计数据 */
			initFoodEvaluationStatics() {
				food.findFoodEvaluationStatics(this.food.id).then(res => {
					console.log(res)
					this.foodEvaluation = res.data
				})
			},
			/* 预览图片 */
			previewImg(index) {
				let urls = [];
				switch (index) {
					case 1:
						for (var i = 0; i < this.shopEnviroList.length; i++) {
							urls.push(this.shopEnviroList[i].filePath);
						}
						break;
					default:
						for (var i = 0; i < this.shopZzPicList.length; i++) {
							urls.push(this.shopZzPicList[i].filePath);
						}
						break;
				}
				uni.previewImage({
					urls,
				});
			},
			/* 拨打电话 */
			callPhone(phone) {
				uni.makePhoneCall({
					phoneNumber: phone
				});
			},
			/* 初始化店铺环境图片信息 */
			initShopEnviroPic(fileId) {
				file.getFileUrl(fileId).then(res => {
					console.log(res)
					this.shopEnviroList = res.rows
				})
			},
			/* 初始化店铺资质图片信息 */
			getFileUrl_forZz(fileid) {
				file.getFileUrl(fileid).then(res => {
					if (res.code == 200) {
						this.shopZzPicList = res.rows;
					} else {}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			/* 初始化店铺信息 */
			initShopInfo() {
				/* shop */
				shop.getShopById({
					id: this.food.shopId
				}).then(res => {
					if (res.code == 200) {
						this.shopApply = res.data
						this.initShopEnviroPic(res.data.enviroPic)
						this.getFileUrl_forZz(res.data.businessLicensePic + res.data.licencePic);
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
				/*shopApply  */
				shop.getShopDetailsById(this.food.shopId).then(res => {
					console.log(res)
					this.shop = res.data
				})

			},
			/* 初始化外卖菜品信息 */
			initFoodInfo() {
				food.findFoodInfo(this.food.id).then(res => {
					// console.log(res)
					this.food = res.data;
					this.food.imageUrl = this.food.imageUrl.replace('(', '\\(');
					this.food.imageUrl = this.food.imageUrl.replace(')', '\\)');
					console.log(this.food.imageUrl)
					// this.hearderImg = require(this.food.imageUrl)
				})
			},
			toBack() {
				uni.navigateBack({
					delta: 1,
					animationType: 'slide-out-bottom',
					animationDuration: 200
				});
			},
			clickTabs(index) {
				this.tabSelected = index;
				switch (index) {
					case 1:
						this.linkTo('.gd-module_4');
						break;
					case 2:
						this.linkTo('.gd-module_5');
						break;
					default:
						this.linkTo('.gd-module_6');
						break;
				}
			},
			gotoMoreEva() {
				if (this.foodEvaluation.totalNum == 0) return
				uni.navigateTo({
					url: './evaluation/evaluation?foodId=' + this.food.id + '&shopId=' + this.food.shopId
				})
			},
			linkTo(domname) {
				uni.createSelectorQuery().select(domname).boundingClientRect(data => { //目标位置的节点：类class或者id
					uni.createSelectorQuery().select(".goods-details").boundingClientRect(
						res => { //最外层盒子的节点：类class或者id
							uni.pageScrollTo({
								duration: 100, //过渡时间
								// scrollTop:data.top + 400 - res.top,//到达距离顶部的top值
								scrollTop: data.top - 80 - res.top, //如果置顶
							})
						}).exec()
				}).exec();
			}
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
		margin-bottom: 18rpx;
	}

	.mg-right-60 {
		margin-right: 60rpx;
	}

	.gd-module_1 {
		border-top: 0.2rpx solid transparent;
		width: 750rpx;
		height: 400rpx;
		// background-image: url(../../../static/dpzy_goodsPIC3.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;

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

		.info-1 {
			padding: 2rpx 14rpx;
			background-color: #F5F6F7;
			border-radius: 6rpx;
			margin-right: 8rpx;
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

	.gd-module_3 {
		width: 750rpx;
		height: 80rpx;
		background-color: #FFFFFF;
		// margin-top: 18rpx;
		padding-left: 30rpx;
		padding-top: 18rpx;
		box-sizing: border-box;
		border-bottom: 0.6rpx solid #E3E3E3;

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

	.gd-module_4 {
		// height: 1600rpx;
		// background-color: #4CD964;
		box-sizing: border-box;
		padding: 22rpx 30rpx 44rpx;
		background-color: #FFFFFF;
	}

	.gd-module_5 {
		margin-top: 18rpx;
		background-color: #FFFFFF;
		padding: 30rpx 26rpx 0;
		padding-bottom: 30rpx;
		box-sizing: border-box;
	}

	.gd-module_6 {
		margin-top: 18rpx;
		background-color: #FFFFFF;
		box-sizing: border-box;
		padding-top: 38rpx;
		padding-bottom: 30rpx;

		// padding: 38rpx 0 30rpx 30rpx;
		.pd-left-30 {
			padding-left: 30rpx;
		}

		.distribution-info {
			// margin-top: 24rpx;
			padding-top: 32rpx;
			padding-bottom: 30rpx;
		}
	}
</style>
