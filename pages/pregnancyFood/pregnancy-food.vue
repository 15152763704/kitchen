<template>
	<view class="pregnancy-food">
		<view class="top-part">
			<view class="" style="margin-bottom: 56rpx; position: relative;">
				<image @click="toBack()"
					style="width: 17rpx; height: 30rpx; position: absolute; top: 12rpx; left: 30rpx;"
					src="../../static/rmcp_back.png" mode=""></image>
				<text>孕餐辅食</text>
			</view>
			<view class="tabs">
				<v-tabs ref="tabs" @change="changeTab" v-model="current" :fixed="false" :lineScale="0.1"
					lineHeight="4rpx" lineColor="#FEBD2C" :scroll="false" color="#535353" activeColor="#000000"
					fontSize="28rpx" bgColor='' :tabs="['母婴食谱', '母婴小知识']"></v-tabs>
			</view>
			<scroll-view class="filtrate" scroll-x>
				<view @click="onclick(item)" class="filtrate-item" :class="item.actived?'isActived':''"
					v-for="(item,index) in filtrateList" :key="index">
					<text>{{ item.dictLabel }}</text>
				</view>
			</scroll-view>
		</view>
		<!-- 内容 -->
		<view class="container-tabs__list">
			<swiper class="container-tabs__swiper" :current="swiperCurrent" @change="animationFinished">
				<!-- 母婴食谱 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%" @scrolltolower="scrolltolowerl()">
						<!-- 文字 -->
						<view class="introduce">
							<text>在备孕期间要注意，调整好心情，不要熬夜，生活要有规律，不要乱吃药，以免对胎儿产生不利的影响。饮食多吃蔬菜，多吃水果，多喝水，均衡营养，忌辛辣食物，补充多种维生素增强抵抗力，不要接触有毒有害物质。宝妈最好在备孕前三个月补充叶酸，补充蛋白锌、蛋白硒和蛋白质。保持心情舒畅！</text>
						</view>
						<!-- 推荐菜谱 -->
						<view class="recommend-recipes-list">
							<view class="title">
								<text>推荐菜谱</text>
							</view>
							<view class="flex-center-center">
								<view class="recipes-item" v-for="(item,index) in recipesList"
									@click="toDetails(1, item)">
									<image :src="item.headerUrl" mode=""></image>
									<view class="flex-center-center">
										<view style="font-size: 28rpx; font-weight: 500;">
											<text>{{ item.name }}</text>
										</view>
										<view class="flex-center-center">
											<!-- <image v-if="item.isC" style="width: 19.6rpx; height: 18.4rpx;" src="../../static/ycfs_coa.png" mode=""></image>
											<image v-else style="width: 19.6rpx; height: 18.4rpx;" src="../../static/ycfs_co.png" mode=""></image> -->
											<text style="color: #BABABA; font-size: 24rpx;">浏览量{{ item.seeNum }}</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 母婴小知识 -->
				<swiper-item class="swiper-item" style="">
					<scroll-view scroll-y style="height: 100%" @scrolltolower="scrolltolowerr()">
						<!-- <custom-waterfalls-flow ref="waterfallsFlowRef" :value="recipesListR" :column="1" :columnSpace="1"
							:seat="2" @wapperClick="wapperClick" @imageClick="imageClick" style="box-sizing: border-box;
							padding: 0 10rpx;">
							<template v-slot:default="item">
								<view class="waterfalls-flow-item">
									<view class="title">{{item.name}}</view>
									<view class="zan" @click="onclickZan(item)">
										<image v-if="item.isSupport" style="width: 28rpx; height: 26rpx;"
											src="../../static/yzfs_zana.png" mode=""></image>
										<image v-else style="width: 28rpx; height: 26rpx;"
											src="../../static/yzfs_zan.png" mode=""></image>
										<text class="zanNum"
											:style="item.isSupport?'color: #F75732':''">{{ item.supportNum == 0?'赞':item.supportNum }}</text>
									</view>
								</view>
							</template>
						</custom-waterfalls-flow> -->
						<view class="waterfalls-flow-list"
							style="">
							<view class="waterfalls-flow-item" v-for="(item,index) in recipesListR" :key="index + 1" @click="imageClick(item)"
								style="">
								<image :src="item.headerUrl" mode="widthFix" style="width: 100%;"></image>
								<view class="title">{{item.name}}</view>
								<view class="zan" @click="onclickZan(item)">
									<image v-if="item.isSupport" style="width: 28rpx; height: 26rpx;"
										src="../../static/yzfs_zana.png" mode=""></image>
									<image v-else style="width: 28rpx; height: 26rpx;" src="../../static/yzfs_zan.png"
										mode=""></image>
									<text class="zanNum"
										:style="item.isSupport?'color: #F75732':''">{{ item.supportNum == 0?'赞':item.supportNum }}</text>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	// import goodsList from '@/components/goodslist/goodslist.vue';
	import pregnancyFood from '@/api/pregnancyFood/pregnancyFood.js';
	export default {
		components: {
			// goodsList
		},
		data() {
			return {
				formData: {
					foodType: '',
					pageNum: 1,
					pageSize: 10,
					// motherBabyType: '1'
				},
				formDataR: {
					foodType: '',
					pageNum: 1,
					pageSize: 10,
					// motherBabyType: '1'
				},
				recipesList: [],
				recipesTotal: null,
				current: 0,
				filtrateList: [

				],
				swiperCurrent: 0,
				recipesListR: [
					// {
					// 	image: '/static/rmcp_cpPic1.png',
					// 	// hide: true,
					// 	name: '花胶炖鸡（美容养颜，备孕）',
					// 	isSupport: false,
					// 	supportNum: 0
					// },
					// {
					// 	image: '/static/dpzy_goodsPic2.png',
					// 	name: '补碘紫菜汤',
					// 	isSupport: true,
					// 	supportNum: 25
					// }
				],
				recipesTotalR: null,
			}
		},
		onLoad(option) {
			this.getTypeList();
			this.getMotherBabyFoodList(1);
			this.getMotherBabyFoodListR(2);
		},
		onShow() {

		},
		methods: {
			toBack() {
				uni.navigateBack({
					delta: 1,
					// animationType: 'slide-out-bottom',
					// animationDuration: 200
				});
			},
			changeTab(index) {
				this.swiperCurrent = index
				// console.log(index)
			},
			animationFinished(e) {
				this.current = e.detail.current
				this.swiperCurrent = e.detail.current
			},
			onclick(item) {
				let _this = this;
				let filtrateList = _this.filtrateList;
				_this.formData.foodType = item.dictValue;
				_this.formDataR.foodType = item.dictValue;
				// console.log(item.dictValue)
				for (var i = 0; i < filtrateList.length; i++) {
					filtrateList[i].actived = false;
				}
				item.actived = true;
				_this.getMotherBabyFoodListForFit(1);
				// _this.recipesListR = [];
				// _this.$refs.waterfallsFlowRef.refresh();
				_this.getMotherBabyFoodListForFit(2);
			},
			toDetails(type, item) {
				uni.navigateTo({
					url: '/pages/pregnancyFood/pfoodDetails/pfood-details?type=1&id=' + item.id + '&name=' + item
						.name
				})
			},
			wapperClick(item) {
				// console.log('单项点击事件', item)
			},
			// imageClick(item) {
			// 	// console.log('图片点击事件', item)
			// },
			imageClick(item) {
				uni.navigateTo({
					url: '/pages/pregnancyFood/pfoodDetails/pfood-details?type=2&id=' + item.id + '&name=' + item
						.name
				})
			},
			scrolltolowerl() {
				// uni.showToast({
				// 	icon: 'none',
				// 	title: '触底了~',
				// 	duration: 2000
				// });
				if (this.recipesList.length >= this.recipesTotal) return;
				this.formData.pageNum++;
				this.getMotherBabyFoodList(1);
			},
			scrolltolowerr() {
				if (this.recipesListR.length >= this.recipesTotalR) return;
				this.formDataR.pageNum++;
				this.getMotherBabyFoodListR(2);
			},
			onclickZan(item) {

			},
			// 获取类别信息
			getTypeList() {
				pregnancyFood.getTypeList().then(res => {
					// console.log(res)
					if (res.code == 200) {
						for (var i = 0; i < res.rows.length; i++) {
							res.rows[i].actived = false;
						}
						// res.rows[0].actived = true;
						this.filtrateList = res.rows;
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
			// 所有菜谱列表
			getMotherBabyFoodListForFit(motherBabyType) {
				// let motherBabyType = this.formData.motherBabyType;
				this.formData.pageNum = 1;
				this.formDataR.pageNum = 1;
				let pageSize = this.formData.pageSize;
				let foodType = this.formData.foodType;
				pregnancyFood.getMotherBabyFoodList(1, pageSize, foodType, motherBabyType).then(res => {
					// console.log(res)
					if (res.code == 200) {
						if (motherBabyType == 1) {
							this.recipesList = res.rows;
							this.recipesTotal = res.total;
							// console.log('recipesList======>: ', this.recipesList)
							// console.log('recipesTotal======>: ', this.recipesTotal)
						} else {
							for (var i = 0; i < res.rows.length; i++) {
								res.rows[i].image = res.rows[i].headerUrl
							}
							this.recipesListR = res.rows;
							this.recipesTotalR = res.total;
							// console.log('recipesListR======>: ', this.recipesListR)
							// console.log('recipesTotalR======>: ', this.recipesTotalR)
						}
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
			getMotherBabyFoodList(motherBabyType) {
				// let motherBabyType = motherBabyType;
				let pageNum = this.formData.pageNum;
				let pageSize = this.formData.pageSize;
				let foodType = this.formData.foodType;
				pregnancyFood.getMotherBabyFoodList(pageNum, pageSize, foodType, motherBabyType).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.recipesList = this.recipesList.concat(res.rows);
						this.recipesTotal = res.total;
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
			getMotherBabyFoodListR(motherBabyType) {
				// let motherBabyType = motherBabyType;
				let pageNum = this.formData.pageNum;
				let pageSize = this.formData.pageSize;
				let foodType = this.formData.foodType;
				pregnancyFood.getMotherBabyFoodList(pageNum, pageSize, foodType, motherBabyType).then(res => {
					// console.log(res)
					if (res.code == 200) {
						for (var i = 0; i < res.rows.length; i++) {
							res.rows[i].image = res.rows[i].headerUrl
						}
						this.recipesListR = this.recipesListR.concat(res.rows);
						this.recipesTotalR = res.total;
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
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;

		},
	}
</script>

<style lang="scss" scoped>
	.pregnancy-food {
		.flex-center-center {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
		}

		width: 750rpx;
		background-color: #F8F9FA;
		;
		background-image: url(../../static/ycfs_topbcg.png);
		background-repeat: no-repeat;
		background-size: 100%;

		// height: 1600rpx;
		// border-top: 0.2rpx solid #FD8931;
		.top-part {
			// .actived {
			// 	border-radius: 0 !important;
			// }
			width: 750rpx;
			// height: 614rpx;
			font-size: 40rpx;
			font-weight: 500;
			// background: linear-gradient(to right, #FD8931 , #FD8931);

			position: relative;
			text-align: center;
			padding-top: 102rpx;
			box-sizing: border-box;

			.filtrate {
				text-align: left;
				margin-top: 34rpx;
				padding-left: 22rpx;
				box-sizing: border-box;
				white-space: nowrap;

				.isActived {
					background: linear-gradient(to right, #FFD371, #FC9C3F);
					font-weight: 500 !important;
					color: #000000 !important;
				}

				.filtrate-item {
					font-size: 24rpx;
					padding: 8rpx 22rpx 6rpx;
					box-sizing: border-box;
					border-radius: 24rpx;
					background-color: #F4F5F6;
					display: inline-block;
					color: #808080;
					font-weight: 400;
					margin-right: 34rpx;
				}
			}
		}

		.container-tabs__list {
			height: calc(100vh - 426rpx);
			box-sizing: border-box;
			margin-top: 52rpx;
			// padding-top: 18rpx;
			// padding-left: 10rpx;

			// background-color: #0077AA;
			.container-tabs__swiper {
				height: 100%;

				.introduce {
					// height: 170rpx;
					padding-left: 24rpx;
					padding-right: 20rpx;
					box-sizing: border-box;
					font-size: 24rpx;
					color: #56575B;
				}

				.recommend-recipes-list {
					margin-top: 40rpx;
					box-sizing: border-box;
					padding-left: 22rpx;
					padding-right: 22rpx;

					.title {
						font-size: 38rpx;
						font-weight: 500;
						margin-bottom: 30rpx;
					}

					.recipes-item {
						width: 336rpx;
						margin-bottom: 40rpx;

						image {
							width: 100%;
							height: 274rpx;
							border-radius: 14rpx;
						}
					}
				}
			}
		}
		.waterfalls-flow-list {
			column-count: 2; 
			column-gap: 16rpx; 
			padding: 0 20rpx; 
			box-sizing: border-box;
		}
		.waterfalls-flow-item {
			border-radius: 16rpx; 
			overflow: hidden; 
			background-color: #ffffff; 
			margin-bottom: 22rpx;
			-moz-page-break-inside:avoid;
			-webkit-column-break-inside:avoid;
			break-inside:avoid;
			// background-color: #000000;
			.title {
				padding: 20rpx 10rpx 0;
				font-size: 28rpx;
			}

			.zan {
				display: flex;
				float: right;
				padding-right: 24rpx;
				box-sizing: border-box;
				align-items: center;

				.zanNum {
					color: #A7A7A7;
					font-size: 28rpx;
					margin-left: 10rpx;
				}
			}
		}
	}
</style>
