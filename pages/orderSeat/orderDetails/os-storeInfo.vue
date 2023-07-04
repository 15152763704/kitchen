<template>
	<view class="os-storeInfo">
		<!-- 商家 -->
			<!-- 地址 联系 -->
			<view class="pd-left-30">
				<view class="flex flex-items-center flex-space-between">
					<view class="flex flex-items-center">
						<image @click="openLacation()"
							style="width: 28rpx; height: 36rpx; margin-right: 16rpx;"
							src="/static/sj_location2.png" mode=""></image>
						<text class="fs-30" style="white-space: nowrap; width: 530rpx; overflow:hidden; text-overflow:ellipsis">{{ storeInfo.address }}</text>
					</view>
					<view class="flex">
						<view class=""
							style="width: 36rpx; height: 46rpx; border-left: 0.6rpx solid #A7A7A7;"></view>
						<image @click="callPhone('13013728639')"
							style="width: 38.8rpx; height: 37.6rpx; margin-right: 48rpx;"
							src="/static/sj_dh.png" mode=""></image>
					</view>
				</view>
				<scroll-view scroll-x="true"
					style="margin-top: 58rpx; margin-bottom: 40rpx; white-space: nowrap; width: 100%; overflow: hidden;">
					<view class="" style="display: inline-block;" v-for="(item,index) in enviroPicInfoList"
						:key="index" @click="previewImg(1)">
						<image
							style="width: 188rpx; height: 144rpx; border-radius: 8rpx; margin-right: 18rpx;"
							:src="item.filePath" mode=""></image>
					</view>
				</scroll-view>
				<!-- <view class="flex flex-items-center" style="margin-bottom: 30rpx;">
					<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;"
						src="/static/sj_zz.png" mode=""></image>
					<text class="fs-30">查看商家资质</text>
				</view> -->
			</view>
			<view class="" style="width: 750rpx; height: 24rpx; background-color: #F3F4F5;"></view>
			<view class="pd-left-30" style="padding-top: 32rpx;">
				<view class="flex flex-items-center" style="">
					<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;"
						src="/static/sj_zz.png" mode=""></image>
					<text class="fs-30">商家资质</text>
				</view>
				<scroll-view scroll-x="true"
					style="margin-top: 58rpx; margin-bottom: 40rpx; white-space: nowrap; width: 100%; overflow: hidden;">
					<view class="" style="display: inline-block;" v-for="(item,index) in storeZzList"
						:key="index" @click="previewImg(2)">
						<image
							style="width: 188rpx; height: 144rpx; border-radius: 8rpx; margin-right: 18rpx;"
							:src="item.filePath" mode=""></image>
					</view>
				</scroll-view>
			</view>
			<view class="" style="width: 750rpx; height: 24rpx; background-color: #F3F4F5;"></view>
			<!-- 配送信息 -->
			<view class="distribution-info pd-left-30" style="">
				<view class="flex flex-items-center" style="margin-bottom: 40rpx;">
					<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;"
						src="/static/sj_pssj.png" mode=""></image>
					<text
						class="fs-30">营业日期：<text v-if="storeInfo.weekMon || storeInfo.weekTue || storeInfo.weekWen || storeInfo.weekThu || storeInfo.weekFri || storeInfo.weekSat ||storeInfo.weekSun">周</text>{{ storeInfo.weekMon?'一':'' }}{{ storeInfo.weekTue?'、':'' }}{{ storeInfo.weekTue?'二':'' }}{{ storeInfo.weekWen?'、':'' }}{{ storeInfo.weekWen?'三':'' }}{{ storeInfo.weekThu?'、':'' }}{{ storeInfo.weekThu?'四':'' }}{{ storeInfo.weekFri?'、':'' }}{{ storeInfo.weekFri?'五':'' }}{{ storeInfo.weekSat?'、':'' }}{{ storeInfo.weekSat?'六':'' }}{{ storeInfo.weekSun?'、':'' }}{{ storeInfo.weekSun?'日':'' }}</text>
				</view>
				<view class="flex flex-items-center" style="margin-bottom: 40rpx;">
					<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;"
						src="/static/sj_pssj.png" mode=""></image>
					<text
						class="fs-30">营业时间：{{ storeInfo.openTime }}-{{ storeInfo.closeTime }}</text>
				</view>
				<view class="flex flex-items-center" style="margin-bottom: 20rpx;">
					<image style="width: 28rpx; height: 32rpx; margin-right: 16rpx;"
						src="/static/sj_psfw.png" mode=""></image>
					<text class="fs-30">配送服务：{{ storeInfo.distribution? '商家自配': '平台配送' }}</text>
				</view>
			</view>
			<view class="" style="width: 750rpx; height: 24rpx; background-color: #F3F4F5;"></view>
			<!-- 商家公告 -->
			<view class="distribution-info pd-left-30">
				<view class="flex flex-items-center" style="margin-bottom: 40rpx;">
					<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;"
						src="/static/sj_gg.png" mode=""></image>
					<text class="fs-30">商家公告：{{ storeInfo.shopNotice }}</text>
				</view>
				<view class="flex flex-items-center" style="margin-bottom: 40rpx;">
					<view class="flex flex-items-center">
						<image style="width: 28rpx; height: 28rpx; margin-right: 16rpx;"
							src="/static/sj_sjfw.png" mode=""></image>
						<text class="fs-30">商家服务：</text>
					</view>
					<view class="flex flex-items-center" style="margin-right: 20rpx;">
						<image style="width: 26rpx; height: 26rpx; margin-right: 10rpx;"
							src="/static/sj_fp2.png" mode=""></image>
						<text class="fs-30">{{ storeInfo.invoice?'可开发票':'无' }}</text>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
        name:'osStoreInfo',
        props:{
			storeInfo: {
            	type: Object,
            	default(){
            		return {
            			
            		}
            	}
            },
			enviroPicInfoList: {
				type: Array,
				default(){
					return []
				}
			},
			storeZzList: {
				type: Array,
				default(){
					return []
				}
			}
        },
		data() {
			return {
				
			}
		},
		computed:{
			
		},
		created(){
			
		},
		methods: {
			callPhone(phone) {
				uni.makePhoneCall({
					phoneNumber: phone
				});
			},
			openLacation() {
				if (!this.storeInfo.shopLatitude) {
					uni.showToast({
						title: '经纬度为空',
						icon: 'none'
					})
					return;
				}
				uni.openLocation({
					latitude: Number(this.storeInfo.shopLatitude),
					longitude: Number(this.storeInfo.shopLongitude),
					success: function() {
						// console.log('success111');
					}
				})
			},
			previewImg(index) {
				let urls = [];
				switch (index) {
					case 1:
						for (var i = 0; i < this.enviroPicInfoList.length; i++) {
							urls.push(this.enviroPicInfoList[i].filePath);
						}
						break;
					default:
						for (var i = 0; i < this.storeZzList.length; i++) {
							urls.push(this.storeZzList[i].filePath);
						}
						break;
				}
				uni.previewImage({
					urls,
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.flex {
		display: flex;
	}
	
	.flex-space-between {
		justify-content: space-between;
	}
	
	.flex-items-center {
		align-items: center;
	}
.os-storeInfo {
		margin-top: 18rpx;
		background-color: #FFFFFF;
		box-sizing: border-box;
		padding-top: 38rpx;
		padding-bottom: 30rpx;

		// padding: 38rpx 0 30rpx 30rpx;
		.pd-left-30 {
			padding-left: 30rpx;
		}

		.distribution-info {
			// margin-top: 24rpx;
			padding-top: 32rpx;
			padding-bottom: 10rpx;
		}
	}
</style>
