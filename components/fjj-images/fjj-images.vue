<template>
	<view>
		<!-- <view class="cu-bar bg-white margin-top" v-if="title">
			<view class="action">
				{{title}}
			</view>
			<view class="action">
				{{imgList.length}}/{{imgCount}}
			</view>
		</view> -->
		<view class="grid col-4 grid-square flex-sub" style="position: relative;">
			<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage"
				:data-url="imgList[index]">
				<image :src="imgList[index]" mode="aspectFill"></image>
				<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
					<text class='iconfont icon-shanchu'></text>
				</view>
			</view>
			<view class="default" @tap="ChooseImage" v-if="imgList.length<imgCount">
				<!-- <text class='iconfont icon-paizhao'></text> -->
				<image style="width: 46rpx; height: 38rpx;" src="/static/eva_photo.png" mode=""></image>
			</view>
		</view>
		<text style="color: #808080; font-size: 20rpx; top: -20rpx; position: relative;">（图片上传，至少上传一张）</text>
		<!-- <view class="cu-form-group" :class="{content: !title}">
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage"
					:data-url="imgList[index]">
					<image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='iconfont icon-shanchu'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="imgList.length<imgCount">
					<text class='iconfont icon-paizhao'></text>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	//目前实现是单张图片增删操作
	export default {
		props: {
			pageImgList: {
				type: Array,
				required: true,
				default () {
					return [];
				}
			},
			imgCount: {
				type: Number,
				default: 9,
			},
			title: {
				required: false,
				type: String,
				default: '图片上传',
			},
		},
		watch: {
			pageImgList(val) {
				this.imgList = [];
				this.imgList = this.imgList.concat(val);
				//this.imgList = Object.assign()(val);
			}
		},
		data() {
			return {
				imgList: [],
			}
		},
		mounted() {
			this.imgList = [];
			this.imgList = this.imgList.concat(this.pageImgList);
			//this.imgList = Object.clone(this.pageImgList);
		},
		methods: {
			ChooseImage() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: (res) => {
						// console.log(res);
						// console.log(this.imgList);
						this.imgList = this.imgList.concat(res.tempFilePaths)
						const currentTempFilePath = res.tempFilePaths[0];
						this.$emit("addImg", currentTempFilePath);
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '提示',
					content: '确定要删除吗？',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1);
							this.$emit("deleteImg", e.currentTarget.dataset.index);
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.default {
		// width: 100%;
		// height: 100%;
		border: 1rpx dashed #BABABA;
		background-color: #FFFFFF;
		position: relative;
		box-sizing: border-box;
		image {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}

	image {
		max-width: 100%;
		display: inline-block;
		position: relative;
		z-index: 0;
	}

	.cu-bar {
		display: flex;
		position: relative;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
	}

	.cu-bar .action {
		display: flex;
		align-items: center;
		height: 100%;
		justify-content: center;
		max-width: 100%;
	}

	.cu-bar .action:first-child {
		margin-left: 20rpx;
		font-size: 30rpx;
	}

	.cu-bar .action:last-child {
		margin-right: 30upx;
		font-size: 26rpx;
	}

	.cu-form-group {
		background-color: #ffffff;
		padding: 1upx 30upx;
		display: flex;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
	}

	.cu-form-group.content {
		padding: 30rpx;
	}

	.cu-form-group>text[class*="iconfont"] {
		font-size: 36upx;
		padding: 0;
		box-sizing: border-box;
	}

	/* grid布局 */

	.grid {
		display: flex;
		flex-wrap: wrap;
	}

	.grid.grid-square {
		overflow: hidden;
	}

	.grid.grid-square .cu-tag {
		position: absolute;
		right: 0;
		top: 0;
		border-bottom-left-radius: 6upx;
		padding: 6upx 12upx;
		height: auto;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.grid.grid-square>view>text[class*="iconfont"] {
		font-size: 52upx;
		position: absolute;
		color: #8799a3;
		margin: auto;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.grid.grid-square>view {
		margin-right: 20upx;
		margin-bottom: 20upx;
		border-radius: 6upx;
		position: relative;
		overflow: hidden;
	}

	.grid.grid-square>view.bg-img image {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.grid.col-4.grid-square>view {
		padding-bottom: calc((100% - 60upx)/4);
		height: 0;
		width: calc((100% - 60upx)/4);
	}

	.grid.grid-square>view.bg-img image {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.grid.col-4.grid-square>view:nth-child(4n) {
		margin-right: 0;
	}

	.cu-tag {
		font-size: 24upx;
		vertical-align: middle;
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 0upx 16upx;
		height: 48upx;
		font-family: Helvetica Neue, Helvetica, sans-serif;
		white-space: nowrap;
	}

	.solids::after {
		border: 8upx solid #eee;
	}

	.solids {
		position: relative;
	}

	.solids::after {
		content: " ";
		width: 200%;
		height: 200%;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: inherit;
		transform: scale(0.5);
		transform-origin: 0 0;
		pointer-events: none;
		box-sizing: border-box;
	}

	.flex-sub {
		flex: 1;
	}

	.margin-top {
		margin-top: 30rpx;
	}

	.bg-red {
		background-color: #e54d42;
		color: #ffffff;
	}

	.bg-white {
		background-color: #ffffff;
		color: #666666;
	}

	@font-face {
		font-family: "iconfont";
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAO0AAsAAAAAB8gAAANmAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqDLIMAATYCJAMMCwgABCAFhG0HOxvLBhGFtJF9JMZuoxsmj0QXU6OrNrbB86gz35dkn2K4KwDDxoGpAIxb12Zj2n6O8zPyVZf881//DNuZtDu9NGV5nMYIsAgJEofPczm9FnjZ/JblMtbWPfioF2AcUGBjD02ogALihrErL2I9BPDIQymkUZNWnbAYjG4CyKjhQ/tjU1ZMTaFgEdySsQaZj4NVM9RtYJ7/fflFBbGgcDRG33bUeBD1/nZ/e6+jySi9XALZeG6ATQINlAIMSJ9Sb7eeDqOl0HiK1tRnuhgENVYgmQRfqurdlf7xFIiLkR8AUAyaFSclswUQ+PZeAnWcvx9cFJ8P7EaMTPsITp4gEuSqPLlL12WxnTMzdeqydGahxdHsnTs5D94xK2vXzktmFd0VG/jsWdenT7s8ftzpyZOeRx5E7898GHvUxZu5PbrD92ftiu0c60lP//ZM5LNZsmPWLpFydaeyBVV0eabUpStFx1b5/rasDf36Swr7y+Q5s3gNlnre5kz1vMP3c6k1DyqnHXuUV8M+5e6fvHrr6tW3xe4U+3/udpj6p0TtvyU+XTHSr/4t9qbY36tQlB5cp2AJXhxuJD17SGNp2LNnI08ci6GIpDd21s/oPKOrXTK7Tp1QchDChuSQDpPKGGH6HBJgJjkJWYHkSP/eMF3OdN23hhJkTX2/v/7+96nx8EMwlzktttaYQ8nz6XKkO5+j+tz015ndYmq7TJOEm7Fd/XYZJ9nC9Al8jI46n9oIoNerzx/3GyZGxu68ba1/1jcAvE6+zr7Z0M4P9rZ8Ar9J1rLMqArDpo0staV6QjOB8Uuw4Kk6fk4xQAZ+++sztw6DYFMyBkUKuaGxFKIYRik4+FSCi6UuPEriTvbJiDBETAQowTuAkI4PKFI5B006vimG8QOHLPzDJZ1oeHSRjHP6FJHhi4aCgWIM4StkEddkOXQRFN4w6cpAkgqf/YjSZgGwDSubcLFGGWNA+5Q4qgQkXMEVbIZlydAI5xipkao2F9OkshcZEVe9BQ0RkAAFiQFCXgEyIpgacqsri9znbyAJHSUBUkOqCD+CCC1Z/YCNgdWC4mrrVqRruaTliQQHRSEAQmAqgCtwI6UZZYCmvFUOEqEYpD3CDRdMVInaao359dXzrQE8jPm0KNFiSJmYBnWUdtNxQfYWebjXAwAA') format('woff2');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-shanchu:before {
		content: "\e6ac";
	}

	.icon-paizhao:before {
		content: "\e7e0";
	}
</style>
