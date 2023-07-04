<template>
	<view class="evaluation-list">
		<!-- <mote-lines-divide :line="3" expandText="展开" foldHint="收起">
		      本内容文本内容文本内容文本内容文本内容文本内容
		</mote-lines-divide> -->
		<template v-for="(item,index) in evaluationList">
			<view class="evaluation-item">
				<!-- 头像 + 名字 -->
				<view class="avtor">
					<image :src="item.avtor" mode=""></image>
					<text>{{ item.name }}</text>
				</view>
				<!--  -->
				<view class="" style="margin-left: 86rpx;">
					<view class="score">
						<uni-rate size="12" :value="item.score" readonly />
					</view>
					<view class="cont">
						<mote-lines-divide :line="1" expandText="展开" foldHint="收起">
							<text>{{ item.cont }}</text>
						</mote-lines-divide>
					</view>
					<view class="pic">
						<view v-for="(val,index) in item.pic" :key="index" style="">
							<image :src="val" mode=""></image>
						</view>
					</view>
					<view class="flex-center-between">
						<view class="time">
							<text>{{ item.time }}</text>
						</view>
						<view class="dianzan">
							<image style="width: 27rpx; height: 25rpx;" v-if="item.isZan" src="../../../static/eva_text_zan.png" mode=""></image>
							<image style="width: 27rpx; height: 25rpx;" v-else src="../../../static/eva_text_zank.png" mode=""></image>
							<text>{{ item.zan }}</text>
						</view>
					</view>
					
					
					<template>
						<!-- <view class="comments" v-if="item.comments.length <= 2"> -->
						<view class="" v-if="item.comments.length > 2">
							<view class="comments" v-if="!isSpread">
								<view class="item" v-for="(v,index) in item.comments.slice(0,2)">
									<text class="name">{{ v.name }}:</text>
									<text class="cont">{{ v.cont }}</text>
								</view>
								<view class="" style="text-align: right;" @click="spread()">
									<text class="" style="font-size: 20rpx; color: #808080;">展开</text>
									<image style="width: 10rpx; height: 8rpx; margin-left: 12rpx;" src="../../../static/eva_zk.png" mode=""></image>
								</view>
							</view>
							<view class="comments" v-else>
								<view class="item" v-for="(v,index) in item.comments">
									<text class="name">{{ v.name }}:</text>
									<text class="cont">{{ v.cont }}</text>
								</view>
								<view class="" style="text-align: right;" @click="spread()">
									<text class="" style="font-size: 20rpx; color: #808080;">收起</text>
									<image style="width: 10rpx; height: 8rpx; margin-left: 12rpx; transform: rotate(180deg);" src="../../../static/eva_zk.png" mode=""></image>
								</view>
							</view>
						</view>
						<view class="comments" v-else>
							<view class="item" v-for="(v,index) in item.comments">
								<text class="name">{{ v.name }}:</text>
								<text class="cont">{{ v.cont }}</text>
							</view>
						</view>
					</template>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	import MoteLinesDivide from "@/components/mote-lines-divide/mote-lines-divide"

	export default {
		components: {
			MoteLinesDivide
		},
		data() {
			return {
				evaluationList: [
					{
						avtor: '/static/01.jpg',
						name: '青青',
						score: 2.5,
						cont: '花胶炖鸡，按照食谱步骤非常成功，好喝好吃好吃。',
						pic: [
							'/static/eva_pic.png',
							'/static/eva_pic.png',
							'/static/eva_pic.png'
						],
						time: '20分钟前',
						isZan: true,
						zan: 18,
						comments: [
							{
								name: '青青',
								cont: '看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！'
							},
							{
								name: '青青',
								cont: '看着不错！看着不错！看着不错！'
							},
							{
								name: '青青',
								cont: '看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！'
							},
							{
								name: '青青',
								cont: '看着不错！看着不错！看着不错！'
							}
						]
					},
					{
						avtor: '/static/01.jpg',
						name: '青青',
						score: 4.5,
						cont: '花胶炖鸡，按照食谱步骤非常成功!',
						pic: [
							'/static/eva_pic.png',
							'/static/eva_pic.png'
						],
						time: '20分钟前',
						isZan: false,
						zan: 180,
						comments: [
							{
								name: '青青',
								cont: '看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！'
							}
						]
					},
					{
						avtor: '/static/01.jpg',
						name: '青青',
						score: 4.5,
						cont: '花胶炖鸡，按照食谱步骤非常成功!',
						pic: [
							'/static/eva_pic.png',
							'/static/eva_pic.png'
						],
						time: '20分钟前',
						isZan: false,
						zan: 180,
						comments: [
							{
								name: '青青',
								cont: '看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！'
							},
							{
								name: '青青',
								cont: '看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！看着不错！'
							}
						]
					}
				],
				isSpread: false
			}
		},
		onLoad() {

		},
		computed: {
			
		},
		mounted() {

		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
			// console.log(this.scrollTop)
		},
		methods: {
			spread() {
				this.isSpread = !this.isSpread;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.flex-center-between {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.evaluation-list {
		min-height: 100vh;
		background-color: #FFFFFF;
		box-sizing: border-box;
		padding-left: 30rpx;
		padding-right: 44rpx;
		.evaluation-item {
			padding-top: 44rpx;
			padding-bottom: 56rpx;
			
			border-bottom: 0.6rpx solid #BABABA;
			box-sizing: border-box;
			.avtor {
				display: flex;
				align-items: center;
				image {
					width: 72rpx;
					height: 72rpx;
					border-radius: 50%;
					margin-right: 14rpx;
				}
				text {
					font-size: 28rpx;
					font-weight: 500;
				}
			}
			.score {
				margin-bottom: 16rpx;
			}
			.cont {
				
				text {
					font-size: 28rpx;
				}
			}
			.pic {
				margin-top: 24rpx;
				margin-bottom: 18rpx;
				display: flex;
				flex-wrap: wrap;
				image {
					width: 168rpx;
					height: 168rpx;
					border-radius: 16rpx;
					margin-right: 14rpx;
				}
			}
			.time {
				font-size: 20rpx;
				color: #808080;
			}
			.dianzan {
				display: flex;
				align-items: center;
				text {
					margin-left: 10rpx;
					color: #F75732;
					font-size: 28rpx;
				}
			}
			.comments {
				width: 100%;
				// height: 200rpx;
				background-color: #F5F5F5;
				border-radius: 12rpx;
				margin-top: 36rpx;
				padding: 14rpx 20rpx 8rpx 14rpx;
				box-sizing: border-box;
				.item {
					font-size: 24rpx;
					margin-bottom: 8rpx;
					.name {
						color: #FF9D2B;
						margin-right: 12rpx;
					}
				}
			}
		}
	}
</style>
