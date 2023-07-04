<template>
	<view>
		<view class="" style="width: 750rpx; height: 300rpx;">
			
		</view>
		<view class="sticky-box">
			<view class="" style="width: 750rpx; height: 120rpx; ">
				
			</view>
			<scroll-view class="nav-scroll " scroll-with-animation>
				<view class="nav uni-nav">
					<view class="nav-item" :class="swiperIndex == index ? 'nav-item-act' : ''" :key="index"
						v-for="(item, index) in list" @click="taggleNav(index)">
						{{ item.title }}
					</view>
					<view class="nav-line" :style="style"></view>
				</view>
			</scroll-view>
		</view>
		
		<view class="swiper">
			<swiper :current="swiperIndex" :duration="300" class="swiper-1" easing-function="linear"
				@change="swiperChange">
				<swiper-item v-for="(item, index) in list" :key="index">
					<long-categories
						ref="long"
						:list="list"
						:maxSelected="max"
						@change="change"
					>
					</long-categories>
						
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import dlProductClass from "../../components/dl-product-class/index.vue"
		
	export default {
		components:{dlProductClass},
		data() {
			return {
				swiperIndex: 0, //当前的swiperindex
				navItemWidth: '', //选中下划线的宽度
				navItemLeft: 0, //选中下划线的显示位置
				scrollToLeft: 0, //scrollview需要滚动的距离
				navInfos: [], //所有navitem的节点信息
				parentLeft: 0, //nav盒子的节点信息
				componentWidth: 0, //nav盒子的宽度
				list: [
					{ title: '首页', content: ['首页-1', '首页-2', '首页-3', '首页-4'] },
					{ title: '测试', content: ['测试-1', '测试-2', '测试-3', '测试-4', '测试-5'] },
					{ title: '我的', content: ['123'] },
				],
				refreStatus: false,
				
				list: [],
				count: 0,
				max: 10
			};
		},
		computed: {
			style() {
				return `width:${this.navItemWidth}px; left:${this.navItemLeft}px`;
			}
		},
		mounted() {
			this.init();
			this.init1()
		},
		methods: {
			init1 () {
				for (let i = 0; i < 10; i++) {
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
				}
			},
			change (data) {
				this.count = data.length
				console.log(data)
			},
			getCurrentItem () {
				console.log(this.$refs.long.getActive())
			},
			// 获取dom信息
			init() {
				const query = uni.createSelectorQuery().in(this);
				query.select('.uni-nav').fields({ rect: true, size: true }, res => {
					this.parentLeft = res.left;
					this.componentWidth = res.width;
					console.log('res==>', res);
				});
				query.selectAll('.nav-item').fields({ rect: true, size: true }, data => {
					data.forEach((item, index) => {
						if (index == 0) {
							this.navItemWidth = item.width;
							this.navItemLeft = item.left;
						}
						this.navInfos.push({ width: item.width, left: item.left });
					});
				});
				query.exec();
			},
			// 点击导航切换swiper
			taggleNav(val) {
				this.swiperIndex = val;
			},
			// 滚动tabs以及移动下划线
			scrollDom() {
				let info = this.navInfos[this.swiperIndex];
				let offsetLeft = info.left - this.parentLeft;
				let scrollLeft = offsetLeft - (this.componentWidth - info.width) / 2;
				this.scrollToLeft = scrollLeft < 0 ? 0 : scrollLeft;
				this.navItemLeft = this.navInfos[this.swiperIndex].left;
				setTimeout(() => {
					this.navItemWidth = info.width;
				}, 50);
			},
			// swiper的index变动
			swiperChange(e) {
				this.swiperIndex = e.detail.current;
				this.scrollDom();
				// this.$emit('currentIndex', this.swiperIndex);
			},
			
			
			
			
		}
	};
</script>

<style lang="scss" scoped>
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
	.sticky-box {
		/* #ifndef APP-PLUS-NVUE */
		/* display: flex; */
		position: -webkit-sticky;
		/* #endif */
		position: sticky;
		/* top: var(--window-top); */
		top: calc(var(--window-top));    /* 增加宽度 */
		z-index: 9999999;
		background-color: #FFFFFF;
		// height: 44px;
	}
	.sticky-box2 {
		/* #ifndef APP-PLUS-NVUE */
		/* display: flex; */
		position: -webkit-sticky;
		/* #endif */
		position: sticky;
		/* top: var(--window-top); */
		top: calc(var(--window-top));    /* 增加宽度 */
		z-index: 9999999;
	}
	.nav-item {
		display: inline-block;
		margin: 0 16upx;
		text-align: center;
		transition: color 0.3s ease;
	}

	.nav {
		white-space: nowrap;
		position: relative;
		height: 80upx;
		padding: 20upx 0;
	}

	/* #ifndef APP-NVUE */
	::-webkit-scrollbar {
		display: none;
	}

	/* #endif */

	/* #ifdef H5 */
	// 通过样式穿透，隐藏H5下，scroll-view下的滚动条
	scroll-view ::v-deep ::-webkit-scrollbar {
		display: none;
	}

	/* #endif */

	.nav-item-act {
		color: pink;
		font-weight: bolder;
	}

	.nav-line {
		position: absolute;
		bottom: 40rpx;
		height: 4upx;
		border-radius: 10upx;
		background-color: pink;
		transition: left 0.3s ease;
	}

	swiper {
		height: calc(100vh - 80upx);
	}

	swiper-item {
		text-align: center;
		color: #000;
		position: relative;
		background-color: skyblue;
		color: #fff;
	}

	.swiper-item {
		overflow-y: scroll;
	}

	.swiper-item-list {
		height: 200upx;
		border-bottom: 2upx solid pink;
		line-height: 200upx;
	}

	.swiper-scroll {
		height: 100%;
	}
</style>
