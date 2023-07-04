<template>
	<view class="merchant-in">
		<view class="notice">
			<text>仅可在一个门店中选择主、辅营品类</text>
			<text style="color: #000000;" @click="toHelp">选择帮助</text>
		</view>
		<view class="select-category">
			<view class="sc-tit">
				<text>主营品类(可选择两种品类)</text>
			</view>
			<view class="sc-cont">
				<!-- <scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
									@scrolltolower="lower" @scroll="scroll">
									<view id="demo1" class="scroll-view-item uni-bg-red">A</view>
									<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
									<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
								</scroll-view> -->
				<view class="sc-cont-l">
					<view :class="item.isChecked? 'isActive':''" class="level-1-item" v-for="(item,index) in dataTree"
						:key="index + 1" @click="clickL1(index)">
						<text>{{ item.shopTypeName }}</text>
					</view>
				</view>
				<view class="sc-cont-r">
					<view :class="item.isChecked? 'isActive':''" class="level-2-item" v-for="(item,index) in level2List"
						:key="index + 1" @click="clickL2(index)">
						<text>{{ item.shopTypeName }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="isSelected">
			<text @click="toNext()">选好了</text>
		</view>
	</view>
</template>

<script>
	// import footprintItem from "./footprint-item.vue"
	import shop from '@/api/shop/shop.js'; // 引入api
	import shopApply from '@/api/shopApply/shopApply.js';
	export default {
		components: {
			// footprintItem
		},
		data() {
			return {
				dataTree: [],
				level2List: [],
				selectedList: []
			}
		},
		onLoad: function(option) {
			this.getTreeselect();
			// this.level2List = this.dataTree[0].list
			// console.log(this.level2List)
		},
		methods: {
			toHelp() {
				uni.navigateTo({
					url: './help-page'
					// url: './mIn-details'
				})
			},
			toNext() {
				uni.navigateTo({
					url: './will-open?typeId=' + this.selectedList[0].shopTypeId + '&typeIdSide=' + this.selectedList[1].shopTypeId + '&typeName=' + this.selectedList[0].shopTypeName + '&typeNameSide=' + this.selectedList[1].shopTypeName
				})
				// uni.showModal({
				//     content: JSON.stringify(this.selectedList)
				// })
			},
			clickL1(index) {
				let dataTree = this.dataTree;
				for (var i = 0; i < dataTree.length; i++) {
					dataTree[i].isChecked = false;
				}
				dataTree[index].isChecked = true;
				// console.log(dataTree[index].id)
				this.level2List = dataTree[index].children;
				// console.log(level2List)
			},
			clickL2(index) {
				let that = this;
				if (that.selectedList.length > 1 && !that.level2List[index].isChecked) {
					uni.showToast({
						title: "最多只可选择2项",
						icon: "none"
					})
					return;
				}
				that.$set(that.level2List[index], 'isChecked', !that.level2List[index].isChecked);
				// that.level2List[index].isChecked = !that.level2List[index].isChecked;
				if (that.level2List[index].isChecked) {
					that.selectedList.push(that.level2List[index])
				} else {
					for (var i = 0; i < that.selectedList.length; i++) {
						if (that.selectedList[i].id === that.level2List[index].id) {
							that.selectedList.splice(i, 1)
							return;
						}
					}
				}
				// console.log(that.selectedList);
			},
			// 查询分类树结构列表
			getTreeselect() {
				shop.getTreeselect().then(res => {
					// console.log(res)
					if (res.code == 200) {
						// this.filtrateList = this.filtrateList.concat(res.data)
						// console.log(res.data)
						this.dataTree = res.data;
					} else {
						// uni.hideLoading();
						// console.log(res.msg)
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
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;

		},
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {

		}
		// #endif
	}
</script>

<style lang="scss" scoped>
	.merchant-in {
		width: 750rpx;
		/* #ifdef APP-PLUS */
		height: 100vh;
		/* #endif */
		/* #ifdef H5 */
		height: calc(100vh - 88rpx);

		/* #endif */
		// background-color: red;
		.notice {
			background-color: #FDF8F1;
			padding: 14rpx 32rpx 12rpx 26rpx;
			display: flex;
			justify-content: space-between;

			text {
				color: #F18A25;
				font-size: 24rpx;
			}
		}

		.select-category {
			padding-top: 8rpx;

			.sc-tit {
				width: 750rpx;
				height: 88rpx;
				line-height: 88rpx;
				text-align: center;
				background-color: #FFFFFF;

				text {
					font-size: 30rpx;
				}
			}

			.sc-cont {
				display: flex;
				/* #ifdef APP-PLUS */
				height: calc(100vh - 294rpx);
				/* #endif */
				/* #ifdef H5 */
				height: calc(100vh - 400rpx);
				/* #endif */
				// background-color: red;
				margin-top: 4rpx;

				.sc-cont-l {
					width: 154rpx;
					height: 100%;
					background-color: #F7F8F9;

					.level-1-item {
						width: 100%;
						height: 120rpx;
						text-align: center;
						line-height: 120rpx;

						text {
							font-size: 24rpx;
							color: #808080;
						}
					}
				}

				.sc-cont-r {
					width: 596rpx;
					height: 100%;

					.level-2-item {
						width: 100%;
						height: 120rpx;
						line-height: 120rpx;
						padding-left: 64rpx;
						box-sizing: border-box;

						text {
							font-size: 24rpx;
							color: #808080;
						}
					}
				}

				.isActive {
					background-color: #FFFFFF !important;
				}
			}
		}

		.isSelected {
			width: 750rpx;
			height: 140rpx;
			background-color: #FFFFFF;
			position: fixed;
			bottom: 0;
			padding: 20rpx 32rpx 0 32rpx;
			box-sizing: border-box;

			text {
				display: inline-block;
				width: 100%;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				border-radius: 10rpx;
				background: linear-gradient(to bottom, #FFD417, #FFBD2B);
				font-size: 30rpx;
				font-weight: 500;
			}
		}
	}
</style>
