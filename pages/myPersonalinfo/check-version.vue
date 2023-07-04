<template>
	<view class="check-version">
		<view class="logo-view">
			<image class="logo" src="../../static/danxiaochu.png" mode="widthFix"></image>
			<text class="name">蛋小厨</text>
			<text class="version">Version {{ version }}</text>
		</view>
		<view class="list">
			<!-- <view class="l-item" @click="funcIntro()">
				<text>功能介绍</text>
				<view class="l-item-r">
					<image style="width: 16rpx;" src="../../static/order/right.png" mode="widthFix"></image>
				</view>
			</view> -->
			<view class="l-item" @click="checkVersion">
				<text>检查更新</text>
				<view class="l-item-r">
					<image style="width: 16rpx;" src="../../static/order/right.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="copyright">
			<text>江苏永信信息版权所有 苏ICP备2022026944号-1</text>
		</view>
		<!-- 下载进度 -->
		<uni-popup ref="progressPopup" background-color="transparent" @change="change" :mask-click="false"
			style="border-radius: 50rpx; overflow: hidden;">
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
	// import login from '@/api/login/login.js'
	import file from '@/api/file/file.js'
	export default {
		components: {

		},
		data() {
			return {
				version: uni.getStorageSync('version_key'),
				show: true,
				downloadTask: null,
				progress: 0
			}
		},
		onLoad: function(option) {

		},
		onShow() {

		},
		onBackPress(e) {
			// console.log("监听返回按钮事件",e);
			// this.fullUpdateUserCarsForLeave();
			this.downloadTask.abort();
		},
		methods: {
			change(e) {
				this.show = e.show
			},
			checkNewVersion() {
				var that = this;
				file.checkVersion().then(data => {
					let version;
					if (uni.getSystemInfoSync().platform === 'ios') {
						version = data.data.iosVersion;
					} else {
						version = data.data.androidVersion;
					}
					if (uni.getStorageSync('versionCode_key') < version) {
						// console.log(666)
						uni.showModal({
							title: "发现新版本",
							content: "确认下载更新",
							success: (res) => {
								if (res.confirm == true) { //当用户确定更新，执行更新
									let url = '';
									if (uni.getSystemInfoSync().platform === 'ios') {
										url = data.data.iosUrl;
										plus.runtime.openURL(url);
									} else {
										url = data.data.androidUrl;
										that.appdownLoad(url);
									}
								}
							}
						})
					}
				})
			},
			checkVersion() {
				// ====================================================================
				var that = this;
				that.checkNewVersion();

			},
			appdownLoad(url) {
				var that = this;
				// console.log(url)
				// uni.showLoading({
				// 	title: '安装包下载中...'
				// })
				that.$refs.progressPopup.open('center')
				that.downloadTask = uni.downloadFile({ //执行下载
					url, //下载地址
					success: downloadResult => { //下载成功
						// uni.hideLoading();
						that.$refs.progressPopup.close();
						if (downloadResult.statusCode == 200) {
							// console.log('downloadResult')
							uni.showModal({
								title: '',
								content: '下载新版本成功，确定现在安装吗？',
								confirmText: '去安装',
								confirmColor: '#EE8F57',
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
					console.log('下载进度' + res.progress);
					that.progress = res.progress;
					// console.log('已经下载的数据长度' + res.totalBytesWritten);
					// console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);
					// 满足测试条件，取消下载任务。
					// if (res.progress > 20) {
					// 	that.downloadTask.abort();
					// }
				});
			}
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;

		}
	}
</script>
<style>
	.progress-box .uni-progress-bar {
		border-radius: 40rpx !important;
	}

	.progress-box .uni-progress-inner-bar {
		border-radius: 40rpx !important;
	}
</style>
<style lang="scss" scoped>
	.check-version {
		padding: 24rpx 80rpx;
		box-sizing: border-box;
		background: #FFFFFF;
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 88rpx);

		/* #endif */
		.logo-view {
			display: flex;
			flex-direction: column;
			// justify-content: center;
			align-items: center;
			margin-top: 160rpx;

			.logo {
				width: 160rpx;
				margin-bottom: 60rpx;
			}

			.name {
				font-size: 32rpx;
				font-weight: 600;
			}

			.version {
				// font-weight: 500;
			}
		}

		.list {
			width: 100%;
			background-color: #FFFFFF;
			// border-radius: 16rpx;
			margin-top: 100rpx;

			.l-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 32rpx 0rpx;
				box-sizing: border-box;
				border-bottom: 1rpx solid #e5e5e5;

				.l-item-r {
					display: flex;
					align-items: center;

					text {
						margin-right: 18rpx;
						font-size: 24rpx;
					}
				}
			}
		}

		.copyright {
			width: 590rpx;
			text-align: center;
			font-size: 24rpx;
			position: fixed;
			bottom: 20rpx;
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
