<template>
	<view class="order-seat">
		<!-- <view class="title">
			<view class="" style="margin-bottom: 30rpx;">
				<text>预约订座</text>
			</view>
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
		</view> -->
		<!-- 1 -->
		<view class="header">
			<!-- 标题 -->
			<view class="flex flex-space-between flex-align-center">
				<view class="cffffff" style="text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.9686274509803922)">
					<text class="fs-56 fw-500" style="margin-right: 6rpx;">订座</text>
					<text class="fs-32">提前预定美味不等待</text>
				</view>
				<view class="myOrder" @click="toMyorder()">
					<text>我的预约</text>
					<image style="width: 70rpx; height: 70rpx;" src="../../static/dz_dingzuo.png" mode=""></image>
				</view>
			</view>
			<!-- 选择时间、人数 -->
			<view class="select-input flex flex-align-center">
				<view class="" style="width: 46rpx; height: 42rpx; margin-left: 22rpx;">
					<image style="width: 46rpx; height: 42rpx;" src="../../static/dz_xuanze.png" mode=""></image>
				</view>
				<view class="fs-32" style="width: 600rpx; display: flex; align-items: center;">
					<!-- <text>搜索商家店铺</text> -->
					<!-- <input type="text" value="" placeholder="杏园茶坊"/> -->
					<uni-easyinput @blur="blurSearch" :inputBorder="false" v-model="formData.searchValue" placeholder="杏园茶坊" />
					<text style="font-size: 24rpx;" @click="search()">搜索</text>
				</view>
			</view>
		</view>
		<!-- 2 -->
		<view class="classify">
			<view class="select-type flex">
				<lb-picker ref="picker1" :props="myProps" v-model="formData.shopTypeId" mode="multiSelector"
					:list="typeList" :level="2" @confirm="handleConfirmType">
					<view class="type-item fs-24 flex flex-align-center">
						<text>{{ formData.typeLabel?formData.typeLabel:'品类' }}</text>
						<image style="width: 12rpx; height: 8rpx; margin-left: 14rpx;" src="../../static/dz_bottom1.png"
							mode=""></image>
					</view>
				</lb-picker>
				<lb-picker ref="picker2" v-model="formData.sortType" mode="selector" :list="sortList"
					@confirm="handleConfirmSort">
					<view class="type-item fs-24 flex flex-align-center">
						<text>{{ formData.sortLabel?formData.sortLabel:'智能排序' }}</text>
						<image style="width: 12rpx; height: 8rpx; margin-left: 14rpx;" src="../../static/dz_bottom1.png"
							mode=""></image>
					</view>
				</lb-picker>
				<!-- <view class="type-item fs-24 flex flex-align-center" v-for="(item,index) in typeItems" :key="index">
					<text>{{ item.name }}</text>
					<image style="width: 12rpx; height: 8rpx; margin-left: 14rpx;" src="../../static/dz_bottom1.png"
						mode=""></image>
				</view> -->
			</view>
			<uni-datetime-picker v-model="formData.date" type="date" @change="onChangeTime">
				<view class="select-date flex flex-align-center flex-justify-center">
					<image style="width: 26rpx; height: 26rpx;" src="../../static/dz_rili.png" mode=""></image>
					<text
						style="margin-left: 30rpx; margin-right: 24rpx;">{{ formData.date?formData.date: '选择预约时间' }}</text>
					<image style="width: 12rpx; height: 8rpx;" src="../../static/dz_bottom2.png" mode=""></image>
				</view>
			</uni-datetime-picker>
		</view>
		<!-- 3 -->
		<view class="list">
			<store-list :shopList="shopList" @clickDz="gotoDetails"></store-list>
			<view class="isBottom">
				<text class="isBottom-leftLine"></text>
				<text v-if="shopList.length >= shopTotal" class="isBottom-text">已经到底啦</text>
				<text v-else class="isBottom-text">加载中...</text>
				<text class="isBottom-rightLine"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import storeList from './storeList/store-list.vue';
	import LbPicker from '@/components/lb-picker'

	import orderSeat from '@/api/orderSeat/orderSeat.js'
	export default {
		components: {
			storeList,
			LbPicker
		},
		data() {
			return {
				scrollTop: 0,
				enable: true, // 是否吸顶
				offsetTop: '0',
				shopList: [],
				shopTotal: null,
				typeItems: [{
						name: '品类'
					},
					{
						name: '智能排序'
					}
				],
				formData: {
					typeLabel: '',
					sortLabel: '',
					date: '',
					pageNum: 1,
					pageSize: 10,
					searchValue: '',
					shopTypeId: [],
					latitude: 0,
					longitude: 0,
					sortType: '',
					
				},
				myProps: {
					label: 'shopTypeName',
					value: 'shopTypeId',
					children: 'children'
				},
				sortList: [{
						"label": "距离优先",
						"value": 1
					},
					{
						"label": "销量优先",
						"value": 5
					},
					{
						"label": "评分优先",
						"value": 7
					},
					{
						"label": "起送价优先",
						"value": 2
					},
					{
						"label": "人均高到低",
						"value": 3
					},
					{
						"label": "人均低到高",
						"value": 4
					}
				],
				typeList: [
					
				]
			}
		},
		onLoad() {
			this.formData.latitude = uni.getStorageSync('location_key').latitude;
			this.formData.longitude = uni.getStorageSync('location_key').longitude;
			this.findPerMakeShopList();
			this.getTreeselect()
		},
		methods: {
			search() {
				// uni.showToast({
				// 	title: this.formData.searchValue,
				// 	icon: 'none'
				// });
				this.formData.pageNum = 1;
				this.findPerMakeShopListForFilt();
			},
			blurSearch() {
				this.search();
			},
			handleConfirmType(e) {
				// console.log('confirm::', e.item[1].shopTypeName) shopTypeId
				this.formData.typeLabel = e.item[1].shopTypeName;
				this.formData.shopTypeId = e.value;
				// console.log(e)
				this.formData.pageNum = 1;
				this.findPerMakeShopListForFilt();
			},

			handleConfirmSort(e) {
				this.formData.sortLabel = e.item.label;
				// console.log(e.item.value)
				this.formData.sortType = e.item.value;
				// this.shopList = [];
				this.formData.pageNum = 1;
				this.findPerMakeShopListForFilt();
			},
			onChangeTime(e) {
				// console.log(e)
				this.formData.date = e;
				// this.shopList = [];
				this.formData.pageNum = 1;
				this.findPerMakeShopListForFilt();
			},
			gotoDetails(type) {
				// console.log(type)
				uni.navigateTo({
					url: './orderDetails/order-details?shopId=' + type.id + '&distance=' + type.distance + '&timeMinute=' + type.timeMinute 
				})
				// console.log(type)
			},
			toMyorder() {
				uni.navigateTo({
					url: './myOrder/my-order'
				})
			},
			// 获取店铺列表
			findPerMakeShopList() {
				let date = this.formData.date;
				let pageNum = this.formData.pageNum;
				let pageSize = this.formData.pageSize;
				let searchValue = this.formData.searchValue;
				let shopTypeId = this.formData.shopTypeId[1]?this.formData.shopTypeId[1]:'';

				let latitude = this.formData.latitude;
				let longitude = this.formData.longitude;
				let sortType = this.formData.sortType;
				orderSeat.findPerMakeShopList(date, latitude, longitude, pageNum, pageSize, searchValue, shopTypeId,
					sortType).then(res => {
					if (res.code == 200) {
						// console.log(res.data);
						// this.isLoading = false;
						this.shopList = this.shopList.concat(res.rows);
						this.shopTotal = res.total;
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
			findPerMakeShopListForFilt() {
				let date = this.formData.date;
				let pageNum = this.formData.pageNum;
				let pageSize = this.formData.pageSize;
				let searchValue = this.formData.searchValue;
				let shopTypeId = this.formData.shopTypeId[1]?this.formData.shopTypeId[1]:'';
			
				let latitude = this.formData.latitude;
				let longitude = this.formData.longitude;
				let sortType = this.formData.sortType;
				orderSeat.findPerMakeShopList(date, latitude, longitude, pageNum, pageSize, searchValue, shopTypeId,
					sortType).then(res => {
					if (res.code == 200) {
						// console.log(res.data);
						// this.isLoading = false;
						this.shopList = res.rows;
						this.shopTotal = res.total;
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
			getTreeselect() {
				orderSeat.getTreeselect().then(res => {
					if (res.code == 200) {
						// console.log(res.data);
						// this.isLoading = false;
						// console.log(res.data)
						this.typeList = res.data;
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

	.flex-align-center {
		align-items: center;
	}

	.flex-space-between {
		justify-content: space-between;
	}

	.flex-justify-center {
		justify-content: center;
	}

	.fs-56 {
		font-size: 56rpx;
	}

	.fs-32 {
		font-size: 32rpx;
	}

	.fs-24 {
		font-size: 24rpx;
	}

	.fs-28 {
		font-size: 28rpx;
	}

	.cffffff {
		color: #FFFFFF;
	}

	.fw-500 {
		font-weight: 500;
	}

	.order-seat {
		width: 750rpx;
		// height: 1600rpx;
		min-height: 100vh;
		// border-top: 0.2rpx solid #FD8931;
		background-color: #FFFFFF;

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

		.header {
			width: 100%;
			height: 366rpx;
			// background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../../static/store-bag.png) center/cover;
			background-image: url(../../static/dz_bcg.png);
			background-repeat: no-repeat;
			background-size: 100%;
			padding-top: 178rpx;
			padding-left: 28rpx;
			padding-right: 28rpx;
			box-sizing: border-box;
			.myOrder {
				display: flex;
				// flex-direction: column;
				align-items: center;
				text {
					font-size: 24rpx;
					color: #FFFFFF;
				}
			}

			.select-input {
				width: 100%;
				height: 96rpx;
				background-color: #FFFFFF;
				border-radius: 6rpx;
				margin-top: 10rpx;
				box-sizing: border-box;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.1607843137254902);
			}
		}

		.classify {
			padding-left: 28rpx;
			padding-right: 28rpx;
			box-sizing: border-box;

			.select-type {
				padding-left: 30rpx;
				padding-right: 30rpx;
				padding-top: 56rpx;
				padding-bottom: 30rpx;
				box-sizing: border-box;

				.type-item {
					margin-right: 80rpx;
				}
			}

			.select-date {
				width: 100%;
				height: 58rpx;
				background: linear-gradient(to right, #F0C819, #FF9D00);
				border-radius: 42rpx;
			}
		}

		.list {
			box-sizing: border-box;
		}
	}
</style>
