<template>
	<view class="content">
		<view>
			<shoptype-categories
				ref="long"
				:list="list"
				:maxSelected="max"
				@change="change" >
			</shoptype-categories>
		</view>
	</view>
</template>



<script>
	import shop from '@/api/shop/shop.js'; // 引入api
	
	export default {
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
				shop.getTreeselect().then(res=>{
					for (var i = 0; i < res.data.length; i++) {
						this.list.push(res.data[i])
					}
				})
				shop.getConstitutionIngredients().then(res=>{
					console.log(res)
					let constitution = {
						children: [],
						shopTypeId: 'sytz001',
						shopTypeName :'适用体质',
					}
					for (var i = 0; i < res.rows.length; i++) {
						constitution.children.push({
							shopTypeName :res.rows[i].constitution,
							shopTypeId :'sytz001'+res.rows[i].id,
						})
					}
					this.list.push(constitution)
					console.log(this.list)
				})
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
