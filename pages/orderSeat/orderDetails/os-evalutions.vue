<template>
	<view class="os-evalutions">
		<!-- <view class="header">
			<view class="left">
				<text class="rate-text">4.9</text>
				<view class="whole-rate">
					<view class="wr-t">
						<text>整体评分</text>
						<image style="width: 6.7rpx;" src="../../../static/order/right.png" mode="widthFix"></image>
					</view>
					<uni-rate size="11" :value="4" readonly />
				</view>
			</view>
			<view class="right">
				<view class="rate-item">
					<view class="ri-t">
						<text>口味</text>
					</view>
					<text class="ri-c">4.7</text>
				</view>
				<view class="rate-item">
					<view class="ri-t">
						<text>服务</text>
					</view>
					<text class="ri-c">4.7</text>
				</view>
				<view class="rate-item">
					<view class="ri-t">
						<text>性价比</text>
					</view>
					<text class="ri-c">4.8</text>
				</view>
				<view class="rate-item" style="margin-right: 0;">
					<view class="ri-t">
						<text>环境</text>
					</view>
					<text class="ri-c">5.0</text>
				</view>
			</view>
		</view> -->
		<view class="evalution-list" v-if="osEvalutionsLists.length > 0">
			<view class="eva-item" v-for="(item,index) in osEvalutionsLists" :key="index + 1">
				<view class="head">
					<view class="head-l">
						<image style="width: 76rpx; height: 76rpx; border-radius: 38rpx;" :src="item.headerUrl?item.headerUrl:'/static/danxiaochu.png'" mode=""></image>
						<view class="head-l-info">
							<text>{{ subStrUserName(item.userName) }}</text>
							<uni-rate size="11" :value="item.star" readonly />
						</view>
					</view>
					<text class="head-r">{{ item.createTime }}</text>
				</view>
				<view class="eva-content">
					<text>{{ item.text }}</text>
				</view>
				<view class="eva-pic">
					<image @click="previewImage(item.picurlArr)" v-for="(val,idx) in item.picurlArr" :src='val' mode=""></image>
				</view>
				<text class="totalNum" v-if="item.picurlArr">共{{ item.picurlArr.length }}张</text>
			</view>
		</view>
		<view v-else style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 700rpx;">
			<image style="width: 96rpx;margin-bottom: 22rpx;" src="../../../static/none.png" mode="widthFix"></image>
			<text style="font-size: 24rpx; color: #56575B;">暂无评价～</text>
		</view>
	</view>
</template>

<script>
	import * as util from '../../../common/util.js'
	var renderTime = util.renderTime;
	export default {
        name:'osEvalutions',
        props:{
			osEvalutionsList: {
            	type: Array,
            	default(){
            		return []
            	}
            },
        },
		data() {
			return {
				// imgList: ['/static/cpxq_cm_pic2.png','/static/cpxq_cm_pic3.png']
				osEvalutionsLists: [1]
			}
		},
		computed:{
		},
		created(){
		},
		mounted() {
			setTimeout(() => {
				this.getEvalLists();
			}, 1000);
		},
		methods: {
			subStrUserName(val){
				if(val && val.length > 20){
					return val.substring(0,20)+'...'
				}
				return val;
			},
			getEvalLists(){
				for (var i = 0; i < this.osEvalutionsList.length; i++) {
					this.osEvalutionsList[i].createTime = renderTime(this.osEvalutionsList[i].createTime)
				}
				this.osEvalutionsLists = this.osEvalutionsList;
			},
			previewImage(imgList) {
				uni.previewImage({
					urls: imgList,
					longPressActions: {
						// itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							// console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							// console.log(err.errMsg);
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.os-evalutions {
	.header {
		display: flex;
		margin-top: 46rpx;
		.left {
			display: flex;
			align-items: center;
			margin-left: 18rpx;
			.rate-text {
				font-size: 60rpx;
				font-weight: 500;
				margin-right: 14rpx;
				color: #F75732;
			}
			.whole-rate {
				.wr-t {
					display: flex;
					align-items: center;
					margin-bottom: 12rpx;
					margin-left: 4rpx;
					text {
						font-size: 20rpx;
						margin-right: 22rpx;
						font-weight: 500;
						// margin-bottom: 12rpx;
					}
				}
			}
		}
		.right{
			display: flex;
			text-align: center;
			justify-content: center;
			margin-left: 36rpx;
			.rate-item {
				margin-right: 64rpx;
				.ri-t {
					text {
						font-size: 24rpx;
					}
				}
				.ri-c {
					font-size: 24rpx;
					color: #F75732;
					font-weight: 500;
				}
			}
		}
	}
	.evalution-list {
		padding-bottom: 88rpx;
		.eva-item {
			margin-top: 40rpx;
			position: relative;
			.head {
				padding: 0 40rpx 0 30rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				margin-bottom: 32rpx;
				.head-l {
					display: flex;
					.head-l-info {
						margin-left: 18rpx;
						text {
							font-size: 24rpx;
							margin-bottom: 12rpx;
							display: inline-block;
						}
					}
				}
				.head-r {
					font-size: 24rpx;
					color: #808080;
				}
			}
			.eva-content {
				padding: 0 46rpx 0 32rpx;
				box-sizing: border-box;
				text {
					font-size: 28rpx;
					/* #ifndef H5 */
					lines: 3;
					text-overflow: ellipsis;
					/* #endif */
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					margin-bottom: 32rpx;
				}
			}
			.eva-pic {
				padding: 0 36rpx 0 36rpx;
				box-sizing: border-box;
				position: relative;
				image {
					width: 214rpx;
					height: 214rpx;
					margin-right: 18rpx;
				}
				image:last-child {
					margin-right: 0;
				}
			}
			.totalNum {
				font-size: 20rpx;
				position: absolute;
				z-index: 999;
				color: #FFFFFF;
				background-color: rgba(0, 0, 0, 0.4627450980392157);
				padding: 0 10rpx;
				border-radius: 20rpx;
				height: 32rpx;
				line-height: 32rpx;
				right: 46rpx;
				bottom: 24rpx;
			}
		}
	}
}
</style>
