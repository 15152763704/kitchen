<template>
	<view class="container">
		<!-- <view class="status_bar">
		</view>
		<view> 状态栏下的文字 </view> -->
		<text class="title">商家入驻</text>
		<view class="form">
			<view class="input-phone">
				<view class="">
					<text>+86</text>
					<image style="width: 12rpx; margin-left: 12rpx; margin-right: 16rpx;"
						src="../../static/login/left.png" mode="widthFix"></image>
				</view>
				<uni-easyinput @input="phoneInput" type="number" :inputBorder="false"
					placeholderStyle="color: #BABABA; font-size: 36rpx; " v-model="formData.phone"
					placeholder="请输入手机号" />
			</view>
			<view class="phone-ps">
				<text>未注册手机号验证后自动创建账户</text>
			</view>
		</view>
		<view class="isRead">
			<view class="">
				<checkbox-group @change="checkboxChange">
					<checkbox :checked="isRead" style="transform:scale(0.7)" />
				</checkbox-group>
			</view>
			<view class="">
				<text>我已阅读并同意<uni-link fontSize="12" href="#" text="《用户协议》" showUnderLine="false" color="#1578DB">
					</uni-link>、<uni-link fontSize="12" href="#" text="《隐私政策》" showUnderLine="false" color="#007BFF">
					</uni-link>，并授权平台使用该账号信息（如昵称、头像、收货地址）进行统一管理。</text>
			</view>
		</view>
		<!-- 获取短信验证码 -->
		<view class="" style="margin-top: 12rpx; position: relative;">
			<button class="" type="default" style="background-color: #FFD417;" :disabled="false" @click="gotoVcode">
				<text style="color: #000000; font-size: 28rpx; font-weight: 500;">获取短信验证码</text></button>
			<view :class="isRead && phoneIs? '':'isUsed'">

			</view>
		</view>
		<!-- 三方登录 -->
		<!-- <view class="third-party">
			<image style="width: 74rpx;" src="../../static/login/vxicon.png" mode="widthFix" @click="wxLogin()"></image>
		</view> -->
	</view>
</template>

<script>
	import login from '@/api/login/login.js'; // 引入api

	export default {
		components: {

		},
		data() {
			return {
				formData: {
					phone: "",
					vcode: ""
				},
				isRead: false,
				phoneIs: false,
				from: ''
			}
		},
		onLoad(options) {
			if (options.from == 0) {
				this.from = 'sjrz'
			} else {
				
			}
		},
		methods: {
			checkboxChange(e) {
				this.isRead = !this.isRead;
			},
			phoneInput(e) {
				// console.log(e)
				if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(e)) {
					this.phoneIs = false;
					// console.log(this.phoneIs)
					return;
				} else {
					this.phoneIs = true
				}
			},
			gotoVcode() {
				let that = this;
				let phoneNumber = that.formData.phone;
				uni.showLoading({
					title: '正在跳转...'
				});
				login.getVerification(phoneNumber).then(res => {
					// console.log(res)
					if (res.code == 200) {
						uni.hideLoading();
						uni.navigateTo({
							url: '/pages/login/code-verify?phone=' + that.formData.phone + '&from=' + that
								.from,
							animationType: 'fade-in'
							// animationDuration: 200
						});
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
					})
				});
			},
			// wxLogin() {
			// 	uni.showToast({
			// 		title: '微信登录',
			// 		icon: 'none'
			// 	});
			// },
		},
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {
			// console.log(e)
			if (e.text) {
				uni.showToast({
					title: '点击了' + e.text
				})
				// uni.navigateTo({
				// 	url: '/pages/login/code-verify'
				// })
			} else {
				
			}
			
			// let webView = this.$mp.page.$getAppWebview();
			// webView.setTitleNViewButtonStyle(0, {
			// 	text: '',
			// });
		}
		// #endif
	}
</script>

<style lang="scss" scoped>
	/* .status_bar {
		height: var(--status-bar-height);
		width: 100%;
	} */
	.container {
		position: relative;
		padding: 100rpx 88rpx;
		background-color: #FFFFFF;
		/* #ifdef APP-PLUS */
		height: 100vh;
		/* #endif */
		/* #ifdef H5 */
		height: calc(100vh - 100rpx);
		/* #endif */
		box-sizing: border-box;

		.title {
			font-size: 56rpx;
			font-weight: 500;
			color: #000000;
			margin-left: 12rpx;
		}

		.form {
			margin-top: 100rpx;

			.input-phone {
				display: flex;
				align-items: center;
				border-bottom: 1rpx solid #E3E3E3;
			}

			.phone-ps {
				margin-top: 18rpx;

				>text {
					color: #808080;
					font-size: 26rpx;
				}
			}
		}

		.isRead {
			margin-top: 94rpx;
			display: flex;

			text {
				font-size: 24rpx;
				color: #808080;
			}
		}

		.isUsed {
			background-color: rgba(255, 255, 255, .6);
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		.third-party {
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translate(-50%, -50%);
		}
	}
</style>
