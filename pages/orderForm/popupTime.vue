<template>
	<uni-popup ref="popup" type="bottom" :safeArea="false" :animation="true" :is-mask-click="true">
		<view class="p-boddy">
			<view class="header">
				<text class="header-text">选择预计送达时间</text>
				<image class="header-image" style="width: 26rpx;" src="/static/baskCooking/sy_close.png" mode="widthFix"
					@click="closePopup" />
			</view>
			<olylis-cascader :options="treeData" :value="selectedValue" @change="handleChange" :is-show-nav="true">

			</olylis-cascader>
		</view>
	</uni-popup>
</template>

<script>
	// 测试服务器
	import olylisCascader from '@/components/olylis-cascader/olylis-cascader'
	export default {
		components: {
			olylisCascader
		},
		props: {
			openCloseTime: {
				type: Object,
				default () {
					return {

					}
				}
			}
		},
		data() {
			return {
				selectedValue: [1, 11],
				treeData: [{
					value: 1,
					label: '今天',
					children: [{
						value: 11,
						label: '立即送出'
					}],
				}]
			}
		},
		filters: {

		},
		mounted() {
			// console.log(this.openCloseTime.todayTimesArr)
			for (var i = 0; i < this.openCloseTime.todayTimesArr.length; i++) {
				let obj = {};
				obj.value = (12 + i);
				obj.label = this.openCloseTime.todayTimesArr[i].substring(8, 13);
				this.treeData[0].children.push(obj);
			}
		},
		methods: {
			showPopup(item) {
				this.$refs.popup.open();
			},

			closePopup() {
				this.$refs.popup.close();
				// uni.showTabBar()

			},
			commentConfirm() {
				this.$refs.popup.close();
			},
			handleChange(selectedValue, clickItem) {
				// console.log('selectedValue', selectedValue)
				// console.log('clickItem', clickItem)
				let treeData = this.treeData
				// console.log('selectedLabel', selectedLabel)
				let selectedLabel = [];
				for (var i = 0; i < treeData.length; i++) {
					if (treeData[i].value == selectedValue[0]) {
						// console.log(treeData[i].label)
						selectedLabel.push(treeData[i].label)
					}
					for (var j = 0; j < treeData[i].children.length; j++) {
						if (treeData[i].children[j].value == selectedValue[1]) {
							// console.log(treeData[i].children[j].label)
							selectedLabel.push(treeData[i].children[j].label)
						}
					}
				}
				if (selectedValue.length >= 2) {
					this.$refs.popup.close();
					// uni.showModal({
					// 	content: JSON.stringify(selectedLabel)
					// })
					this.$emit('sendTime',selectedLabel[1]);
					// console.log(selectedLabel)
				}
				this.selectedValue = selectedValue
				// console.log(selectedLabel)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.p-boddy {
		width: 750rpx;
		height: 500rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx 20rpx 0 0;
	}

	.p-boddy .header {
		width: 750rpx;
		height: 92rpx;
		/* background-color: #000000; */
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.p-boddy .header-text {
		font-size: 32rpx;
		font-weight: 500;
	}

	.p-boddy .header-image {
		position: absolute;
		right: 34rpx;
	}

	// .p-boddy .scroll {
	// 	width: 750rpx;
	// 	height: 580rpx;
	// 	/* #ifndef APP-NVUE */
	// 	/* height: 580rpx; */
	// 	/* #endif */
	// }






	.p-boddy .adress-li {
		display: flex;
		flex-direction: row;
		padding: 30rpx 34rpx 24rpx 72rpx;
		box-sizing: border-box;
		justify-content: space-between;
		position: relative;

		.a-name {
			font-size: 32rpx;
			font-weight: 500;
		}

		.a-costomer {
			font-size: 24rpx;
			color: #808080;

			text {
				margin-right: 28rpx;
			}
		}
	}

	.beyond-range {
		padding: 28rpx 54rpx 0 80rpx;
		box-sizing: border-box;

		.title {
			font-size: 28rpx;
			color: #808080;
		}

		.adress-li-2 {
			display: flex;
			flex-direction: row;
			// padding: 30rpx 34rpx 24rpx 72rpx;
			padding: 24rpx 0;

			justify-content: space-between;
			position: relative;
			color: #808080;

			.a-name {
				font-size: 32rpx;
				font-weight: 500;
				// color: #808080;
			}

			.a-costomer {
				font-size: 24rpx;

				// color: #808080;
				text {
					margin-right: 28rpx;
				}
			}
		}
	}

	.p-boddy .add-adress {
		width: 700rpx;
		height: 76rpx;
		background-color: #F5F6F7;
		border-radius: 16rpx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;

		text {
			font-size: 32rpx;
			margin-left: 32rpx;
		}
	}
</style>
