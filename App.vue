<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
			uni.onPushMessage((res) => {
				// this.$refs.message.open()
				console.log("收到推送消息：",res) //监听推送消息
				if(res.data.title == '预约订座通知'){
					uni.navigateTo({
						url: '/pages/orderSeat/myOrder/my-order'
					});
				}
				if(res.data.title == '晒厨艺通知'){
					uni.navigateTo({
						url: '/pages/tabBar/light/mine/mine'
					})
				}
				if(res.data.title == '商家自制通知'){
					uni.navigateTo({
						url: '/pages/merchantsDoself/mine/orders/orders?index=0'
					})
				}
				if(res.data.title == '外卖订单通知'){
					uni.switchTab({
						url: '/pages/tabBar/order/order'
					})
				}
				if(res.data.title == '客服消息通知'){
					console.log("收到推送消息res.data.payload：",res.data.payload) //监听推送消息
					let payload = res.data.payload
					console.log(typeof payload)
					while(payload.indexOf("\\") != -1){
						payload = payload.replace("\\","");
					}
					payload = JSON.parse(payload)
					console.log(payload)
					uni.navigateTo({
						url: '/pages/store/customer-service/customer-service?userId=' + payload.fromUserId
					});
				}
			})
			// #ifdef APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid, function(inf) {
				// console.log(inf.versionCode)
				uni.setStorageSync('versionCode_key', inf.versionCode);
				uni.setStorageSync('version_key', inf.version);
			});
			// #endif
		},
		onShow: function() {
			console.log('App Show')
			// uni.setTabBarBadge({
			// 	index: 1,
			// 	text: '6'
			// })
			// uni.removeTabBarBadge({
			// 	index: 1,
			// })
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	@import '@/common/vue2-editor.css';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';

	// 设置整个项目的背景色
	page {
		background-color: #F5F5F5; // F5F5F5
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}

	::-webkit-scrollbar {
		display: none;
	}

	/* #ifdef MP-WEIXIN || APP-PLUS */
	::-webkit-scrollbar {
		display: none!important;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none!important;
		background: transparent!important;
		color: transparent!important;
	}
	/* #endif */
</style>
