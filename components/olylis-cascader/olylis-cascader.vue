<template>
	<view ref="cascaderRef" class="cascader">
		<view v-if="!isShowNav" class="bread-crumb clearfix">
			<view class="bread-crumb-root">当前：</view>
			<view class="bread-crumb-item" v-for="(item, index) in breadCrumbList" :key="item.value">
				<text class="bread-crumb-text">{{item.label}}</text>
				<!-- <view v-if="index < breadCrumbList.length - 1" class="bread-crumb-icon">></view> -->
			</view>
		</view>
		<view class="cascader-content">
			<!-- <scroll-view scroll-x scroll-with-animation :scroll-left="scrollLeft" style="height:100%;"> -->
			<view class="options-row clearfix">
				<view class="optionsColumn optionsColumn0">
					<scroll-view scroll-y style="height:100%">
						<view class="options-w" style="background-color: #FFFFFF;">
							<view class="options-item options-item0"  v-for="item in optionsList[0]"
								:class="{'active1': selectedValue[0] === item.value}"
								@click="clickItem(item, 0)">
								<slot :data="item">{{item.label}}</slot>
							</view>
						</view>
						
					</scroll-view>
				</view>
				<view class="optionsColumn optionsColumn1">
					<scroll-view scroll-y style="height:100%">
						
						<view class="options-item" v-for="item in optionsList[1]"
							:class="{'active': selectedValue[1] === item.value}" :key="item.value"
							@click="clickItem(item, 1)">
							<slot :data="item">{{item.label}}</slot>
							<image v-if="selectedValue[1] === item.value" style="width: 32rpx;" src="../../static/shopCar/seclected.png" mode="widthFix"></image>
						</view>
					</scroll-view>
				</view>
			</view>
			<!-- </scroll-view> -->
		</view>
	</view>
</template>

<script>
	// function getStyleString (styleObject) {
	// 	return Object.keys(styleObject).map(propName => (propName + ':' + styleObject[propName] + ';')).join('')
	// }

	export default {
		name: 'cascader',
		props: {
			columnWidth: {
				type: Number,
				default: null
			},
			value: {
				type: Array,
				default () {
					return []
				}
			},
			options: {
				type: Array,
				default () {
					return []
				}
			},
			isShowNav: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				// WIDTH: 300,
				// COLUMN_WIDTH: 150,
				selectedValue: [],
				optionsList: []
			}
		},
		computed: {
			breadCrumbList() {
				return this.selectedValue.map((item, i) => this.optionsList[i].find(option => option.value === item))
			},
			// rowStyle() {
			// 	return getStyleString({
			// 		width: this.COLUMN_WIDTH * (Math.max(2, this.optionsList.length)) + 'px'
			// 	})
			// },
			// columnStyle() {
			// 	return getStyleString({
			// 		width: this.COLUMN_WIDTH + 'px'
			// 	})
			// },
			// scrollLeft() {
			// 	return Math.max(0, this.COLUMN_WIDTH * (this.optionsList.length - 2))
			// }
		},
		watch: {
			value(val) {
				this.handleValue(val)
			},
			options(val) {
				this.handleValue(this.value)
			}
		},
		created() {
			this.handleValue(this.value)
		},
		mounted() {
			// this.init()
		},
		methods: {
			// init() {
			// 	const query = uni.createSelectorQuery().in(this);
			// 	query.select('.cascader').boundingClientRect(data => {
			// 		this.WIDTH = data.width ? data.width : 150
			// 		this.COLUMN_WIDTH = this.WIDTH / 2
			// 	}).exec();
			// },
			handleValue(val) {
				this.selectedValue = []
				this.optionsList = this.getOptionsList(val, this.options)
				// console.log(this.optionsList)
				this.selectedValue = val
			},
			getOptionsList(values, options, currentList = []) {
				if (!options || options.length === 0) return currentList
				currentList.push(options)
				if (values.length === 0) return currentList
				const next = options.find(item => item.value === values[0])
				const nextValue = values.slice(1)
				const nextOptions = next.children
				return this.getOptionsList(nextValue, nextOptions, currentList)
			},
			clickNav(item, index) {
				this.clickItem(item, index)
			},
			clickItem(item, columnIndex) {
				const selectedValue = this.selectedValue.slice(0, columnIndex)
				const optionsList = this.optionsList.slice(0, columnIndex + 1)
				// const breadCrumbList = this.breadCrumbList
				selectedValue.splice(columnIndex, 1, item.value)
				this.selectedValue = selectedValue
				if (item.children) optionsList.splice(columnIndex + 1, 1, item.children)
				this.optionsList = optionsList
				this.$emit('change', selectedValue, item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.clearfix::after {
		content: "";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

	.cascader {
		height: 100%;
		background-color: #FFFFFF;
		.bread-crumb {
			height: 30px;
			line-height: 30px;
			border-bottom: 1px solid #d8d8d8;
			padding: 0 10px;
			font-size: 12px;

			.bread-crumb-root {
				float: left;
			}

			.bread-crumb-item {
				float: left;
			}

			.bread-crumb-text {
				color: #0083FF;
			}

			.bread-crumb-icon {
				display: inline-block;
				padding: 0 5px;
			}
		}

		.cascader-content {
			// height: calc(100% - 30px);
			height: 418rpx;
		}

		.options-row {
			height: 100%;
			display: flex;
		}

		.optionsColumn {
			float: left;
			height: 100%;

			box-sizing: border-box;

			&:not(:last-child) {
				// border-right: 1px solid #d8d8d8;
			}
		}

		.optionsColumn0 {
			width: 264rpx;
			background-color: #F5F5F5;
			.options-w {
				:first-child {
					border-radius: 0!important;
				}
				
			}
		}

		.optionsColumn1 {
			width: 486rpx;
			background-color: #FFFFFF;
			.options-item {
				padding-left: 30rpx;
				padding-right: 34rpx;
				// padding-top: 16rpx;
				padding-bottom: 16rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				
			}
		}

		.options-item {
			padding: 24rpx 48rpx;
			box-sizing: border-box;
			color: #808080;
			font-size: 28rpx;
			&.active {
				color: #F2C050;
				font-weight: 500;
				// background-color: #FFFFFF;
			}
			&.active1 {
				background-color: #FFFFFF;
				// border-radius: 0!important;
			}
		}
		.options-item0 {
			font-weight: 500;
			color: #000000;
			// border-radius: 0 18rpx 0 0;
			background-color: #F5F5F5;
		}
	}
</style>
