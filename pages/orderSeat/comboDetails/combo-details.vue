<template>
	<view class="combo-details" style="">
		<uni-swiper-dot class="uni-swiper-dot-box" style="">
			<swiper class="swiper-box" :current="0">
				<swiper-item v-for="(iitem, index) in seatPicList" :key="index">
					<image :src="iitem.filePath?iitem.filePath: '../../../static/danxiaochu.png'" alt="" mode="">
					</image>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<view class="combo-name">
			{{ pmsSeatDetails.name }}
		</view>
		<view class="combo-info">
			{{ pmsSeatDetails.info }}
		</view>
		<view class="need-know" style="">
			<view class="title">
				使用规则
			</view>
			<view class="" style="padding: 0 36rpx; box-sizing: border-box;">
				<rich-text :nodes="pmsSeatDetails.mustKnow"
					style="font-size: 28rpx; line-height: 2; color: #000000!important;"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import orderSeat from '@/api/orderSeat/orderSeat.js'
	import file from '@/api/file/file.js'
	export default {
		components: {},
		data() {
			return {
				pmsSeatDetails: {},
				seatPicList: []
			}
		},
		onLoad: function(option) {
			this.getPmsSeatDetails(option.id);
		},
		onShow() {

		},
		methods: {
			getPmsSeatDetails(id) {
				orderSeat.getPmsSeatDetails(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res)
						this.pmsSeatDetails = res.data;
						this.getFileUrl(res.data.seatPic);
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
			getFileUrl(fileid) {
				file.getFileUrl(fileid).then(res => {
					if (res.code == 200) {
						this.seatPicList = res.rows;
						// this.pmsSeatDetails.
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
	}
</script>

<style lang="scss" scoped>
	.combo-details {
		width: 750rpx;

		.swiper-box {
			width: 100%;
			height: 500rpx;

			image {
				width: 100%;
				height: 500rpx;
			}
		}

		.combo-name {
			font-size: 40rpx;
			font-weight: 600;
			padding: 20rpx 22rpx 28rpx;
			box-sizing: border-box;
		}

		.combo-info {
			font-size: 30rpx;
			// font-weight: 600;
			padding: 0 22rpx 20rpx;
			box-sizing: border-box;
		}

		.need-know {
			padding: 30rpx 22rpx 20rpx;
			box-sizing: border-box;

			.title {
				font-size: 30rpx;
				font-weight: 600;
				padding: 0rpx 0rpx 28rpx;
				box-sizing: border-box;
			}

			span,
			strong,
			p,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6,
			h7 {
				color: #000000 !important;
			}
		}
	}
</style>
