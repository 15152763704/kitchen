<template>
	<view class="change-name">
		<text class="label">用户名：</text>
		<!-- <input type="text" value="abccd" placeholder="" /> -->
		<uni-easyinput :styles="styles" class="uni-mt-5" :maxlength="16" :focus="true" :inputBorder="false" :clearable="false" trim="all" v-model="user.nickName" placeholder="" @input="input"></uni-easyinput>
		<text class="ps">以英文字母或汉字开头，限4-16个字符</text>
		<view class="confirm" @click="confirmName()">
			<text>确认</text>
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
				// value: 'abcde',
				user: {
					nickName: ''
				},
				styles: {
					// fontSize: '20px'
				}
			}
		},
		onLoad: function(option) {
			this.user.nickName = option.nickName
		},
		onShow() {
			
		},
		methods: {
			input(e) {
				// console.log(e)
			},
			confirmName(){
				if (this.user.nickName.length < 4) {
					uni.showToast({ title: '昵称少于4个字符', icon: 'none' });
					return;
				};
				this.editUser(this.user);
			},
			// 修改个人名称
			editUser(user) {
				login.editUser(user).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: '修改成功',
							icon: 'success'
						});
						let pages = getCurrentPages();  //获取跳转的所有页面
						let nowPage = pages[ pages.length - 1]; //当前页
						let prevPage = pages[ pages.length - 2 ]; //上一页
						// prevPage.$vm //上一页的this
						prevPage.$vm.getUser();
						setTimeout(() => {
							uni.navigateBack({
								delta: 1
							})
						}, 1000);
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

		}
	}
</script>
<style lang="scss" scoped>
	.change-name {
		padding: 24rpx 22rpx;
		box-sizing: border-box;
		background: #FFFFFF;
		height: 100vh;
		/* #ifdef H5 */
		height: calc(100vh - 88rpx);
		/* #endif */
		.label {
			font-size: 28rpx;
		}
		.uni-mt-5 {
			border-bottom: 1rpx solid #e3e3e3;
			// font-weight: 500!important;
		}
		.ps {
			font-size: 24rpx;
			margin-top: 16rpx;
			display: inline-block;
		}
		.confirm {
			width: 706rpx;
			height: 66rpx;
			line-height: 66rpx;
			/* #ifdef APP-PLUS */
			height: 60rpx;
			line-height: 60rpx;
			/* #endif */
			text-align: center;
			border-radius: 8rpx;
			// background-image: linear-gradient(to right, #F0C819, #FF9D00);
			background: #F0C819;
			margin-top: 32rpx;
			text {
				font-size: 32rpx;
				// font-weight: 500;
			}
		}
	}
</style>

