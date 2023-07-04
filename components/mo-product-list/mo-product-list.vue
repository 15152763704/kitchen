<template>
	<view class="pages" v-if="list.length" ref="pages">
		<view class="pages-left">
			<scroll-view class="pages-left-wrap" scroll-y scroll-with-animation :scroll-top="scrollNavTop"
				:show-scrollbar="false" @scroll="scrollLeft">
				<view class="pages-left-li" ref="pagesLeft" :class="{ 'pages-left-li-act': tabIndex == index }"
					v-for="(item, index) in list" :key="index" :data-current="index" @click.stop="tabClick">
					<!-- <uni-icons v-if="item[iconKey]" class="mr10" :type="item[iconKey]" :size="iconSize" :color="iconColor"></uni-icons> -->
					<image :src="item.icon" style="width: 24rpx; height: 24rpx; margin-right: 12rpx;" mode=""></image>
					<text class="pages-left-li-txt">{{ item.name }}</text>
					<view v-if="item[tagKey]" class="pages-tag"><text>{{ item[tagKey] }}</text></view>
				</view>
				<view :style="{height: `${bottom}px`}"></view>
			</scroll-view>
		</view>
		<view class="pages-right">
			<view v-if="titleFixed && list.length" class="pages-right-header fixed">
				<slot name="header" :item="list[subIndex]" />
			</view>
			<scroll-view class="pages-right-wrap" :scroll-y="scrollY" :lower-threshold="lowerThreshold"
				:scroll-top="scrollTop" :scroll-with-animation="animation" @scrolltoupper="scrolltoupper" @scrolltolower="scrolltolower"
				@scroll="scrollChange">
				<view class="pages-right-ul" ref="pagesRight" :id="'page-content'+index" v-for="(item, index) in list"
					:key="index">
					<view class="pages-right-header">
						<slot name="header" :item="item" />
					</view>
					<view class="pages-right-content">
						<slot :item="item" />
					</view>
				</view>
				<view :style="{height: `${bottom}rpx`}"></view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
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
		name: 'mo-product-list',
		props: {
			list: {
				type: Array,
				default: () => []
			},
			titleFixed: {
				type: Boolean,
				default: true
			},
			animation: {
				type: Boolean,
				default: false
			},
			tagKey: {
				type: String,
				default: 'tag'
			},
			iconKey: {
				type: String,
				default: 'icon'
			},
			iconSize: {
				type: Number,
				default: 18
			},
			iconColor: {
				type: String,
				default: '#666'
			},
			lowerThreshold: {
				type: Number,
				default: 50
			},
			bottom: {
				type: Number,
				default: 120
			},
			scrollY: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				tabIndex: 0,
				subIndex: 0,
				old: {
					scrollInto: '',
					scrollTop: 0,
					scrollNavTop: 0,
				},
				scrollInto: '',
				scrollTop: 0,
				scrollNavTop: 0,
				pages: {},
				scrollList: [],
			}
		},
		mounted() {
			setTimeout(() => {
				this.init();
			}, 1000)
		},
		methods: {
			init() {
				this.$nextTick(()=> {
					this.getPagesInfo()
				})
			},
			async getPagesInfo() {
				// #ifdef APP-NVUE || APP-PLUS-NVUE
				const res = await getNvueQuery(this.$refs.pages)
				this.pages.top = Math.round(res.size.top)
				this.pages.height = Math.round(res.size.height)

				let list = []
				for (let i in this.list) {
					const rig = await getNvueQuery(this.$refs.pagesRight[i])
					const lef = await getNvueQuery(this.$refs.pagesLeft[i])
					list.push({
						height: Math.round(rig.size.height),
						leftTop: Math.round(lef.size.top),
						leftHeight: Math.round(lef.size.height),
					})
				}
				this.scrollList = list
				// #endif
				// #ifndef APP-NVUE || APP-PLUS-NVUE
				const selectorQuery = uni.createSelectorQuery().in(this)
				selectorQuery.select('.pages').boundingClientRect(data => {
					if (!data) return
					this.pages.top = Math.round(data.top)
					this.pages.height = Math.round(data.height)
				}).exec()
				selectorQuery.selectAll('.pages-right-ul,.pages-left-li').boundingClientRect(data => {
					if (!data || !data.length) return
					const lef = data.filter(item => !item.id)
					const rig = data.filter(item => !!item.id)
					this.scrollList = rig.map((item, index) => {
						return {
							height: Math.round(item.height),
							leftTop: Math.round(lef[index].top),
							leftHeight: Math.round(lef[index].height)
						}
					})
				}).exec()
				// #endif
			},
			scrolltoupper(e) {
				this.$emit('scrolltoupper', e)
			},
			scrolltolower(e) {
				this.$emit('scrolltolower', e)
				// console.log(5566)
			},
			async scrollChange(e) {
				// await
				const scorllTop = Math.round(e.detail.scrollTop)
				const deltaY = Math.round(e.detail.deltaY || 0)
				this.old.scrollTop = scorllTop;
				if(this.scrollList.length <= 0) {
					this.getPagesInfo();
				}
				for (let i = 0; i < this.scrollList.length; i++) {
					const itemScrollTop = this.scrollList.reduce((t, c, index) => {
						if (index < i) {
							t = t + c.height
						}
						return t
					}, 0)
					if (itemScrollTop <= scorllTop && scorllTop < (itemScrollTop + this.scrollList[i].height)) {
						this.scrollEnd(i, deltaY)
					}
				}
				this.$emit('scroll', e)
			},
			scrollEnd: function(i, deltaY) {
				const isdown = (deltaY < 0 && i <= this.tabIndex) || (deltaY == 0 && i < this.tabIndex)
				const isdownOnly = isdown && i < this.tabIndex
				const isUpOnly = !isdown && (deltaY == 0 && i > this.tabIndex)

				this.subIndex = !isdown && (deltaY == 0) ? this.tabIndex : i
				this.tabIndex = isdownOnly || isUpOnly ? this.tabIndex : i
				this.old.scrollInto = 'page-content' + this.tabIndex
				this.setLeftTop(this.tabIndex)
			},
			scrollLeft(e) {
				const scorllTop = Math.round(e.detail.scrollTop)
				this.old.scrollNavTop = scorllTop
			},
			tabClick(e) {
				const index = e.target.dataset.current || e.currentTarget.dataset.current;
				if (this.tabIndex == index) return
				this.switchTab(index);
				this.$emit('tabClick', true)
			},
			switchTab(index) {
				this.tabIndex = index;
				this.scrollInto = this.old.scrollInto
				this.scrollTop = this.old.scrollTop
				this.scrollNavTop = this.old.scrollNavTop
				this.$nextTick(async () => {
					this.getPagesInfo()
					this.scrollInto = 'page-content' + index
					this.scrollTop = this.scrollList.reduce((t, c, i) => {
						if (index > i) {
							t = t + c.height
						}
						return t
					}, 0)
					this.setLeftTop(index)
				});
			},
			setLeftTop(index) {
				const top = this.scrollList.reduce((t, c, i) => {
					if (index > i) {
						t = t + c.leftHeight
					}
					return t
				}, 0)
				const leftTop = top + this.scrollList[index].leftHeight / 2
				const dy = leftTop - this.pages.height / 2
				this.scrollNavTop = dy > 0 ? dy : 0
			}
		}
	}
</script>
<style lang="scss" scoped>
	$red: #f22;
	$text: #555;
	$act-text: #000;
	$left-bg: #f8f8f8;

	.pages {
		display: flex;
		height: 100%;

		&-left {
			max-width: 240rpx;
			min-width: 80rpx;
			height: 100%;
			background-color: $left-bg;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;

			&-wrap {
				height: 100%;
				flex: 1;
				overflow: hidden;
			}

			&-li {
				// padding: 30rpx 50rpx 30rpx 30rpx;
				padding: 30rpx 40rpx 30rpx 20rpx;
				box-sizing: border-box;
				position: relative;
				color: $text;
				text-align: center;
				transition: color .1s;
				overflow: hidden;
				display: flex;
				align-items: center;
				justify-content: center;

				&-txt {
					font-size: 26rpx;
				}

				&-icon {
					width: 60rpx;
				}

				&::before {
					display: block;
					position: absolute;
					content: '';
					width: 0;
					height: 0;
					left: 0;
					top: 50%;
					opacity: 0;
					background-color: $red;
					transform: translateY(-50%);
					transition: all .2s;
				}

				&-act {
					background-color: #ffffff;
					color: $act-text;
					font-weight: 500;

					&::before {
						opacity: 1;
						width: 6rpx;
						height: 40rpx;
					}
				}
			}
		}

		&-tag {
			position: absolute;
			top: 50%;
			right: 20rpx;
			transform: translateY(calc(-50% - 20rpx));
			padding: 4rpx 10rpx;
			background-color: $red;
			color: #fff;
			font-size: 22rpx;
			border-radius: 30rpx 30rpx;
		}

		&-right {
			flex: 1;
			height: 100%;
			background-color: #FFFFFF;
			box-sizing: border-box;
			position: relative;
			overflow: hidden;
			display: flex;
			flex-direction: column;

			&-wrap {
				width: 100%;
				box-sizing: border-box;
				height: 100%;
				flex: 1;
				overflow: hidden;
			}

			&-ul {
				width: 100%;
			}

			&-header {
				width: 100%;

				&.fixed {
					background-color: #fff;
					position: absolute;
					top: 0;
					left: 0;
					z-index: 9; // 商品标题层级
				}
			}

			&-content {
				width: 100%;
				// display: flex;
				// flex-wrap: wrap;
			}

		}
	}
</style>
