<template>
	<view class="bottom" id="content">
		<view class="tabbar">
			<view class="tabbar__item" :class="{'on':home===0}" @click="toIndex(0)">
				<view v-if="isFrom == '1'" class="">
					<view class="tabbar__svg" id="home">
						<image v-if="home===0" style="width: 40rpx; height: 40rpx;" src="../../static/sjzz_tabbar11.png"
							mode=""></image>
						<image v-else style="width: 40rpx; height: 40rpx;" src="../../static/sjzz_tabbar11a.png"
							mode=""></image>
					</view>
					<view class="tabbar__name">首页</view>
				</view>
				
				<view v-if="isFrom == '2'" class="">
					<view class="tabbar__svg" id="home">
						<image v-if="home===0" style="width: 52rpx; height: 52rpx;"
							src="../../static/sjzz_dp_tabbar1l.png" mode=""></image>
						<image v-else style="width: 52rpx; height: 52rpx;" src="../../static/sjzz_dp_tabbar1.png"
							mode=""></image>
					</view>
					<view class="tabbar__name">商品</view>
				</view>
			</view>
			<view class="tabbar__item" :class="{'on':home===1}" @click="toIndex(1)">
				<!-- <view v-if="isFrom == '1'" class="">
					<view class="tabbar__svg" id="cate">
						<image v-if="home===1" style="width: 46rpx; height: 46rpx;" src="../../static/sjzz_tabbar2a.png"
							mode=""></image>
						<image v-else style="width: 46rpx; height: 46rpx;" src="../../static/sjzz_tabbar2.png" mode="">
						</image>
					</view>
					<view class="tabbar__name">订单</view>
				</view> -->
				<view v-if="isFrom == '1'" class="">
					<view class="tabbar__svg" id="shop">
						<image v-if="home===1" style="width: 50rpx; height: 50rpx;"
							src="../../static/sjzz_dp_tabbar3l.png" mode=""></image>
						<image v-else style="width: 50rpx; height: 50rpx;" src="../../static/sjzz_dp_tabbar3.png"
							mode=""></image>
					</view>
					<view class="tabbar__name">购物车</view>
				</view>
				
				<view v-if="isFrom == '2'">
					<view class="tabbar__svg" id="cate">
						<image v-if="home===1" style="width: 36rpx; height: 36rpx;"
							src="../../static/sjzz_dp_tabbar2l.png" mode=""></image>
						<image v-else style="width: 36rpx; height: 36rpx;" src="../../static/sjzz_dp_tabbar2.png"
							mode=""></image>
					</view>
					<view class="tabbar__name">分类</view>
				</view>
			</view>
			<view class="tabbar__item" :class="{'on':home===2}" @click="toIndex(2)">
				<view v-if="isFrom == '1'" class="">
					<view class="tabbar__svg" id="shop">
						<image v-if="home===2" style="width: 40rpx; height: 40rpx;" src="../../static/sjzz_tabbar3.png"
							mode=""></image>
						<image v-else style="width: 40rpx; height: 40rpx;" src="../../static/sjzz_tabbar3a.png" mode="">
						</image>
					</view>
					<view class="tabbar__name">我的</view>
				</view>

				<view v-if="isFrom == '2'">
					<view class="tabbar__svg" id="shop">
						<image v-if="home===2" style="width: 50rpx; height: 50rpx;"
							src="../../static/sjzz_dp_tabbar3l.png" mode=""></image>
						<image v-else style="width: 50rpx; height: 50rpx;" src="../../static/sjzz_dp_tabbar3.png"
							mode=""></image>
					</view>
					<view class="tabbar__name">购物车</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		props: {
			isFrom: {
				type: String // 1:商家自制跳转，2：商家自制店铺列表跳转(暂时作废)
			},
			zlyd: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				home: 0,
			}
		},
		created() {
			if(this.zlyd) {
				this.home = 1;
			}
		},
		onLoad() {

		},
		methods: {
			toPage(url) {
				uni.navigateTo({
					url
				})
			},
			toIndex(index) {
				this.$emit('toIndex', index)
				this.home = index;
				// console.log(this.zlyd)
			}
		}
	}
</script>

<script module="svgs" lang="renderjs">
	// 	let myChart
	// 	export default {
	// 		mounted() {
	// 			if (typeof window.svgs === 'function') {
	// 				this.initSvgs()
	// 			} else {
	// 				// 动态引入较大类库避免影响页面展示
	// 				const script = document.createElement('script')
	// 				// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
	// 				script.src = 'static/svg.js'
	// 				script.onload = this.initSvgs.bind(this)
	// 				document.head.appendChild(script)
	// 			}
	// 		},
	// 		methods: {
	// 			initSvgs() {
	// 				var draw = SVG().addTo('#content').size(0, 0);
	// 				var symbola = draw.symbol().attr({ viewBox:'0 0 25 25' })
	// 				symbola.path('M9.82,1.5A11.13,11.13,0,0,0,1.5,12.33a11.08,11.08,0,0,0,11,11.17,11.08,11.08,0,0,0,11-11.17A11.16,11.16,0,0,0,16.33,1.86V12.33a3.9,3.9,0,1,1-.08-.78')
	// 				var symbolb = draw.symbol().attr({ viewBox:'0 0 25 25' })
	// 				symbolb.path('M18.16,23.5h2.16a3.19,3.19,0,0,0,3.18-3.18V4.68A3.19,3.19,0,0,0,20.32,1.5H8.81l0,4.19A3.15,3.15,0,1,1,5.69,8.83H1.5V20.32A3.19,3.19,0,0,0,4.68,23.5h8.83s-.49-5.76,4.75-8.38')
	// 				var symbolc = draw.symbol().attr({ viewBox:'0 0 25 25' })
	// 				symbolc.path('M14.6,5.13V4.68A3.19,3.19,0,0,0,11.42,1.5H4.68A3.19,3.19,0,0,0,1.5,4.68V20.32A3.19,3.19,0,0,0,4.68,23.5H20.32a3.19,3.19,0,0,0,3.18-3.18V12.53a3.19,3.19,0,0,0-3.18-3.17H6.77')
	// 				var symbold = draw.symbol().attr({ viewBox:'0 0 25 25' })
	// 				symbold.path('M4,23.5a11,11,0,0,1,17,0')
	// 				symbold.path('M15.66,10.5a3.16,3.16,0,0,1-6.32,0H3.5a9,9,0,1,1,2.87,6.59')
	// 				 //图标颜色渐变

	// 				//home-icon首页图标
	// 				var homesvg = SVG().addTo('#home');
	// 				homesvg.use(symbola).attr({ class:'icon' });
	// 				homesvg.use(symbola).attr({ class:'icon' });
	// 				homesvg.use(symbola).attr({ class:'icon' });
	// 				homesvg.use(symbola).attr({ class:'icon' });
	// 				homesvg.use(symbola).attr({ class:'icon' });

	// 				//cate-icon探索图标
	// 				var catesvg = SVG().addTo('#cate');
	// 				catesvg.use(symbolb).attr({ class:'icon' });
	// 				catesvg.use(symbolb).attr({ class:'icon' });
	// 				catesvg.use(symbolb).attr({ class:'icon' });
	// 				catesvg.use(symbolb).attr({ class:'icon' });
	// 				catesvg.use(symbolb).attr({ class:'icon' });


	// 				//shop-icon消息图标
	// 				var shopsvg = SVG().addTo('#shop');
	// 				shopsvg.use(symbolc).attr({ class:'icon' });
	// 				shopsvg.use(symbolc).attr({ class:'icon' });
	// 				shopsvg.use(symbolc).attr({ class:'icon' });
	// 				shopsvg.use(symbolc).attr({ class:'icon' });
	// 				shopsvg.use(symbolc).attr({ class:'icon' });

	// 				//user-icon我的图标
	// 				var usersvg = SVG().addTo('#user').size(24, 24).attr({ viewBox:'0 0 48 48' }).fill('none');
	// 				usersvg.use(symbold).attr({ class:'icon' });
	// 				usersvg.use(symbold).attr({ class:'icon' });
	// 				usersvg.use(symbold).attr({ class:'icon' });
	// 				usersvg.use(symbold).attr({ class:'icon' });
	// 				usersvg.use(symbold).attr({ class:'icon' });
	// 			}  
	// 		}  
	// 	}  
	// 
</script>


<style scoped lang="scss">
	.bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: $navHeight;
		// height: 88rpx;
		background: #fff;
		z-index: 10;
	}

	.tabbar {
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		height: 110rpx;
		background-color: #FFFFff;

		.tabbar__item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex: 1;
		}
		
		.tabbar__svg {
			text-align: center;
		}
		
		.tabbar__name {
			height: auto;
			padding-top: 2rpx;
			font-size: 20rpx;
			transition: color .3s;
			color: #333333;

		}

		.on {
			.tabbar__name {
				color: #F18A25;
			}

			image {
				animation: heartbeat 1s;
			}
		}
	}

	/**
		 * 心跳动画图标的跳动效果
		 */
	@keyframes heartbeat {
		0% {
			transform: scale(1);
		}

		20% {
			transform: scale(0.8);
		}

		40% {
			transform: scale(1);
		}

		60% {
			transform: scale(0.9);
		}

		80%,
		100% {
			transform: scale(1);
		}
	}




	/*苹果x适配 H5APP*/
	// @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
	// 	.bottom {
	// 		height: $navHeight + $navBoxHeight;
	// 	}
	// }

	/*苹果xs适配 H5APP*/
	// @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
	// 	.bottom {
	// 		height: $navHeight + $navBoxHeight;
	// 	}
	// }

	/*苹果xr适配 H5APP*/
	// @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
	// 	.bottom {
	// 		height: $navHeight + $navBoxHeight;
	// 	}
	// }
</style>
