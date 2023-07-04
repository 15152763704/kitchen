<template>
    <view class="store-list">
        <view class="store-list-item" @click="clickDz(item)" v-for="(item,index) in shopList" :key="index">
        	<view class="item-img">
        		<image :src="item.shopImgUrl" mode=""></image>
        	</view>
			<view class="item-info">
				<view class="titie">
					<text>{{ item.name }}</text>
				</view>
				<view class="flex flex-space-between flex-align-center">
					<view class="">
						<view class="perSale">
							<uni-rate size="10" :value="item.score" readonly/>
							<text style="margin-left: 20rpx;">人均￥{{ item.perCapita?Number(item.perCapita).toFixed(0): 0 }}</text>
						</view>
						<view class="typeALocation">
							<text style="width: 140rpx; display: inline-block;">{{ item.shopTypeTwoLabel }}</text>
							<!-- <text style="margin-right: 22rpx;">虹桥坊</text> -->
							<text>距离{{ (item.distance>1000)?((item.distance/1000).toFixed(1) + 'km'):(item.distance + 'm') }}</text>
						</view>
					</view>
					<view class="dz-btn">
						订座
					</view>
				</view>
				<view class="flex flex-align-center">
					<image style="width: 22rpx; height: 22rpx;" src="../../../static/dz_clock.png" mode=""></image>
					<text style="font-size: 20rpx; color: #808080; margin-left: 10rpx;">可预约时段 {{ (item.canUseTimeStart?item.canUseTimeStart: '') + '-' + (item.canUseTimeEnd?item.canUseTimeEnd:'') }}</text>
				</view>
			</view>
        </view>
    </view>
</template>

<script>
	export default {
        name:'storeList',
        props:{
            // item:{
            //     type: Object,
            //     default: ()=>{}
            // }
			shopList: {
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
			clickDz(type) {
				this.$emit('clickDz', type);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.flex {
		display: flex;
	}
	.flex-align-center {
		align-items: center;
	}
	.flex-space-between {
		justify-content: space-between;
	}
	.flex-justify-center {
		justify-content: center;
	}
	.store-list {
		
	}
    .store-list-item {
		box-sizing: border-box;
		padding-top: 40rpx;
		padding-bottom: 38rpx;
		padding-left: 28rpx;
		padding-right: 28rpx;
		border-bottom: 2rpx solid #E3E3E3;
		display: flex;
		justify-content: space-between;
		
		.item-img {
			width: 148rpx;
			height: 148rpx;
			image {
				width: 148rpx;
				height: 148rpx;
				border-radius: 10rpx;
			}
		}
		.item-info {
			width: 526rpx;
			.titie {
				font-size: 32rpx;
				font-weight: 600;
			}
			.perSale {
				color: #808080;
				font-size: 20rpx;
				margin-top: 8rpx;
				margin-bottom: 10rpx;
				display: flex;
				align-items: center;
			}
			.typeALocation {
				color: #808080;
				font-size: 20rpx;
				margin-bottom: 20rpx;
			}
			.dz-btn {
				width: 128rpx;
				height: 50rpx;
				box-sizing: border-box;
				text-align: center;
				line-height: 50rpx;
				color: #FFFFFF;
				background: linear-gradient(to right, #F0C819, #FF9D00);
				font-size: 24rpx;
				border-radius: 2rpx;
			}
		}
	}
	.store-list-item:last-child {
		// border-bottom: none;
	}
</style>
