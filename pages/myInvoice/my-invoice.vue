<template>
	<view class="invoice-helper">
		<!-- <text @click="addTitle()">添加抬头</text> -->
		<!-- 标头：发票信息 -->
		<view class="helper-list-title">
			<text>发票信息</text>
		</view>
		<!-- 发票信息列表 -->
		<view class="helper-list">
			<!-- 添加抬头 -->
			<view class="add-title" @click="addTitle()">
				<image style="width: 32rpx;" src="../../static/shopCar/add2.png" mode="widthFix"></image>
				<text>添加抬头</text>
			</view>
			<!-- 列表 item -->
			<view class="items" v-for="(item,index) in invoiceList" :key="index">
				<uni-swipe-action style="min-height: 138rpx">
					<uni-swipe-action-item @click="bindClick" style="min-height: 138rpx">
						<view class="content-box" @click="contentClick">
							<view class="content-text">
								<view class="row-1">
									<text>{{ item.invoiceHeader }}</text>
									<text class="default" v-if="item.isDefault">默认</text>
								</view>
								<view class="row-2">
									<text>税号：{{ item.taxNo }}</text>
								</view>
							</view>
							<!-- <view class="use-btn" @click.stop="toUse(item)">
								<text>使用</text>
							</view> -->
						</view>
						<template v-slot:right>
							<view class="slot-button button1"
								@click="bindClick(item,{position:'right',content:{text:'设为默认'}})"><text
									class="slot-button-text">设为默认</text></view>
							<view class="slot-button button3"
								@click="bindClick(item,{position:'right',content:{text:'编辑'}})"><text
									class="slot-button-text">编辑</text></view>
							<view class="slot-button button2"
								@click="bindClick(item,{position:'right',content:{text:'删除'}})"><text
									class="slot-button-text">删除</text></view>
						</template>
					</uni-swipe-action-item>
				</uni-swipe-action>
			</view>
		</view>
	</view>
</template>

<script>
	import orderForm from '@/api/orderForm/orderForm.js'
	export default {
		components: {
		},
		data() {
			return {
				invoiceList: []
			}
		},
		onLoad: function(option) {
			
		},
		onShow() {
			this.getInvoiceList()
		},
		methods: {
			addTitle() {
				uni.navigateTo({
					url: '../orderForm/invoiceHelper/add-invoice-title'
				})
			},
			bindClick(item,e) {
				switch (e.content.text) {
					case '设为默认':
					item.isDefault = 1;
					this.changeInvoice(item)
						break;
					case '删除':
					this.deleteInvoice(item.id)
						break;
					case '编辑':
					uni.navigateTo({
						url: '../orderForm/invoiceHelper/add-invoice-title?ids=' + item.id
					})
						break;
					default:
						break;
				}
			},
			// 设为默认
			changeInvoice(helperForm) {
				orderForm.changeInvoice(helperForm).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: "设为默认成功",
							icon: 'success'
						})
						this.getInvoiceList()
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
			// 删除发票
			deleteInvoice(ids) {
				orderForm.deleteInvoice(ids).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: "删除成功",
							icon: 'success'
						})
						this.getInvoiceList()
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
			contentClick() {
				// console.log('点击内容');
				// uni.showToast({
				// 	title: '点击内容',
				// 	icon: 'none'
				// })
			},
			// 获取发票列表
			getInvoiceList() {
				orderForm.getInvoiceList().then(res => {
					if (res.code == 200) {
						// console.log(res.rows)
						this.invoiceList = res.rows
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
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;

		},
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {
			// console.log(e[0].text)
			uni.showModal({
				// content: JSON.stringify(this.notesValue)
			})
			// let webView = this.$mp.page.$getAppWebview();
			// webView.setTitleNViewButtonStyle(0, {
			// 	text: '',
			// });
		},
		// #endif
	}
</script>
<style>

</style>
<style lang="scss" scoped>
	.invoice-helper {
		padding-top: 4rpx;

		.no-helper {
			background-color: #FFFFFF;
			height: 90rpx;
			display: flex;
			box-sizing: border-box;
			padding-left: 28rpx;
			align-items: center;

			image {
				margin-right: 12rpx;
			}
		}

		.helper-list-title {
			height: 84rpx;
			line-height: 84rpx;
			background: #F1F2F3;
			padding-left: 30rpx;
			color: #808080;
		}

		.helper-list {
			height: calc(100vh - 176rpx);
			/* #ifdef APP-PLUS */
			height: calc(100vh - 88rpx);
			/* #endif */
			background-color: #FFFFFF;
			padding-left: 30rpx;
			box-sizing: border-box;

			.add-title {
				height: 126rpx;
				// line-height: 126rpx;
				display: flex;
				align-items: center;
				border-bottom: 0.6rpx solid #E3E3E3;

				image {
					margin-left: 4rpx;
					margin-right: 20rpx;
				}
			}

			.items {
				min-height: 138rpx;
				border-bottom: 0.6rpx solid #E3E3E3;

				.content-box {
					min-height: 138rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.content-text {
						.row-1 {
							display: flex;
							align-items: center;

							.default {
								font-size: 18rpx;
								color: #FFBD2B;
								border: 1rpx solid #FFBD2B;
								border-radius: 10rpx;
								padding: 0 8rpx;
								margin-left: 12rpx;
							}
						}

						.row-2 {
							font-size: 24rpx;
							color: #808080;
							margin-top: 4rpx;
						}

					}

					.use-btn {
						margin-right: 48rpx;
						color: #FFBD2B;
					}
				}
			}

			.slot-button {
				/* #ifndef APP-NVUE */
				display: flex;
				height: 100%;
				/* #endif */
				// flex: 1;
				flex-direction: row;
				// justify-content: center;
				align-items: center;
				padding: 0 40rpx;
				background-color: #FC6644;
			}

			.button1 {
				background-color: #BABABA !important;
			}
			.button3 {
				background-color: #2979ff !important;
			}
			.slot-button-text {
				color: #ffffff;
				font-size: 28rpx;
			}
		}
	}
</style>

