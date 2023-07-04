<template>
	<view class="store-container" style="" :class="{'showMask': ismask}">
		<view class="isMask" v-if="ismask">
			<text>业务筹备中,敬请期待~~</text>
		</view>
		<view v-if="loadingScount>0" class="loading-view" :style="{minHeight: windowHeight + 'px'}">
			<!-- <image style="width: 288rpx;" src="../../static/loading1.gif"
				mode="widthFix"></image> -->
			<uni-load-more :status="'loading'" :iconType="'snow'" :content-text="contentText" />
		</view>
		<!-- 商家信息 -->
		<view class="store-module_1"
			:style="{ backgroundImage: 'url(' + (doorPicInfo.filePath ? doorPicInfo.filePath : '') + ')' }">
			<!-- 占位 -->
			<view class="" @click="goQuanjing"
				style="width: 750rpx; height: 240rpx; display: flex; padding-top: 150rpx; align-items: center; justify-content: center; box-sizing: border-box;">
				<!-- <view class="" style="width: 750rpx; height: 220rpx; padding-left: 30rpx; display: flex; align-items: center; box-sizing: border-box;"> -->
				<!-- <image @click="toBack()" style="width: 64rpx; height: 56rpx;" src="../../static/arrow-left.png" mode=""></image> -->
				<image style="width: 84rpx; height: 56rpx;" src="../../static/dpzy_VRquanjing.png" mode="">
				</image>
			</view>
			<view class="store-info">
				<image
					style="width: 124rpx; height: 124rpx; border-radius: 10rpx; position: absolute; top: -16rpx; right: 32rpx;"
					:src="storeInfo.shopImgUrl" mode=""></image>
				<!-- 商家名称 -->
				<view class="">
					<text class="store-info-name">{{ storeInfo.name }}</text>
				</view>
				<!-- 评分 配时 月售 人均 -->
				<view class="store-info-intro">
					<view class="store-info-score">
						<image style="width: 20rpx; height: 20rpx;" src="../../static/star-fill.png" mode=""></image>
						<text class="">{{ storeInfo.score? Number(storeInfo.score).toFixed(1):'0.0' }}分</text>
					</view>
					<view class="store-info-ndtime">
						<image style="width: 20rpx; height: 20rpx;" src="../../static/dpzy_clock.png" mode=""></image>
						<text class="">商家自配30分钟</text>
					</view>
					<view class="store-info-sales">
						<image style="width: 20rpx; height: 20rpx;" src="../../static/dpzy_yueshou2x.png" mode="">
						</image>
						<text class="">月售{{ storeInfo.monthSellNum? storeInfo.monthSellNum:0 }}</text>
					</view>
					<view class="store-info-percapita">
						<image style="width: 17.6rpx; height: 18.4rpx;" src="../../static/dpzy_daocha.png" mode="">
						</image>
						<text class="">人均￥{{ storeInfo.perCapita?Number(storeInfo.perCapita).toFixed(0):0 }}</text>
					</view>
				</view>
				<!-- 优惠券 -->
				<view class="store-info-disCoupons" :scroll-x="true">
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
					<!-- <view class="" style="display: flex;">
						<view class="disCoupons-nc disCoupons-nc-isUsed">
							<text class="disCoupons-num">￥3</text><text class="disCoupons-condition">满22可用</text>
						</view>
						<view class="disCoupons-s disCoupons-s-isUsed">
							<text class="disCoupons-status">已领</text>
						</view>
					</view> -->
				</view>
				<!-- 满减 -->
				<view class="store-info-act">
					<view class="act-fullreduce" v-if="fllReduceArr.length > 0">
						<template v-for="(value,iindex) in fllReduceArr">
							<text class="fullreduce-text">{{ value }}</text>
							<text class="fullreduce-textline"
								:class="{'theLast': iindex == fllReduceArr.length - 1}"></text>
						</template>
					</view>
				</view>
				<!-- 公告 -->
				<view class="store-info-notice">
					<!-- 内容 -->
					<!-- <view > -->
					<text
						class="notice-content">公告：{{ storeInfo.shopNotice? storeInfo.shopNotice:'欢迎光临，很高兴为您服务～' }}</text>
					<!-- </view> -->
					<!-- 更多 -->
					<!-- <view class="notice-more"> -->
					<!-- <image style="width: 14rpx; height: 8rpx;" src="../../static/bottom.png" mode=""></image> -->
					<!-- </view> -->
				</view>
			</view>
		</view>
		<!-- 点菜单 -->
		<view class="store-module_2">
			<view class="" style="background-color: #FFFFFF;">
				<f-sticky :scrollTop="scrollTop" :offsetTop="150" :enable="enable" :zIndex="10">
					<uni-segmented-control :current="current" :values="items" :style-type="styleType"
						:active-color="activeColor" @clickItem="onClickItem"
						style="background-color: #FFFFFF; height: 88rpx;" />
					<view class="" style="width: 100%; height: 2rpx; border-top: 0.6rpx solid #E3E3E3;;"></view>
				</f-sticky>
			</view>

			<view class="content">
				<view v-show="current === 0">
					<view class="post-view"
						style="box-sizing: border-box; padding-left: 32rpx; padding-right: 30rpx; padding-top: 26rpx; padding-bottom: 26rpx; background-color: #FFFFFF;">
						<image style="width: 688rpx; height: 212rpx;" src="../../static/dpzy_guanggao.png" mode="">
						</image>
					</view>
					<view class="view-fiex">
						<view class="flex-1 ovh">
							<mo-product-list @tabClick="leftTabClick" :animation="true" open-tag :list="list"
								:scrollY="scrollY" @scrollEnd="scrollEnd" @scrolltoupper="scrolltoupper"
								@scrolltolower="scrolltolower">
								<template v-slot:header="{item}">
									<view class="title" v-if="item.foods.length > 0 ">{{item.name}}</view>
								</template>
								<template v-slot="{item}">
									<productItem @clickAGood="gotoDetails" @toggle="toggle"
										@receviceGoodsNum="receviceGoodsNum" v-for="(child, childIndex) in item.foods"
										:key="childIndex" :item="child">
									</productItem>
								</template>
							</mo-product-list>
						</view>
					</view>
				</view>
				<view v-show="current === 1">
					<evaluation-list @evalFilterType="getEvalFilterType" :shopEvalStatics="shopEvalStatics"
						:evalList="evalList" style="padding: 0 20rpx 100rpx 20rpx;"></evaluation-list>
				</view>
				<view v-show="current === 2">
					<!-- 商家 -->
					<view class="gd-module_6">
						<!-- 地址 联系 -->
						<view class="pd-left-30">
							<view class="flex flex-items-center flex-space-between">
								<view class="flex flex-items-center">
									<image @click="openLacation()"
										style="width: 28rpx; height: 36rpx; margin-right: 16rpx;"
										src="../../static/sj_location2.png" mode=""></image>
									<text class="fs-30"
										style="white-space: nowrap; width: 530rpx; overflow:hidden; text-overflow:ellipsis">{{ storeInfo.address }}</text>
								</view>
								<view class="flex">
									<view class=""
										style="width: 36rpx; height: 46rpx; border-left: 0.6rpx solid #A7A7A7;"></view>
									<image @click="callPhone(storeInfo.tel)"
										style="width: 38.8rpx; height: 37.6rpx; margin-right: 48rpx;"
										src="../../static/sj_dh.png" mode=""></image>
								</view>
							</view>
							<scroll-view scroll-x="true"
								style="margin-top: 58rpx; margin-bottom: 40rpx; white-space: nowrap; width: 100%; overflow: hidden;">
								<view class="" style="display: inline-block;" v-for="(item,index) in enviroPicInfoList"
									:key="index" @click="previewImg(1)">
									<image
										style="width: 188rpx; height: 144rpx; border-radius: 8rpx; margin-right: 18rpx;"
										:src="item.filePath" mode=""></image>
								</view>
							</scroll-view>
							<!-- <view class="flex flex-items-center" style="margin-bottom: 30rpx;">
								<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;"
									src="../../static/sj_zz.png" mode=""></image>
								<text class="fs-30">查看商家资质</text>
							</view> -->
						</view>
						<view class="" style="width: 750rpx; height: 24rpx; background-color: #F3F4F5;"></view>
						<view class="pd-left-30" style="padding-top: 32rpx;">
							<view class="flex flex-items-center" style="">
								<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;"
									src="../../static/sj_zz.png" mode=""></image>
								<text class="fs-30">商家资质</text>
							</view>
							<scroll-view scroll-x="true"
								style="margin-top: 58rpx; margin-bottom: 40rpx; white-space: nowrap; width: 100%; overflow: hidden;">
								<view class="" style="display: inline-block;" v-for="(item,index) in storeZzList"
									:key="index" @click="previewImg(2)">
									<image
										style="width: 188rpx; height: 144rpx; border-radius: 8rpx; margin-right: 18rpx;"
										:src="item.filePath" mode=""></image>
								</view>
							</scroll-view>
						</view>
						<view class="" style="width: 750rpx; height: 24rpx; background-color: #F3F4F5;"></view>
						<!-- 配送信息 -->
						<view class="distribution-info pd-left-30" style="">
							<view class="flex flex-items-center" style="margin-bottom: 40rpx;">
								<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;"
									src="../../static/sj_pssj.png" mode=""></image>
								<text class="fs-30">营业日期：<text
										v-if="storeInfo.weekMon || storeInfo.weekTue || storeInfo.weekWen || storeInfo.weekThu || storeInfo.weekFri || storeInfo.weekSat ||storeInfo.weekSun">周</text>{{ storeInfo.weekMon?'一':'' }}{{ storeInfo.weekTue?'、':'' }}{{ storeInfo.weekTue?'二':'' }}{{ storeInfo.weekWen?'、':'' }}{{ storeInfo.weekWen?'三':'' }}{{ storeInfo.weekThu?'、':'' }}{{ storeInfo.weekThu?'四':'' }}{{ storeInfo.weekFri?'、':'' }}{{ storeInfo.weekFri?'五':'' }}{{ storeInfo.weekSat?'、':'' }}{{ storeInfo.weekSat?'六':'' }}{{ storeInfo.weekSun?'、':'' }}{{ storeInfo.weekSun?'日':'' }}</text>
							</view>
							<view class="flex flex-items-center" style="margin-bottom: 40rpx;">
								<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;"
									src="../../static/sj_pssj.png" mode=""></image>
								<text class="fs-30">营业时间：{{ storeInfo.openTime }}-{{ storeInfo.closeTime }}</text>
							</view>
							<view class="flex flex-items-center" style="margin-bottom: 20rpx;">
								<image style="width: 28rpx; height: 32rpx; margin-right: 16rpx;"
									src="../../static/sj_psfw.png" mode=""></image>
								<text class="fs-30">配送服务：{{ storeInfo.distribution? '商家自配': '平台配送' }}</text>
							</view>
						</view>
						<view class="" style="width: 750rpx; height: 24rpx; background-color: #F3F4F5;"></view>
						<!-- 商家公告 -->
						<view class="distribution-info pd-left-30">
							<view class="flex flex-items-center" style="margin-bottom: 40rpx;">
								<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;"
									src="../../static/sj_gg.png" mode=""></image>
								<text class="fs-30">商家公告：{{ storeInfo.shopNotice }}</text>
							</view>
							<view class="flex flex-items-center" style="margin-bottom: 40rpx;">
								<view class="flex flex-items-center">
									<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;"
										src="../../static/sj_sjfw.png" mode=""></image>
									<text class="fs-30">商家服务：</text>
								</view>
								<view class="flex flex-items-center" style="margin-right: 20rpx;">
									<image style="width: 26rpx; height: 26rpx; margin-right: 10rpx;"
										src="../../static/sj_fp2.png" mode=""></image>
									<text class="fs-30">{{ storeInfo.invoice? '无': '可开发票' }}</text>
								</view>
								<!-- <view class="flex flex-items-center">
									<image style="width: 29rpx; height: 26rpx; margin-right: 10rpx;"
										src="../../static/sj_ktyd.png" mode=""></image>
									<text class="fs-30">{{ storeInfo.is_per_make? '': '在线预约' }}</text>
								</view> -->
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="">

			</view>
		</view>
		<!-- 结算 -->
		<view class="store-module_3">
			<!-- 满起送 -->
			<!-- ctotalPayPrice >= storeInfo.lowestMoney && current == 0 && cShopCarNum > 0 -->
			<view v-if="ctotalPayPrice >= storeInfo.lowestMoney && current == 0 && cShopCarNum > 0"
				class="status-abovePrice status-normal" style="position: relative;">
				<view style="height: 49px;width: 79px;position: absolute;z-index: 999;" @click="toggle('bottom')">
				</view>
				<uni-badge class="uni-badge-left-margin" :text="cShopCarNum" absolute="rightTop" :offset="[-60, 15]"
					size="large">
					<image style="width: 98rpx; height: 72rpx;" src="../../static/dpzy_gouwuche-a.png" mode=""></image>
				</uni-badge>

				<view class="abovePrice-l" @click="toggle('bottom')">
					<view class="mt10">
						<text class="f32 fw500">￥{{ ctotalPayPrice }}</text><text class="f20"
							style="text-decoration: line-through; color: #808080; margin-left: 4rpx;">￥{{ ctotalPayPrice + fullReduceNum }}</text>
					</view>
					<!-- <view class="">
						<text class="f20">预估配送费￥</text>
					</view> -->
				</view>
				<view class="flex abovePrice-r f28 fw500" @click="toPay()">
					<text>去结算</text>
				</view>
			</view>
			<!-- 未满起送 -->
			<view v-if="ctotalPayPrice <= storeInfo.lowestMoney && current == 0"
				class="status-underPrice status-normal">
				<image style="width: 98rpx; height: 72rpx;" src="../../static/dpzy_gouwuche-hui.png" mode=""></image>
				<view class="f40 fw500">
					<text>￥{{ ctotalPayPrice }}</text>
				</view>
				<view class="f32 gray">
					<text>预估配送费￥</text>
				</view>
				<view class="f32 gray">
					<text>￥{{ storeInfo.lowestMoney }}起送</text>
				</view>
			</view>
		</view>
		<!-- 弹出层 购物车/选规格 (后续优化移除购物车至空 弹出层关闭BUG 可分开写) -->
		<uni-popup ref="popup" type="bottom" background-color="" style="z-index: 9999;">
			<view v-if="type == 'bottom'" class="" style="background-color: #FFFFFF;border-radius: 14rpx 14rpx 0 0;">
				<car-component @clearShopcar="clearShopcar" @receviceGoodsNum="receviceGoodsFromCar"
					:shopCarList.sync="shopCarList" :fullReduceNum="fullReduceNum" :packagePrice="packagePrice"
					:payPrice="payPrice"></car-component>
			</view>
			<view v-if="type == 'center'" class="" style="background-color: #FFFFFF;  border-radius: 12rpx;">
				<view class="" style="width: 700rpx;">
					<!-- <echone-sku :show="popupShow" mode="forbidden" :fSpecsList="fSpecsList" :foodName="foodName"
						@close="handleClose" @confirm="handleConfirm"></echone-sku> -->
					<echone-sku @sendShopcar="sendShopcar" :show="popupShow" mode="forbidden"
						:shopCarList.sync="shopCarList" :fSpecsList="fSpecsList" :foodName="foodName"></echone-sku>
				</view>
			</view>

		</uni-popup>
		<!-- 弹出层 选规格 -->
		<!-- <uni-popup ref="popup" type="center" background-color="">
			<view class="" style="background-color: #FFFFFF;border-radius: 12rpx;">
				<car-component></car-component>
			</view>
		</uni-popup> -->
		<uni-popup ref="alertDialog" type="dialog" style="z-index: 9999">
			<uni-popup-dialog type="info" cancelText="关闭" confirmText="同意" title="" :content="returnMsg"
				@confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>
<script>
	import moProductList from "@/components/mo-product-list/mo-product-list.vue";
	import productItem from './product-item.vue';
	// import testJson from './test.json';

	import fSticky from '@/components/f-sticky/f-sticky.vue';

	import carComponent from '@/components/car-component/car-component.vue';

	import echoneSku from '@/components/echone-sku/echone-sku'

	import shop from '@/api/shop/shop.js'
	import file from '@/api/file/file.js'
	export default {
		data() {
			return {
				ismask: false,
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '',
					contentnomore: '没有更多'
				},
				from: '',
				// fullreduceData: [

				// ],
				value: 0,
				items: ['点菜', '评价', '商家'],
				current: 0,
				styleType: 'text',
				scrollTop: 0,
				enable: true, //是否吸顶
				activeColor: '#FF9D00',
				type: '',
				themeColor: '#F18A25',
				popupShow: false,


				// selectedIndex: 0,
				returnMsg: '',
				storeInfo: {},
				storeCouponCard: [],
				fllReduceArr: [],
				enviroPicInfo: {},
				doorPicInfo: {},
				enviroPicInfoList: [],
				storeZzList: [],
				list: [], // 商品分类数据
				fSpecsList: [],
				foodName: '',
				userCar: {
					foodSpecsId: '', // 食品规格id,多个;分开
					goodId: '', // 商品id
					goodNum: 1 // 商品数量
				},
				shopId: '', // 店铺id
				shopCarList: [],
				fullReduceNum: 0,
				packagePrice: 0,
				payPrice: 0,
				scPopupShow: false,
				shopCarNum: 0,
				evalList: [],
				shopEvalStatics: {},
				scrollY: false,
				viewFiexTop: 0,
				postViewTop: 0,
				echSkuItem: {},
				reduceList: [],
				isIos: false,
				windowHeight: 0,
				loadingScount: 7
			}
		},
		components: {
			moProductList,
			productItem,
			fSticky,
			echoneSku
		},
		computed: {
			ctotalPayPrice() {
				let totalPayPrice = 0;
				for (var i = 0; i < this.shopCarList.length; i++) {
					totalPayPrice = totalPayPrice + this.shopCarList[i].money * this.shopCarList[i].goodNum;
				}
				for (var i = this.reduceList.length - 1; i >= 0; i--) {
					if (totalPayPrice >= this.reduceList[i].fullMoney) {
						totalPayPrice = totalPayPrice - this.reduceList[i].reduceMoney;
						break;
					}
				}
				for (var i = 0; i < this.shopCarList.length; i++) {
					totalPayPrice = totalPayPrice + this.shopCarList[i].packagePrice * this.shopCarList[i].goodNum;
				}
				return totalPayPrice;
			},
			cShopCarNum() {
				let shopCarNum = 0;
				for (var i = 0; i < this.shopCarList.length; i++) {
					shopCarNum = shopCarNum + this.shopCarList[i].goodNum;
				}
				return shopCarNum;
			}
		},
		onPageScroll(e) {
			let that = this;
			that.scrollTop = e.scrollTop;
			// console.log(this.scrollTop);
			if (this.current === 0) {
				uni.createSelectorQuery().select('.view-fiex').boundingClientRect(data => {
					let top = 0;
					// 150+40    30 + 90
					// console.log('.view-fiex: ',data.top)    // 到头 android: 110 - 45    65     IOS: 125.5 - 45  80.5
					if (this.isIos) {
						top = 125.5
					} else {
						top = 120
					}
					if (data.top > top) {
						// this.scrollY = false;
						that.$set(this, 'scrollY', false)
					} else {
						// this.scrollY = true;
						that.$set(this, 'scrollY', true)
					}
				}).exec();
			}
		},
		onLoad(options) {
			let that = this;
			that.findIsNeedCover();
			uni.getSystemInfo({
				success: function(res) {
					that.windowHeight = res.windowHeight
				}
			});
			that.from = options.from;
			that.shopId = options.id;
			setTimeout(function() {
				that.getShopDetailsById(that.shopId);
				that.getListByShopId(that.shopId);
				that.getShopEvalList(that.shopId, '', '', '');
				that.getShopInfo(that.shopId);
				that.findShopEvalStatics(that.shopId);
			}, 1)
			this.isIos = uni.getSystemInfoSync().platform === 'ios'
			// console.log(this.isIos)
		},
		onHide() {
			// console.log(8686)
			this.fullUpdateUserCarsForLeave();
		},
		onBackPress(e) {
			// console.log("监听返回按钮事件",e);
			// this.fullUpdateUserCarsForLeave();
		},
		mounted() {
			if (this.from == 'again') {
				this.type = 'bottom';
				this.$refs.popup.open('bottom');
			}
			this.$nextTick(() => {
				this.getViewFiexTop();
			})
		},
		onShow() {
			let that = this
			setTimeout(function() {
				that.getShopFoodTree(that.shopId);
				that.getListUserCar(that.shopId);
			}, 1)
			// this.getShopDetailsById(this.shopId);
			// this.getListByShopId(this.shopId);
		},
		methods: {
			findIsNeedCover() {
				shop.findIsNeedCover().then(res => {
					if (res.code == 200) {
						this.ismask = res.data.flag;
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			scrolltoupper() {
				this.$set(this, 'scrollY', false);
				setTimeout(() => {
					this.$set(this, 'scrollY', true);
				}, 10);
			},
			scrolltolower() {
				this.$set(this, 'scrollY', false);
				setTimeout(() => {
					this.$set(this, 'scrollY', true);
				}, 10);
			},
			getViewFiexTop() {
				uni.createSelectorQuery().select('.view-fiex').boundingClientRect(data => {
					this.viewFiexTop = data.top;
					// console.log(this.viewFiexTop);     // H5: 一直434    andriod: 434.33  411.33  396.666     IOS XR: 501.5
				}).exec();
			},
			leftTabClick(flag) {
				this.$set(this, 'scrollY', true)
				uni.createSelectorQuery().select(".view-fiex").boundingClientRect((data) => {
					uni.pageScrollTo({
						duration: 100,
						scrollTop: this.viewFiexTop
					})
				}).exec()
			},
			getShopInfo(shopId) {
				shop.getShopById({
					id: shopId
				}).then(res => {
					if (res.code == 200) {
						// console.log(res.data.businessLicensePic + res.data.licencePic)
						this.getFileUrl_forZz(res.data.businessLicensePic + res.data.licencePic);
						this.loadingScount--;
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			getFileUrl_forZz(fileid) {
				file.getFileUrl(fileid).then(res => {
					if (res.code == 200) {
						this.storeZzList = res.rows;
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
			// 预览图片
			previewImg(index) {
				let urls = [];
				switch (index) {
					case 1:
						for (var i = 0; i < this.enviroPicInfoList.length; i++) {
							urls.push(this.enviroPicInfoList[i].filePath);
						}
						break;
					default:
						for (var i = 0; i < this.storeZzList.length; i++) {
							urls.push(this.storeZzList[i].filePath);
						}
						break;
				}
				uni.previewImage({
					urls,
					// longPressActions: {
					// 	itemList: ['发送给朋友', '保存图片', '收藏'],
					// 	success: function(data) {
					// 		console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
					// 	},
					// 	fail: function(err) {
					// 		console.log(err.errMsg);
					// 	}
					// }
				});
			},
			goQuanjing() {
				if (this.doorPicInfo) {
					uni.navigateTo({
						url: '/pages/store/quanjinWebView?imgPath=' + this.doorPicInfo.filePath
					});
				}
			},
			// toBack() {
			// 	uni.navigateBack();
			// },
			changeIndex(e) {
				console.log('选中:', e)
			},
			onClickItem(e) {
				if (e.currentIndex != 0) {
					this.scrollY = false;
				}
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
				}
				console.log(this.scrollY)
			},
			scrollEnd(e) {
				console.log(e)
			},
			receviceGoodsFromCar(type, foodItem, foodSpecsId, goodNum) {
				let obj = {
					food: {
						imageUrl: foodItem.food.imageUrl,
						name: foodItem.food.name,
					},
					money: foodItem.food.price,
					goodNum,
					goodId: foodItem.goodId,
					foodSpecsId,
					foodSpecsName: foodItem.foodSpecsName,
					packagePrice: foodItem.packagePrice
				}
				// console.log(obj)
				// if (this.shopCarList.length <= 0) {
				// 	this.shopCarList.push(obj);
				// 	return;
				// }
				for (var i = 0; i < this.list.length; i++) {
					for (var j = 0; j < this.list[i].foods.length; j++) {
						if (foodItem.goodId == this.list[i].foods[j].id) {
							this.list[i].foods[j].userCarNum = goodNum;
						}
					}
				}
				for (var i = 0; i < this.shopCarList.length; i++) {
					if (obj.foodSpecsId) {
						if (obj.foodSpecsId === this.shopCarList[i].foodSpecsId) {
							if (goodNum == 0) {
								this.shopCarList.splice(i, 1);
								return;
							}
							this.shopCarList[i].goodNum = goodNum;
							return;
						} else {
							this.shopCarList.unshift(obj);
							return;
						}
					} else {
						if (obj.goodId === this.shopCarList[i].goodId) {
							if (goodNum == 0) {
								this.shopCarList.splice(i, 1);
								return;
							}
							this.shopCarList[i].goodNum = goodNum;
							return;
						} else {
							this.shopCarList.unshift(obj);
							return;
						}
					}
				}
			},
			receviceGoodsNum(type, foodItem, foodSpecsId, goodNum) {
				// console.log(type, foodItem, foodSpecsId, goodNum);
				// console.log(foodItem);
				// console.log(this.shopCarList);
				// if (type == 1) {
				let obj = {
					food: {
						imageUrl: foodItem.imageUrl,
						name: foodItem.name,
					},
					money: foodItem.price,
					goodNum,
					goodId: foodItem.id,
					foodSpecsId,
					foodSpecsName: foodItem.foodSpecsName,
					packagePrice: foodItem.packagePrice
				}
				// console.log(obj)
				if (this.shopCarList.length <= 0) {
					this.shopCarList.push(obj);
					return;
				}
				for (var i = 0; i < this.shopCarList.length; i++) {
					if (obj.goodId === this.shopCarList[i].goodId) {
						if (goodNum == 0) {
							this.shopCarList.splice(i, 1);
							return;
						}
						this.shopCarList[i].goodNum = goodNum;
						return;
					} else {
						this.shopCarList.unshift(obj);
						return;
					}
				}
				// } else {}
				// =============== 原先代码 ==============
				// this.userCar.goodId = foodId;
				// this.userCar.foodSpecsId = foodSpecsId;
				// if (type == 1) {
				// 	this.addUserCar()
				// } else {
				// 	this.deleteUserCar(this.userCar.goodId, this.userCar.foodSpecsId);
				// }
			},
			toggle(type, item) {
				this.type = type;
				this.echSkuItem = item;
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				// console.log(foodId)
				if (type == 'center') {
					this.getFoodSpecsList(item.id);
					// this.getListUserCar();
					this.foodName = item.name;
					this.userCar.goodId = item.id;
					this.$refs.popup.open(type)
				} else {
					if (this.scPopupShow) {
						this.$refs.popup.close(type)
					} else {
						this.$refs.popup.open(type)
					}
					this.scPopupShow = !this.scPopupShow; // 购物车popup show
				}
			},
			// 收取选取的规格参数
			sendShopcar(selectedIdArr, selectedName, type, goodNum, totalPrice) {
				// console.log(selectedIdArr.join(';'))
				console.log('this.echSkuItem', this.echSkuItem)
				this.userCar.foodSpecsId = selectedIdArr.join(';');
				// 调用加入购物车接口
				let obj = {
					food: {
						imageUrl: this.echSkuItem.imageUrl,
						name: this.echSkuItem.name,
					},
					money: totalPrice,
					goodNum,
					goodId: this.echSkuItem.id,
					foodSpecsId: selectedIdArr.join(';'),
					foodSpecsName: selectedName,
					packagePrice: this.echSkuItem.packagePrice
				}
				// console.log(obj)

				for (var i = 0; i < this.list.length; i++) {
					for (var j = 0; j < this.list[i].foods.length; j++) {
						if (this.echSkuItem.id == this.list[i].foods[j].id) {
							this.list[i].foods[j].userCarNum = goodNum;
						}
					}
				}

				if (this.shopCarList.length <= 0) {
					this.shopCarList.push(obj);
					return;
				}
				for (var i = 0; i < this.shopCarList.length; i++) {
					if (obj.foodSpecsId === this.shopCarList[i].foodSpecsId) {
						if (goodNum == 0) {
							this.shopCarList.splice(i, 1);
							return;
						}
						this.shopCarList[i].goodNum = goodNum;
						return;
					} else {
						this.shopCarList.unshift(obj);
						// console.log(this.shopCarList)
						return;
					}
				}
				// =============== 原先代码 ==============
				// if (type == 0) {
				// 	this.deleteUserCar('', this.userCar.foodSpecsId);
				// } else {

				// 	this.addUserCar();
				// }
			},
			gotoDetails(item) {
				uni.navigateTo({
					url: '/pages/store/goods-details/goods-details?id=' + item.id + '&shopId=' + item.shopId
				});
			},
			// 查询店铺详情
			getShopDetailsById(id) {
				// let id = this.listPortForm.pageNum;
				shop.getShopDetailsById(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.loadingScount--;
						// console.log(res.data)
						// console.log(res.data.isMyLikeShop);
						this.storeInfo = res.data;
						this.fllReduceArr = res.data.fullReduce.split(";");
						this.findListByShopId(this.shopId);
						if (res.data.enviroPic) {
							this.getFileUrl(res.data.enviroPic)
						}
						if (res.data.doorPic) {
							this.getDoorFileUrl(res.data.doorPic)
						}
						let webView = this.$mp.page.$getAppWebview();
						if (res.data.isMyLikeShop) {
							webView.setTitleNViewButtonStyle(0, {
								"text": '已收藏',
								"width": "60px"
							});
						} else {
							webView.setTitleNViewButtonStyle(0, {
								"text": '收藏店铺',
								"width": "70px"
							});
						}
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
			// 查询店铺优惠券活动列表
			getListByShopId(id) {
				// let id = this.listPortForm.pageNum;
				shop.getListByShopId(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.rows)
						this.storeCouponCard = res.rows;
						this.loadingScount--;
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
			// 获取满减信息
			findListByShopId(shopId) {
				// let id = this.listPortForm.pageNum;
				shop.findListByShopId({
					shopId
				}).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.reduceList = res.rows
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
					this.addCouponCard(item.id);
				}
			},
			addCouponCard(id) {
				shop.addCouponCard(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						uni.showToast({
							title: '领取成功',
						});
						this.getListByShopId(this.shopId);
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
			dialogToggle() {
				this.$refs.alertDialog.open()
			},
			dialogConfirm() {
				uni.removeStorageSync('token_key');
				uni.navigateTo({
					url: '/pages/login/login',
				})
			},
			dialogClose() {
				// console.log('点击关闭')
				uni.removeStorageSync('token_key');
				uni.navigateTo({
					url: '/pages/login/login',
				})
			},
			// 查询店铺的菜品信息树
			getShopFoodTree(shopId) {
				shop.getShopFoodTree(shopId).then(res => {
					// console.log(res)
					// console.log(res.data)
					if (res.code == 200) {
						// console.log(res.data;)
						this.list = res.data.data;
						this.loadingScount--;
						// console.log(this.list)
					} else if (res.code == 401) {
						this.returnMsg = res.msg + '，请重新登录';
						this.dialogToggle();
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
			// 查询菜品规格
			getFoodSpecsList(foodId) {
				shop.getFoodSpecsList(foodId).then(res => {
					if (res.code == 200) {
						// console.log(res.data;)
						for (var i = 0; i < res.rows.length; i++) {
							for (var j = 0; j < res.rows[i].data.length; j++) {
								res.rows[i].data[j].isChecked = false;
							}
							res.rows[i].data[0].isChecked = true;
						}
						this.fSpecsList = res.rows;
						// console.log(this.fSpecsList)
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
			// 根据当前菜品id查询该菜品中购物车中的数量 (暂时未用)
			findUserCarNumByFoodId(foodId) {
				shop.findUserCarNumByFoodId(foodId).then(res => {
					if (res.code == 200) {
						// console.log(res.data)
						this.shopCarNum = res.data.userCarNum
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
			// 加入购物车
			addUserCar() {
				// this.userCar
				shop.addUserCar(this.userCar).then(res => {
					if (res.code == 200) {
						// uni.showToast({
						// 	title: "加入购物车成功",
						// 	icon: 'success'
						// })
						this.getListUserCar(this.shopId);
						this.getShopFoodTree(this.shopId)
					} else if (res.code == 401) {
						this.returnMsg = res.msg + '，请重新登录';
						this.dialogToggle();
					} else {
						if (err.msg) {
							uni.showToast({
								title: err.msg,
								icon: 'none'
							})
						}
					}
				}).catch(err => {
					if (err.msg) {
						uni.showToast({
							title: err.msg,
							icon: 'none'
						})
					}
				});
			},
			fullUpdateUserCars() {
				// this.userCar
				shop.fullUpdateUserCars(this.shopCarList).then(res => {
					if (res.code == 200) {
						this.$refs.popup.close();
						uni.navigateTo({
							url: "../orderForm/order-form?shopId=" + this.shopId + "&invoice=" + this
								.storeInfo.invoice +
								"&openTime=" + this.storeInfo.openTime + "&closeTime=" + this.storeInfo
								.closeTime +
								"&distribution=" + this.storeInfo.distribution
						})
					} else if (res.code == 401) {
						this.returnMsg = res.msg + '，请重新登录';
						this.dialogToggle();
					} else {
						if (err.msg) {
							uni.showToast({
								title: err.msg,
								icon: 'none'
							})
						}
					}
				}).catch(err => {
					if (err.msg) {
						uni.showToast({
							title: err.msg,
							icon: 'none'
						})
					}
				});
			},
			fullUpdateUserCarsForLeave() {
				// this.userCar
				shop.fullUpdateUserCars(this.shopCarList).then(res => {
					if (res.code == 200) {

					} else if (res.code == 401) {
						this.returnMsg = res.msg + '，请重新登录';
						this.dialogToggle();
					} else {
						if (err.msg) {
							uni.showToast({
								title: err.msg,
								icon: 'none'
							})
						}
					}
				}).catch(err => {
					if (err.msg) {
						uni.showToast({
							title: err.msg,
							icon: 'none'
						})
					}
				});
			},
			// 移除购物车
			deleteUserCar(foodId, foodSpecsId) {
				shop.deleteUserCar(foodId, foodSpecsId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// uni.showToast({
						// 	title: "从购物车移除",
						// 	icon: 'success'
						// })
						// 调取该菜数量接口
						// this.findUserCarNumByFoodId(this.shopId)
						this.getShopFoodTree(this.shopId);
						this.getListUserCar(this.shopId, 0);
					} else if (res.code == 401) {
						this.returnMsg = res.msg + '，请重新登录';
						this.dialogToggle();
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
			// 清空购物车
			clearShopcar() {
				shop.fullUpdateUserCars(this.shopCarList).then(res => {
					if (res.code == 200) {
						this.clearCar();
					} else if (res.code == 401) {
						this.returnMsg = res.msg + '，请重新登录';
						this.dialogToggle();
					} else {
						if (err.msg) {
							uni.showToast({
								title: err.msg,
								icon: 'none'
							})
						}
					}
				}).catch(err => {
					if (err.msg) {
						uni.showToast({
							title: err.msg,
							icon: 'none'
						})
					}
				});
			},
			clearCar() {
				// console.log(this.shopCarList)
				// for (var i = 0; i < this.list.length; i++) {
				// 	for (var j = 0; j < this.list[i].foods.length; j++) {
				// 		this.list[i].foods[j].userCarNum = 0;
				// 	}
				// }
				// this.shopCarList = [];
				// uni.showToast({
				// 	title: "清空购物车成功",
				// 	icon: 'success'
				// })
				// this.$refs.popup.close();

				// ===========================================

				shop.clearCar(this.shopId).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: "清空购物车成功",
							icon: 'success'
						})
						this.getListUserCar(this.shopId);
						this.getShopFoodTree(this.shopId)
						this.$refs.popup.close()
					} else if (res.code == 401) {
						this.returnMsg = res.msg + '，请重新登录';
						this.dialogToggle();
					} else {
						uni.showToast({
							title: res.msg,
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
			// 查询指定店铺购物车   way: 0  用于判断移除购物车，为空时，popup.close
			getListUserCar(shopId, way) {
				shop.getListUserCar(this.shopId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.data.data)
						this.shopCarNum = 0;
						this.shopCarList = res.data.data;
						this.fullReduceNum = res.data.fullReduce;
						this.packagePrice = res.data.packagePrice;
						this.payPrice = res.data.payPrice;
						this.loadingScount--;
						if (way == 0) {
							if (res.data.data.length == 0) {
								this.$refs.popup.close();
							}
						}
						for (var i = 0; i < res.data.data.length; i++) {
							// console.log(res.data.data[i].goodNum)
							this.shopCarNum = this.shopCarNum + res.data.data[i].goodNum;
						}
						// this.findUserCarNumByFoodId(this.shopId);
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
			findShopEvalStatics(shopId) {
				shop.findShopEvalStatics({
					shopId,
				}).then(res => {
					if (res.code == 200) {
						this.shopEvalStatics = res.data;
						this.loadingScount--;
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
				let recType = type == '-1' ? '' : type;
				this.getShopEvalList(this.shopId, recType, '', '');
			},
			// 获取评论列表
			getShopEvalList(shopId, filterType, evalType, foodId) {
				shop.getShopEvalList(shopId, filterType, evalType, foodId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res)
						this.evalList = res.rows;
						this.loadingScount--;
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
			// 获取文件地址（图片）
			getFileUrl(fileid) {
				file.getFileUrl(fileid).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res)
						this.enviroPicInfo = res.rows[0];
						this.enviroPicInfoList = res.rows;
						// console.log(this.enviroPicInfoList)
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

			toPay() {
				this.fullUpdateUserCars();
				// console.log(this.shopCarList)
			},
			callPhone(phone) {
				uni.makePhoneCall({
					phoneNumber: phone
				});
			},
			openLacation() {
				if (!this.storeInfo.shopLatitude) {
					uni.showToast({
						title: '经纬度为空',
						icon: 'none'
					})
					return;
				}
				uni.openLocation({
					latitude: Number(this.storeInfo.shopLatitude),
					longitude: Number(this.storeInfo.shopLongitude),
					success: function() {
						// console.log('success111');
					}
				})
			},
			// 收藏
			packageShop(shopId) {
				shop.packageShop(shopId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res)
						// this.getShopDetailsById(this.shopId)
						uni.showToast({
							title: '收藏成功'
						})
						this.storeInfo.isMyLikeShop = !this.storeInfo.isMyLikeShop;
						let webView = this.$mp.page.$getAppWebview();
						webView.setTitleNViewButtonStyle(0, {
							"text": '已收藏',
							"width": "60px"
						});
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
			// 取消收藏
			unPackageShopByShopId(shopId) {
				shop.unPackageShopByShopId(shopId).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res)
						// this.getShopDetailsById(this.shopId)
						uni.showToast({
							title: '取消收藏'
						})
						this.storeInfo.isMyLikeShop = !this.storeInfo.isMyLikeShop;
						let webView = this.$mp.page.$getAppWebview();
						webView.setTitleNViewButtonStyle(0, {
							"text": '收藏店铺',
							"width": "70px"
						});
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
			// 临时用
			toKf() {
				uni.navigateTo({
					url: '/pages/store/customer-service/customer-service?userId=' + this.storeInfo.userId
				});
			}
		},
		// 清空购物车
		// 移除购物车
		// 查询指定店铺购物车
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {
			// console.log(e.index)
			// console.log(this.storeInfo)
			// console.log(this.storeInfo.isMyLikeShop)
			if (e.index == 1) {
				// uni.showToast({
				// 	title: '点击了客服~',
				// 	icon: 'none'
				// });
				uni.navigateTo({
					url: '/pages/store/customer-service/customer-service?userId=' + this.storeInfo.userId
				});
			} else {
				let webView = this.$mp.page.$getAppWebview();
				if (this.storeInfo.isMyLikeShop) {
					this.unPackageShopByShopId(this.shopId)
				} else {
					this.packageShop(this.shopId);
				}
			}
			// console.log(this.storeInfo.isMyLikeShop)
		}
		// #endif
	}
</script>

<style>
	.uni-btn-icon {
		color: blue !important;
	}

	.flex {
		display: flex;
	}

	.flex-space-between {
		justify-content: space-between;
	}

	.flex-items-center {
		align-items: center;
	}

	.store-container {
		box-sizing: border-box;
		/* height: 1500rpx; */
		background-color: #FFFFFF;
		min-height: 100vh;
	}

	.showMask {
		height: 100vh;
		overflow: hidden;
		position: relative;
	}

	.isMask {
		position: absolute;
		z-index: 999999999999;
		width: 750rpx;
		height: 100vh;
		line-height: 100vh;
		background: rgb(0, 0, 0, 0.5);
		text-align: center;
	}

	.isMask text {
		color: #FFFFFF;
		font-size: 32rpx;
	}

	.store-module_1 {
		/* background-image: url(../../static/store-bag.png); */
		background-repeat: no-repeat;
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
		margin-bottom: 10rpx;
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

	.store-info-ndtime,
	.store-info-sales,
	.store-info-percapita {
		display: flex;
		align-items: center;
		margin-right: 22rpx;
	}

	.store-info-ndtime text,
	.store-info-sales text,
	.store-info-percapita text {
		display: inline-block;
		height: 28rpx;
		line-height: 28rpx;
		color: #808080;
		font-size: 20rpx;
		font-weight: 400;
		margin-left: 4rpx;
	}

	.store-info-disCoupons {
		/* height: 44rpx; */
		display: flex;
		/* flex-wrap: nowrap; */
		white-space: nowrap;
		overflow-x: auto;
	}

	.disCoupons-nc {
		height: 40rpx;
		/* line-height: 44rpx; */
		background-color: rgb(247, 87, 50, 0.8);
		border-radius: 4rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 2rpx 6rpx;
		box-sizing: border-box;
		border-top: 0.6rpx solid rgb(247, 87, 50, 0.8) !important;
		border-left: 0.6rpx solid rgb(247, 87, 50, 0.8) !important;
		border-bottom: 0.6rpx solid rgb(247, 87, 50, 0.8) !important;
	}

	.disCoupons-status {
		font-size: 24rpx;
	}

	.disCoupons-nc-isUsed {
		background-color: #FFC7BA !important;
		color: rgb(247, 87, 50) !important;
		/* border-top: 0.6rpx solid rgb(247, 87, 50, 0.9) !important; */
		/* border-left: 0.6rpx solid rgb(247, 87, 50, 0.9)!important; */
		/* border-bottom: 0.6rpx solid rgb(247, 87, 50, 0.9) !important; */
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
		background-color: rgb(247, 87, 50, 0.8);

		border-radius: 4rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 8rpx 14rpx;
		box-sizing: border-box;
		border-left: 0.6rpx dashed #FFFFFF;
		border-top: 0.6rpx solid rgb(247, 87, 50, 0.8) !important;
		border-bottom: 0.6rpx solid rgb(247, 87, 50, 0.8) !important;
		border-right: 0.6rpx solid rgb(247, 87, 50, 0.8) !important;
	}

	.disCoupons-s-isUsed {
		background-color: #FFC7BA !important;
		color: rgb(247, 87, 50) !important;
		/* border-top: 0.6rpx solid rgb(247, 87, 50, 0.9)!important; */
		border-left: 0.6rpx dashed rgb(247, 87, 50, 0.8) !important;
		/* border-bottom: 0.6rpx solid rgb(247, 87, 50, 0.9)!important; */
		/* border-right: 0.6rpx solid rgb(247, 87, 50, 0.9)!important; */
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
		border-right: none !important;
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

	.notice-more {}

	.store-module_2 {
		margin-top: 40rpx;
	}

	.content {}

	.store-module_3 {
		height: 124rpx;
		position: fixed;
		bottom: 0rpx;
		box-sizing: border-box;
		padding-left: 26rpx;
		padding-right: 26rpx;
		z-index: 99999;
		background-color: rgb(255, 255, 255, 0.6);
	}

	.status-normal {
		width: 698rpx;
		height: 98rpx;
		border-radius: 50rpx;
		position: relative;
		color: #FFFFFF;
		padding-right: 40rpx;
		display: flex;
	}

	.status-underPrice {
		padding-left: 200rpx;
		background-color: #000000;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		border-radius: 50rpx;
	}

	.status-normal image {
		position: absolute;
		bottom: 0;
		left: 32rpx;
	}

	.f20 {
		font-size: 20rpx;
	}

	.f28 {
		font-size: 28rpx;
	}

	.f32 {
		font-size: 32rpx;
	}

	.f40 {
		font-size: 40rpx;
	}

	.fw500 {
		font-weight: 500;
	}

	.gray {
		color: #BABABA;
	}

	.mt10 {
		margin-top: 10rpx;
	}

	.mt20 {
		margin-top: 20rpx;
	}

	.abovePrice-l {
		width: 552rpx;
		height: 98rpx;
		background-color: #000000;
		border-radius: 50rpx 0 0 50rpx;
		padding-left: 158rpx;
		box-sizing: border-box;
	}

	.abovePrice-r {
		width: 146rpx;
		height: 98rpx;
		background: linear-gradient(to right, #FFE471, #FCAD00) !important;
		border-radius: 0 50rpx 50rpx 0;
		align-items: center;
		justify-content: center;
		color: #000000;
	}
</style>
<style lang="scss" scoped>
	.loading-view {
		width: 750rpx;
		height: 100%;
		position: absolute;
		z-index: 999999;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
	}

	.view-fiex {
		display: flex;
		flex-direction: column;
		width: 100%;
		// height: calc(100vh - constant(safe-area-inset-bottom));
		// height: calc(100vh - env(safe-area-inset-bottom));
		height: calc(100vh - 230rpx);
		/* #ifndef MP-WEIXIN */
		// height: calc(100vh - 44px - constant(safe-area-inset-bottom));
		// height: calc(100vh - 44px - env(safe-area-inset-bottom));
		/*  #endif  */
	}

	.flex-1 {
		flex: 1;
	}

	.ovh {
		overflow: hidden;
	}

	.title {
		padding: 30rpx 30rpx 30rpx 14rpx;
		font-size: 30rpx;
		color: #000000;
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
			padding-bottom: 10rpx;
		}
	}
</style>
