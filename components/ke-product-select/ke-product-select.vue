<template>
	<view class="product-select" :style="{ '--titleSize': titleSize }">
		<view class="title" :style="{ fontSize: titleSize }">{{ title }}</view>
		<view class="option" :style="{ '--col': col, '--color': color, '--clickColor': clickColor, gridColumnGap: colSpan, gridRowGap: rowSpan }">
			<view
				class="select"
				v-for="(item, index) in list"
				:key="index"
				@click="clickThis(item, index)"
				:class="{ 'click-style': current == index && isFocus }"
				:style="{ fontSize: optionSize, borderRadius: radius }"
			>
				<view :style="{ height: imgHeight }" v-if="showImg"><image :src="item[imgSrcKey]" style="width: 100%;height: 100%;"></image></view>
				<view class="goods" :class="{ tag: showImg, 'click-goods': current == index && showImg }">{{ item[textKey] }}</view>
			</view>
		</view>
		<slot></slot>
	</view>
</template>

<script>
export default {
	name: 'ke-product-select',
	props: {
		// 图片src的键名
		imgSrcKey: {
			type: String,
			default: 'imgUrl'
		},
		// 回显文字内容的键名
		textKey: {
			type: String,
			default: 'text'
		},
		// 控制选中时是否生效选中样式
		isFocus: {
			type: Boolean,
			default: true
		},
		// 图片区域高度
		imgHeight: {
			type: String,
			default: '96rpx'
		},
		// 是否展示图片
		showImg: {
			type: Boolean,
			default: false
		},
		// 控制每行的最大列数
		col: {
			type: Number,
			validator: num => num >= 2,
			default: 4
		},
		// 回显的数据
		list: {
			required: true,
			type: Array,
			default: () => {
				return [];
			}
		},
		// 当前标题
		title: {
			type: String,
			required: true
		},
		// 标题文字大小
		titleSize: {
			type: String,
			default: '32rpx'
		},
		// 选项字体大小
		optionSize: {
			type: String,
			default: '16rpx'
		},
		// 列间距
		colSpan: {
			type: String,
			default: '30rpx'
		},
		// 行间距
		rowSpan: {
			type: String,
			default: '20rpx'
		},
		// 选项字体颜色
		color: {
			type: String,
			default: '#000000'
		},
		// 点击项颜色
		clickColor: {
			type: String,
			default: '#307acf'
		},
		// 圆角
		radius: {
			type: String,
			default: '4px'
		}
	},
	data() {
		return {
			current: null
		};
	},
	methods: {
		clickThis(item, index) {
			this.current = index;
			this.$emit('update:isFocus', true);
			this.$emit('select', item);
		}
	}
};
</script>

<style lang="scss" scoped>
.product-select {
	box-sizing: border-box;
}

.title {
	color: #000000;
	font-weight: bold;
}

.option {
	display: grid;
	grid-template-columns: repeat(var(--col), 1fr);
	margin: 20rpx 0;
}

.select {
	border: 1px solid rgba(229, 229, 229, 1);
	text-align: center;
	color: var(--color);
	background-color: #ffffff;
}

.goods {
	padding: 8rpx 0;
}

// 不显示图片时点击选择项的样式
.click-style {
	border-color: var(--clickColor);
	> .goods {
		background-color: #fff;
		color: var(--clickColor);
	}
}

// 显示图片时点击选择项的样式
.click-style > .click-goods {
	background-color: var(--clickColor);
	color: #fff;
}

.tag {
	background-color: #f2f2f2;
}
</style>
