<template>
	<view class="container">
		<text class="title">输入验证码</text>
		<view class="" style="margin-top: 8rpx;">
			<text class="intro">验证码已发送至+86 {{ phoneShow }}</text>
		</view>

		<view class="form">
			<view class="input-vcode">
				<!-- <text style="margin-right: 16rpx;">验证码</text> -->
				<verification-code-style borderStyle="border-bottom:1rpx solid #56575B;"
					borderCheckStyle="border:1rpx solid #56575B;" :latticeNum="6"
					@getInputVerification="getInputVerification" :ciphertextSty="0"></verification-code-style>
			</view>
			<!-- 倒计时 -->
			<view class="count-down">
				<text v-if="showText">{{ second }}秒后重新获取验证码</text>
				<text v-else style="color: rgb(21, 120, 219);" @click="reGetCode()">重新获取验证码</text>
			</view>
		</view>
	</view>
</template>

<script>
	import login from '@/api/login/login.js'; // 引入api
	import shopApply from '@/api/shopApply/shopApply.js';
	import verificationCodeStyle from '@/components/verification-code-style2/verification-code-style2'
	import * as util from '../../common/util.js'
	var debounce = util.debounce;
	var returnIP = util.returnIP;

	export default {
		components: {
			verificationCodeStyle
		},
		data() {
			return {
				phone: '',
				second: 60, //默认60秒
				showText: true, //判断短信是否发送
				phoneShow: '',
				from: ''
			}
		},
		created() {
			// this.dealPhone();
			this.getCode()
		},
		onLoad(e) {
			// console.log(e.phone)
			// console.log(e)
			this.phone = e.phone;
			this.from = e.from;
			this.phoneShow = e.phone.replace(/^(.{3})(.*)(.{4})$/, '$1 $2 $3')
		},
		methods: {
			getShopInfo(mItoken_key) {
				uni.request({
					url: returnIP() + 'kitchen/shopApply/getById',
					header: {
						'Authorization': 'Bearer ' + mItoken_key,
					},
					success: (res) => {
						// console.log(res.data);
						if (res.data.code == 200) {
							if (res.data) {
								uni.navigateTo({
									url: '../merchantIn/mIn-details'
								})
							} else {
								uni.navigateTo({
									url: '../merchantIn/merchant-in',
								});
							}
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						}
					}
				});
			},
			// 用户输入的值
			getInputVerification(e) {
				// console.log(e);
				let that = this;
				if (e.length === 6) {
					// console.log(e);
					uni.showLoading({
						title: '正在验证...'
					});
					let phoneNumber = that.phone;
					let code = e;
					if (that.from == 'sjrz') {
						shopApply.shopLogin(phoneNumber, code).then(res => {
							// console.log(res)
							if (res.code == 200) {
								uni.setStorageSync('mItoken_key', res.data.token.access_token);
								uni.hideLoading();
								that.getShopInfo(res.data.token.access_token);
							} else {
								uni.hideLoading();
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
					} else {
						login.login(phoneNumber, code).then(res => {
							// console.log(res)
							if (res.code == 200) {
								// uni.setStorage({
								// 	key: 'token_key',
								// 	data: res.data.token.access_token,
								// 	success: function() {
								// 		uni.setStorage({
								// 			key: 'userInfo_key',
								// 			data: res.data.userInfo.sysUser,
								// 			success: function() {
								// 				uni.hideLoading();
								// 				uni.switchTab({
								// 					url: '/pages/tabBar/home/home',
								// 					success: function() {

								// 					}
								// 				});
								// 			}
								// 		})
								// 	}
								// })
								uni.setStorageSync('token_key', res.data.token.access_token);
								uni.setStorageSync('userInfo_key', res.data.userInfo.sysUser);
								// console.log(uni.getStorageSync('token_key'))
								//setTimeout(() => {
								uni.hideLoading();
								uni.switchTab({
									url: '/pages/tabBar/home/home',
									success: function() {
										// let pages = getCurrentPages();  //获取跳转的所有页面
										// // console.log(pages[0].oftenBuyList)
										// pages[0].getShopList();
										// pages[0].initLocation();
									}
								});
								//}, 2000);
								// console.log(res.data.token);
								// console.log(uni.getStorageSync('token_key'))
								// uni.getStorageSync(KEY)
								// uni.removeStorageSync(KEY)
								// uni.clearStorageSync()
							} else {
								uni.hideLoading();
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
				}
			},
			// dealPhone() {
			// 	let phone = this.phone;
			// 	let res = phone.replace(/^(.{3})(.*)(.{4})$/, '$1 $2 $3')

			// 	this.phone = res;
			// },
			//获取短信验证码
			getCode() {
				var that = this;
				var interval = setInterval(() => {
					that.showText = true;
					var times = that.second - 1;
					that.second = times < 10 ? '0' + times : times; //小于10秒补 0
					that.second = times;
					// console.log(times);
				}, 1000);
				setTimeout(() => {
					clearInterval(interval);
					that.second = 60;
					that.showText = false;
				}, 60000);
				//这里请求后台获取短信验证码
				// uni.request({
				// 	//......//此处省略
				// 	success: function(res) {
				// 		that.showText = false;
				// 	}
				// });
			},
			reGetCode: debounce(function() {
				let that = this;
				let phoneNumber = that.phone;
				that.getCode();
				login.getVerification(phoneNumber).then(res => {
					// console.log(res)
					uni.showLoading({
						title: '正在获取验证码...'
					});
					if (res.code == 200) {
						uni.hideLoading();
					} else {
						uni.hideLoading();
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
			}, 1000)
		},
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {
			// console.log(e)
			if (e.text) {
				uni.showToast({
					title: '点击了' + e.text
				})
			} else {
				uni.showToast({
					title: '点击了取消'
				})
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
		}

		.form {
			margin-top: 56rpx;

			.count-down {
				margin-top: 70rpx;

				text {
					font-size: 26rpx;
					color: #5C5C5C;
				}
			}
		}
	}
</style>
