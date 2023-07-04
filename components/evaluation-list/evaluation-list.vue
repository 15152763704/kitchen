<template>
	<view class="evaluation-list">
		<view class="el-module_1 flex">
			<view v-for="(item,index) in filtrateData" @click="onclickItem(index)">
				<view v-if="item.type!='bad'" class="normal flex flex-items-center" :class="activedIndex == index? 'actived':''">
					<!-- <image v-if="item.type=='good'" style="width: 24rpx; height: 24rpx; margin-right: 12rpx;" src="../../static/zan.png" mode=""></image> -->
					<text v-if="item.type=='good'" style="margin-right: 8rpx;">👍 </text>
					<text>{{ item.content }}</text>
				</view>
				<view v-else class="normal-cai flex flex-items-center" :class="activedIndex == index? 'actived-cai':''">
					<!-- <image style="width: 24rpx; height: 24rpx; margin-right: 12rpx;" src="../../static/cai.png" mode=""></image> -->
					<text style="margin-right: 8rpx;">👎 </text>
					<text>{{ item.content }}</text>
				</view>
			</view>
		</view>
		<view class="el-module_2" v-if="evalLists.length != 0">
			<!-- <view class="isOnly flex flex-items-center">
				<view class="" style="width: 30rpx; height: 30rpx; background-color: #FEC23B; border-radius: 50%; margin-right: 8rpx;">
					<image style="width: 30rpx; height: 30rpx;" src="../../static/gouzi.png" mode=""></image>
				</view>
				<text class="fs-24">只看有内容评价</text>
			</view> -->
			<view class="list-item flex"  v-for="(item,index) in evalLists" :key="index">
				<!-- 左 头像 -->
				<view class="photo" style="">
					<image src="../../static/02.jpg" mode=""></image>
				</view>
				<!-- 右 -->
				<view class="info">
					<view class="fs-28 flex flex-justify-center" style="margin-right: 20rpx;">
						<text>{{ item.userName }}</text>
						<!-- <image style="width: 40rpx; height: 40rpx;" src="../../static/pinglunmore.png" mode=""></image> -->
					</view>
					<view class="fs-20 c56575B" style="margin-top: 4rpx; margin-bottom: 4rpx;">
						<text>{{ item.createTime }}</text>
					</view>
					<view class="fs-24 c56575B flex flex-items-center">
						<!-- <image style="width: 24rpx; height: 24rpx; margin-right: 6rpx;" src="../../static/zan.png" mode=""></image> -->
						<!-- <text>赞了该商品</text> -->
						<uni-rate size="16" :value="item.star" readonly />
						<text v-if="item.star == 5" class="fs-20" style="margin-left: 8rpx;">非常满意</text>
						<text v-if="item.star == 4" class="fs-20" style="margin-left: 8rpx;">满意</text>
						<text v-if="item.star == 3" class="fs-20" style="margin-left: 8rpx;">一般</text>
						<text v-if="item.star == 2" class="fs-20" style="margin-left: 8rpx;">一般</text>
						<text v-if="item.star == 1" class="fs-20" style="margin-left: 8rpx;">不满意</text>
					</view>
					<view class="fs-24" style="margin-top: 8rpx; margin-right: 8rpx;">
						<text>{{ item.text }}</text>
					</view>
					<view class="" style="margin-top: 20rpx;" @click.stop="previewImage(item)">
						<image v-for="(val,idx) in item.picurlArr" :key="idx + 1" style="width: 154rpx; height: 154rpx; margin-right: 8rpx;" :src="val?val:'../../static/default_good1.png'" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view v-else class="" :style="{ 'margin-top': marginTop + 'rpx', 'padding-bottom': pdBottom + 'rpx', 'height': (height - 50) + 'px'}" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
			<image style="width: 96rpx;margin-bottom: 22rpx;" src="../../static/none.png" mode="widthFix"></image>
			<text style="font-size: 24rpx; color: #56575B;">暂无评价～</text>
		</view>
	</view>
</template>

<script>
	import * as util from '../../common/util.js'
	var renderTime = util.renderTime;
	export default{
		data() {
			return {
				filtrateData:[
					{
						content: '全部',
						type: ''
					},
					{
						content: '最新',
						type: ''
					},{
						content: '有图 ',
						type: ''
					},
					{
						content: '',
						type: 'good'
					},
					{
						content: '',
						type: 'bad'
					}
				],
				activedIndex: 0,
				evalLists: []
			}
		},
		props:{
			evaNum: {
				type: Number
			},
			marginTop: {
				type: Number,
				default: 240
			},
			pdBottom: {
				type: Number,
				default: 0
			},
			height: {
				type: Number,
				// default: 0
			},
			shopEvalStatics: {
				type: Object,
				default() {
					return {}
				}
			},
			evalList: {
				type: Array,
				default() {
					return []
				}
			}
		},
		watch: {
			evalList(val){
				this.getEvalLists();
			},
			shopEvalStatics(val) {
				// console.log(val)
				this.getEvalStatics();
			}
		},
		methods: {
			onclickItem(index) {
				// console.log(index)
				this.activedIndex = index;
				// console.log(index-1)
				this.$emit('evalFilterType', index-1)
			},
			getEvalStatics() {
				this.filtrateData[2].content += this.shopEvalStatics.hasPic;
				this.filtrateData[3].content += this.shopEvalStatics.nice;
				this.filtrateData[4].content += this.shopEvalStatics.bad;
			},
			getEvalLists(){
				for (var i = 0; i < this.evalList.length; i++) {
					this.evalList[i].createTime = renderTime(this.evalList[i].createTime)
				}
				this.evalLists = this.evalList;
			},
			// 预览图片
			previewImage(item) {
				// item.picurlArr
				uni.previewImage({
					urls: item.picurlArr,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
		},
		mounted() {
			// setTimeout(() => {
			// 	this.getEvalLists();
			// }, 1000);
		},
		created() {
			
		}
	}
</script>

<style lang="scss" scoped>
	.flex {
		display: flex;
	}
	.flex-items-center {
		align-items: center;
	}
	.flex-justify-center{
		justify-content: space-between;
	}
	.fs-24 {
		font-size: 24rpx;
	}
	.fs-28 {
		font-size: 28rpx;
	}
	.fs-20 {
		font-size: 20rpx;
	}
	.c56575B {
		color: #56575B;
	}
	.evaluation-list {
		background-color: #FFFFFF;
		.el-module_1 {
			box-sizing: border-box;
			padding: 32rpx 0 0;
			.normal {
				box-sizing: border-box;
				padding: 10rpx 14rpx;
				margin-right: 20rpx;
				border-radius: 12rpx;
				background-color: rgba(255, 189, 43, 0.49411764705882355);
				color: #56575B;
				font-size: 24rpx;
			}
			.normal-cai {
				box-sizing: border-box;
				padding: 10rpx 14rpx;
				margin-right: 20rpx;
				border-radius: 12rpx;
				background-color: #E3E3E3;
				color: #56575B;
				font-size: 24rpx;
			}
			.actived {
				color: #000000!important;
				background-color: #FFBD2B!important;
			}
			.actived-cai {
				color: #000000!important;
				background-color: #bfbfbf!important;
			}
		}
		.el-module_2 {
			margin-top: 50rpx;
			.isOnly {
				margin-left: 4rpx;
			}
			.list-item {
				box-sizing: border-box;
				padding: 26rpx 0;
				border-bottom: 0.6rpx solid #E3E3E3;
				.photo {
					width: 76rpx;
					height: 76rpx;
					border-radius: 50%;
					margin-right: 22rpx;
					image {
						width: 76rpx;
						height: 76rpx;
						border-radius: 50%;
					}
				}
				.info {
					
				}
			}
			.list-item:last-child {
				// border-bottom: none;
			}
		}
	}
</style>

