<template>
	<view class="add-notes">
		<text @click="finish()">完成</text>
		<view class="textarea">
			<uni-easyinput :focus="true" :placeholderStyle="placeholderStyle" :maxlength="50" class="input" :inputBorder="false" type="textarea" @input="descInput" v-model="notesValue" placeholder="在此处添加个人口味偏号"></uni-easyinput>
			<view class="num"><text style="color: #808080;">{{ notesValue.length }}</text>/50</view>
		</view> 
		<view class="quick-tags">
			<view class="top">
				<text class="name">快捷标签</text>
				<view class="action" @click="editOrSave()">
					<image style="width: 28rpx; margin-right: 20rpx;" src="/static/shopCar/bz_edit.png" mode="widthFix"></image>
					<text>{{ !isEdit? '编辑': '保存' }}</text>
				</view>
			</view>
			<view class="cont">
				<view class="tags-item" v-for="(item,index) in quickTags" :key="index" @click="selectTag(item)">
					<text>{{ item.name }}</text>
					<image v-if="isEdit" @click.stop="deleteTag(index)" style="width: 28rpx;" src="/static/shopCar/delete_fill.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
			// goodsList
		},
		data() {
			return {
				shopIndex: null,
				notesValue: "",
				placeholderStyle: 'font-size: 28rpx; font-weight: 400;',
				quickTags: [
					{
						name: '帮忙洗一下，谢谢'
					},
					{
						name: '不要辣，多点肉，谢谢！'
					},
					{
						name: '放楼下，我自己拿'
					}
				],
				isEdit: false
			}
		},
		onLoad: function(option) {
			this.shopIndex = option.index
		},
		methods: {
			descInput(e) {
				// console.log(e.detail.value.length, '输入的字数')
			},
			deleteTag(index) {
				// uni.showToast({
				// 	title: '标签' + (index+1),
				// 	icon: 'none'
				// })
				this.quickTags.splice(index, 1);
			},
			editOrSave() {
				this.isEdit = !this.isEdit;
				if(!this.isEdit) {
					uni.showToast({
						title: '保存标签成功~',
						icon: 'none'
					})
				}
			},
			selectTag(item) {
				this.notesValue = item.name;
			},
			finish() {
				let pages = getCurrentPages();  // 获取跳转的所有页面
				let nowPage = pages[ pages.length - 1]; // 当前页
				let prevPage = pages[ pages.length - 2 ]; // 上一页
				// prevPage.$vm // 上一页的this
				prevPage.$vm.orderList[this.shopIndex].userCarsVo.temp_remark = this.notesValue;
				uni.navigateBack({
					delta: 1
				})
			}
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;
		},
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {
			// console.log(e[0].text)
			// uni.showModal({
			//     content: JSON.stringify(this.notesValue)
			// })
			let pages = getCurrentPages();  //获取跳转的所有页面
			let nowPage = pages[ pages.length - 1]; //当前页
			let prevPage = pages[ pages.length - 2 ]; //上一页
			// prevPage.$vm //上一页的this
			prevPage.$vm.orderList[this.shopIndex].userCarsVo.temp_remark = this.notesValue;
			uni.navigateBack({
				delta: 1
			})
			// let webView = this.$mp.page.$getAppWebview();
			// webView.setTitleNViewButtonStyle(0, {
			// 	text: '',
			// });
		}
		// #endif
	}
</script>
<style>
	
</style>
<style lang="scss" scoped>
.add-notes {
	height: 100vh;
	background-color: #FFFFFF;
	/* #ifdef H5 */
	height: calc(100vh - 44px);
	/* #endif */
	padding: 18rpx 22rpx;
	box-sizing: border-box;
	.textarea {
		background-color: #FAFAFA;
		padding: 0 12rpx;
		border-radius: 12rpx;
		// height: 286rpx;
		.input {
			height: 100%;
		}
		.num {
			text-align: right;
			font-size: 28rpx;
		}
	}
	.quick-tags {
		margin-top: 24rpx;
		.top {
			color: #808080;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.name {
				
			}
			.action {
				display: flex;
				align-items: center;
			}
		}
		.cont {
			padding-top: 22rpx;
			.tags-item {
				font-size: 24rpx;
				border: 1rpx solid #BABABA;
				display: inline-block;
				padding: 6rpx 16rpx;
				border-radius: 10rpx;
				margin-right: 16rpx;
				margin-bottom: 24rpx;
				position: relative;
				image {
					position: absolute;
					top: -12rpx;
				}
			}
		}
	}
}
</style>
