<template>
    <view class="flex inner pb20">
        <image :src="item.image" class="li-img" />
        <view class="flex-1 ml20">
            <view class="f32">
                <text class="li-txt">{{ item.name }}</text>
            </view>
            <view class="gray f26">商品介绍内容商品介绍</view>
            <view class="gray f26">库存：200 件</view>
            <view class="gray f26">进价：8.32 元</view>
        </view>
        <view class="flex-end">
            <view>添加</view>
        </view>
    </view>
</template>

<script>
	export default {
        name:'productItem',
        props:{
            item:{
                type: Object,
                default: ()=>{}
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
		}
	}
</script>

<style lang="scss" scoped>
    .inner{
        padding-left: 30rpx;
        padding-right: 30rpx;
    }
	.flex{ display: flex; }
    .flex-1{ flex: 1; }
    .flex-end{
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
    }
    .pb20{ padding-bottom: 20rpx; }
    .ml20{ margin-left: 20rpx; }
    .gray{ color: #999; }
    .f26{ font-size: 26rpx;}
    .f32{ font-size: 32rpx;}
	.li-img{
		width: 120rpx;
		height: 120rpx;
		border-radius: 10rpx;
	}
	.li-txt{
	}
</style>
