<template>
	<view class="order-details" style="">
		<!-- 1.背景 image -->
		<view class="image-bcg" @click="goQuanjing"
			:style="{ backgroundImage: 'url(' + (enviroPicInfo.filePath ? enviroPicInfo.filePath : '../../../static/danxiaochu.png') + ')' }">
			<image style="width: 84rpx; height: 56rpx;" src="../../../static/dpzy_VRquanjing.png" mode=""></image>
		</view>
		<!-- 2.店铺信息 -->
		<view class="store-info">
			<view class="flex flex-items-center">
				<text class="title">{{ storeInfo.name }}</text>
				<view class="score">
					<image style="width: 21rpx; height: 20rpx;margin-right: 4rpx;" src="../../../static/dzxq_star.png"
						mode=""></image>
					<text>{{ Number(storeInfo.score).toFixed(1) }}</text>
				</view>
				<text
					style="color: #F75732;">{{ storeInfo.isNeedDeposite == 1? '（需支付定金￥' + storeInfo.depositeMoney + '）': '' }}</text>
			</view>
			<view class="location flex flex-items-center">
				<text>{{ storeInfo.address }}</text>
				<!-- <image style="width: 8rpx; height: 12rpx; margin-left: 16rpx;" src="../../../static/ms_right.png"
					mode=""></image> -->
			</view>
			<view class="distance" @click="openLacation()">
				<image src="../../../static/dzxq_location.png" mode=""></image>
				<!-- <text>距您800m，需约5分钟</text> -->
				<text>距您{{ (distance>1000)?((distance/1000).toFixed(1) + 'km'):(distance + 'm') }}，需约{{ timeMinute }}分钟</text>
			</view>
			<view class="notice flex flex-space-between flex-items-center">
				<text>公告：{{ storeInfo.shopNotice? storeInfo.shopNotice:'欢迎光临，很高兴为您服务～' }}</text>
				<!-- <image style="width: 13rpx; height: 7.4rpx;" src="../../../static/dzxq_bottom.png" mode=""></image> -->
			</view>
		</view>
		<!-- 3.tabs分类（预约，评价，商家） 可用商品详情goods-details内样式 -->
		<view class="dzxq-tabs flex">
			<view class="fs-30 mg-right-60" style="position: relative;">
				<text @click="clickTabs(1)" :class="tabSelected == 1? 'actived':''">预约</text>
			</view>
			<view class="fs-30 mg-right-60" style="position: relative;">
				<text @click="clickTabs(2)" :class="tabSelected == 2? 'actived':''">评价</text>
			</view>
			<view class="fs-30" style="position: relative;">
				<text @click="clickTabs(3)" :class="tabSelected == 3? 'actived':''">商家</text>
			</view>
		</view>
		<!-- 4.预约信息 -->
		<view v-show="tabSelected == 1" class="order-info">
			<!-- 4.1就餐信息（选取人数 日期 时间 写个小组件） -->
			<view class="eat-info">
				<view class="title">
					<text>就餐信息</text>
				</view>
				<!-- 人数 -->
				<view class="">
					<select-item :selectList="personList" @clickItem="selectdNum"></select-item>
				</view>
				<!-- 日期 -->
				<view class="" style="margin-top: 42rpx; margin-bottom: 42rpx;">
					<select-item :selectList="dateList" @clickItem="selectdDate"></select-item>
				</view>
				<!-- 午餐、晚餐 -->
				<view class="" style="margin-bottom: 40rpx;">
					<select-item :selectList="timetypeList" @clickItem="selectdTimetype"></select-item>
				</view>
				<!-- 时间 -->
				<view class="" style="margin-bottom: 40rpx;">
					<select-item :selectList="timeList" @clickItem="selectdTime"></select-item>
				</view>
				<!-- 订座人信息 -->
				<view class="orderor-info">
					<view class="flex flex-items-center	flex-space-between">
						<view class="flex flex-items-center" style="width: 432rpx;">
							<text class="isNecessary">*</text><text class="label">订座人</text>
							<uni-easyinput :inputBorder="false" v-model="orderorInfo.orderorName"
								placeholder="请输入您的姓名" />
						</view>
						<view class="flex flex-items-center"
							style="font-size: 24rpx; padding-right: 52rpx; box-sizing: border-box;">
							<view class="flex flex-items-center" @click="selectIsMale()" style="width: 100rpx;">
								<text>先生</text>
								<image v-if="orderorInfo.isMale"
									style="width: 22rpx; height: 22rpx; margin-left: 12rpx; margin-right: 18rpx;"
									src="../../../static/dzxq_selectd.png" mode=""></image>
								<image v-else
									style="width: 17rpx; height: 17rpx; margin-left: 12rpx; margin-right: 18rpx;"
									src="../../../static/dzxq_nselectd.png" mode=""></image>
							</view>
							<view class="flex flex-items-center" @click="selectIsMale()" style="width: 100rpx;">
								<text>女士</text>
								<image v-if="orderorInfo.isMale"
									style="width: 17rpx; height: 17rpx; margin-left: 12rpx; margin-right: 18rpx;"
									src="../../../static/dzxq_nselectd.png" mode=""></image>
								<image v-else
									style="width: 22rpx; height: 22rpx; margin-left: 12rpx; margin-right: 18rpx;"
									src="../../../static/dzxq_selectd.png" mode=""></image>
							</view>
						</view>
					</view>
					<view class="flex flex-items-center" style="width: 432rpx;">
						<text class="isNecessary">*</text><text class="label">联系方式</text>
						<uni-easyinput :inputBorder="false" type="number" v-model="orderorInfo.orderorPhone"
							placeholder="请输入您的联系电话" />
					</view>
					<view class="flex flex-items-center" style="width: 432rpx;">
						<text style="margin-left: 12rpx;"></text><text class="label">备注</text>
						<uni-easyinput :inputBorder="false" v-model="orderorInfo.orderorNote" placeholder="请输入您的备注要求" />
					</view>
					<!-- <view class="flex flex-items-center" style="width: 432rpx;" v-if="pmsSeatList.length > 0">
						<text class="label">预定包间</text>
						<switch :checked="orderorInfo.roomIsChecked" color="#FFBD2B" @change="roomIsChange"
							style="transform:scale(0.5)" />
					</view> -->
				</view>
			</view>
			<view class="room-combo">
				<view class="title">
					<text class="isNecessary">*</text><text>包厢</text>
				</view>
				<view class="rooms-list">
					<view v-for="(item,index) in pmsSeatList" :key="index + 1" class="rooms-item" style=""
						@click="toRooms(item)">
						<view class="rooms-item-info" style="">
							<image :src="item.imgUrl" mode="" style=""></image>
							<view class="info" style="">
								<text class="name" style="">{{ item.name }}</text>
								<!-- <text style="font-size: 24rpx; color: #999999;">周一至周日</text> -->
								<text class="range" style="">{{ item.peopleRange }}</text>
								<text class="info-text" style="">{{ item.info }}</text>
							</view>
							<!-- <view class="">
								258元/客，6人起订，不满6人按包厢低消1500元/桌；可容纳人数6-8人
							</view> -->
						</view>
						<view v-if="item.roomState" class="rooms-item-action isOrdered" style="">
							已满
						</view>
						<view v-else class="rooms-item-action" style="" @click.stop="clickRoomsItem(index,item)" :class="item.tmpState?'selected':''">
							{{ item.tmpState? '已选': '选择' }}
						</view>
					</view>
				</view>
			</view>
			<!-- 4.2包间套餐（写个组件） -->
			<!-- <view class="room-combo" v-if="comboList.length > 0">
				<view class="title">
				</view>
				<view class="" style="padding-right: 18rpx; margin-bottom: 38rpx;">
					<uni-segmented-control :current="comboCurrent" :values="comboItems" :active-color="'#FF9D00'"
						@clickItem="onClickItem" style="height: 60rpx;"/>
				</view>
				<combo-select v-if="comboCurrent == 0" :comboList="comboList" @clickItem="selectdCombo" style=""></combo-select>
				<view class="rooms-list" v-else>
					<view v-for="(item,index) in comboList" :key="index + 1" class="rooms-item" style=""
						v-if="item.packageType == 2" @click="toPackage(item)">
						<view class="rooms-item-info" style="">
							<image :src="item.imgUrl" mode="" style=""></image>
							<view class="info flex-space-between" style="">
								<view class="info-1" style="">
									<text class="name" style="">{{ item.name }}</text>
									<text style="font-size: 24rpx; color: #999999;">可预约时间：{{ item.time }}</text>
								</view>
								<view class="price" style="">
									<text style="font-size: 20rpx;">￥</text>
									<text style="font-size: 36rpx;">{{ item.price }}</text>
								</view>
							</view>
						</view>
						<view class="rooms-item-action" style="" @click.stop="clickItem(item)" :class="item.state?'selected':''">
							{{ item.state? '已选': '选择' }}
						</view>
					</view>
				</view>
			</view> -->
			<!-- 4.3预约须知 -->
			<view class="need-know" style="">
				<view class="title">
					<text>预约须知</text>
				</view>
				<!-- <view class="fs-24" v-for="(item,index) in needKnow" :key="index">
					<text>{{ item.content }}</text>
				</view> -->
				<view class="" style="padding: 0 36rpx; box-sizing: border-box;">
					<rich-text :nodes="storeInfo.perMakeNotice" style="font-size: 28rpx; line-height: 2; color: #000000;"></rich-text>
				</view>
			</view>
			<!-- 4.4确定预约btn 2种状态 -->
			<!-- <view class="btn-container">
				<button type="" style="margin-bottom: 40rpx;" @click="sureOrder()">确定预约</button>
				<button type="" style="opacity: 0.6;">确定预约</button>
			</view> -->
		</view>
		<view v-show="tabSelected == 2" class="">
			<os-evalutions :osEvalutionsList="osEvalutionsList"></os-evalutions>
		</view>
		<view v-show="tabSelected == 3" class="">
			<os-store-info :storeZzList="storeZzList" :storeInfo="storeInfo" :enviroPicInfoList='enviroPicInfoList'>
			</os-store-info>
		</view>
	</view>
</template>

<script>
	import selectItem from "./selectItem/select-item.vue"
	import comboSelect from "./comboSelect/combo-select.vue"
	import osEvalutions from "./os-evalutions.vue"
	import osStoreInfo from "./os-storeInfo.vue"

	import shop from '@/api/shop/shop.js'
	import file from '@/api/file/file.js'
	import orderSeat from '@/api/orderSeat/orderSeat.js'

	import * as util from '@/common/util.js'
	var main = util.main
	export default {
		components: {
			selectItem,
			comboSelect,
			osEvalutions,
			osStoreInfo
		},
		data() {
			return {
				comboCurrent: 0,
				comboItems: ['人均消费', '优惠套餐'],
				storeInfo: {},
				timeMinute: '',
				distance: '',
				enviroPicInfo: '',
				enviroPicInfoList: [],
				tabSelected: 1,
				personList: [{
						'name': '2人',
						'value': 2,
						'state': true
					},
					{
						'name': '3人',
						'value': 3,
						'state': false
					},
					{
						'name': '4人',
						'value': 4,
						'state': false
					},
					{
						'name': '5人',
						'value': 5,
						'state': false
					},
					{
						'name': '6人',
						'value': 6,
						'state': false
					},
					{
						'name': '7人',
						'value': 7,
						'state': false
					},
					{
						'name': '8人',
						'value': 8,
						'state': false
					},
					{
						'name': '9人',
						'value': 9,
						'state': false
					},
					{
						'name': '10人',
						'value': 10,
						'state': false
					},
					{
						'name': '10人以上',
						'value': 11,
						'state': false
					}
				],
				dateList: [],
				timetypeList: [
					{
						'name': '午餐',
						'value': 0,
						'state': true
					},
					{
						'name': '晚餐',
						'value': 1,
						'state': false
					}
					
				],
				timeList: [
					{
						'name': '11:00',
						'value': '11:00',
						'state': true
					},
					{
						'name': '11:30',
						'value': '11:30',
						'state': false
					},
					{
						'name': '12:00',
						'value': '12:00',
						'state': false
					},
					{
						'name': '12:30',
						'value': '12:30',
						'state': false
					},
					{
						'name': '13:00',
						'value': '13:00',
						'state': false
					},
					{
						'name': '13:30',
						'value': '13:30',
						'state': false
					},
					{
						'name': '14:00',
						'value': '14:00',
						'state': false
					}
				],
				orderorInfo: {
					orderorName: '',
					orderorPhone: '',
					orderorNote: '',
					isMale: true,
					// roomIsChecked: false,
					foodPackageName: '',
					foodPackagePrice: '',
					foodPackageType: '',
					foodPackageContent: '',
					receiveDate: '',
					receivePeople: 2,
					receiveTime: '11:00',
					shopId: '',
					vacationUse: 0,
					lunchOrDinner: 0
				},
				comboList: [],
				osEvalutionsList: [],
				osEvalutionsTotal: null,
				// osStoreInfoList: {}
				osEvalutionsP: {
					pageNum: 1,
					pageSize: 10,
					shopId: ''
				},
				storeZzList: [],
				pmsSeatList: []
			}
		},
		onLoad(options) {
			// console.log(options.shopId)
			this.timeMinute = options.timeMinute;
			this.distance = options.distance;
			this.orderorInfo.shopId = options.shopId;
			this.osEvalutionsP.shopId = options.shopId;
			this.getShopDetailsById(options.shopId);
			// this.getFoodPackage(options.shopId);
			this.getShopPerMakeEvalList();
			this.getShopInfo(options.shopId);
			// this.getPmsSeatList(options.shopId, this.orderorInfo.lunchOrDinner, this.orderorInfo.receiveDate);
		},
		onShow() {
			if(this.orderorInfo.receiveDate){
				this.getPmsSeatList(this.orderorInfo.shopId, this.orderorInfo.lunchOrDinner, this.orderorInfo.receiveDate);
			}
		},
		mounted() {},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
			// console.log(this.scrollTop)
		},
		methods: {
			toRooms(item) {
				// item.id
				// console.log(item.id)
				uni.navigateTo({
					url: '/pages/orderSeat/comboDetails/combo-details?id=' + item.id
				})
			},
			toPackage(item) {
				// console.log(item.id)
				uni.navigateTo({
					url: '/pages/orderSeat/packageDetails/package-details?id=' + item.id
				})
			},
			onClickItem(e) {
				if (this.comboCurrent != e.currentIndex) {
					this.comboCurrent = e.currentIndex;
				}
			},
			getPmsSeatList(shopId, lunchOrDinner, receiveDate) {
				orderSeat.getPmsSeatList(shopId, lunchOrDinner, receiveDate).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res)
						this.pmsSeatList = res.rows
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
			goQuanjing() {
				if (this.enviroPicInfo) {
					uni.navigateTo({
						url: '/pages/store/quanjinWebView?imgPath=' + this.enviroPicInfo.filePath
					});
				}
			},
			getShopInfo(shopId) {
				shop.getShopById({
					id: shopId
				}).then(res => {
					if (res.code == 200) {
						// console.log(res.data.businessLicensePic + res.data.licencePic)
						this.getFileUrl_forZz(res.data.businessLicensePic + res.data.licencePic);
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
			clickTabs(index) {
				this.tabSelected = index;
			},
			selectdNum(arr, type) {
				this.personList = arr;
				// console.log(type + 2)     // 表单人数字段
				this.orderorInfo.receivePeople = type + 2;
			},
			selectdDate(arr, type) {
				// console.log(this.dateList[type].value)      // 表单日期字段
				this.dateList = arr;
				// this.timeList = [];
				// // console.log(type);
				// let canUseTime = main(this.storeInfo.canUseTimeStart, this.storeInfo.canUseTimeEnd);
				// let timeArr = [];
				// if (type == 0) {
				// 	// console.log(canUseTime.todayTimesArr[0].substring(0, 5))
				// 	timeArr = canUseTime.todayTimesArr;
				// } else {
				// 	timeArr = canUseTime.tomorrowTimesArr
				// }
				// for (var i = 0; i < timeArr.length; i++) {
				// 	let obj = {};
				// 	obj.name = timeArr[i].substring(0, 5);
				// 	obj.value = timeArr[i].substring(0, 5);
				// 	obj.state = false;
				// 	this.timeList.push(obj);
				// }
				// this.timeList[0].state = true;
				// console.log(arr[type].value)
				this.orderorInfo.receiveDate = arr[type].value;
				this.getPmsSeatList(this.orderorInfo.shopId, this.orderorInfo.lunchOrDinner, this.orderorInfo.receiveDate);
			},
			selectdTimetype(arr, type) {
				// console.log(arr, type)
				this.timetypeList = arr;
				if(!type) {
					this.timeList = [
						{
							'name': '11:00',
							'value': '11:00',
							'state': true
						},
						{
							'name': '11:30',
							'value': '11:30',
							'state': false
						},
						{
							'name': '12:00',
							'value': '12:00',
							'state': false
						},
						{
							'name': '12:30',
							'value': '12:30',
							'state': false
						},
						{
							'name': '13:00',
							'value': '13:00',
							'state': false
						},
						{
							'name': '13:30',
							'value': '13:30',
							'state': false
						},
						{
							'name': '14:00',
							'value': '14:00',
							'state': false
						}
					]
					this.orderorInfo.receiveTime = '11:00';
				} else {
					this.timeList = [
						{
							'name': '16:00',
							'value': '16:00',
							'state': true
						},
						{
							'name': '16:30',
							'value': '16:30',
							'state': false
						},
						{
							'name': '17:00',
							'value': '17:00',
							'state': false
						},
						{
							'name': '17:30',
							'value': '17:30',
							'state': false
						},
						{
							'name': '18:00',
							'value': '18:00',
							'state': false
						},
						{
							'name': '18:30',
							'value': '18:30',
							'state': false
						},
						{
							'name': '19:00',
							'value': '19:00',
							'state': false
						},
						{
							'name': '19:30',
							'value': '19:30',
							'state': false
						},
						{
							'name': '20:00',
							'value': '20:00',
							'state': false
						}
					]
					this.orderorInfo.receiveTime = '16:00';
				}
				
				this.orderorInfo.lunchOrDinner = arr[type].value;
				this.getPmsSeatList(this.orderorInfo.shopId, this.orderorInfo.lunchOrDinner, this.orderorInfo.receiveDate);
			},
			selectdTime(arr, type) {
				// console.log(this.timeList[type].value)       // 表单时间字段
				this.timeList = arr;
				// console.log(arr[type])
				this.orderorInfo.receiveTime = arr[type].value;
			},
			selectIsMale() {
				this.orderorInfo.isMale = !this.orderorInfo.isMale;
			},
			// roomIsChange(e) {
			// 	// console.log(e.detail.value)
			// 	// this.orderorInfo.roomIsChecked = e.detail.value;
			// },
			selectdCombo(arr, type) {
				this.comboList = arr;
				// console.log(arr[type])
				if (!arr[type].state) {
					this.orderorInfo.foodPackageName = '';
					this.orderorInfo.foodPackagePrice = '';
					this.orderorInfo.foodPackageType = '';
					this.orderorInfo.vacationUse = null;
					this.orderorInfo.foodPackageContent = '';
				} else {
					this.orderorInfo.foodPackageName = arr[type].name;
					this.orderorInfo.foodPackagePrice = arr[type].price;
					this.orderorInfo.foodPackageType = arr[type].packageType;
					this.orderorInfo.vacationUse = arr[type].vacationUse;
					this.orderorInfo.foodPackageContent = arr[type].content;
				}
				console.log(arr[type])
			},
			// 选择套餐点击事件
			// clickItem(item) {
			// 	// for (var i = 0; i < this.comboList.length; i++) {
			// 	// 	this.comboList[i].state = false;
			// 	// }
			// 	if (item.state) {
			// 		for (var i = 0; i < this.comboList.length; i++) {
			// 			this.comboList[i].state = false;
			// 		}
			// 		this.orderorInfo.foodPackageName = '';
			// 		this.orderorInfo.foodPackagePrice = '';
			// 		this.orderorInfo.foodPackageType = '';
			// 		this.orderorInfo.vacationUse = null;
			// 		this.orderorInfo.foodPackageContent = '';
			// 	} else {
			// 		for (var i = 0; i < this.comboList.length; i++) {
			// 			this.comboList[i].state = false;
			// 		}
			// 		item.state = !item.state;
			// 		this.orderorInfo.foodPackageName = item.name;
			// 		this.orderorInfo.foodPackagePrice = item.price;
			// 		this.orderorInfo.foodPackageType = item.packageType;
			// 		this.orderorInfo.vacationUse = item.vacationUse;
			// 		this.orderorInfo.foodPackageContent = item.content;
			// 	}
			// 	// console.log(this.orderorInfo)
			// },
			clickRoomsItem(index,item) {
				if (!this.orderorInfo.orderorName) {
					uni.showToast({
						title: '请先输入订座人姓名',
						icon: 'none'
					});
					return;
				}
				if (!this.orderorInfo.orderorPhone) {
					uni.showToast({
						title: '请先输入订座人联系电话',
						icon: 'none'
					});
					return;
				}
				if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.orderorInfo.orderorPhone)) {
					uni.showToast({
						title: '请输入正确手机号',
						icon: 'none'
					});
					return;
				}
				// this.comboList = [];
				// this.orderorInfo.foodPackageName = '';
				for (var i = 0; i < this.pmsSeatList.length; i++) {
					this.pmsSeatList[i].tmpState = false;
				}
				item.tmpState = !item.tmpState;
				// this.pmsSeatList[index].state = !this.pmsSeatList[index].state;					
				this.orderorInfo.roomId = item.id;
				this.orderorInfo.roomName = item.name;
				// this.findFoodPackageList(item.id);
				uni.navigateTo({
					url: '/pages/orderSeat/orderDetails/os-submit?orderorInfo=' + JSON.stringify(this.orderorInfo) + '&isNeedDeposite=' + this.storeInfo.isNeedDeposite
				})
				// console.log(this.orderorInfo);
				// console.log(JSON.stringify(this.orderorInfo));
				
				
				// ---------- 包厢点击可取消(旧) -----------
				// if (item.tmpState) {
				// 	for (var i = 0; i < this.pmsSeatList.length; i++) {
				// 		this.pmsSeatList[i].tmpState = false;
				// 	}
				// 	this.orderorInfo.roomId = '';
				// 	this.orderorInfo.roomName = '';
				// } else {
				// 	for (var i = 0; i < this.pmsSeatList.length; i++) {
				// 		this.pmsSeatList[i].tmpState = false;
				// 	}
				// 	item.tmpState = !item.tmpState;
				// 	// this.pmsSeatList[index].state = !this.pmsSeatList[index].state;					
				// 	this.orderorInfo.roomId = item.id;
				// 	this.orderorInfo.roomName = item.name;
				// 	this.findFoodPackageList(item.id);
				// }
			},
			// 查询店铺详情
			getShopDetailsById(id) {
				// let id = this.listPortForm.pageNum;
				shop.getShopDetailsById(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.data.canUseTimeStart, res.data.canUseTimeEnd);
						// console.log(main(res.data.canUseTimeStart, res.data.canUseTimeEnd))
						this.storeInfo = res.data;
						// this. = res.data.chooseSevenDays
						for (var i = 0; i < res.data.chooseSevenDays.length; i++) {
							let obj = {};
							obj.name = res.data.chooseSevenDays[i].substring(5, 13);
							obj.value = res.data.chooseSevenDays[i];
							obj.state = false;
							// console.log(obj)
							this.dateList.push(obj);
						}
						this.dateList[0].name = '今天';
						this.dateList[1].name = '明天';
						this.dateList[0].state = true;
						this.orderorInfo.receiveDate = this.dateList[0].value;
						// let canUseTime = main(res.data.canUseTimeStart, res.data.canUseTimeEnd);
						// // console.log(canUseTime)
						// for (var i = 0; i < canUseTime.todayTimesArr.length; i++) {
						// 	let obj = {};
						// 	obj.name = canUseTime.todayTimesArr[i].substring(0, 5);
						// 	obj.value = canUseTime.todayTimesArr[i].substring(0, 5);
						// 	obj.state = false;
						// 	this.timeList.push(obj);
						// }
						// this.timeList[0].state = true;
						// this.orderorInfo.receiveTime = this.timeList[0].value;
						// this.fllReduceArr = res.data.fullReduce.split(";");
						if (res.data.doorPic) {
							this.getFileUrl(res.data.doorPic);
						}
						this.getPmsSeatList(this.orderorInfo.shopId, this.orderorInfo.lunchOrDinner, this.orderorInfo.receiveDate);
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
			// 获取预约套餐(jiu)
			getFoodPackage(fileid) {
				orderSeat.getFoodPackage(fileid).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.rows)
						for (var i = 0; i < res.rows.length; i++) {
							let obj = {};
							obj.id = res.rows[i].id;
							obj.name = res.rows[i].packageName;
							obj.content = res.rows[i].foodPackageContentData?JSON.stringify(res.rows[i].foodPackageContentData):'';
							obj.price = res.rows[i].price;
							obj.vacationUse = res.rows[i].vacationUse;
							obj.imgUrl = res.rows[i].imgUrl;
							obj.packageType = res.rows[i].packageType; // 2: 总价套餐，1：人均套餐 3：自定义人均套餐
							obj.state = false; // 2: 总价套餐，1：人均套餐 3：自定义人均套餐
							if (res.rows[i].vacationUse) {
								obj.time = '周一到周日';
							} else {
								obj.time = '周一到周五（法定节假日不可用）'
							}
							this.comboList.push(obj);
						}
						// let diyObj = {
						// 	name: '自定义人均消费',
						// 	price: 500,
						// 	packageType: 3, // 2: 总价套餐，1：人均套餐 3：自定义人均套餐
						// 	state: false,
						// 	vacationUse: 1,
						// 	time: '周一到周日'
						// }
						// this.comboList.push(diyObj);
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
			// 获取预约套餐(xin 写在新页面内)
			// findFoodPackageList(seatId) {
			// 	orderSeat.findFoodPackageList(seatId).then(res => {
			// 		// console.log(res)
			// 		if (res.code == 200) {
			// 			// console.log(res.rows)
			// 			for (var i = 0; i < res.rows.length; i++) {
			// 				let obj = {};
			// 				obj.id = res.rows[i].id;
			// 				obj.name = res.rows[i].packageName;
			// 				obj.content = res.rows[i].foodPackageContentData?JSON.stringify(res.rows[i].foodPackageContentData):'';
			// 				obj.price = res.rows[i].price;
			// 				obj.vacationUse = res.rows[i].vacationUse;
			// 				obj.imgUrl = res.rows[i].imgUrl;
			// 				obj.packageType = res.rows[i].packageType; // 2: 总价套餐，1：人均套餐 3：自定义人均套餐
			// 				obj.state = false; // 2: 总价套餐，1：人均套餐 3：自定义人均套餐
			// 				if (res.rows[i].vacationUse) {
			// 					obj.time = '周一到周日';
			// 				} else {
			// 					obj.time = '周一到周五（法定节假日不可用）'
			// 				}
			// 				this.comboList.push(obj);
			// 			}
			// 		} else {
			// 			uni.showToast({
			// 				title: res.msg,
			// 				icon: 'none'
			// 			});
			// 		}
			// 	}).catch(err => {
			// 		uni.showToast({
			// 			title: err.msg,
			// 			icon: 'none'
			// 		})
			// 	});
			// },
			
			// 确定预约(写在新页面内)
			// sureOrder() {
			// 	if (!this.orderorInfo.orderorName) {
			// 		uni.showToast({
			// 			title: '请输入订座人姓名',
			// 			icon: 'none'
			// 		});
			// 		return;
			// 	}
			// 	if (!this.orderorInfo.orderorPhone) {
			// 		uni.showToast({
			// 			title: '请输入联系方式',
			// 			icon: 'none'
			// 		});
			// 		return;
			// 	}
			// 	if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.orderorInfo.orderorPhone)) {
			// 		uni.showToast({
			// 			title: '请输入正确手机号',
			// 			icon: 'none'
			// 		});
			// 		return;
			// 	}
			// 	if (!this.orderorInfo.roomId) {
			// 		uni.showToast({
			// 			title: '请选择包厢',
			// 			icon: 'none'
			// 		});
			// 		return;
			// 	}
			// 	if (!this.orderorInfo.foodPackageName) {
			// 		uni.showToast({
			// 			title: '请选择人均消费或者优惠套餐',
			// 			icon: 'none'
			// 		});
			// 		return;
			// 	}
			// 	// console.log(this.orderorInfo)
			// 	let data = {
			// 		foodPackageName: this.orderorInfo.foodPackageName,
			// 		foodPackageContent: this.orderorInfo.foodPackageContent,
			// 		foodPackagePrice: this.orderorInfo.foodPackagePrice,
			// 		foodPackageType: this.orderorInfo.foodPackageType,
			// 		// isRoom: this.orderorInfo.roomIsChecked ? 1 : 0,
			// 		perMakeName: this.orderorInfo.orderorName,
			// 		perMakeRemark: this.orderorInfo.orderorNote,
			// 		perMakeSex: this.orderorInfo.isMale ? 0 : 1,
			// 		perMakeTel: this.orderorInfo.orderorPhone,
			// 		receiveDate: this.orderorInfo.receiveDate,
			// 		receivePeople: this.orderorInfo.receivePeople,
			// 		receiveTime: this.orderorInfo.receiveTime,
			// 		shopId: this.orderorInfo.shopId,
			// 		vacationUse: this.orderorInfo.vacationUse,
			// 		roomId: this.orderorInfo.roomId,
			// 		roomName: this.orderorInfo.roomName,
			// 		lunchOrDinner: this.orderorInfo.lunchOrDinner
			// 	};
			// 	this.addPerMakeSeat(data);
			// },
			// addPerMakeSeat(data) {
			// 	console.log(data);
			// 	orderSeat.addPerMakeSeat(data).then(res => {
			// 		if (res.code == 200) {
			// 			uni.showToast({
			// 				title: "预约成功",
			// 				icon: 'success'
			// 			})
			// 			// setTimeout(() => {
			// 			// 	uni.navigateBack({

			// 			// 	})
			// 			// }, 1000);
			// 			if (this.storeInfo.isNeedDeposite == 1) {
			// 				this.beforePay(res.data);
			// 			} else {
			// 				setTimeout(() => {
			// 					uni.navigateTo({
			// 						url: '/pages/orderSeat/myOrder/my-order'
			// 					})
			// 				}, 1000);
			// 			}
			// 		} else {
			// 			uni.showToast({
			// 				title: res.msg,
			// 				icon: 'none'
			// 			})
			// 		}
			// 	}).catch(err => {
			// 		uni.showToast({
			// 			title: err.msg,
			// 			icon: 'none'
			// 		})
			// 	});
			// },
			// 获取评论列表
			getShopPerMakeEvalList() {
				let shopId = this.osEvalutionsP.shopId;
				let pageNum = this.osEvalutionsP.pageNum;
				let pageSize = this.osEvalutionsP.pageSize;
				orderSeat.getShopPerMakeEvalList(shopId, pageNum, pageSize).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res.rows)
						this.osEvalutionsList = this.osEvalutionsList.concat(res.rows);
						this.osEvalutionsTotal = res.total
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
			// 支付（写在写页面）
			// beforePay(orders) {
			// 	orderSeat.orderSeatbeforePay(orders).then((res) => {
			// 		var timestamp = new Date().getTime() / 1000
			// 		var orderInfo = {
			// 			"appid": res.data.appId, // 应用ID（AppID）
			// 			"partnerid": res.data.partnerId, // 商户号（PartnerID）
			// 			"prepayid": res.data.prepayId, // 预支付交易会话ID
			// 			"package": res.data.packageValue, // 固定值
			// 			"noncestr": res.data.nonceStr, // 随机字符串
			// 			"timestamp": res.data.timeStamp, // 时间戳（单位：秒）
			// 			"sign": res.data.sign // 签名，这里用的 MD5 签名
			// 		};
			// 		uni.getProvider({
			// 			service: 'payment',
			// 			success: function(res) {
			// 				// console.log(res.provider)
			// 				if (~res.provider.indexOf('wxpay')) {
			// 					uni.requestPayment({
			// 						"provider": "wxpay", //固定值为"wxpay"
			// 						"orderInfo": orderInfo,
			// 						success: function(res) {
			// 							var rawdata = JSON.parse(res.rawdata);
			// 							console.log("支付成功");
			// 							uni.navigateTo({
			// 								url: '/pages/orderSeat/myOrder/my-order'
			// 							})
			// 						},
			// 						fail: function(err) {
			// 							console.log('支付失败:' + JSON.stringify(err));
			// 							uni.navigateTo({
			// 								url: '/pages/orderSeat/myOrder/my-order'
			// 							})
			// 						},
			// 						complete: function(res) {
			// 							// uni.switchTab({
			// 							// 	url:'/pages/tabBar/order/order',
			// 							// })
			// 						}
			// 					});
			// 				}
			// 			}
			// 		});
			// 	})
			// },
		},
		onReachBottom() {
			// console.log('触底啦~')
			if (this.osEvalutionsList.length >= this.osEvalutionsTotal) return;
			this.osEvalutionsP.pageNum++;
			this.getShopPerMakeEvalList();
		},
	}
</script>

<style lang="scss" scoped>
	.isNecessary {
		font-size: 24rpx;
		color: red;
	}
	button::after {
		border: none;
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

	.order-details {
		box-sizing: border-box;
		background-color: #FFFFFF;
		// min-height: calc(100vh - 88rpx);
		min-height: 100vh;

		.image-bcg {
			width: 750rpx;
			height: 368rpx;
			background-image: url(../../../static/store-bag.png);
			background-repeat: no-repeat;
			background-size: cover;

			image {
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
		}

		.store-info {
			padding-top: 24rpx;
			padding-left: 18rpx;
			padding-right: 58rpx;
			padding-bottom: 32rpx;

			.title {
				font-size: 44rpx;
				font-weight: 500;
				margin-right: 20rpx;
			}

			.score {
				font-size: 24rpx;
				font-weight: 500;
				color: #FFBD2B;
			}

			.location {
				font-size: 20rpx;
				margin-top: 12rpx;
				margin-bottom: 10rpx;
			}

			.distance {
				padding-left: 8rpx;
				box-sizing: border-box;

				image {
					width: 13.4rpx;
					height: 16rpx;
					margin-right: 12rpx;
				}

				text {
					color: #A7A7A7;
					font-size: 20rpx;
				}
			}

			.notice {
				margin-top: 18rpx;
				font-size: 20rpx;
			}
		}

		.dzxq-tabs {
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

		.order-info {
			box-sizing: border-box;

			.eat-info,
			.room-combo,
			.need-know {
				padding-left: 18rpx;
				padding-bottom: 24rpx;
				box-sizing: border-box;
				border-bottom: 0.6rpx solid #E3E3E3;

				.title {
					font-size: 30rpx;
					font-weight: 500;
					padding-top: 32rpx;
					padding-bottom: 24rpx;
				}

				.label {
					font-size: 24rpx;
					width: 132rpx;
				}

				.rooms-list {
					.rooms-item {
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 0 18rpx;
						box-sizing: border-box;
						margin-bottom: 28rpx;

						.rooms-item-info {
							max-width: 560rpx;
							display: flex;
							// white-space: nowrap;

							image {
								width: 200rpx;
								min-width: 200rpx;
								height: 160rpx;
								border-radius: 8rpx;
							}
							
							.info {
								display: flex;
								flex-direction: column;
								margin-left: 20rpx;
								.info-1 {
									display: flex;
									flex-direction: column;
								}
								.name {
									font-size: 32rpx;
									font-weight: 600;
								}

								.range {
									font-size: 24rpx;
									color: #999999;
								}

								.price {
									color: rgb(247, 87, 50);
									font-weight: 600;
									// margin-top: 18rpx;
								}
								
								.info-text {
									font-size: 24rpx;
									color: #999999;
									margin-top: 24rpx;
									overflow: hidden;
									text-overflow: ellipsis;
									display: -webkit-box;
									-webkit-line-clamp: 2;
									-webkit-box-orient: vertical;
								}
							}
						}

						.rooms-item-action {
							height: 50rpx;
							line-height: 50rpx;
							border-radius: 40rpx;
							background: #F75732;
							color: #ffffff;
							text-align: center;
							padding: 0 20rpx;
							margin-right: 20rpx;
							font-size: 28rpx;
						}
						.selected {
							background: #999999!important;
							// color: #000000;
						}
						.isOrdered {
							background: #E3E3E3!important;
							color: #999999
						}
					}
					
				}
			}
			.btn-container {
				box-sizing: border-box;
				margin-top: 32rpx;
				padding: 0 26rpx 40rpx;

				button {
					background-color: #007AFF;
					color: #FFFFFF;
					font-size: 28rpx;
					background: linear-gradient(to right, #F0C819, #FF9D00);

				}
			}
		}
	}
</style>
