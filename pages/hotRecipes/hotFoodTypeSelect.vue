<template>
	<view class="content">
		<view>
			<!-- <view class="">
				<view>最多选 {{ max }} 个</view>
				<view>已选 {{ count }} 个</view>
				<button @click="getCurrentItem">获取当前索引</button>
			</view> -->
			<long-categories
				ref="long"
				:list="list"
				:maxSelected="max"
				@change="change" >
			</long-categories>
		</view>
		<!-- 底部导航 -->
		<foo-bar @toIndex="toIndex" :iidx="1"></foo-bar>
	</view>
</template>



<script>
	import hotRecipes from '@/api/hotRecipes/hotRecipes.js';
	import fooBar from '@/components/fooBarFH/fooBar.vue';
	
	export default {
		components: {
			fooBar
		},
		data() {
			return {
				list: [],
				count: 0,
				max: 10
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			toIndex(index) {
				switch (index) {
					case 0:
						uni.redirectTo({
							url: '/pages/hotRecipes/hot-recipes?ID=5'
						})
						break;
					case 1:
						break;
					default:
						uni.redirectTo({
							url: '/pages/hotRecipes/myCollection/my-collection'
						})
						break;
				}
			},
			init () {
				hotRecipes.treeselect().then(res=>{
					this.list = res.data
				})
				/* for (let i = 0; i < 10; i++) {
					let item = {
						id: `c-${ i }`,
						name: `分类-${ i }`,
						children: [],
						selectedIds: {}
					}
					for (let j = 0; j < 10; j++) {
						item.children.push({
							id: `item-${ i }-${ j }`,
							name: `元素${ j }`,
							disabled: ( j > 2 && j < 5),
							checked: false
						})
					}
					this.list.push(item)
				} */
			},
			change (data) {
				this.count = data.length
				console.log(data)
			},
			getCurrentItem () {
				console.log(this.$refs.long.getActive())
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
