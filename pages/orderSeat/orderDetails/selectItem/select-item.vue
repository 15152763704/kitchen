<template>
	<view class="">
		<scroll-view scroll-x="true" class="" style="white-space: nowrap;">
			<template v-for="(item,index) in selectList">
				<view class="select-item" :class="item.state?'selected':''" @click="clickItem(index)">
				    <text>{{ item.name }}</text>
				</view>
			</template>
		</scroll-view>
	</view>
</template>

<script>
	export default {
        name:'selectItem',
        props:{
            selectList:{
                type: Array,
                // default: ()=>{}
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
			clickItem(type) {
				let _this = this;
				let selectList = _this.selectList;
				for (var i = 0; i < selectList.length; i++) {
					selectList[i].state = false;
				}
				this.selectList[type].state = true;
				this.$emit('clickItem', this.selectList, type);
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
	.select-item {
		width: 132rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		border-radius: 42rpx;
		// background-color: #18BC37;
		font-size: 28rpx;
		display: inline-block;
	}
	.selected {
		background: linear-gradient(to right, #F0C819, #FF9D00);
	}
</style>
