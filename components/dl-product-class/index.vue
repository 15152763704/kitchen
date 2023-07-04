<template>
	<view class="pages" :style="{ height: screenHeight + 'px' }" v-if="viewModel">
		<view class="pages-left" :style="{ height: screenHeight + 'px' }">
			<scroll-view :style="{ height: screenHeight + 'px' }" scroll-y class="pages-left" :show-scrollbar="false">
				<view class="pages-left-li" v-for="(item, index) in viewModel" :key="index" @click="tabClick(item, index)">
					<text class="pages-left-li-txt" :class="{ 'pages-left-li-act': tabIndex == index }">{{ item.name }}</text>
				</view>
			</scroll-view>
		</view>
		<view class="pages-right">
			<scroll-view :style="{ height: screenHeight + 'px' }" scroll-y class="pages-right" :scroll-top="scrollTop" scroll-with-animation @scroll="scrollChange">
				<view class="pages-right-ul" ref="pagesRight" v-for="(item, index) in viewModel" :key="index">
					<text class="pages-right-head">{{ item.name }}</text>
					<view class="pages-right-box">
						<view class="pages-right-li" :style="'width:' + 530 / 3 + 'rpx;'" v-for="(child, childIndex) in item.list" :key="childIndex">
							<image :src="child.image" class="pages-right-li-img" />
							<text class="pages-right-li-txt">{{ child.name }}</text>
						</view>
					</view>
				</view>
				<view :style="{ height: scrollHeight + 'px' }"></view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	import testJson from './test.json'
	// #ifdef APP-PLUS
	const dom = weex.requireModule('dom')
	// #endif
	/**
		* 兼容 nvue 获取节点信息
		* */
	function getNvueQuery(type) {
		return new Promise(resolve => {
			dom.getComponentRect(type, option => resolve(option))
		})
	}
	export default {
		data() {
			return {
				screenHeight: 0,
				tabIndex: 0,
				scrollTop: 0,
				scrollHeight: 0, // 计算末尾列表高度
				scrollList: [], // 记录右侧滚动距离
				viewModel: null,
				timer: null // scroll 滚动倒计时
			}
		},
		created() {
			this.screenHeight = uni.getSystemInfoSync().windowHeight
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				this.viewModel = testJson
				setTimeout(() => {
					this.getRightQuery()
				}, 100)
			},
			async getRightQuery() {
				// #ifdef APP-NVUE || APP-PLUS-NVUE
				let list = []
				for (let i in this.viewModel) {
					let result = await getNvueQuery(this.$refs.pagesRight[i])
					list.push({
						top: Math.round(result.size.top),
						height: Math.round(result.size.height)
					})
				}
				this.scrollList = list
				// #endif
				// #ifndef APP-NVUE || APP-PLUS-NVUE
				var selectorQuery = uni.createSelectorQuery()
				selectorQuery.selectAll('.pages-right-ul').boundingClientRect(data => {
					this.scrollList = data.map(item => {
						return {
							top: Math.round(item.top),
							height: Math.round(item.height)
						}
					})
				}).exec()
				// #endif
				let listHeight = this.scrollList[this.scrollList.length - 1].height
				this.scrollHeight = this.screenHeight - listHeight
			},
			tabClick(item, index) {
				this.scrollTop = this.scrollList[index].top
			},
			scrollChange(ev) {
				var scorllTop = Math.round(ev.detail.scrollTop)
				for (var i = 0; i < this.scrollList.length; i++) {
					if (this.scrollList[i].top <= scorllTop && scorllTop < (this.scrollList[i].top + this.scrollList[i].height)) {
						this.tabIndex = i
					}
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.pages {
		display: flex;
		&-left {
			width: 220rpx;
			background-color: #f6f7f8;
			box-sizing: border-box;
			&-li {
				height: 95rpx;
				box-sizing: border-box;
				padding-left: 30rpx;
				&-txt {
					line-height: 95rpx;
					text-align: center;
					color: #343434;
					font-size: 30rpx;
				}

				&-act {
					color: #007AFF;
					background-color: #ffffff;
				}
			}
		}

		&-right {
			width: 530rpx;
			background-color: #FFFFFF;
			box-sizing: border-box;

			&-ul {
				width: 530rpx;
			}

			&-head {
				font-size: 28rpx;
				padding: 20rpx 30rpx;
				font-weight: bold;
			}

			&-box {
				display: flex;
				flex-wrap: wrap;
			}

			&-li {
				height: 200rpx;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				&-img {
					width: 120rpx;
					height: 120rpx;
				}

				&-txt {
					font-size: 28rpx;
				}
			}
		}
	}
</style>