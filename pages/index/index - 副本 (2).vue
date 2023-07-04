<template>
    <view class="view-fiex">
        
        <view class="flex-1 ovh">
            <mo-product-list 
			open-tag
			:list="list" 
			@scrollEnd="scrollEnd">
                <template v-slot:header="{item}">
                    <view class="title">{{item.name}}</view>
                </template>
                <template v-slot="{item}">
					<productItem v-for="(child, childIndex) in item.list" :key="childIndex" :item="child"></productItem>
                </template>
            </mo-product-list>
        </view>
    </view>
</template>

<script>
	import moProductList from "@/components/mo-product-list/mo-product-list.vue";
	import productItem from './product-item.vue'
	import testJson from './test.json'
	export default {
		components: {
			moProductList,
			productItem
		},
		data() {
			return {
				list: testJson
			}
		},
		onLoad(){
		},
		methods: {
			scrollEnd(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background: #f8f8f8;
	}
	.view-fiex{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: calc(100vh - constant(safe-area-inset-bottom));
		height: calc(100vh - env(safe-area-inset-bottom));
		/* #ifndef MP-WEIXIN */
		height: calc(100vh - 44px - constant(safe-area-inset-bottom));
		height: calc(100vh - 44px - env(safe-area-inset-bottom));
		/*  #endif  */
	}
	.flex-1{ flex: 1;}
	.ovh{ overflow: hidden;}
	.title{ padding: 30rpx; }
	.header{
		padding: 20rpx;
		background: #f8f8f8;
		display: flex;
		align-items: center;
	}
	.innor{
		margin-left: 20rpx;
		margin-right: 20rpx;
	}
</style>
