<template>
	<view class="verification_code">
		<view class="verification_code_continor">
			<view
				class="verification_code_item"
				v-for="(item, index) in latticeNum"
				:key="index"
				:style="blurShowLocal && (inputValues.length === index || (inputValues.length === latticeNum && index === latticeNum - 1)) ? borderCheckStyle : borderStyle"
				@tap="latticeFoc(index)"
			>
				<block v-if="inputValues[index]">
					<view v-if="ciphertextSty == 1" class="point"></view>
					<block v-else>{{ ciphertextSty == 2 ? '*' : inputValues[index] }}</block>
				</block>
			</view>
		</view>
		<input :focus="aotoFocus" :type="inputType" :maxlength="latticeNum" class="input_info" @input="inputVal" @blur="blur" @focus="focus" />
	</view>
</template>

<script>
export default {
	props: {
		// 输入框框框的个数
		latticeNum: {
			type: Number,
			default: 4
		},
		// 未选中样式
		borderStyle: {
			type: String,
			default: 'border-bottom:1px solid gray;'
		},
		// 选中的样式
		borderCheckStyle: {
			type: String,
			default: 'border:1px solid rgb(117, 202, 104);'
		},
		// input类型
		inputType: {
			type: String,
			default: 'number'
		},
		// 失去焦点后是否继续显示，当前所对焦的输入框（样式）
		blurShow: {
			type: Boolean,
			default: false
		},
		// 密文样式  1 圆点样式    2 星号 *  样式   默认为0   无密文
		ciphertextSty: {
			type: Number,
			default: 2
		},
		// 是否允许修改/填写某一个框框的值
		updateOne: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			// isDone: false,
			inputValues: [], //输入的值
			blurShowLocal: true,
			// cursor:null
			aotoFocus: true
		};
	},
	watch: {
	 //  blurShow: {
		//   handler(val) {
		// 	if (!this.isDone) {
		// 		this.aotoFocus = false;
		// 		this.$nextTick(() => {
		// 			setTimeout(() => {
		// 				this.aotoFocus = true;
		// 			}, 2000);
					
		// 		})
		// 		// 之后变更isDone的状态
		// 		this.isDone = true;
		// 	}
		//   },
		//   immediate: true
		  
		// }
	  },
	mounted() {
		this.blurShowLocal = this.blurShow;
		// if (this.updateOne) {
		// 	let arr = [];
		// 	for (let i = 0; i < this.latticeNum; i++) {
		// 		arr.push(' ');
		// 	}
		// 	this.inputValues = arr;
		// }
	},
	methods: {
		/**
		 * 输入框的值
		 */
		inputVal(e) {
			this.inputValues = e.detail.value;
			this.$emit('getInputVerification', this.inputValues);
		},
		// 设置验证码的值
		/**
		 * verificationCodeValue  数组
		 */
		setVerificationCode(verificationCodeValue = []) {
			this.inputValues = verificationCodeValue;
		},
		/**
		 * 清空验证码的值
		 */
		cleanVal() {
			this.inputValues = [];
		},
		latticeFoc(index) {
			
		},
		blur() {
			!this.blurShow ? (this.blurShowLocal = false) : '';
		},
		focus() {
			!this.blurShow ? (this.blurShowLocal = true) : '';
		}
	}
};
</script>

<style lang="less">
.verification_code {
	// width: 260rpx;
	// margin: 20rpx auto;
	position: relative;
	overflow: hidden;

	.verification_code_continor {
		display: flex;
		text-align: center;
		margin-left: 10rpx;
		.verification_code_item {
			width: 142rpx;
			height: 60rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			display: flex;
		}

		.verification_code_item:not(:first-child) {
			margin-left: 50rpx;
		}
		.point {
			width: 10rpx;
			height: 10rpx;
			background-color: black;
			border-radius: 200px;
		}
	}

	.input_info {
		width: 1200rpx;
		height: 60rpx;
		border: 1px solid red;
		position: absolute;
		opacity: 0;
		top: 0;
		// left: -700rpx;
	}
}
</style>
