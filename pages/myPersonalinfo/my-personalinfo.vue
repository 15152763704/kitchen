<template>
	<view class="my-personal">
		<view class="personal-list">
			<view class="personal-item" @click="changeAvatar()">
				<text>头像</text>
				<view class="item-r">
					<!-- <image style="width: 80rpx; height: 80rpx; margin-right: 18rpx;" src="../../static/danxiaochu.png" mode=""></image> -->
					<image @error='imgError' style="width: 80rpx; height: 80rpx; margin-right: 18rpx;" :src="userInfo.avatar?userInfo.avatar:'../../static/danxiaochu.png'" mode=""></image>
					<image style="width: 16rpx;" src="../../static/order/right.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="personal-item" @click="changeName()">
				<text>昵称</text>
				<view class="item-r">
					<text>{{ userInfo.nickName }}</text>
					<image style="width: 16rpx;" src="../../static/order/right.png" mode="widthFix"></image>
				</view>
			</view>	
			<view class="personal-item" @click="editAddress()">
				<text>收货地址</text>
				<view class="item-r">
					<text style="color: #999999;">修改/添加</text>
					<image style="width: 16rpx;" src="../../static/order/right.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="personal-item" @click="cancelAccount()">
				<text>注销账号</text>
				<view class="item-r">
					<image style="width: 16rpx;" src="../../static/order/right.png" mode="widthFix"></image>
				</view>
			</view>
			
			<view class="personal-item">
				<text>消息通知</text>
				<view class="item-r" v-if="checkoutInfo.isShowEle">
					<switch :checked="checkoutInfo.checked" style="transform:scale(0.7)" @change="switchChange" />
				</view>
			</view>
			
			<view class="personal-item" @click="goyszc()">
				<text>隐私政策</text>
				<view class="item-r">
					<image style="width: 16rpx;" src="../../static/order/right.png" mode="widthFix"></image>
				</view>
			</view>
			
			<view class="personal-item" @click="toCheckV" style="border-bottom: none;">
				<text>关于蛋小厨</text>
				<view class="item-r">
					<text>版本{{ version }}</text>
					<image style="width: 16rpx;" src="../../static/order/right.png" mode="widthFix"></image>
				</view>
			</view>

		</view>
		<!-- 退出登录 -->
		<view class="loginout" @click="loginout()">
			<text>退出登录</text>
		</view>
		
		<uni-popup ref="alertDialog" type="dialog" style="z-index: 9999">
			<uni-popup-dialog type="info" cancelText="取消" confirmText="确定" title="" content="退出后将不能查看订单,确定退出吗？"
				@confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
		</uni-popup>
		
		<!-- 提示窗示例 -->
		<uni-popup ref="cancelAccountDialog" type="dialog" style="z-index: 9999" >
			<uni-popup-dialog type="warn" cancelText="取消" confirmText="确定" title="注销账号" content="注销账号后,将删除账号信息,账号所有相关内容不能恢复!"
			 @confirm="cancelAccountConfirm" @close="dialogClose"></uni-popup-dialog>
		</uni-popup>
		
		<!-- 提示窗示例 -->
		<uni-popup ref="putInfoDialog" type="dialog" style="z-index: 9999" >
			<uni-popup-dialog type="warn" cancelText="取消" confirmText="确定" title="消息推送" content="是否关闭消息推送,关闭后将不能接收到应用内消息通知!"
			 @confirm="putInfoConfirm" @close="putInfoClose"></uni-popup-dialog>
		</uni-popup>
					
	</view>
</template>

<script>
	import login from '@/api/login/login.js'
	import userClient from '@/api/userClient.js';
	import * as util from '@/common/util.js'
	var returnIP = util.returnIP;
	
	export default {
		components: {
			
		},
		data() {
			return {
				userInfo: {},
				checkoutInfo: {
					isShowEle: true,
					checked: true,
				}, 
				version: uni.getStorageSync('version_key')
			}
		},
		onLoad: function(option) {
			this.getUser()
			this.initIsChecked()
		},
		onShow() {
			
		},
		methods: {
			toCheckV() {
				uni.navigateTo({
					url: '/pages/myPersonalinfo/check-version'
				})
			},
			goyszc(){
			  uni.navigateTo({
				url: '/pages/myPersonalinfo/yszc_info?url=' + url
				// page.json定义的路径 传url 到webview界面去接收 实现跳转
			  })
			},
			initIsChecked(){
				userClient.getInfo().then(res=>{
					console.log(res)
					this.$set(this.checkoutInfo, "checked", res.data.checked == 0 ? false : true ) 
				})
			},
			switchChange(e) {
				/* console.log('switch1 发生 change 事件，携带值为', e.detail.value) */
				if(e.detail.value === false){
					this.$refs.putInfoDialog.open()
				}else{
					userClient.addPutInfo({checked:1})
				}
			},
			putInfoConfirm(){
				userClient.addPutInfo({checked:0})
			},
			putInfoClose(){
				let that = this 
				this.$set(this.checkoutInfo, "isShowEle", false) //先隐藏switch组件
				this.$set(this.checkoutInfo, "checked", true) //修改checked绑定的变量值
				this.$nextTick(() => {
					setTimeout(() => {
						this.$set(this.checkoutInfo, "isShowEle", true) //显示switch组件
						this.$forceUpdate() //强制更新
					}, 0)
				})
			},
			// 注销账号
			cancelAccount(){
				this.$refs.cancelAccountDialog.open()
			},
			cancelAccountConfirm(){
				userClient.removeUser().then(res=>{
					uni.removeStorageSync('token_key');
					uni.navigateTo({
						url: '/pages/login/login'
					})
				})
			},
			imgError(e) {
				// console.log(e.detail)
			},
			// 退出登录
			loginout() {
				this.$refs.alertDialog.open();
			},
			dialogConfirm() {
				uni.removeStorageSync('token_key');
				let appleOauth = {};  
				plus.oauth.getServices(function(services) {  
				    for (var i in services) {  
				        if (services[i].id == "apple") {  
				            appleOauth = services[i];  
				        }  
				    }  
				    appleOauth.logout(function(e) {  
				        console.log(e)  
				    }, function(e) {  
				        console.log(e)  
				    });  
				});
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			dialogClose() {
				
			},
			// 修改头像
			changeAvatar() {
				let that = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						// console.log(JSON.stringify(res.tempFilePaths));
						uni.uploadFile({
							url: returnIP() + 'system/user/profile/avatar', //仅为示例，非真实的接口地址
							filePath: res.tempFilePaths[0],
							name: 'avatarfile',
							// formData: {
							// 	'fieldName': fieldName,
							// 	'tableName': 'shop_apply'
							// },
							header: {
								Authorization: 'Bearer ' + uni.getStorageSync('token_key'),
							},
							success: (uploadFileRes) => {
								// console.log(123)
								that.getUser();
							}
						});
					}
				});
			},
			// 修改昵称
			changeName() {
				uni.navigateTo({
					url: './change-name?nickName=' + this.userInfo.nickName
				})
			},
			// 修改添加地址
			editAddress() {
				uni.navigateTo({
					url: '../myAddress/my-address'
				})
			},
			// 获取个人信息
			getUser(shopId) {
				login.getUser(shopId).then(res => {
					if (res.code == 200) {
						console.log('res.code===>', res.code)
						this.userInfo = res.data;
						uni.setStorageSync('userInfo_key', res.data);
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
	.my-personal {
		padding: 32rpx 22rpx 0;
		box-sizing: border-box;
		.personal-list {
			width: 706rpx;
			background-color: #FFFFFF;
			border-radius: 16rpx;
			.personal-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 32rpx 28rpx;
				box-sizing: border-box;
				border-bottom: 1rpx solid #e5e5e5;
				.item-r {
					display: flex;
					align-items: center;
					text {
						margin-right: 18rpx;
						font-size: 24rpx;
						display: inline-block;
						width: 360rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						text-align: right;
					}
				}
			}
		}
		.loginout {
			position: fixed;
			bottom: 20rpx;
			width: 706rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			border-radius: 8rpx;
			background-image: linear-gradient(to right, #F0C819, #FF9D00);
			text {
				font-size: 28rpx;
				font-weight: 500;
			}
		}
	}
</style>
