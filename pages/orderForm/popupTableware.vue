<template>
	<uni-popup ref="popup" type="bottom" :animation="true" :is-mask-click="true">
		<view class="p-boddy">
			<view class="header">
				<!-- <text class="header-text">选择餐具</text>
				<image class="header-image" style="width: 26rpx;" src="/static/baskCooking/sy_close.png"
					mode="widthFix" @click="closePopup" /> -->
			</view>
			<!-- 1. 是否需要餐具 -->
			<view class="is-need-tableware" :style="!isNeedTw? 'padding-bottom: 100rpx': ''">
				<view class="title">
					<text>是否需要餐具</text>
					<image class="header-image" style="width: 40rpx;" src="/static/shopCar/close.png" mode="widthFix"
						@click="closePopup"></image>
				</view>
				<view class="cont">
					<template v-for="(item,index) in isNeedTableware">
						<view class="item" @click="isNeedTware(index)" :key="index"
							:class="item.isChecked? 'isChecked': ''">
							<view>
								<text style="font-size: 30rpx; color: #56575B;">{{ item.cont }}</text>
							</view>
							<text style="font-size: 20rpx; color: #808080;">({{ item.intro }})</text>
						</view>
					</template>
				</view>
			</view>
			<!-- 2. 选择餐具数量/无 -->
			<view class="select-tableware-num" v-if="isNeedTw">
				<view class="title">
					<text>选择餐具数量</text>
				</view>
				<view class="cont">
					<view :class="tablewareNum == '-1'?'isChecked': ''" class="item" style="width: 246rpx;" @click="needTablewareNum('-1')">
						<text>商家按照餐量提供</text>
					</view>
					<view :class="tablewareNum == 1?'isChecked': ''" class="item" @click="needTablewareNum(1)">
						<text>1份</text>
					</view>
					<view :class="tablewareNum == 2?'isChecked': ''" class="item" @click="needTablewareNum(2)">
						<text>2份</text>
					</view>
					<view :class="tablewareNum == 3?'isChecked': ''" class="item" style="margin-right: 0;" @click="needTablewareNum(3)">
						<text>{{ isMore?'3份':'更多' }}</text>
					</view>
					<view v-if="isMore" class="" style="display: flex;">
						<view :class="tablewareNum == 4?'isChecked': ''" class="item" style="margin-top: 22rpx;" @click="needTablewareNum(4)">
							<text>4份</text>
						</view>
						<view :class="tablewareNum == 5?'isChecked': ''" class="item" style="margin-top: 22rpx;" @click="needTablewareNum(5)">
							<text>5份</text>
						</view>
						<view :class="tablewareNum == 6?'isChecked': ''" class="item" style="margin-top: 22rpx;" @click="needTablewareNum(6)">
							<text>6份</text>
						</view>
						<view :class="tablewareNum == 7?'isChecked': ''" class="item" style="margin-top: 22rpx; width: 248rpx; margin-right: 0;" @click="needTablewareNum(7)">
							<text class="minus" @click.stop="minusNum()">-</text>
							<text style="margin: 0 58rpx;">{{ optionalNum }}份</text>
							<text class="add" @click.stop="addNum()">+</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 3. 后续订单都需要餐具 switch -->
			<view class="save-memory">
				<view class="" v-if="isNeedTw">
					<text>后续订单，都需要餐具</text><text class="intro">（默认依据参量提供）</text>
				</view>
				<view class="" v-else>
					<text>后续订单，都无需餐具</text><text class="intro">（持续主力环保）</text>
				</view>
				<switch checked color="#FFBD2B" @change="defaultIsChange" style="transform:scale(0.6)" />
			</view>
			<!-- 4. 商家按餐量 按钮 -->
			<view class="submit-btn">
				<text @click="submitTwNum()">{{ submitTitle }}</text>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				isNeedTableware: [{
						cont: '需要餐具',
						intro: '商家根据要求提供餐具',
						isChecked: true
					},
					{
						cont: '无需餐具',
						intro: '助力环保',
						isChecked: false
					}
				],
				isNeedTw: true,
				isMore: false,
				tablewareNum: '-1',
				optionalNum: 7,
				submitTitle: '商家按照餐量提供'
			}
		},
		filters: {

		},
		methods: {
			showPopup(item) {
				this.$refs.popup.open();
			},
			closePopup() {
				this.$refs.popup.close();
				// uni.showTabBar()

			},
			isNeedTware(index) {
				for (var i = 0; i < this.isNeedTableware.length; i++) {
					this.isNeedTableware[i].isChecked = false;
				}
				this.isNeedTableware[index].isChecked = true;
				if(this.isNeedTableware[0].isChecked){
					this.isNeedTw = true;
					this.submitTitle = "商家按照餐量提供"
					this.tablewareNum = '-1'
				}else {
					this.isNeedTw = false;
					this.submitTitle = "无需餐具"
					this.tablewareNum = 0
				}
			},
			needTablewareNum(index) {
				// console.log(index)
				if(index == 3) {
					this.isMore = true
				}
				this.tablewareNum = index;
				// console.log(index)
				if(index == '-1') {
					// console.log(0)
					this.submitTitle = "商家按照餐量提供"
				} else if(index==7) {
					// console.log(7)
					this.submitTitle = "需要" + this.optionalNum + "份餐具"
					
				} else{
					// console.log('07')
					this.submitTitle = "需要" + index + "份餐具";
				}
			},
			minusNum() {
				if(this.optionalNum <= 7) {
					return;
				}else {
					this.optionalNum --
					this.submitTitle = "需要" + this.optionalNum + "份餐具"
				}
			},
			addNum() {
				this.optionalNum ++
				this.submitTitle = "需要" + this.optionalNum + "份餐具"
			},
			defaultIsChange(e) {
				// console.log(e.detail.value)
				// this.defaultChecked = e.detail.value;
			},
			submitTwNum() {
				// uni.showModal({
				//     content: JSON.stringify(this.tablewareNum)
				// })
				this.$emit('sendTwNum',this.tablewareNum);
				this.closePopup()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.p-boddy {
		width: 750rpx;
		// height: 500rpx;
		background-color: #FFFFFF;
		border-radius: 28rpx 28rpx 0 0;

		.title {
			display: flex;
			justify-content: space-between;
			text-align: center;
			padding: 0 26rpx 32rpx 30rpx;

			text {
				font-size: 32rpx;
				font-weight: 500;
			}
		}

		.is-need-tableware {
			padding-bottom: 42rpx;

			.cont {
				display: flex;
				padding: 0 32rpx;
				box-sizing: border-box;
				justify-content: space-between;

				.item {
					width: 328rpx;
					height: 114rpx;
					border-radius: 10rpx;
					border: 1rpx solid #BABABA;
					text-align: center;
					// padding-top: 20rpx;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}

				.isChecked {
					color: #FF9D2B;
					background-color: #FFF6CE;
					border: 1rpx solid #FF9D2B;

					text {
						color: #FF9D2B !important;
					}
				}
			}
		}

		.select-tableware-num {
			margin-bottom: 78rpx;
			.cont {
				display: flex;
				padding: 0 32rpx;
				flex-wrap: wrap;

				.item {
					display: flex;
					justify-content: center;
					align-items: center;
					box-sizing: border-box;
					border-radius: 10rpx;
					height: 62rpx;
					// line-height: 62rpx;
					margin-right: 22rpx;
					color: #56575B;
					border: 1rpx solid #BABABA;
					width: 124rpx;
					// text-align: center;
					text {
						font-size: 26rpx;
					}
					.minus, .add {
						color: #000000!important;
						font-weight: 500;
					}
				}
				.isChecked {
					color: #FF9D2B;
					background-color: #FFF6CE;
					border: 1rpx solid #FF9D2B;
				
					text {
						color: #FF9D2B !important;
					}
				}
			}
		}
		.save-memory {
			box-sizing: border-box;
			padding: 0 0 0 42rpx;
			
			margin-bottom: 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.intro {
				font-size: 24rpx;
				color: #808080;
			}
		}
		.submit-btn {
			box-sizing: border-box;
			padding: 0 32rpx;
			padding-bottom: 40rpx;
			text{
				display: inline-block;
				width: 100%;
				height: 78rpx;
				line-height: 78rpx;
				border-radius: 10rpx;
				background: linear-gradient(to bottom, #FFD417, #FFBD2B);
				text-align: center;
				font-size: 30rpx;
				font-weight: 500;
			}
		}
	}

	.p-boddy .header {
		width: 750rpx;
		height: 40rpx;
		/* background-color: #000000; */
	}
</style>
