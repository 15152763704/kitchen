<template>
	<view class="image-text" style="">
		<rich-text class="ql-editor" :nodes="detailData"></rich-text>
	</view>
</template>

<script>
	import login from '@/api/login/login.js';
	export default {
		components: {},
		data() {
			return {
				detailData: ''
			}
		},
		onLoad(options) {
			this.bannerInfoById(options.id)
		},
		mounted() {

		},
		onPageScroll(e) {

		},
		methods: {
			bannerInfoById(id) {
				login.bannerInfoById(id).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.detailData = res.data.detailData;
						// uni.setNavigationBarTitle({
						// 	title: '动态获取标题'
						// })
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
		}
	}
</script>

<style lang="scss" scoped>
	.image-text {
		margin: 0 22rpx;
		.ql-editor {
			img {
				max-width: 100%;
			}
		}
	}
</style>
