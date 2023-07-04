<template>
	<view class="shipping-address">
		<view class="maps">
			<!-- vue 禁止缩放，拖移无效  nvue有效 -->
			<map :longitude="longitude" :latitude="latitude" :enable-rotate="false" :enable-scroll="false"
				:enable-zoom="false" :scale="17" style="width: 750rpx;height: 100%;" :markers="markers"></map>
			<!-- <cover-view
				style="position: absolute; top: 485rpx; left: 22rpx; width: 707rpx; border-radius: 26rpx; height: 40rpx; background-color: #FFFFFF;">
			</cover-view> -->
		</view>
		<!-- 表单 -->
		<view class="form-container">
			<view v-if="!userAddress.location" class="chooseLocation" @click="chooseLocation">
				<text>选择收货地址</text>
			</view>
			<view v-else class="">
				<!-- <view class="" style="height: 78rpx;">	</view> -->
				<view class="address-show">
					<view class="left">
						<view class="name" style="margin-bottom: 8rpx;">
							<text>{{ userAddress.addressTitle }}</text>
							<!-- <text>星耀天地1栋写字楼 门口</text> -->
						</view>
						<view class="address">
							<text>{{ userAddress.address }}</text>
							<!-- <text>扬州市邗江区星耀天地1栋写字楼东门扬州市邗江区星耀天地1栋写字楼东门</text> -->
						</view>
					</view>
					<view class="right" @click="chooseLocation">
						<text>修改地址</text>
					</view>
				</view>
			</view>
			<view class="form">
				<view class="row-1">
					<text class="label">门牌号</text>
					<view class="" style="border-bottom: 0.6rpx solid #E3E3E3; width: 556rpx; padding-bottom: 10rpx;">
						<uni-easyinput v-model="userAddress.addressNum" :styles="inputStyles"
							style="margin-left: -20rpx;" :placeholderStyle="inputPlaceholderStyle"
							placeholder="详细地址,例1层101室">
						</uni-easyinput>
					</view>

				</view>
				<view class="row-2">
					<text class="label">标签</text>
					<view class=""
						style="border-bottom: 0.6rpx solid #E3E3E3; width: 556rpx; padding-bottom: 20rpx; box-sizing: border-box; display: flex;">
						<view class="tag-item" v-for="(item,index) in tags" :key="index"
							:style="item.isChecked? item.style: ''" @click="chooseTag(index)">
							<text>{{ item.name }}</text>
						</view>
					</view>
				</view>
				<view class="row-3">
					<text class="label">联系人</text>
					<view class=""
						style="border-bottom: 0.6rpx solid #E3E3E3; width: 556rpx; display: flex; align-items: center;  padding-bottom: 10rpx;">
						<uni-easyinput v-model="userAddress.userName" :styles="inputStyles" style="margin-left: -20rpx;"
							:placeholderStyle="inputPlaceholderStyle" placeholder="请填写收货人的姓名">
						</uni-easyinput>
						<view class="sex-selected">
							<view class="" @click="selectSex(0)">
								<image v-if="userAddress.sex == 0" style="width: 34rpx; margin-right: 8rpx;"
									src="../../../static/shopCar/checked.png" mode="widthFix"></image>
								<image v-else style="width: 34rpx; margin-right: 8rpx;"
									src="../../../static/shopCar/nochecked.png" mode="widthFix"></image>
								<text style="margin-right: 22rpx;">先生</text>
							</view>
							<view class="" @click="selectSex(1)">
								<image v-if="userAddress.sex == 1" style="width: 34rpx; margin-right: 8rpx;"
									src="../../../static/shopCar/checked.png" mode="widthFix"></image>
								<image v-else style="width: 34rpx; margin-right: 8rpx;"
									src="../../../static/shopCar/nochecked.png" mode="widthFix"></image>
								<text>女士</text>
							</view>

						</view>
					</view>
				</view>
				<view class="row-4">
					<text class="label">手机号</text>
					<view class=""
						style="border-bottom: 0.6rpx solid #E3E3E3; width: 556rpx; display: flex; align-items: center;  padding-bottom: 10rpx;">
						<view class=""
							style="border-right: 0.6rpx solid #E3E3E3; padding-right: 30rpx; margin-right: 26rpx;">
							<text style="font-size: 26rpx;">+86</text>
						</view>
						<uni-easyinput type="number" v-model="userAddress.mobile" :styles="inputStyles"
							style="margin-left: -20rpx;" :placeholderStyle="inputPlaceholderStyle"
							placeholder="请填写收货手机号码">
						</uni-easyinput>
					</view>

				</view>
				<view class="row-5">
					<view class="save-info" @click="saveAddress">
						<text>保存地址</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 测试服务器
	import * as util from '../../../common/util.js'
	import orderForm from '@/api/orderForm/orderForm.js'

	var formatLocation = util.formatLocation;
	export default {
		data() {
			return {
				longitude: null, // 中心经度
				latitude: null, // 中心纬度
				markers: [{
					longitude: null,
					latitude: null,
					// iconPath: '/static/baskCooking/sy_av.png'
				}], // 标记点
				// form: {
				// 	name: '',
				// 	area: '',
				// 	location: '',
				// 	address_details: '',
				// 	contacts: '',
				// 	sex: 'female',
				// 	phone: null
				// },
				userAddress: {
					address: '',
					addressTitle: '',
					// showAddress: '',
					addressNum: '',
					def: 1, // 是否默认地址: 0非默认 1默认
					flag: '', // 标签: 0家 1公司 2学校
					latitude: 0, // 维度
					longitude: 0, // 经度
					mobile: null,
					sex: 0, // 收货人性别: 0先生 1女士
					userName: '',
					// name: '',
					location: ''
				},
				inputPlaceholderStyle: "color:#BABABA;font-size:13px",
				inputStyles: {
					// color: '#2979FF',
					borderColor: 'transparent'
				},
				tags: [{
						flag: 0,
						name: '家',
						isChecked: false,
						style: 'border: 0.6rpx solid rgb(41, 121, 255, .3); background: rgb(41, 121, 255, .3)'
					},
					{
						flag: 1,
						name: '公司',
						isChecked: false,
						style: 'border: 0.6rpx solid rgb(24, 188, 55, .3); background: rgb(24, 188, 55, .3)'
					},
					{
						flag: 2,
						name: '学校',
						isChecked: false,
						style: 'border: 0.6rpx solid rgba(255,229,100,.3); background: rgba(255,229,100,.3)'
					}
				]
			}
		},
		filters: {

		},
		methods: {
			//定位
			init() {
				uni.getLocation({
					type: 'gcj02', // 谷歌地图使用 wgs84 坐标，其他地图使用 gcj02 坐标
					success: (res) => {
						if (res.errMsg == "getLocation:ok") {
							this.setMap(res)
						}
					}
				});
			},

			//自带选址
			chooseLocation() {
				uni.chooseLocation({
					success: (res) => {
						// console.log(res)
						// .toFixed(2)
						this.userAddress.latitude = res.latitude;
						this.userAddress.longitude = res.longitude;
						this.userAddress.address = res.address;
						this.userAddress.addressTitle = res.name;
						this.userAddress.location = formatLocation(res.longitude, res.latitude)

						// this.form.name = res.name
						// this.form.area = res.address
						// this.form.location = formatLocation(res.longitude, res.latitude)
						// console.log(this.form)
						this.setMap(res);
					}
				})
			},

			//设置地图坐标
			setMap(res) {
				this.longitude = res.longitude
				this.latitude = res.latitude
				this.markers[0].longitude = res.longitude
				this.markers[0].latitude = res.latitude
			},
			// 选择标签             
			chooseTag(index) {
				// console.log(index)
				let tags = this.tags;
				if (!tags[index].isChecked) {
					for (var i = 0; i < tags.length; i++) {
						tags[i].isChecked = false;
					}
					tags[index].isChecked = !tags[index].isChecked;
				} else {
					for (var i = 0; i < tags.length; i++) {
						tags[i].isChecked = false;
					}
				}
				// for (var i = 0; i < tags.length; i++) {
				// 	tags[i].isChecked = false
				// }
			},
			selectSex(sex) {
				this.userAddress.sex = sex;
			},
			saveAddress() {
				// 标签
				for (var i = 0; i < this.tags.length; i++) {
					if (this.tags[i].isChecked) {
						this.userAddress.flag = this.tags[i].flag;
					} else {

					}
				}
				// uni.showModal({
				//     content: JSON.stringify(this.userAddress)
				// })
				if(!this.userAddress.latitude) {
					uni.showToast({
						title: "请选择定位",
						icon: 'none'
					})
					return;
				}
				this.addAddress()
			},
			// 增加地址
			addAddress() {	
				// console.log(this.userAddress)
				// this.userAddress
				// this.userAddress.address = this.userAddress.showAddress + this.userAddress.address_details;
				orderForm.addAddress(this.userAddress).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: "添加地址成功",
							icon: 'success'
						})
						// uni.navigateTo({
						// 	url: '../order-form'
						// })
						setTimeout(function() {
							uni.navigateBack();
						}, 1000);
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
		},
		onLoad() {
			this.$nextTick(res => {
				this.init()
			})
		},
	}
</script>

<style>

</style>
<style lang="scss" scoped>
	.shipping-address {
		height: 100%;
		overflow: hidden;

		.maps {
			height: 500rpx;
		}

		.form-container {
			border-top: 1rpx solid #FFFFFF;
			border-radius: 26rpx 26rpx 0 0;
			margin: 2rpx auto 0;
			width: 706rpx;
			// border-radius: 26rpx 26rpx 0 0;
			height: calc(100vh - 503rpx);

			background-color: #FFFFFF;
			// padding-top: 24rpx;
			padding-left: 22rpx;
			padding-right: 22rpx;
			padding-bottom: 88rpx;
			box-sizing: border-box;
			position: relative;
			box-shadow: 0 0 12rpx 2rpx rgba(0, 0, 0, 0.1607843137254902);

			.address-show {
				padding: 22rpx 20rpx 20rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				// box-shadow: 0 0 6rpx 2rpx rgba(0, 0, 0, 0.1607843137254902);
				border-bottom: 1rpx solid #E3E3E3;
				// border-radius: 26rpx 0rpx;
				position: relative;
				width: 708rpx;
				left: -22rpx;

				// top: 10rpx;
				.left {
					max-width: 480rpx;

					.name {
						font-size: 26rpx;
						font-weight: 500;
					}

					.address {
						font-size: 24rpx;
					}
				}

				.right {
					font-size: 28rpx;
					color: #FFBD2B;
					border: 0.6rpx solid #FFBD2B;
					border-radius: 14rpx;
					box-sizing: border-box;
					padding: 12rpx 14rpx;
					min-width: 140rpx;
				}
			}

			.chooseLocation {
				width: 660rpx;
				height: 78rpx;
				line-height: 78rpx;
				text-align: center;
				border: 2rpx solid #FFBD2B;
				border-radius: 10rpx;
				margin-top: 24rpx;

				text {
					font-size: 28rpx;
					font-weight: 500;
					color: #FF9D2B;

				}
			}

			.form {
				padding-top: 30rpx;
				box-sizing: border-box;

				.row-1 {
					display: flex;
					align-items: center;

					.label {
						margin-right: 26rpx;
						font-size: 26rpx;
						font-weight: 500;
						width: 80rpx;
						margin-bottom: 10rpx;
					}
				}

				.row-2 {
					margin-top: 40rpx;

					display: flex;
					align-items: center;

					.label {
						margin-right: 26rpx;
						font-size: 26rpx;
						font-weight: 500;
						width: 80rpx;
						margin-bottom: 20rpx;
					}

					.tag-item {
						font-size: 26rpx;
						width: 90rpx;
						height: 50rpx;
						line-height: 50rpx;
						text-align: center;
						border: 0.6rpx solid #BABABA;
						border-radius: 6rpx;
						margin-right: 16rpx;
					}
				}

				.row-3 {
					display: flex;
					align-items: center;
					margin-top: 40rpx;

					.label {
						margin-right: 26rpx;
						font-size: 26rpx;
						font-weight: 500;
						width: 80rpx;
					}

					.sex-selected {
						display: flex;

						// align-items: center;
						>view {
							display: flex;
							align-items: center;
							margin-bottom: 10rpx;
						}
					}
				}

				.row-4 {
					display: flex;
					align-items: center;
					margin-top: 40rpx;

					.label {
						margin-right: 26rpx;
						font-size: 26rpx;
						font-weight: 500;
						width: 80rpx;
						margin-bottom: 10rpx;
					}
				}

				.row-5 {
					margin-top: 40rpx;

					.save-info {
						width: 100%;
						height: 78rpx;
						line-height: 78rpx;
						text-align: center;
						border-radius: 10rpx;
						font-size: 30rpx;
						font-weight: 500;
						background: linear-gradient(to bottom, #FFBD2B, #FFD417) !important;
					}
				}
			}
		}
	}
</style>
