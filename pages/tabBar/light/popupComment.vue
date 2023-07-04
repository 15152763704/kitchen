<template>
	<uni-popup ref="popup" type="bottom" :animation="true" :is-mask-click="false">
		<view class="p-boddy">
			<view class="header">
				<text class="header-text">共{{ data.total }}条评论</text>
				<image class="header-image" style="width: 40rpx;" src="../../../static/baskCooking/sy_close.png"
					mode="widthFix" @click="closePopup" />
			</view>

			<scroll-view style="" :scroll-top="scrollTop" scroll-y="true" class="scroll" @scrolltolower="">
				<view class="comment-li" v-for="(item,i) of data.comments" :key="i">
					<view class="">
						<image class="head-img" :src="item.evaluationAvatar?item.evaluationAvatar:'/static/danxiaochu.png'" mode="widthFix" lazy-load />
					</view>
					<view class="comment-li-content">
						<view class="comment-li-header">
							<text class="name" style="font-size: 24rpx; color: #808080;">{{item.evaluationName}}</text>
						</view>
						<view class="msg" style="position: relative;">
							<text style="font-size: 24rpx;">{{item.content}}</text>
							<text class="date" style="font-size: 20rpx; color: #808080;">{{parseTime(item.createTime)}}</text>
						</view>
						<!-- children -->
						<!-- <view v-if="item.children.length > 1" class="">
							<template v-if="!isSpread">
								<view class="comment-li-child" v-for="(val,index) of item.children.slice(0,1)"
									:key="index">
									<view class="">
										<image class="head-img-child" :src="val.avatarUrl" mode="widthFix" lazy-load />
									</view>
									<view class="comment-li-content-child">
										<view class="comment-li-header">
											<text class="name"
												style="font-size: 24rpx; color: #808080;">{{val.name}}</text>
										</view>
										<view class="msg" style="position: relative;">
											<text style="font-size: 24rpx;">{{val.cont}}</text>
											<text class="date"
												style="font-size: 20rpx; color: #808080;">{{item.created_time}}</text>
											<view @click="spread()" class="" style="margin-top: 20rpx;">
												<text style="color: #EFAC15; font-size: 12px;;">展开18条回复</text>
											</view>
										</view>
									</view>
								</view>
							</template>
							<template v-else>
								<view class="comment-li-child" v-for="(val,index) of item.children" :key="index">
									<view class="">
										<image class="head-img-child" :src="val.avatarUrl" mode="widthFix" lazy-load />
									</view>
									<view class="comment-li-content-child">
										<view class="comment-li-header">
											<text class="name"
												style="font-size: 24rpx; color: #808080;">{{val.name}}</text>
										</view>
										<view class="msg" style="position: relative;">
											<text style="font-size: 24rpx;">{{val.cont}}</text>
											<text class="date"
												style="font-size: 20rpx; color: #808080;">{{item.created_time}}</text>
											<view v-if="index == item.children.length-1" @click="spread()" class="" style="margin-top: 20rpx;">
												<text style="color: #EFAC15; font-size: 12px;;">收起</text>
											</view>
										</view>
									</view>
								</view>
							</template>
						</view> -->
						<!--  -->
						<!-- <view v-else class="comment-li-child" v-for="(val,index) of item.children" :key="index">
							<view class="">
								<image class="head-img-child" :src="val.avatarUrl" mode="widthFix" lazy-load />
							</view>
							<view class="comment-li-content-child">
								<view class="comment-li-header">
									<text class="name" style="font-size: 24rpx; color: #808080;">{{val.name}}</text>
								</view>
								<view class="msg" style="position: relative;">
									<text style="font-size: 24rpx;">{{val.cont}}</text>
									<text class="date"
										style="font-size: 20rpx; color: #808080;">{{item.created_time}}</text>
								</view>
							</view>
						</view> -->
					</view>
				</view>
				<!-- <view class="loading">{{loadingText}}</view> -->
			</scroll-view>

			<view class="comment-input">
				<!-- <input v-model="commentMsg" type="text" placeholder="发点皮的，皮这一下很开心" confirm-type="send"
					@confirm="commentConfirm"> -->
				<view class="input-wrap">
					<!-- <uni-easyinput ref="confirmRefinput" type="text" :styles="{borderColor: 'transparent'}" v-model="data.commentMsg" :focus="evalFocus" @blur="poinblur"
						placeholderStyle="color: #808080; font-size: 24rpx; font-weight: 500" placeholder="说说你的想法吧~" @focus="poingFocus"
						confirm-type="send" @confirm="commentConfirm"></uni-easyinput> -->
						<input confirm-type="done" type="text" :styles="{borderColor: 'transparent'}" v-model="data.commentMsg" placeholder="说说你的想法吧~" 
						placeholder-style="color: #808080; font-size: 12rpx; font-weight: 300" style="height: 74rpx;margin: 0 20rpx;" 
						@confirm="commentConfirm" ref="confirmRefinput" />
				</view>
			</view>

		</view>
	</uni-popup>
</template>

<script>
	import showCooking from '@/api/showCooking/showCooking.js';
	// 测试服务器

	export default {
		data() {
			return {
				showCookingItem: null,
				data: {
					total: 888,
					commentMsg: '',
					comments: [],	
				},
				isSpread: false,
				evalFocus: false,
				
				confirmFirstClick: true,//评论按钮点击是否第一次
				
				scrollTop:0,
			}
		},
		filters: {

		},
		mounted() {
			uni.onWindowResize((res) => {
				plus.key.hideSoftKeybord()
			})
		},
		methods: {
			/* 打开评论列表弹出层 */
			showPopup(item) {
				this.data.total = item.evaluationNum
				this.showCookingItem = item
				this.initEvaluationList(item);
				this.$refs.popup.open();
			},
			/* 加载评论列表信息 */
			initEvaluationList(item){
				showCooking.findEvaluationList({id:item.id}).then((res)=>{
					console.log(res)
					if(res.code == 200){
						this.data.comments = res.rows
					}
				})
			},
			poinblur(){
				let that = this 
				that.$set(that,'evalFocus',false)
				console.log('poinblur  ' + this.evalFocus)
			},
			poingFocus(){
					console.log('poingFocus  ' + this.evalFocus)
			},
			closePopup() {
				// uni.showTabBar()
				let that = this 
				this.$nextTick(() => {
				  that.$set(that,'evalFocus',false)
				  plus.key.hideSoftKeybord()
				  that.$refs.popup.close();
				});
			},
			commentConfirm(e) {
				console.log(e)
				let that = this 
				// this.$nextTick(() => {
					// that.$set(that,'evalFocus',true)
					// setTimeout(()=>{
					// 	that.$set(that,'evalFocus',false)
					// 	console.log('timeout   w  '+ that.evalFocus)
					// 	setTimeout(()=>{
					// 		that.$refs.confirmRefinput.focus()
					// 		console.log('timeout   n  '+ that.evalFocus)
					// 	},100)
					// },100)
					// that.$refs.confirmRefinput.focus()
				// });
				uni.hideKeyboard()
				that.$refs.confirmRefinput.focus()
				// that.$refs.confirmRefinput.blur()
				showCooking.addEvaluation({showCookingId:this.showCookingItem.id,content:this.data.commentMsg}).then((res)=>{
					if(res.code == 200){
						uni.showToast({ title: '评论成功', icon: 'none' });
						that.$set(that.data,'commentMsg','')
						that.initEvaluationList(that.showCookingItem)
					}
				})
			},
			spread() {
				this.isSpread = !this.isSpread;
			},
			
			
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
			
		}
	}
</script>

<style scoped>
	.p-boddy {
		width: 750rpx;
		height: 800rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx 20rpx 0 0;
	}

	.header {
		width: 750rpx;
		height: 92rpx;
		/* background-color: #000000; */
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.header-text {
		font-size: 28rpx;
		font-weight: 500;
	}

	.header-image {
		position: absolute;
		right: 34rpx;
	}

	.scroll {
		width: 750rpx;
		height: 606rpx;
		/* #ifndef APP-NVUE */
		height: 510rpx;
		/* #endif */
	}

	.comment-input {
		width: 750rpx;
		height: 102rpx;
		background-color: #FFFFFF;
		/* position: fixed; */
		/* box-shadow: 0 -6rpx 12rpx 2rpx rgba(0, 0, 0, 0.1607843137254902); */
		/* box-shadow: inset 3px 5px 20px rgb(255, 69, 0); */
		padding: 20rpx 28rpx;
	}

	.input-wrap {
		height: 74rpx;
		background-color: #F5F6F7;
		background-color: rgb(241 241 241);
		border-radius: 38rpx 38rpx 38rpx 38rpx;
	}

	.comment-li {
		/* display: flex; */
		flex-direction: row;
		padding: 30rpx 28rpx;
		box-sizing: border-box;
	}

	.comment-li-child {
		width: 580rpx;
		flex-direction: row;
		padding: 30rpx 0rpx;
		box-sizing: border-box;
		border-bottom: 0.6rpx solid #E3E3E3;
	}

	.head-img {
		width: 62rpx;
	}

	.head-img-child {
		width: 38rpx;
	}

	.comment-li-header {
		margin-bottom: 8rpx;
	}

	.comment-li-content {
		margin-left: 20rpx;
		width: 528rpx;
		position: relative;
	}

	.comment-li-content-child {
		margin-left: 10rpx;
		width: 528rpx;
		position: relative;

	}
</style>
