<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
        <f-sticky :scrollTop="scrollTop" :offsetTop="60" :enable="enable">
            <view class="sticky" @click="toShowModal">请往上滑</view>
        </f-sticky>
		<view class="">
			123
		</view><view class="">
			123
		</view><view class="">
			123
		</view><view class="">
			123
		</view><view class="">
			123
		</view><view class="">
			123
		</view><view class="">
			123
		</view><view class="">
			123
		</view><view class="">
			123
		</view><view class="">
			123
		</view><view class="">
			123
		</view><view class="">
			123
		</view><view class="">
			123
		</view><view class="">
			123
		</view>
        <view style="position: fixed;left: 24rpx;bottom: 100rpx;">
            <view class="enable" @click="enable = false">吸顶失效</view>
            <view class="enable" @click="enable = true">吸顶生效</view>
        </view>
        
	</view>
</template>

<script>
    import fSticky from '@/components/f-sticky/f-sticky.vue';
	export default {
        components: {
            fSticky
        },
		data() {
			return {
				title: 'Hello',
                scrollTop:0,
                enable:true,//是否吸顶
			}
		},
		onLoad() {
            
		},
		methods: {
            toShowModal(){
                uni.navigateTo({
                    url:'/pages/index/showModal'
                })
            },
            onInvalid(){
                this.enable = false
            }
		},
        onPageScroll(e) {
        	this.scrollTop = e.scrollTop;
        },
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
        height: 5000rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
        padding-bottom: 50rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
    .sticky{
        width: 750rpx;
        height: 100rpx;
        background-color: #fe8617;
        color: #fff;
        text-align: center;
        line-height: 100rpx;
    }
    .enable{
        padding-top: 20rpx;
        color: #007AFF;
        font-size: 28rpx;
    }
</style>
