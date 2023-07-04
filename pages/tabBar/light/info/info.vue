<template>
	<view class="info-list">
		<template v-for="(item,index) in infoList">
			<uni-list-chat clickable :title="item.showCookingName" 
				:avatar="item.userAvatar?item.userAvatar:'/static/danxiaochu.png'" 
				:note="parseNoticeType(item)" :time="parseTime(item.createTime)"
				badge-positon="left" :badge-text="item.status ==0 ?'dot':''" @click="toDetails(item)">
				<!-- 自定义右侧 -->
				<!-- <view class="chat-custom-right">
					<text class="chat-custom-text">刚刚</text>
				</view> -->
			</uni-list-chat>
		</template>
		<view class="isBottom">
			<text class="isBottom-leftLine"></text>
			<text v-if="infoList.length >= infoTotal" class="isBottom-text">已经到底啦</text>
			<text v-else class="isBottom-text">加载中...</text>
			<text class="isBottom-rightLine"></text>
		</view>
	</view>
</template>

<script>
	import showCooking from '@/api/showCooking/showCooking.js';
	// import login from '@/api/login/login.js'
	export default {
		components: {

		},
		data() {
			return {
				queryParams:{
					pageNum: 1,
					pageSize: 20,
				},
				infoList: [],
				infoTotal: null
			}
		},
		onLoad: function(option) {
			this.initNoticeList();
		},
		onShow() {

		},
		methods: {
			/* 初始化加载 */
			initNoticeList(){
				showCooking.ShowCookingNoticeList(this.queryParams).then((res)=>{
					if(res.code == 200){ 
						this.infoList = this.infoList.concat(res.rows);
						this.infoTotal = res.total;
					}
				})
			},
			toDetails(item) {
				// console.log('执行click事件', item)
				uni.navigateTo({
					url: './info-details?id=' + item.id
				})
			},
			/* 格式化通知类型 */
			parseNoticeType(item){
				switch(item.type){
					case 1 : 
						return item.userName + '对您的作品进行了评论'
					case 2 :
						return item.userName + '对您的作品进行了收藏'
					case 3 :
						return item.userName + '对您的作品进行了点赞'
					case 4 :
						return item.userName + '关注了您'
					case 5 :
						return item.userName + '取消关注了您'
					case 6 :
						return item.userName + '取消了对您作品的收藏'
					case 7 :
						return item.userName + '取消了对您作品的点赞'
				}
			},
			/* 时间格式化 */
			parseTime(time, pattern) {
			  if (arguments.length === 0 || !time) {
			    return null
			  }
			  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
			  let date
			  if (typeof time === 'object') {
			    date = time
			  } else {
			    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
			      time = parseInt(time)
			    } else if (typeof time === 'string') {
			      time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '');
			    }
			    if ((typeof time === 'number') && (time.toString().length === 10)) {
			      time = time * 1000
			    }
			    date = new Date(time)
			  }
			  const formatObj = {
			    y: date.getFullYear(),
			    m: date.getMonth() + 1,
			    d: date.getDate(),
			    h: date.getHours(),
			    i: date.getMinutes(),
			    s: date.getSeconds(),
			    a: date.getDay()
			  }
			  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
			    let value = formatObj[key]
			    // Note: getDay() returns 0 on Sunday
			    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
			    if (result.length > 0 && value < 10) {
			      value = '0' + value
			    }
			    return value || 0
			  })
			  return time_str
			},
		},
		onReachBottom() {
			// console.log('触底啦~')
			if (this.infoList.length >= this.infoTotal) return;
			this.queryParams.pageNum++;
			this.initNoticeList();
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;
		}
	}
</script>
<style lang="scss" scoped>
	.info-list {
		// padding: 24rpx 22rpx;
		// box-sizing: border-box;
		// background: #FFFFFF;
		// height: 100vh;
		// /* #ifdef H5 */
		// height: calc(100vh - 88rpx);
		// /* #endif */
		.chat-custom-right {
			flex: 1;
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;
		}

		.chat-custom-text {
			font-size: 12px;
			color: #999;
		}
		.isBottom {
			position: relative;
			margin-bottom: 22rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			.isBottom-text {
				font-size: 24rpx;
				color: rgb(186, 186, 186);
				text-align: center;
				margin: 0 20rpx;
			}
			.isBottom-leftLine {
				width: 160rpx;
				height: 4rpx;
				background: #e5e5e5;
			}
			
			.isBottom-rightLine {
				width: 160rpx;
				height: 4rpx;
				background: #e5e5e5;
			}
		}
	}
</style>
