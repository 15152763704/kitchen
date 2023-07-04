<template>
	<view class="add-invoice-title">
		<view class="form-list">
			<view class="form-item">
				<text>抬头类型</text>
				<view class="">
					<view class="" @click="checkIsUnit('单位')">
						<image style="width: 34rpx;"
							:src="isUnit?'../../../static/shopCar/checked.png':'../../../static/shopCar/not_select.png'"
							mode="widthFix"></image>
						<text style="margin-right: 10rpx;">单位</text>
					</view>
					<view class="" @click="checkIsUnit('个人')">
						<image style="width: 34rpx;"
							:src="!isUnit?'../../../static/shopCar/checked.png':'../../../static/shopCar/not_select.png'"
							mode="widthFix"></image>
						<text>个人/非企业单位</text>
					</view>
				</view>
			</view>
			<!-- 公司 -->
			<view v-if="isUnit" class="form-item">
				<text class="isNecessary">*</text>
				<text>公司抬头</text>
				<uni-easyinput style="text-align: right;" :inputBorder="false" v-model="helperForm.invoiceHeader"
					:placeholderStyle="placeholderStyle" placeholder="请输入公司抬头名称" />
			</view>
			<view v-if="isUnit" class="form-item">
				<text class="isNecessary">*</text>
				<text>公司税号</text>
				<uni-easyinput style="text-align: right;" :inputBorder="false" v-model="helperForm.taxNo"
					:placeholderStyle="placeholderStyle" placeholder="请输入公司税号" />
			</view>
			<!-- 个人非企业 -->
			<view v-if="!isUnit" class="form-item">
				<text class="isNecessary">*</text>
				<text>抬头名称</text>
				<uni-easyinput style="text-align: right;" :inputBorder="false" v-model="helperForm.invoiceHeader"
					:placeholderStyle="placeholderStyle" placeholder="简易填写个人姓名/店名" />
			</view>

			<view class="form-item-last">
				<text>设为默认</text>
				<switch :checked="switchChecked" color="#FFBD2B" @change="defaultIsChange" style="transform:scale(0.6)" />
			</view>
			<view class="form-actions">
				<view class="action-save" @click="save()">
					<text>保存</text>
				</view>
				<!-- <view class="action-saveAndUse" @click="saveAndUse()">
					<text>保存并使用</text>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import orderForm from '@/api/orderForm/orderForm.js'
	export default {
		components: {
			// goodsList
		},
		data() {
			return {
				optionIds: null,
				isUnit: true,
				helperForm: {
					invoiceHeaderType: '单位',    // 抬头类型       单位/个人
					invoiceHeader: '',    //    抬头名称
					taxNo: '',   // 公司税号
					isDefault: 1         // 1默认 0非默认
				},
				switchChecked: true,
				placeholderStyle: 'font-size: 28rpx; color: #BABABA; text-align: right;'
			}
		},
		onLoad: function(option) {
			// console.log(option.ids)
			this.optionIds = option.ids;
			if(option.ids) {
				this.getInvoiceDetails(option.ids);
			}
		},
		methods: {
			checkIsUnit(type) {
				this.isUnit = !this.isUnit;
				this.helperForm.invoiceHeaderType = type;
			},
			defaultIsChange(e) {
				// console.log(e.detail.value)
				if(e.detail.value) {
					this.helperForm.isDefault = 1
				}else {
					this.helperForm.isDefault = 0
				}
			},
			save() {
				if(this.isUnit) {
					if (!this.helperForm.invoiceHeader) {
						uni.showToast({
							title: '请输入公司抬头名称',
							icon: 'none'
						});
						return;
					}
					if (!this.helperForm.taxNo) {
						uni.showToast({
							title: '请输入公司税号',
							icon: 'none'
						});
						return;
					}
				}else {
					if (!this.helperForm.invoiceHeader) {
						uni.showToast({
							title: '请输入抬头名称',
							icon: 'none'
						});
						return;
					}
				}
				// uni.showModal({
				//     content: JSON.stringify(this.helperForm)
				// })
				if(!this.optionIds) {
					// console.log(this.optionIds)
					this.addInvoice();
				}else {
					// console.log(this.optionIds)
					this.changeInvoice();
				}
			},
			// saveAndUse() {
			// 	this.save();
			// },
			// 新增发票
			addInvoice() {
				orderForm.addInvoice(this.helperForm).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: "添加发票成功",
							icon: 'success'
						})
						// uni.navigateTo({
						// 	url: '../order-form'
						// })
						uni.navigateBack();
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
			changeInvoice(){
				orderForm.changeInvoice(this.helperForm).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: "修改发票成功",
							icon: 'success'
						})
						// uni.navigateTo({
						// 	url: '../order-form'
						// })
						uni.navigateBack();
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
			// 获取发票详情
			getInvoiceDetails(ids) {
				orderForm.getInvoiceDetails(ids).then(res => {
					if (res.code == 200) {
						this.helperForm.invoiceHeaderType = res.data.invoiceHeaderType;
						if(this.helperForm.invoiceHeaderType == '单位') {
							this.isUnit = true
						}else {
							this.isUnit = false
						}
						this.helperForm.invoiceHeader = res.data.invoiceHeader;
						this.helperForm.taxNo = res.data.taxNo;
						this.helperForm.isDefault = res.data.isDefault;
						this.helperForm.id = ids;
						if(this.helperForm.isDefault) {
							this.switchChecked = true
						}else {
							this.switchChecked = false
						}
						
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
			}
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
		}
		// #endif
	}
</script>
<style>

</style>
<style lang="scss" scoped>
	.add-invoice-title {

		// background-color: #FFFFFF;
		.form-list {
			margin-top: 4rpx;
			background-color: #FFFFFF;
			height: calc(100vh - 4rpx);
			padding-left: 30rpx;
			box-sizing: border-box;

			.form-item {
				height: 104rpx;
				border-bottom: 0.6rpx solid #E3E3E3;
				display: flex;
				align-items: center;
				padding-right: 32rpx;
				box-sizing: border-box;
				justify-content: space-between;
				position: relative;

				>view {
					display: flex;
					align-items: center;

					view {
						display: flex;
						align-items: center;

						image {
							margin-right: 12rpx;
						}
					}
				}
			}

			.form-item-last {
				height: 104rpx;
				border-bottom: 0.6rpx solid #E3E3E3;
				display: flex;
				align-items: center;
				box-sizing: border-box;
				justify-content: space-between;
			}

			.isNecessary {
				color: red;
				position: absolute;
				left: -16rpx;
				top: 30rpx;
			}

			.form-actions {
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				padding: 82rpx 52rpx 0 24rpx;

				view {
					width: 100%;
					height: 60rpx;
					line-height: 60rpx;
					text-align: center;
					border-radius: 4rpx;
				}

				.action-save {
					border: 2rpx solid #F2C050;
					color: #F2C050;
				}

				.action-saveAndUse {
					color: #FFFFFF;
					background-color: #BABABA;
				}
			}
		}

	}
</style>
