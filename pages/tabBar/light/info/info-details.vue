<template>
	<view class="info-details">
		<view class="info-item" >
			<image style="width: 80rpx; height: 80rpx;" 
			:src="noticeItem.userAvatar?noticeItem.userAvatar:'/static/danxiaochu.png'" mode=""></image>
			<view class="content">
				<text class="">{{parseNoticeType(noticeItem)}}~</text>
				<image v-if="noticeItem.showCookingCutImageUrl" style="width: 240rpx; height: 150rpx; margin-top: 80rpx;" :src="noticeItem.showCookingCutImageUrl" mode=""></image>
				<text class="time">{{parseTime(noticeItem.createTime)}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	// import login from '@/api/login/login.js'
	import showCooking from '@/api/showCooking/showCooking.js';
	
	export default {
		components: {
			
		},
		data() {
			return {
				noticeItem: {
				},
			}
		},
		onLoad: function(option) {
			this.noticeItem.id = option.id 
			this.initNoticeData();
		},
		onShow() {

		},
		methods: {
			/* 初始化加载通知详情 */
			initNoticeData(){
				showCooking.findNoticeById({id:this.noticeItem.id}).then((res)=>{
					if(res.code == 200 ){
						this.noticeItem = res.data
						uni.setNavigationBarTitle({
							title: res.data.showCookingName
						});
					}
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
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;
		}
	}
</script>
<style lang="scss" scoped>
	.info-details {
		padding: 32rpx;
		box-sizing: border-box;
		.info-item {
			display: flex;
			margin-bottom: 40rpx;
			.content {
				flex: 1;
				// height: 400rpx;
				background-color: #FFFFFF;
				margin-left: 20rpx;
				border-radius: 20rpx;
				padding: 22rpx;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				.time {
					font-size: 24rpx;
					color: #999999;
					margin-top: 30rpx;
				}
			}
		}
	}
</style>
