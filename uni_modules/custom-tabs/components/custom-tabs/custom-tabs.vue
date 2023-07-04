<template>
	<view :class="['tab',{'tab-fixed':fixed}]">
		<scroll-view :class="['tab-bar',{'tab-bar-center':tabCenter}]" scroll-x="true" :scroll-into-view="scrollId" scroll-with-animation>
			<view v-for="(item,index) in tabList" class="tab-bar-item" :class="{'active':tabIndex==index}" :id="`tab_${index}`" :style="[{'padding':`0 ${tabSpacing}rpx`},tabIndex==index?activeTextStyle:defaultTextStyle]" :key="index" @click="putChange(item.name,index);tabChange(index)">
				<text class="txt">{{item.label}}</text>
				<text class="active-line" v-if="tabIndex==index" :style="[activeLineStyle]"></text>
			</view>
		</scroll-view>
		<view class="tab-cont" :style="{'transform':`translateX(${translateX}%)`,'transition':`transform ${d/1000}s ease-in-out`}">
			<slot></slot>
		</view>
	</view>
</template>
<script setup>
	// #ifdef VUE3
	// import { reactive, ref, watch } from 'vue';
	// const emits = defineEmits(['change']);
	// const data_props = defineProps({
	// 	value: { // 默认选中项
	// 		type: [Number, String],
	// 		default: 0
	// 	},
	// 	tabSpacing: { // tabbar的间距
	// 		type: [Number, String],
	// 		default: 20
	// 	},
	// 	animation: { // 切换动画
	// 		type: Boolean,
	// 		default: true
	// 	},
	// 	duration: { // 滑动动画时长 单位毫秒
	// 		type: [Number, String],
	// 		default: 200
	// 	},
	// 	tabCenter: { // tabbar是否居中
	// 		type: Boolean,
	// 		default: false
	// 	},
	// 	fixed: { // 该组件是否固定位置
	// 		type: Boolean,
	// 		default: false
	// 	}
	// })
	// const tabList = reactive([]);
	// const tabIndex = ref(0);
	// const translateX = ref(0);
	// const scrollId = ref('tab_0');
	// let timer = 0,
	// 	timer2 = 0;
	// uni.$on('watchTabValue', (o) => {
	// 	if (typeof o.oldValue == 'undefined') {
	// 		tabList.push({ label: o.newValue, name: o.name });
	// 		if (timer) clearTimeout(timer);
	// 		timer = setTimeout(() => {
	// 			putChange(tabList[data_props.value].name);
	// 		}, 5)
	// 	} else tabList.forEach(item => {
	// 		if (item.label == o.oldValue && item.name == o.name) item.label = o.newValue;
	// 	})
	// })
	// watch(() => data_props.value, (val) => {
	// 	tabChange(val);
	// }, { immediate: true });
	// function tabChange(index) {
	// 	if (tabIndex.value == index) return false;
	// 	tabIndex.value = index;
	// 	translateX.value = -100 * index;
	// 	scrollId.value = `tab_${index-1}`;
	// 	if (timer2) clearTimeout(timer2);
	// 	timer2 = setTimeout(() => {
	// 		emits('change', { value: index, ...tabList[index] });
	// 	}, 20)
	// }
	// function putChange(name, index) {
	// 	if (tabIndex.value == index) return false;
	// 	uni.$emit('putChange', { name: name, duration: data_props.duration, type: index > tabIndex.value ? 1 : 2 });
	// }
	// #endif
</script>
<script>
	export default {
		name: "tabs",
		props: {
			value: { // 默认选中项
				type: [Number, String],
				default: 0
			},
			tabSpacing: { // tabbar的间距
				type: [Number, String],
				default: 20
			},
			animation: { // 切换动画
				type: Boolean,
				default: true
			},
			duration: { // 滑动动画时长 单位毫秒
				type: [Number, String],
				default: 200
			},
			tabCenter: { // tabbar是否居中
				type: Boolean,
				default: false
			},
			fixed: { // 该组件是否固定位置
				type: Boolean,
				default: false
			},
			defaultTextStyle: { // 未选中文字的样式
				type: [Object]
			},
			activeTextStyle: { // 选中后文字的样式
				type: [Object]
			},
			activeLineStyle: { // 选中下划线的样式
				type: [Object]
			}
		},
		data() {
			return {
				tabList: [],
				tabIndex: 0,
				d: this.duration,
				translateX: 0,
				scrollId: 'tab_0',
				top: 0,
				timer: 0,
				timer2: 0
			}
		},
		created() {
			uni.$on('watchTabValue', o => {
				if (typeof o.oldValue == 'undefined') {
					this.tabList.push({ label: o.newValue, name: o.name });
					if (this.timer) clearTimeout(this.timer);
					this.timer = setTimeout(() => {
						this.putChange(this.tabList[this.value].name);
					}, 5)
				} else this.tabList.forEach(item => {
					if (item.label == o.oldValue && item.name == o.name) item.label = o.newValue;
				})
			})
		},
		watch: {
			value: {
				handler(val) {
					this.tabChange(val);
				},
				immediate: true
			},
			animation: {
				handler(val) {
					if (!val) this.d = 0;
				},
				immediate: true
			}
		},
		methods: {
			tabChange(index) {
				if (this.tabIndex == index) return false;
				this.tabIndex = index;
				this.translateX = -100 * index;
				this.$nextTick(() => {
					this.scrollId = `tab_${index-1}`;
				})
				if (this.timer2) clearTimeout(this.timer2);
				this.timer2 = setTimeout(() => {
					this.$emit('change', { value: index, ...this.tabList[index] });
				}, 20)
			},
			putChange(name, index) {
				if (this.tabIndex == index) return false;
				uni.$emit('putChange', { name: name, duration: this.d, type: index > this.tabIndex ? 1 : 2 });
			}
		}
	}
</script>
<style>
	/* #ifndef APP-PLUS-NVUE */
	>>> ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}

	/* #endif */
	.tab-bar.tab-bar-center {
		text-align: center;
	}
</style>
<style scoped lang="scss">
	.tab {
		// #ifndef APP-PLUS-NVUE
		display: flex;
		flex-direction: column;
		overflow-x: hidden;

		// #endif
		.tab-bar {
			position: relative;
			height: 90rpx;
			// #ifndef APP-PLUS-NVUE
			white-space: nowrap;
			// #endif
			background-color: #fff;

			// #ifndef APP-PLUS-NVUE
			&::after {
				content: '';
				width: 100%;
				height: 2rpx;
				position: absolute;
				bottom: 0;
				left: 0;
				background: #ccc;
			}

			// #endif
			&-item {
				// #ifndef APP-PLUS-NVUE
				display: inline-block;
				// #endif
				height: 90rpx;
				line-height: 90rpx;
				font-size: 30rpx;
				color: #222;
				text-align: center;

				&.active {
					position: relative;
					color: #007AFF;
				}

				// #ifndef APP-PLUS-NVUE
				.active-line {
					position: absolute;
					bottom: 2rpx;
					left: 50%;
					transform: translateX(-50%);
					width: 80rpx;
					height: 2rpx;
					background: #007AFF;
				}

				// #endif
			}
		}

		&-fixed {
			height: 100vh;

			.tab-bar {
				position: sticky;
				top: 0px;
				z-index: 2022;
			}
		}

		.tab-cont {
			// #ifndef APP-PLUS-NVUE
			display: flex;
			// #endif
			flex-direction: row;
			padding: 20rpx 0;
		}
	}
</style>
