<template>
	<view class="evaluate">
		<view class="">
			<view class="evaluate-rate">
				<text>评分：</text>
				<uni-rate :touchable="true" :value="evalution.star" @change="onChange" />
			</view>
			<view class="evaluate-cont">
				<text>评价内容：</text>
				<uni-easyinput :styles="styles" type="textarea" v-model="evalution.text" placeholder="请输入评价(最多200字)"
					:maxlength="200" />
			</view>
			<view class="evaluate-pic">
				<!-- <view class="default" style="">
					<image style="width: 46rpx; height: 38rpx;" src="../../../static/eva_photo.png" mode=""></image>
				</view>
				<text style="color: #808080; font-size: 16rpx;">（图片上传，至少上传一张）</text> -->
				<fjj-images :pageImgList="imgList" :imgCount="5" @addImg="editParkImg" @deleteImg="deleteImg">
				</fjj-images>
			</view>
		</view>
		<view class="submit" @click="submit()">
			<text>提 交</text>
		</view>
	</view>
</template>

<script>
	import fjjImages from '@/components/fjj-images/fjj-images.vue';
	import merchantsDoself from '@/api/merchantsDoself/merchantsDoself.js';
	import * as util from '@/common/util.js'
	var returnIP = util.returnIP;
	export default {
		components: {
			fjjImages
		},
		data() {
			return {
				evalution: {
					star: 5,
					text: '',
					pics: '',
					picUrls: '',
					orderId: '',
				},
				picsArr: [],
				picsUrlArr: [],
				styles: {
					borderColor: '#F8F8F8'
				},
				imgList: []
			}
		},
		onLoad: function(option) {
			this.evalution.orderId = option.orderId;
		},
		methods: {
			onChange(e) {
				// console.log('rate发生改变:' + JSON.stringify(e));
				// console.log(this.rateValue);
				this.evalution.star = e.value;
			},
			editParkImg(currentTempFilePath) {
				//执行增加操作
				// console.log(currentTempFilePath);
				uni.uploadFile({
					url: returnIP() + 'file/uploadKitchen', //仅为示例，非真实的接口地址
					// filePath: res.tempFilePaths[0],
					filePath: currentTempFilePath,
					name: 'file',
					formData: {
						'fieldName': 'pics',
						'tableName': 'order_evaluation'
					},
					header: {
						Authorization: 'Bearer ' + uni.getStorageSync('token_key'),
					},
					success: (uploadFileRes) => {
						this.picsArr = this.picsArr.concat(JSON.parse(uploadFileRes.data).data.fileId)
						this.picsUrlArr = this.picsUrlArr.concat(JSON.parse(uploadFileRes.data).data.url)
						
					}
				});

			},
			deleteImg(index) {
				//删除操作 index数组中的下标
				// console.log(index);
				this.picsArr.splice(index, 1);
				this.picsUrlArr.splice(index, 1);
			},
			submit() {
				// uni.navigateTo({
				// 	url: '/pages/hotRecipes/evaluation/evaluation-list'
				// })
				this.evalution.pics = this.picsArr.join(';')
				this.evalution.picUrls = this.picsUrlArr.join(';')
				// console.log(this.evalution)
				this.addEval();
			},
			addEval() {
				merchantsDoself.addPublishSelfMadeGood(this.evalution).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: "评价成功",
							icon: 'success'
						})
						setTimeout(function () {
							// uni.navigateBack()
							uni.navigateTo({
								url: '/pages/merchantsDoself/mine/orders/orders?index=0'
							})
						}, 1000);
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
			this.scrollTop = e.scrollTop;

		},
	}
</script>

<style>
	.evaluate .uni-easyinput__content-textarea {
		background-color: #F8F8F8 !important;

	}
</style>
<style lang="scss" scoped>
	.evaluate {
		background-color: #FFFFFF;
		width: 750rpx;
		height: 100vh;
		box-sizing: border-box;
		padding-top: 42rpx;
		padding-left: 30rpx;
		padding-right: 30rpx;

		.evaluate-rate {
			display: flex;
			align-items: center;
			margin-bottom: 50rpx;

			text {
				font-size: 24rpx;
				margin-right: 12rpx;
			}
		}

		.evaluate-cont {
			margin-bottom: 42rpx;

			text {
				font-size: 24rpx;
				margin-bottom: 16rpx;
				display: inline-block;
			}
		}

		.evaluate-pic {
			// .default {
			// 	width: 100rpx;
			// 	height: 100rpx;
			// 	border: 1rpx dashed #BABABA;
			// 	background-color: #FFFFFF;
			// 	border-radius: 8rpx;
			// 	display: flex;
			// 	justify-content: center;
			// 	align-items: center;
			// }
		}

		.submit {
			width: 690rpx;
			height: 78rpx;
			line-height: 78rpx;
			text-align: center;
			background: linear-gradient(to right, #F0C819, #FF9D00);
			border-radius: 42rpx;
			font-size: 32rpx;
			font-weight: 500;
			position: fixed;
			bottom: 88rpx;
		}
	}
</style>
