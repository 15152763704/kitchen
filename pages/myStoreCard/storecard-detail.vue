<template>
	<view class="my-storecard">
		<uni-list v-if="myCardDetail.length">
			<uni-list-item v-for="(item, index) in myCardDetail" :key="index + 1">
				<template v-slot:header>
					<view class="slot-tit">
						<view class="tit">{{ item.actionName }}</view>
						<view class="tim">{{ format(item.createTime) }}</view>
					</view>
				</template>
				<template v-slot:body>
					<!-- <text class="slot-box slot-time">{{ format(item.createTime) }}</text> -->
				</template>
				<template v-slot:footer>
					<text class="slot-box slot-money"
						:class="item.actionMoney>0?'xiaofei':'chongzhi'">￥{{ item.actionMoney }}</text>
				</template>
			</uni-list-item>
			<uni-load-more :status="status" :content-text="contentText" />
		</uni-list>
		<view v-if="!myCardDetail.length" class=""
			style="display: flex; flex-direction: column; align-items: center; margin-top: 360rpx;">
			<image style="width: 96rpx;margin-bottom: 22rpx;" src="/static/none.png" mode="widthFix"></image>
			<text style="font-size: 24rpx; color: #56575B;">暂无明细～</text>
		</view>
	</view>
</template>

<script>
	import login from '@/api/login/login.js'
	export default {
		components: {

		},
		data() {
			return {
				myCardDetail: [],
				status: 'more',   // more loading noMore
				contentText: {
					contentdown: '--- 查看更多 ---',
					contentrefresh: '--- 加载中 ---',
					contentnomore: '--- 没有更多了 ---'
				},
				listForm: {
					cardId: null,
					pageNum: 1, 
					pageSize: 10,
					total: 0
				}
			}
		},
		onLoad: function(option) {
			this.listForm.cardId = option.id;
			this.findStoreCardDetail();
		},
		onShow() {

		},
		methods: {
			// 我的储值卡
			findStoreCardDetail() {
				this.status = 'loading';
				let pageNum = this.listForm.pageNum;
				let pageSize = this.listForm.pageSize;
				let cardId = this.listForm.cardId;
				login.findStoreCardDetail(cardId, pageNum, pageSize).then(res => {
					// console.log(res)
					if (res.code == 200) {
						// console.log(res);
						this.myCardDetail = res.rows;
						this.listForm.total = res.total;
						if (this.myCardDetail.length >= this.listForm.total) {
							this.status = 'noMore';
						} else {
							this.status = 'more';
						}
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
			format(time) {
				//获取年月日，时间
				let dat = new Date(time);
				var year = dat.getFullYear();
				var mon = (dat.getMonth() + 1) < 10 ? "0" + (dat.getMonth() + 1) : dat.getMonth() + 1;
				var data = dat.getDate() < 10 ? "0" + (dat.getDate()) : dat.getDate();
				var hour = dat.getHours()  < 10 ? "0"+(dat.getHours()) : dat.getHours();
				var min =  dat.getMinutes()  < 10 ? "0"+(dat.getMinutes()) : dat.getMinutes();
				// var seon = dat.getSeconds() < 10 ? "0"+(dat.getSeconds()) : dat.getSeconds();
				var newDate = year + "-" + mon + "-" + data + " " +  hour + ":" + min;
				return newDate;
			}
		},
		onReachBottom() {
			// console.log('触底啦~')
			if (this.myCardDetail.length >= this.listForm.total) return;
			this.listForm.pageNum++;
			this.findStoreCardDetail();
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;
		}
	}
</script>
<style lang="scss" scoped>
	.my-storecard {
		.uni-load-more {
			background-color: #F5F5F5;
			
		}
		padding: 4rpx 4rpx;
		box-sizing: border-box;

		.slot-box {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			align-items: center;
		}

		.slot-tit {
			.tit {
				font-size: 32rpx;
				margin-bottom: 10rpx;
			}

			.tim {
				font-size: 24rpx;
				color: #999999;
			}
		}

		.slot-time {}

		.slot-money {
			font-size: 40rpx;
			font-weight: 500;
		}

		.chongzhi {
			color: #59B734;
		}

		.xiaofei {
			color: #EF5C00;
		}
	}
</style>
