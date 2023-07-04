<template>
	<view class="container">
		<!-- <view class="status_bar">
		</view>
		<view> 状态栏下的文字 </view> -->
		<!-- <text class="title">欢迎登录</text> -->
		<view class="" style="text-align: center;">
			<image style="width: 282rpx;" src="../../static/login/dxclogo.png" mode="widthFix"></image>
		</view>
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
				<text>我已阅读并同意<!-- <uni-link fontSize="12" href="#" text="《用户协议》" showUnderLine="false" color="#1578DB">
					</uni-link> -->、<uni-link fontSize="12" href="" text="《隐私政策》" showUnderLine="false" color="#007BFF">
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
		<view class="third-party">
			<view class="tp-view">
				<text class="tp-view-text">其他登录方式</text>
			</view>
			<view>
				<image style="width: 74rpx;" src="../../static/login/vxicon.png" mode="widthFix" @click="wxLogin()" v-if="isRead && wxIsExist"></image>
				<image style="width: 74rpx;" src="../../static/login/vxicon_n.png" mode="widthFix" @click="wxLogin()"  v-if="!isRead && wxIsExist"></image>
				<image style="width: 74rpx;margin-left:20rpx;" src="../../static/login/apple.png" mode="widthFix" @click="appleLogin()"
					v-if="system >= 13 && platform=='ios' && !isRead"></image>
				<image style="width: 74rpx;margin-left:20rpx;" src="../../static/login/apple_n.png" mode="widthFix" @click="appleLogin()"
					v-if="system >= 13 && platform=='ios' && isRead"></image>
			</view>
		</view>
		<!-- 下载进度 -->
		<uni-popup ref="progressPopup" background-color="transparent" :mask-click="false" style="border-radius: 50rpx; overflow: hidden;">
			<view class="popup-content">
				<text class="tit">升级APP</text>
				<text class="cont">正在为您更新，请耐心等待</text>
				<text class="progress">已下载{{ progress }}%</text>
				<view class="progress-box">
					<progress :percent="progress" activeColor="#10AEFF" stroke-width="10" :active="false" />
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import login from '@/api/login/login.js'; // 引入api
	import wxLogin from '@/api/wxpay/wxLogin.js'; // 引入api
	import file from '@/api/file/file.js'

	export default {
		components: {

		},
		data() {
			return {
				downloadTask: null,
				progress: 0,
				formData: {
					phone: "",
					vcode: ""
				},
				isRead: false,
				phoneIs: false,
				from: '',
				
				system: '', // 系统版本
				platform: '',   // 平台
				
				wxIsExist: false,
			}
		},
		onLoad(options) {
			let that = this;
			that.checkWeixIsExist()
			if (options.from == 0) {
				that.from = 'sjrz'
			} else {
				if (uni.getStorageSync('token_key')) {
					// uni.switchTab({
					// 	url: '/pages/tabBar/home/home',
					// });
				}
			}
			
			// 先判断 系统版本
			uni.getSystemInfo({
				success: (res) => {
					console.log(res)
					// this.system = res.system
					that.system = res.osVersion.split(".")[0]
					console.log(that.system)
					that.platform = res.platform
				},fail: (err) => {
					console.log(err)
				},complete: () => {
				}
			})
						
		},
		onShow() {
			let that = this;
			// #ifdef APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid, function(inf) {
				// console.log(inf.versionCode)
				// that.checkNewVersion(inf.versionCode);
			});
			// #endif
		},
		methods: {
			checkNewVersion(versionCode){
				let that = this;
				file.checkVersion().then(data=>{
					// console.log('data=======>', data)
					// console.log('versionCode=======>', versionCode)
					let version;
					if(uni.getSystemInfoSync().platform === 'ios') {
						version = data.data.iosVersion;
					}else {
						version = data.data.androidVersion;
					}
					if(versionCode < version) {
						// console.log(666)
						uni.showModal({
							title: "发现新版本",
							content: "确认下载更新",
							showCancel:false,
							success: (res) => {
								if (res.confirm == true) { //当用户确定更新，执行更新
									let url = '';
									if(uni.getSystemInfoSync().platform === 'ios') {
										url = data.data.iosUrl;
										plus.runtime.openURL(url);
									} else {
										url = data.data.androidUrl;
										that.appdownLoad(url);
									}
								} else {
									if(uni.getSystemInfoSync().platform === 'ios') {
										plus.ios.import("UIApplication").sharedApplication().performSelector("exit")
									} else {
										plus.runtime.quit();
									}
								}
							}
						})
					}else {
						if (that.from != 'sjrz' && uni.getStorageSync('token_key')) {
							uni.switchTab({
								url: '/pages/tabBar/home/home',
							});
						}
					}
				})
			},
			appdownLoad(url) {
				let that = this;
				that.$refs.progressPopup.open('center');
				that.downloadTask = uni.downloadFile({ //执行下载
					url, //下载地址
					success: downloadResult => { //下载成功
						that.$refs.progressPopup.close();
						if (downloadResult.statusCode == 200) {
							uni.showModal({
								title: '',
								content: '下载新版本成功，确定现在安装吗？',
								confirmText: '去安装',
								confirmColor: '#EE8F57',
								showCancel: false,
								success: function(res) {
									if (res.confirm == true) {
										plus.runtime.install( //安装
											downloadResult.tempFilePath, {
												force: true
											},
											function(res) {
												utils.showToast('安装成功，重启中');
												plus.runtime.restart();
											}
										);
									}
								}
							});
						}
					}
				});
				that.downloadTask.onProgressUpdate((res) => {
					// console.log('下载进度' + res.progress);
					that.progress = res.progress;
				});
			},
			/* 检查手机是否安装有微信 */
			checkWeixIsExist(){
				if(plus.runtime.isApplicationExist({
				    pname: 'com.tencent.mm',  
				    action: 'weixin://'  
				})){  
				    console.log("微信已安装");  
					this.wxIsExist = true 
				}else{  
				    console.log("微信未安装");  
					this.wxIsExist = false 
				}
			},
			/* 检查是否勾选已阅读按钮 */
			checkIsRead(){
				if(this.isRead)return true;
				uni.showToast({
					title: '请先勾选并同意隐私政策',
				});
				return false;
			},
			/* 苹果登录 */
			appleLogin(){
				if(!this.checkIsRead())return false;
				uni.login({
				    provider: 'apple',
				    success: function (loginRes) {
						console.log(loginRes)
						/* {
							"authResult": {
								"access_token": "eyJraWQiOiJZdXlYb1kiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLnlvbmd4aW4uWXpraXRjaGVuIiwiZXhwIjoxNjY1NzA5OTQ3LCJpYXQiOjE2NjU2MjM1NDcsInN1YiI6IjAwMDEwNi5kNWI2ZGY3ODdiYWM0YzM5YWY3NmRmMmM0YTgwMTE4Ni4wMTEyIiwiY19oYXNoIjoib1FiNnpwZFJmaWVYYkI4bWZ0TVRTQSIsImVtYWlsIjoiY2JrZGt6N3praEBwcml2YXRlcmVsYXkuYXBwbGVpZC5jb20iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJpc19wcml2YXRlX2VtYWlsIjoidHJ1ZSIsImF1dGhfdGltZSI6MTY2NTYyMzU0Nywibm9uY2Vfc3VwcG9ydGVkIjp0cnVlLCJyZWFsX3VzZXJfc3RhdHVzIjoxfQ.0pwo3Xfg2A6Dc5mChNrK3LQEFqg1OIx8d-jUDPGXuUjL95aEM5HVH7wQVJp72i6fE8nuTH5Mtl4OR0swp7kJWEOdrYbC8mL6HLX_c70WGZh9oSb7P-rOjyaR7Kb-KES9VBiui9xPXwMrTjqq1oNKea6oz2SX94a_WhB9FVZB6IBTdvqSXoVmBgbb8x3IAqgb-9k1iPgRrvl8z9UIsmBRX5gJPR7dkUTmvmldUkC6PbtAEdxdjYdFIfQqZgcVnq1Lu6ZN1_YBO4XCExd_oTWdnpAKFhazc25vHB62cO2eshhYsoQJE1S210poj4QOn0IRu3nm703jNGwqHUD2ftG6zQ",
								"openid": "000106.d5b6df787bac4c39af76df2c4a801186.0112"
							},
							"appleInfo": {
								"authorizationCode": "c919c838d97e446dcb49899f89b2c495e.0.rrqw.h7r_h86QoOIVo6DqKhfhmg",
								"email": "cbkdkz7zkh@privaterelay.appleid.com",
								"fullName": {
									"familyName": "方",
									"giveName": "玲莉",
									"givenName": "玲莉"
								},
								"identityToken": "eyJraWQiOiJZdXlYb1kiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLnlvbmd4aW4uWXpraXRjaGVuIiwiZXhwIjoxNjY1NzA5OTQ3LCJpYXQiOjE2NjU2MjM1NDcsInN1YiI6IjAwMDEwNi5kNWI2ZGY3ODdiYWM0YzM5YWY3NmRmMmM0YTgwMTE4Ni4wMTEyIiwiY19oYXNoIjoib1FiNnpwZFJmaWVYYkI4bWZ0TVRTQSIsImVtYWlsIjoiY2JrZGt6N3praEBwcml2YXRlcmVsYXkuYXBwbGVpZC5jb20iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJpc19wcml2YXRlX2VtYWlsIjoidHJ1ZSIsImF1dGhfdGltZSI6MTY2NTYyMzU0Nywibm9uY2Vfc3VwcG9ydGVkIjp0cnVlLCJyZWFsX3VzZXJfc3RhdHVzIjoxfQ.0pwo3Xfg2A6Dc5mChNrK3LQEFqg1OIx8d-jUDPGXuUjL95aEM5HVH7wQVJp72i6fE8nuTH5Mtl4OR0swp7kJWEOdrYbC8mL6HLX_c70WGZh9oSb7P-rOjyaR7Kb-KES9VBiui9xPXwMrTjqq1oNKea6oz2SX94a_WhB9FVZB6IBTdvqSXoVmBgbb8x3IAqgb-9k1iPgRrvl8z9UIsmBRX5gJPR7dkUTmvmldUkC6PbtAEdxdjYdFIfQqZgcVnq1Lu6ZN1_YBO4XCExd_oTWdnpAKFhazc25vHB62cO2eshhYsoQJE1S210poj4QOn0IRu3nm703jNGwqHUD2ftG6zQ",
								"realUserStatus": 1,
								"user": "000106.d5b6df787bac4c39af76df2c4a801186.0112"
							},
							"errMsg": "login:ok"
						} */
				        // 登录成功
				        uni.getUserInfo({
				            provider: 'apple',
				            success: function(info) {
								console.log(info)
				                // 获取用户信息成功, info.authResult中保存登录认证数据
								/* {
									"errMsg": "getUserInfo:ok",
									"userInfo": {
										"openId": "000106.d5b6df787bac4c39af76df2c4a801186.0112",
										"fullName": {
											"familyName": "方",
											"giveName": "玲莉",
											"givenName": "玲莉"
										},
										"email": "cbkdkz7zkh@privaterelay.appleid.com",
										"authorizationCode": "c919c838d97e446dcb49899f89b2c495e.0.rrqw.h7r_h86QoOIVo6DqKhfhmg",
										"identityToken": "eyJraWQiOiJZdXlYb1kiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLnlvbmd4aW4uWXpraXRjaGVuIiwiZXhwIjoxNjY1NzA5OTQ3LCJpYXQiOjE2NjU2MjM1NDcsInN1YiI6IjAwMDEwNi5kNWI2ZGY3ODdiYWM0YzM5YWY3NmRmMmM0YTgwMTE4Ni4wMTEyIiwiY19oYXNoIjoib1FiNnpwZFJmaWVYYkI4bWZ0TVRTQSIsImVtYWlsIjoiY2JrZGt6N3praEBwcml2YXRlcmVsYXkuYXBwbGVpZC5jb20iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJpc19wcml2YXRlX2VtYWlsIjoidHJ1ZSIsImF1dGhfdGltZSI6MTY2NTYyMzU0Nywibm9uY2Vfc3VwcG9ydGVkIjp0cnVlLCJyZWFsX3VzZXJfc3RhdHVzIjoxfQ.0pwo3Xfg2A6Dc5mChNrK3LQEFqg1OIx8d-jUDPGXuUjL95aEM5HVH7wQVJp72i6fE8nuTH5Mtl4OR0swp7kJWEOdrYbC8mL6HLX_c70WGZh9oSb7P-rOjyaR7Kb-KES9VBiui9xPXwMrTjqq1oNKea6oz2SX94a_WhB9FVZB6IBTdvqSXoVmBgbb8x3IAqgb-9k1iPgRrvl8z9UIsmBRX5gJPR7dkUTmvmldUkC6PbtAEdxdjYdFIfQqZgcVnq1Lu6ZN1_YBO4XCExd_oTWdnpAKFhazc25vHB62cO2eshhYsoQJE1S210poj4QOn0IRu3nm703jNGwqHUD2ftG6zQ",
										"realUserStatus": 1
									}
								} */
								uni.showLoading({
									title: '正在登录...'
								});
								login.appleLogin(info).then((res)=>{
									//获得token完成登录
									console.log(res)
									if(res.code == 200){
										uni.setStorageSync('token_key', res.data.token.access_token);
										uni.setStorageSync('userInfo_key', res.data.userInfo.sysUser);
										uni.hideLoading();
										uni.switchTab({
											url: '/pages/tabBar/home/home',
											success: function() {
												
											}
										});
									}
								});
				            }
				        })
				    },
				    fail: function (err) {
						console.log(err)
				        // 登录授权失败  
				        // err.code错误码参考`授权失败错误码(code)说明`
				    }
				});
			},
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
					 console.log(res)
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
					console.log(err)
					// uni.hideLoading();
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
				// let pwdParams = {
				// 	username: this.formData.username,
				// 	password: this.formData.password
				// }
				// login.pwdLogin(pwdParams).then(res => {
				// 	if (res.code == 200) {
				// 		uni.showToast({
				// 			title: "登录成功",
				// 			icon: 'success'
				// 		})
				// 		setTimeout(function () {
				// 			uni.navigateTo({
				// 				url: '/pages/index/index',
				// 				// animationType: 'fade-in',
				// 				// animationDuration: 200
				// 			});
				// 		}, 2000);
				// 	}
				// }).catch(err => {
				// 	uni.showToast({
				// 		title: err.msg,
				// 		icon: 'none'
				// 	})
				// });
				// if (!that.formData.phone) {
				// 	uni.showToast({ title: '请输入手机号', icon: 'none' });
				// 	return;
				// }
				// if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.formData.phone)) {
				// 	uni.showToast({ title: '请输入正确手机号', icon: 'none' });
				// 	return;
				// }
				// if (!this.isRead) {
				// 	uni.showToast({ title: '请勾选已阅读', icon: 'none' });
				// 	return;
				// }
			},
			wxLogin() {
				if(!this.checkIsRead())return false;
				uni.login({ 
					"provider": "weixin",
					"onlyAuthorize": true, // 微信登录仅请求授权认证
					success: function(event){
						console.log(123)
						console.log(event)
						const {code} = event
						uni.showLoading({
							title: '正在登录...'
						});
						//客户端成功获取授权临时票据（code）,向业务服务器发起登录请求。
						wxLogin.changeAccessToken({code:event.code}).then((res)=>{
							//获得token完成登录
							console.log(res)
							if(res.code == 200){
								uni.setStorageSync('token_key', res.data.token.access_token);
								uni.setStorageSync('userInfo_key', res.data.userInfo.sysUser);
								// console.log(uni.getStorageSync('token_key'))
								//setTimeout(() => {
									uni.hideLoading();
									uni.switchTab({
										url: '/pages/tabBar/home/home',
										success: function() {
											
										}
									});
								//}, 2000);
							}
						})
					},
					fail: function (err) {
						console.log(err);
				        // 登录授权失败  
				        // err.code是错误码
				    }
				})
			},
		},
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {
			// console.log(e)
			// if (e.text) {
			// 	uni.showToast({
			// 		title: '点击了' + e.text
			// 	})
			// 	// uni.navigateTo({
			// 	// 	url: '/pages/login/code-verify'
			// 	// })
			// } else {
			// 	uni.switchTab({
			// 		url: '/pages/tabBar/home/home'
			// 	})
			// }
			
			// let webView = this.$mp.page.$getAppWebview();
			// webView.setTitleNViewButtonStyle(0, {
			// 	text: '',
			// });
		}
		// #endif
	}
</script>
<style>
	.uni-progress-bar {
		border-radius: 40rpx!important;
	}
	.uni-progress-inner-bar {
		border-radius: 40rpx!important;
	}
</style>
<style lang="scss" scoped>
	/* .status_bar {
		height: var(--status-bar-height);
		width: 100%;
	} */
	.container {
		position: relative;
		padding: 60rpx 88rpx;
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
			text-align: center;
			.tp-view {
				margin-bottom: 12rpx;
				position: relative;
				.tp-view-text {
					color: #666666;
					font-size: 28rpx;
					// letter-spacing: 2rpx;
				}
			}
			.tp-view::before {
				content: '';
				position: absolute;
				width: 60rpx; // 边框的宽度
				height: 1rpx;
				// border-radius: 2rpx;
				left: -20rpx; //距离 view 标签的距离
				bottom: 20rpx;
				background-color: #999999; //  颜色
				transform: translate(-100%);
			
			}
			.tp-view::after {
				content: '';
				position: absolute;
				width: 60rpx; // 边框的宽度
				height: 1rpx;
				// border-radius: 2rpx;
				right: -20rpx; //距离 view 标签的距离
				bottom: 20rpx;
				background-color: #999999; //  颜色
				transform: translate(100%);
			
			}
		}
		.popup-content {
			display: flex;
			flex-direction: column;
			width: 560rpx;
			height: 400rpx;
			border-radius: 24rpx;
			background-color: #FFFFFF;
			box-sizing: border-box;
			padding: 32rpx;
			
			text {
				text-align: center;
			}
			.tit {
				font-size: 40rpx;
				font-weight: 500;
				margin-bottom: 60rpx;
				margin-top: 20rpx;
			}
			.cont {
				font-size: 32rpx;
				margin-bottom: 40rpx;
			}
			.progress {
				font-size: 32rpx;
				margin-bottom: 30rpx;
				color: #10AEFF;
			}
		}
	}
</style>
