<!-- 底部导航栏 -->
<!-- 
	## 示例1（自定义背景、颜色、激活颜色，click事件回调）
	<tabbar bgcolor="linear-gradient(to right, #ff007f, #00ff7f)" color="#333" active-color="#29a1f7" fixed @click="handleTabbar" />
	
	## 示例2（自定义Tabs选项）
	// tabs参数：
	path: '/pages/index/index'        自定义跳转页面
	icon: 'icon-home'						iconfont图标 支持icon-xxx和`\ue642`写法，在nvue页面必须写成`\ue642`格式，且使用es6反引号，否则字体图标不显示
	title: '首页'       							标题
	img: 'http://...'   							自定义图片地址
	activeImg: ''       							自定义选中图片
	dock: true          							底部中间凸起按钮
	dockBg: '#f90'      						凸起按钮背景色（不设置则为activeColor）
	iconSize: '30px'    						图标/图片大小
	badge: 18           						小红点数字
	dot: true           							小红点

	<tabbar bgcolor="#5affd1" color="#fff" activeColor="#00f" @click="tabbarClicked"
		:tabs="[
			{
				icon: `icon-face`,
				title: `首页`,
				badge: 6,
			},
			{
				icon: '`icon-tianjia`   //或者：img: 'https://b.yzcdn.cn/vant/logo/weapp.svg',
				title: `发布`,
				dock: true,
				dockBg: `#09f`,
				iconSize: `20px`,
			},
			{
				path: `/pages/ucenter/index`,
				icon: `\ue682`,
				title: `个人中心`,
				dot: true,
			},
		]"
	/>
 -->
<template>
    <view class="ua__tabbar" :class="{'fixed': fixed}">
        <view class="ua__tabbar-wrap flexbox flex-alignc" :style="{'background': bgcolor}">
            <view v-for="(item, index) in tabs" :key="index" class="ua__tabbar-item flexbox flex-col" :class="currentTabIndex == index ? 'on' : ''" @click="switchTabs(index, item)">
                <view v-if="item.icon||item.img" class="ua__tabbar-icon" :class="{'dock': item.dock}">
                    <template v-if="item.dock">
                        <view class="dock-bg flexbox" :style="{'background': item.dockBg ? item.dockBg : activeColor}">
							<text v-if="item.icon" class="iconfont nvuefont" :class="item.icon" :style="{'color': (currentTabIndex == index && !item.dock ? activeColor : color), 'font-size': item.iconSize}">{{item.icon.charAt(1) == '' ? item.icon : ''}}</text>
                            <image v-if="item.img" class="iconimg" :src="currentTabIndex == index && item.activeImg ? item.activeImg : item.img" :style="{'font-size': item.iconSize}" />
                        </view>
                    </template>
                    <template v-else>
						<text v-if="item.icon" class="iconfont nvuefont" :class="item.icon" :style="{'color': (currentTabIndex == index && !item.dock ? activeColor : color), 'font-size': item.iconSize}">{{item.icon.charAt(1) == '' ? item.icon : ''}}</text>
                        <image v-if="item.img" class="iconimg" :src="currentTabIndex == index && item.activeImg ? item.activeImg : item.img" :style="{'font-size': item.iconSize}" />
                    </template>
                    <text v-if="item.badge" class="vui__badge ua__tabbar-icon__badge">{{item.badge}}</text>
                    <text v-if="item.dot" class="vui__badge-dot ua__tabbar-icon__badgeDot"></text>
                </view>
                <view v-if="item.title&&!item.dock" class="ua__tabbar-title">
                    <text class="ua__tabbar-title__text" :style="{'color': (currentTabIndex == index ? activeColor: color)}">{{item.title}}</text>
                    <template v-if="!item.icon&&!item.img">
                        <text v-if="item.badge" class="vui__badge ua__tabbar-title__badge">{{item.badge}}</text>
                        <text v-if="item.dot" class="vui__badge-dot ua__tabbar-title__badgeDot"></text>
                    </template>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
		props: {
			current: { type: [Number, String], default: 0 },
			// 背景色
			bgcolor: { type: String, default: '#fff' },
			// 颜色
			color: { type: String, default: '#9d9ea5' },
			// 激活颜色
			activeColor: { type: String, default: '#f57b15' },
			// 是否固定
			fixed: { type: [Boolean, String], default: false },
			// tab选项
			tabs: {
				type: Array,
				default: () => [
					{
						path: `/pages/index/index`,
						// 在nvue页面，icon字段内容 需写成unicode字符码格式  icon: `\ue642`
						// ******注意：使用es6反引号`` 不能使用单引号''，否则【小程序】会不显示字体图标
						icon: `\ue642`,
						title: `首页`,
						badge: 3,
					},
					{
						path: `/pages/contact/index`,
						icon: `icon-adduser`,
						// title: `朋友`,
						dot: true,
					},
					{
						icon: `icon-publish`,
						// title: `相机`,
						dock: true,
						dockBg: `#face15`,
						iconSize: `60rpx`,
					},
					{
						path: `/pages/video/video`,
						// icon: `icon-xiaoxi`,
						title: `小视频`,
						badge: 15,
					},
					{
						path: `/pages/ucenter/index`,
						// icon: `icon-wo`,
						title: `我`,
						// dot: true,
					}
				]
			},
		},
		data() {
			return {
				currentTabIndex: this.current
			}
		},
		beforeCreate() {
			// #ifdef APP-NVUE
			var domModule = weex.requireModule('dom');
			domModule.addRule('fontFace', {
				'fontFamily': "nvueIcon",
				'src': "url('/static/fonts/iconfont.ttf')"
			});
			// #endif
		},
		created() {
			// uniapp获取当前页面路径
			// 方法1：(App、小程序、H5通用)
			let pages = getCurrentPages() //获取页面栈数组
			let page = pages[pages.length - 1] //获取当前页面对象
			let route = page.route //获取当前页面路由
			//在微信小程序或是app中，通过page.options；如果是H5，则需要page.route.query（H5中的page.options为undefined）
			let options = page.options || page.route.query
			
			// 方法2：(不适应h5和小程序)
			// 官方已经挂载在$mp变量获取，其实和上述方法基本上是一致的，只是方法被挂载在$mp上
			// console.log('///////', this.$mp.page.route)
			
			// let currentRoutePath = this.$route.path  //在app和小程序中无效
			// let currentRoutePath = this.$mp.page.route
			this.selectRoute(route)
		},
		methods: {
			// 匹配当前路由页面
			selectRoute(curPath) {
				console.log('---------------------------------------', curPath)
				curPath = curPath.substr(0, 1) == '/' ? curPath : '/' + curPath
				this.tabs.map((item, index) => {
					if(item.path == curPath) {
						this.currentTabIndex = index
					}
				})
			},
			switchTabs(index, item) {
				if(item.path) {
					// this.$router.push(item.path)
					uni.navigateTo({
						url: item.path
					})
				}else {
					this.currentTabIndex = index
					this.$emit('click', index)
				}
			}
		}
	}
</script>

<style scoped>
	.nvuefont {font-family: nvueIcon;}
	.ua__tabbar {
		/* #ifndef APP-NVUE */
		display:-webkit-box; display:-webkit-flex; display:flex; display:-ms-flexbox;
		/* #endif */
		flex-direction: row;
	}
	.ua__tabbar-wrap {flex: 1; flex-direction: row; background-color: #fff; color: #333; height: 110rpx; position: relative; z-index: 2021;}
	.ua__tabbar.fixed{padding-top: 110rpx;}
	.ua__tabbar.fixed .ua__tabbar-wrap{
		/* #ifdef APP-NVUE */
		left: 0; right: 0;
		/* #endif */
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
		max-width: 750px; position: fixed; bottom: 0;
	}
	.ua__tabbar-item{flex: 1; align-items: center; justify-content: center; height: 110rpx; position: relative;}
	/* 图标 */
	.ua__tabbar-icon{
		/* #ifdef APP-NVUE */
		padding: 0 20rpx;
		/* #endif */
		display: flex; align-items: center; justify-content: center; margin: 0 auto; height: 50rpx; position: relative;
	}
	/* dock菜单 */
	.ua__tabbar-item .dock {
		/* #ifdef APP-NVUE */
		height: 200rpx;
		/* #endif */
		/* #ifndef APP-NVUE */
		position: static;
		/* #endif */
	}
	.ua__tabbar-item .dock .dock-bg {
		background-color: #f57b15; border-radius: 1000rpx; 
		align-items: center; justify-content: center; height: 100rpx; width: 100rpx; 
		/* #ifdef APP-NVUE */
		box-shadow: 0 0 6px rgba(0,0,0,.3);
		/* #endif */
		/* #ifndef APP-NVUE */
		box-shadow: 0 8px 12px rgba(0,0,0,.3);
		position: absolute; top: -50rpx; left: 50%; transform: translateX(-50%);
		/* #endif */
	}
	.ua__tabbar-item .dock .iconfont {color: #fff!important;}
	/* 字体图标/图片 */
	.ua__tabbar-item .iconfont{color:#9d9ea5; font-size: 45rpx; transition: color .3s;}
	.ua__tabbar-item .iconimg{display: block; font-size: 40rpx; height: 1em; width: 1em;}
	.ua__tabbar-item.on .iconfont{color:#f57b15;}
	/* 标题 */
	.ua__tabbar-title{
		/* #ifdef APP-NVUE */
		padding: 0 20rpx;
		/* #endif */
		position: relative; transition: color .3s;
	}
	.ua__tabbar-title__text {color: #9d9ea5; font-size: 30rpx; }
	.ua__tabbar-item.on .ua__tabbar-title__text{color: #f57b15;}
	/* 圆点 */
	.ua__tabbar-icon__badge{
		/* #ifdef APP-NVUE */
		top: 0; right: 0;
		/* #endif */
		/* #ifndef APP-NVUE */
		top: -10rpx; right: -20rpx;
		/* #endif */
		position: absolute;
	}
	.ua__tabbar-icon__badgeDot{
		/* #ifdef APP-NVUE */
		top: 0; right: 10rpx;
		/* #endif */
		/* #ifndef APP-NVUE */
		top:0; right: -10rpx;
		/* #endif */
		position: absolute;
	}
	.ua__tabbar-title__badge{
		/* #ifdef APP-NVUE */
		top: 0; right: 0;
		/* #endif */
		/* #ifndef APP-NVUE */
		top: -20rpx; right: -30rpx;
		/* #endif */
		position: absolute;
	}
	.ua__tabbar-title__badgeDot{
		/* #ifdef APP-NVUE */
		top: 0; right: 10rpx;
		/* #endif */
		/* #ifndef APP-NVUE */
		top: -10rpx; right: -10rpx;
		/* #endif */
		position: absolute;
	}
</style>
