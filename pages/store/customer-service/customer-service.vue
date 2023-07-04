<template>
	<!-- 聊天界面展示https://www.bilibili.com/video/BV1hT4y1P75N?p=22  搭建1和2 -->
	<view class="content">
		<!-- 聊天内容 -->
		<scroll-view class="chat" scroll-y="true" scroll-with-animation="true" :scroll-into-view="scrollToView">
			<view class="chat-main" :style="{paddingBottom:inputh+'px'}">
				<view class="chat-ls" v-for="(item,index) in msg" :key="index" :id="'msg'+ index">
					<view class="chat-time" v-if="item.createTime != ''">{{changeTime(item.createTime)}}</view>
					<view class="msg-m msg-left" v-if="item.sendUserId ==  shoperId">
						<image class="user-img" :src="item.receiveAvator? item.receiveAvator: '/static/danxiaochu.png'"></image>
						<view class="message" v-if="item.type == 1">
							<!-- 文字 -->
							<view class="msg-text">{{item.content}}</view>
						</view>
						<view class="message" v-if="item.type == 2" @tap="previewImg(item.base64)">
							<!-- 图像 -->
							<img :src="item.base64" class="msg-img" mode="widthFix"></img>
						</view>
						<view class="message" v-if="item.type == 3" @tap="playVoice(item.content.voice)">
							<!-- 音频 -->
							<!-- <view class="msg-text voice" :style="{width:item.content.time*4+'rpx'}">
								<image src="/static/logo.png" class="voice-img"></image>
								{{item.content.time}}″
							</view> -->
						</view>
						<view class="message" v-if="item.type == 4" @tap="openLocation(item.content)">
							<!-- 位置 -->
							<!-- <view class="msg-map">
								<view class="map-name">{{item.content.name}}</view>
								<view class="map-address">{{item.content.address}}</view>
								如果map不起作用，就可以直接用一张图片去替代
								<map class="map" :longitude="item.content.longitude" :latitude="item.content.latitude"
									:markers="covers(item.content)"></map>
							</view> -->
						</view>
					</view>
					<view class="msg-m msg-right" v-if="item.sendUserId != shoperId">
						<image class="user-img" :src="item.sendAvator? item.sendAvator: '/static/danxiaochu.png'"></image>
						<view class="message" v-if="item.type == 1">
							<view class="msg-text">{{item.content}}</view>
						</view>
						<view class="message" v-if="item.type == 2" @tap="previewImg(item.base64)">
							<img :src="item.base64" class="msg-img" mode="widthFix"></img>
						</view>
						<view class="message" v-if="item.type == 3" @tap="playVoice(item.content.voice)">
							<!-- 音频 -->
							<!-- <view class="msg-text voice" :style="{width:item.content.time*4+'rpx'}">
								{{item.content.time}}″
								<image src="/static/logo.png" class="voice-img"></image>
							</view> -->
						</view>
						<view class="message" v-if="item.type == 4" @tap="openLocation(item.content)">
							<!-- 位置 -->
							<!-- <view class="msg-map">
								<view class="map-name">{{item.content.name}}</view>
								<view class="map-address">{{item.content.address}}</view>
								<map class="map" :longitude="item.content.longitude" :latitude="item.content.latitude"
									:markers="covers(item.content)"></map>
							</view> -->
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<submit @inputs="inputs" @heights="heights"></submit>
	</view>
</template>

<script>
	import submit from '../../../components/submit/submit.vue';
	import * as util from '../../../common/util.js'
	var dateTime = util.dateTime;
	var dateTime1 = util.dateTime1;
	var spaceTime = util.spaceTime;
	import {
		websocetObj
	} from '../../../common/socket.js';

	import shop from '@/api/shop/shop.js'; // 引入api
	//音频播放
	const innerAudioContext = uni.createInnerAudioContext();

	export default {
		data() {
			return {
				shoperId: null,
				// friendName: "",
				// msg_fuben: [
				// 	{
				// 		"sendUserName": "xpq",
				// 		"receiveUserName": "゛时光い",
				// 		"content": {
				// 			"address": "湖南省岳阳市湘阴县新世纪大道",
				// 			"latitude": 28.68925,
				// 			"longitude": 112.90917,
				// 			"name": "湘阴县政府(新世纪大道北)",
				// 		},
				// 		"createTime": "2022-01-06 12:40:12",
				// 		"updateTime": null,
				// 		"chatmState": 1,
				// 		"type": 3
				// 	},  // 定位类型
				// 	{
				// 		"sendUserName": "゛时光い",
				// 		"receiveUserName": "xpq",
				// 		"content": {
				// 			"voice": "时光匆匆流过",
				// 			"time": 2 //秒
				// 		},
				// 		"createTime": "2022-01-06 12:22:12",
				// 		"updateTime": null,
				// 		"chatmState": 1,
				// 		"type": 2
				// 	},  // 录音类型
				// 	{
				// 		"sendUserName": "xpq",
				// 		"receiveUserName": "xpq",
				// 		"content": "这是第七条未读消息",
				// 		"createTime": "2021-12-19 12:22:03",
				// 		"updateTime": null,
				// 		"chatmState": 1,
				// 		"type": 0
				// 	},  // 文字类型
				// 	{
				// 		"sendUserName": "゛时光い",
				// 		"receiveUserName": "xpq",
				// 		"content": "http://demo.rageframe.com/attachment/images/2021/11/18/image_1637224530_diIlZlmm.jpeg",
				// 		"createTime": "2021-12-19 12:21:54",
				// 		"updateTime": null,
				// 		"chatmState": 1,
				// 		"type": 1
				// 	}  // 图片类型
				// ],
				msg: [],
				imgMsg: [],
				scrollToView: '',
				oldTime: new Date(),
				inputh: '60',


				// Sockets
				socketShow: false,
				webtext: '',
			}
		},
		components: {
			submit,
		},
		onLoad(option) {
			this.shoperId = option.userId;
			// 在onload的时候调用，创建webscoet连接对象，参数分别为：url、获取后端返回数据、监听websocket的链接失败返回的报错、监听链接状态，返回布尔值
			websocetObj.sokcet('ws://192.168.1.196:8080/WebSocketServer/' + uni.getStorageSync('userInfo_key').userId, this
				.getWebsocetData, this.getWebsocetError,
				this.onErrorSucceed)
			// websocetObj.stop();
			this.findChatRecord();

		},
		beforeDestroy() {
			websocetObj.stop();
		},

		methods: {
			// 查询聊天记录
			findChatRecord() {
				shop.findChatRecord(this.shoperId).then(res => {
					if (res.code == 200) {
						// if(res.data.length == 0) return;
						if(res.data.length == 0) {
							setTimeout(() => {
								res.data.push({
									content: '你好，我是客服小' + this.shoperId + '，很高兴为您服务~',
									createTime: new Date(),
									updateTime: new Date(),
									receiveUserId: uni.getStorageSync('userInfo_key').userId,
									sendUserId: this.shoperId,
									type: 1
								})
							}, 100);
						}
						this.msg = res.data;
						// 数组倒叙 主要是应对后端传过来的数据
						for (var i = 0; i < this.msg.length; i++) {
							//时间间隔处理
							if (i < this.msg.length - 1) { //这里表示头部时间还是显示一下
								let t = spaceTime(this.oldTime, this.msg[i].createTime);
								if (t) {
									this.oldTime = t;
								}
								this.msg[i].createTime = t;
							}
							// 获取图片，为下面的预览做准备
							if (this.msg[i].type == 2) {
								this.imgMsg.push(this.msg[i].base64)
							}
						}
						// 跳转到最后一条数据 与前面的:id进行对照
						this.$nextTick(function() {
							this.scrollToView = 'msg' + (this.msg.length - 1)
						})
					} else if (res.code == 401) {

					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
					}
					
				}).catch(err => {
					// uni.hideLoading();
					uni.showToast({
						title: err.msg,
						icon: 'none'
					});
				});
			},
			changeTime(date) {
				return dateTime1(date);
			},
			// 进行图片的预览
			previewImg(e) {
				let index = 0;
				for (let i = 0; i < this.imgMsg.length; i++) {
					if (this.imgMsg[i] == e) {
						index = i;
					}
				}
				console.log("index", index)
				console.log()
				// 预览图片
				uni.previewImage({
					current: index,
					urls: this.imgMsg,
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
			//音频播放
			playVoice(e) {
				// innerAudioContext.src = e;
				// innerAudioContext.onPlay(() => {
				// 	console.log('开始播放');
				// });
			},
			//地图定位
			covers(e) {
				// let map = [{
				// 	latitude: e.latitude,
				// 	longitude: e.longitude,
				// 	iconPath: '/static/logo.png'
				// }]
				// return (map);
			},
			//跳转地图信息
			openLocation(e) {
				// uni.openLocation({
				// 	latitude: e.latitude,
				// 	longitude: e.longitude,
				// 	name: e.name,
				// 	address: e.address,
				// 	success: function() {
				// 		console.log('success');
				// 	}
				// });
			},
			//接受输入内容
			inputs(e) {
				//时间间隔处理
				let data = {
					content: e.message,
					base64: e.base64,
					createTime: new Date(),
					updateTime: new Date(),
					receiveUserId: this.shoperId,
					type: e.type
				};
				// 发送给服务器消息
				websocetObj.sendMsg(JSON.stringify(data));

				this.msg.push(data);
				// 跳转到最后一条数据 与前面的:id进行对照
				this.$nextTick(function() {
					this.scrollToView = 'msg' + (this.msg.length - 1)
				})
				if (e.type == 2) {
					this.imgMsg.push(e.base64);
				}
				// console.log(e)
			},
			//输入框高度
			heights(e) {
				console.log("高度:", e)
				this.inputh = e;
				this.goBottom();
			},
			// 滚动到底部
			goBottom() {
				this.scrollToView = '';
				this.$nextTick(function() {
					this.scrollToView = 'msg' + (this.msg.length - 1)
				})
			},

			//websocet函数回调：返回监听的数据
			getWebsocetData(val) {
				// val = String.fromCharCode.apply(null, new Uint8Array(val)).trim()  如果后端返回数据格式是其他的，可能需要转换一下，比如这个，应该是转Unicode编码
				// console.log('websocet函数回调：', val)
				if (val == '连接成功') return;
				this.msg.push(JSON.parse(val));
				this.goBottom();
			},
			//websocet函数抛错： 返回错误信息 用于用户提示
			getWebsocetError(err) {
				this.socketShow = err.isShow;
				this.webtext = err.messge;
				console.log('websocet函数抛错', this.socketShow);
			},
			//websocet函数成功进入： 监听连接状态，在失败的时候弹窗提示，具体需求看自身情况
			onErrorSucceed(val) {
				this.socketShow = val.isShow;
				console.log('websocet函数成功进入', this.socketShow);
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.content {
		height: 100%;
		background-color: rgba(244, 244, 244, 1);
	}

	.chat {
		height: 100%;

		.chat-main {
			padding-left: 32rpx;
			padding-right: 32rpx;
			padding-top: 20rpx;
			// padding-bottom: 120rpx;  //获取动态高度
			display: flex;
			flex-direction: column;
		}

		.chat-ls {
			.chat-time {
				font-size: 24rpx;
				color: rgba(39, 40, 50, 0.3);
				line-height: 34rpx;
				padding: 10rpx 0rpx;
				text-align: center;
			}

			.msg-m {
				display: flex;
				padding: 20rpx 0;

				.user-img {
					flex: none;
					width: 80rpx;
					height: 80rpx;
					border-radius: 20rpx;
				}

				.message {
					flex: none;
					max-width: 480rpx;
				}

				.msg-text {
					font-size: 32rpx;
					color: rgba(39, 40, 50, 1);
					line-height: 44rpx;
					padding: 18rpx 24rpx;
				}

				.msg-img {
					max-width: 400rpx;
					max-height: 400rpx;
					border-radius: 20rpx;
				}

				.msg-map {
					background: #fff;
					width: 464rpx;
					height: 284rpx;
					overflow: hidden;

					.map-name {
						font-size: 32rpx;
						color: rgba(39, 40, 50, 1);
						line-height: 44rpx;
						padding: 18rpx 24rpx 0 24rpx;
						//下面四行是单行文字的样式
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						overflow: hidden;
					}

					.map-address {
						font-size: 24rpx;
						color: rgba(39, 40, 50, 0.4);
						padding: 0 24rpx;
						//下面四行是单行文字的样式
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						overflow: hidden;
					}

					.map {
						padding-top: 8rpx;
						width: 464rpx;
						height: 190rpx;
					}
				}

				.voice {
					// width: 200rpx;
					min-width: 100rpx;
					max-width: 400rpx;
				}

				.voice-img {
					width: 28rpx;
					height: 36rpx;
				}
			}

			.msg-left {
				flex-direction: row;

				.msg-text {
					margin-left: 16rpx;
					background-color: #fff;
					border-radius: 0rpx 20rpx 20rpx 20rpx;
				}

				.msg-img {
					margin-left: 16rpx;
				}

				.msg-map {
					margin-left: 16rpx;
					border-radius: 0rpx 20rpx 20rpx 20rpx;
				}

				.voice {
					text-align: right;
				}

				.voice-img {
					float: left;
					transform: rotate(180deg);
					width: 28rpx;
					height: 36rpx;
					padding-bottom: 4rpx;
				}
			}

			.msg-right {
				flex-direction: row-reverse;

				.msg-text {
					margin-right: 16rpx;
					background-color: rgba(255, 228, 49, 0.8);
					border-radius: 20rpx 0rpx 20rpx 20rpx;
				}

				.msg-img {
					margin-right: 16rpx;
				}

				.msg-map {
					margin-left: 16rpx;
					border-radius: 20rpx 0rpx 20rpx 20rpx;
				}

				.voice {
					text-align: left;

				}

				.voice-img {
					float: right;
					padding: 4rpx;
					width: 28rpx;
					height: 36rpx;
				}
			}

		}
	}
</style>
