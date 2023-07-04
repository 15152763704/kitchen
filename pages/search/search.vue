<template>
	<view class="search">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<!-- 搜索栏 -->
		<view class="" style="padding: 0 24rpx; position: relative;">
			<!-- 已聚焦 状态栏 -->
			<view class="" v-if="isSearch">
				<uni-search-bar @blur="searchBlur()" radius="17" bgColor="#ffffff" cancelButton="none" :focus="true"
					v-model="listPortForm.searchValue">
					<template v-slot:searchIcon>
						<image @click="toBack()" style="width: 17rpx; height: 30rpx; margin-left: 4rpx;"
							src="../../static/ss_back.png" mode=""></image>
					</template>
					<template v-slot:clearIcon>
						<uni-icons style="position: absolute; top: 14rpx; right: 120rpx;" color="#999999" size="16" type="clear" />
					</template>
				</uni-search-bar>
				<view class="" @click="search()">
					<text class="sousuo"
						style="font-size: 28rpx; font-weight: 500; position: absolute; top: 50%; transform: translate(0, -50%); right: 60rpx;">搜索</text>
				</view>
			</view>
			<!-- 未聚焦 状态栏 -->
			<view class="" v-else>
				<view class="searched-state" @click="backSearch()">
					<view class="search-show" style="">
						<image @click="toBack()" style="width: 17rpx; height: 30rpx; margin-left: 20rpx;"
							src="../../static/ss_back.png" mode=""></image>
						<text
							style="margin-left: 16rpx; color: grey;">{{ listPortForm.searchValue.length == 0?'请输入搜索内容':listPortForm.searchValue }}</text>
					</view>
					<view class="change-adress" style="" @click.stop="changeAdress()">
						<text>切换地址</text>
					</view>
				</view>
				<view class="filtrate-container">
					<view class="">
						<view class="filtrate-item" v-for="(item,index) in filtrateList" :key="index"
							@click="onFiltrate(item)">
							<uni-icons :type="item.icon" size="16" :color="item.isChecked?'#FF9D2B':''"></uni-icons>
							<text :class="item.isChecked?'checked':''">{{ item.name }}</text>
							<image v-if="item.isMore" style="width: 13rpx;" src="../../static/search_sx.png"
								mode="widthFix"></image>
						</view>
					</view>
					<!-- <view class="filtrate-item" style="margin-right: 0;" @click="allFiltrate()">
						<text>全部筛选</text>
						<image style="width: 13rpx;" src="../../static/search_sx.png" mode="widthFix"></image>
					</view> -->
				</view>
				<!-- 筛选 popup -->
				<view class="sort-popup" :class="isShow?'isShow':''" :style="isShow?'':'padding-top: 0;'">
					<view @click="onFiltrate(iitem)" class="filter-item"
						v-for="(iitem,iindex) in filtrateList[0].children" :key="iindex + 1">
						<text :class="iitem.isChecked?'checked':''">{{ iitem.name }}</text>
					</view>
				</view>
				<!-- mask -->
				<!-- <view class="mask" :class="isShow?'sort-mask':''" style="">

				</view> -->
				<uni-transition ref="ani" custom-class="transition" mode-class="fade" :show="isShow">

				</uni-transition>
			</view>
		</view>
		<!-- 未搜索 内容 -->
		<scroll-view class="scroll-content" scroll-y="true" v-if="isSearch">
			<!-- 发现 -->
			<view class="flex flex-space-between">
				<text class="fs-30">搜索发现</text>
				<view class="flex flex-items-center" @click.stop="refresh()">
					<text class="fs-20" style="color: #A7A7A7;">换一批</text>
					<image style="width: 20rpx; height: 20rpx; margin-left: 12rpx;" src="../../static/ss_refresh.png"
						mode=""></image>
				</view>
			</view>
			<view class="ss-discovery" style="margin-bottom: 36rpx;">
				<view class="ssItem" v-for="(ssitem,ssindex) in ssList" :key="ssindex + 1"
					@click="onclickSsitem(ssitem)">
					<text>{{ ssitem.searchValue }}</text>
				</view>
			</view>
			<!-- 历史 -->
			<view v-if="hisList.length > 0" class="flex flex-space-between">
				<text class="fs-30">历史搜索</text>
				<view class="flex flex-items-center" @click.stop="deleteAll()">
					<!-- <text class="fs-20" style="color: #A7A7A7;">换一批</text> -->
					<image style="width: 20rpx; height: 20rpx; margin-left: 12rpx;" src="../../static/del.png" mode="">
					</image>
				</view>
			</view>
			<view class="ss-discovery">
				<view class="ssItem" v-for="(hisitem,hisindex) in hisList" :key="hisindex + 1"
					@click="onclickSsitem(hisitem)">
					<text>{{ hisitem.searchValue }}</text>
				</view>
			</view>
		</scroll-view>
		<!-- 搜索 结果 -->
		<scroll-view v-else @scrolltolower="lower" class="scroll-content2" scroll-y="true">
			<sgood-list style="" :shopList="shopList"></sgood-list>
			<view class="isBottom">
				<text class="isBottom-leftLine"></text>
				<text v-if="shopList.length >= shopTotal" class="isBottom-text">已经到底啦</text>
				<text v-else class="isBottom-text">加载中...</text>
				<text class="isBottom-rightLine"></text>
			</view>
		</scroll-view>

		<!-- <view v-else class="" style="background-color: #F5F5F5; text-align: center;">
			<image style="width: 288rpx; margin-top: 400rpx;" src="/static/loading1.gif" mode="widthFix"></image>
		</view> -->

		<uni-popup ref="alertDialog" type="dialog" style="z-index: 9999">
			<uni-popup-dialog type="info" cancelText="关闭" confirmText="同意" title="" :content="returnMsg"
				@confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	// import goodsList from '@/components/goodslist/goodslist.vue';
	import shop from '@/api/shop/shop.js';
	import search from '@/api/search/search.js';
	export default {
		components: {
			// goodsList
		},
		data() {
			return {
				isLoading: true,
				isSearch: true,
				filtrateList: [{
						name: '综合排序',
						icon: 'list',
						isChecked: true,
						isMore: true,
						id: 0,
						children: [{
								"name": "距离最近",
								"isChecked": false,
								"id": 1
							},
							{
								"name": "起送最低",
								"isChecked": false,
								"id": 2
							},
							{
								"name": "人均最高",
								"isChecked": false,
								"id": 3
							},
							{
								"name": "人均最低",
								"isChecked": false,
								"id": 4
							},
							{
								"name": "销量最高",
								"isChecked": false,
								"id": 5
							},
							{
								"name": "评分最高",
								"isChecked": false,
								"id": 7
							}
						]
					},
					{
						name: '销量优先',
						icon: 'fire',
						isChecked: false,
						isMore: false,
						id: 5
					},
					{
						name: '距离最近',
						icon: 'navigate',
						isChecked: false,
						isMore: false,
						id: 1
					}
				],
				isShow: false,
				returnMsg: '',
				shopList: [],
				shopTotal: null,
				listPortForm: {
					pageNum: 1,
					pageSize: 10,
					searchValue: '',
					shopTypeId: '',
					latitude: 0,
					longitude: 0,
					sortType: ''
				},
				ssList: [

				],
				ssAllList: [],
				ssListTotal: null,
				ssPageNum: 1,
				hisList: [

				],

				searchOption: {}, //从店铺分类页面跳转而来携带的参数
			}
		},
		onLoad: function(option) {
			if (option.shopTypeId) {
				this.listPortForm.shopTypeId = option.shopTypeId;
			}
			this.listPortForm.latitude = uni.getStorageSync('location_key').latitude;
			this.listPortForm.longitude = uni.getStorageSync('location_key').longitude;
			if (option.selectTypeName && option.selectTypeId) { //从店铺分类页面跳转而来
				this.searchOption = option
				if (option.selectTypeId.indexOf('sytz001') != -1) { //表示适用体质分类
					this.listPortForm.nutritionValue = option.selectTypeName
				} else { //店铺分类字典
					this.listPortForm.shopTypeId = option.selectTypeId;
				}
				this.search()
			} else {
				this.findHotSearch(this.ssPageNum, 8);
			}
			if (option.search) {
				this.listPortForm.searchValue = option.search;
				this.search();
			}
		},
		onShow() {
			this.findMyHistorySearch();
		},
		methods: {
			toBack() {
				uni.navigateBack({
					delta: 1,
					// animationType: 'slide-out-bottom',
					// animationDuration: 200
				});
			},
			// 清空历史记录
			deleteAll() {
				// this.hisList = []
				this.clearMyHistorySearch();
			},
			// 换一批
			refresh() {
				if (this.ssAllList.length >= this.ssListTotal) {
					this.ssPageNum = 1;
					this.ssAllList = [];
				} else {
					this.ssPageNum++
				};
				this.findHotSearch(this.ssPageNum, 8);
			},
			// 点击历史记录
			onclickSsitem(item) {
				// console.log(item)
				this.listPortForm.searchValue = item.searchValue;
				this.search();
			},
			searchBlur() {
				// this.search();
			},
			search() {
				this.isSearch = false;
				this.listPortForm.pageNum = 1;
				this.shopList = [];
				this.getShopList()
			},
			backSearch() {
				this.isSearch = true;
			},
			changeAdress() {
				// uni.showToast({
				// 	title: "切换地址",
				// 	icon: "none"
				// })
				uni.navigateTo({
					url: '/pages/myAddress/my-address?from=search'
				});
			},
			onFiltrate(item) {
				if (item.id == 0) {
					this.allFiltrate();
				} else {
					this.isShow = false
					let filtrateList = this.filtrateList;
					for (var i = 0; i < filtrateList.length; i++) {
						filtrateList[i].isChecked = false
					};
					for (var j = 0; j < filtrateList[0].children.length; j++) {
						filtrateList[0].children[j].isChecked = false
					};
					this.$set(item, 'isChecked', true);
					if (!filtrateList[1].isChecked && !filtrateList[2].isChecked) {
						filtrateList[0].isChecked = true
					}
					// console.log(item.id)
					// console.log(this.filtrateList)
					this.listPortForm.sortType = item.id;
					this.listPortForm.pageNum = 1;
					this.shopList = [];
					this.getShopList();
				}
			},
			allFiltrate() {
				this.isShow = !this.isShow;
			},
			handle(type) {
				this.show = !this.show
				this.modeClass = type
			},
			// 获取热搜
			findHotSearch(pageNum, pageSize) {
				search.findHotSearch(pageNum, pageSize).then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.ssList = res.rows;
						this.ssAllList = this.ssAllList.concat(res.rows);
						this.ssListTotal = res.total;
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
			// 获取历史搜索
			findMyHistorySearch() {
				search.findMyHistorySearch().then(res => {
					// console.log(res)
					if (res.code == 200) {
						this.hisList = res.rows;
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
			// 删除历史记录
			clearMyHistorySearch() {
				search.clearMyHistorySearch().then(res => {
					// console.log(res)
					if (res.code == 200) {
						uni.showToast({
							title: '删除成功',
							icon: 'success'
						});
						this.hisList = [];
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
			// 获取商家列表
			getShopList() {
				this.isLoading = true;
				let pageNum = this.listPortForm.pageNum;
				let pageSize = this.listPortForm.pageSize;
				let searchValue = this.listPortForm.searchValue;
				let shopTypeId = this.listPortForm.shopTypeId;

				let latitude = this.listPortForm.latitude;
				let longitude = this.listPortForm.longitude;
				let sortType = this.listPortForm.sortType;
				let nutritionValue = this.listPortForm.nutritionValue;
				shop.getShopList(pageNum, pageSize, searchValue, shopTypeId, latitude, longitude, sortType, nutritionValue)
					.then(res => {
						// console.log(res)
						if (res.code == 200) {
							if (this.searchOption.selectTypeName) {
								this.listPortForm.searchValue = this.searchOption.selectTypeName
								this.searchOption = {}
							}
							this.isLoading = false;
							// console.log(res.total)
							// console.log(res.rows)
							this.shopList = this.shopList.concat(res.rows);
							this.shopTotal = res.total;
							// console.log(this.shopList)
						} else if (res.code == 401) {
							this.returnMsg = res.msg + '，请重新登录';
							this.dialogToggle();
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
			lower() {
				if (this.shopList.length >= this.shopTotal) return;
				this.listPortForm.pageNum++;
				this.getShopList();
			},
			dialogToggle() {
				this.$refs.alertDialog.open()
			},
			dialogConfirm() {
				uni.removeStorageSync('token_key');
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			dialogClose() {
				// console.log('点击关闭')
				uni.removeStorageSync('token_key');
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;

		},
	}
</script>

<style>
	.search .uni-input-input {
		width: 500rpx !important;
	}
</style>
<style lang="scss" scoped>
	.isBottom {
		position: relative;
		margin-bottom: 22rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		.isBottom-text {
			font-size: 24rpx;
			color: rgb(186, 186, 186);
			text-align: center;
			margin: 0 20rpx;
		}

		.isBottom-leftLine {
			width: 160rpx;
			height: 4rpx;
			background: #e5e5e5;
		}

		.isBottom-rightLine {
			width: 160rpx;
			height: 4rpx;
			background: #e5e5e5;
		}
	}

	.isShow {
		height: 468rpx !important;
		/* #ifdef APP-PLUS */
		height: 408rpx !important;
		/* #endif */
		width: 750rpx !important;
		transition: all 0.5s ease 0s;
	}

	.sort-popup {
		width: 750rpx;
		height: 0rpx;
		background-color: #FFFFFF;
		position: absolute;
		z-index: 9999;
		left: 0;
		border-radius: 0 0 24rpx 24rpx;
		transition: all 0.5s ease 0s;
		overflow: hidden;
		padding-top: 16rpx;

		.filter-item {
			padding: 16rpx 24rpx;
			box-sizing: border-box;
			font-size: 26rpx;

			.checked {
				color: #FF9D2B;
				font-weight: 500 !important;
			}
		}
	}

	.transition {
		background: rgba(0, 0, 0, 0.4);
		position: absolute;
		// top: calc(var(--status-bar-height) + 156rpx)
		left: 0;
		z-index: 98;
		width: 750rpx;
		height: calc(100vh - var(--status-bar-height) - 154rpx);
	}

	// .mask {
	// 	background-color: rgba(0, 0, 0, 0);
	// 	transition: all 1s ease 0s;
	// }

	// .sort-mask {
	// 	position: absolute;
	// 	top: 244rpx;
	// 	left: 0;
	// 	width: 750rpx;
	// 	height: 100vh;
	// 	background-color: rgba(0, 0, 0, 0.4) !important;
	// 	z-index: 90;
	// 	transition: all 0.5s ease 0s;
	// }

	.uni-searchbar {
		padding: 0;
	}

	.flex {
		display: flex;
	}

	.flex-space-between {
		justify-content: space-between;
	}

	.flex-items-center {
		align-items: center;
	}

	.fs-30 {
		font-size: 30rpx;
	}

	.fs-20 {
		font-size: 20rpx;
	}

	.search {
		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}

		.sousuo::before {
			content: '';
			position: absolute;
			width: 0.6rpx; // 边框的宽度
			height: 26rpx;
			// border-radius: 2rpx;
			left: -26rpx; //距离 view 标签的距离
			bottom: 8rpx;
			background-color: #A7A7A7; //  颜色
			// transform: translateX(-50%);

		}

		.searched-state {
			width: 100%;
			height: 66rpx;
			display: flex;
			align-items: center;

			.search-show {
				width: 622rpx;
				height: 100%;
				background-color: #FFFFFF;
				border-radius: 34rpx;
				display: flex;
				align-items: center;
			}

			.change-adress {
				width: 48rpx;
				font-size: 24rpx;
				margin-left: 22rpx;
				line-height: 1;

				text {}
			}
		}

		.filtrate-container {
			width: 750rpx;
			margin-left: -24rpx;
			padding-right: 10rpx;
			display: flex;

			// justify-content: space-between;
			>view {
				width: 100%;
				height: 90rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			.filtrate-item {
				margin-right: 50rpx;
				display: flex;
				align-items: center;
				margin: 0 auto;

				text {
					font-size: 26rpx;
					margin-right: 10rpx;
					color: #333333;
					font-weight: 600;
				}

				.checked {
					color: #FF9D2B;
				}
			}
		}

		.scroll-content {
			height: calc(100vh - var(--status-bar-height) - 88rpx);
			margin-top: 14rpx;
			background-color: #FFFFFF;
			border-radius: 36rpx 36rpx 0 0;
			box-sizing: border-box;
			padding: 32rpx 28rpx 0 22rpx;

			.ss-discovery {
				margin-top: 18rpx;

				.ssItem {
					background-color: #F6F7F8;
					color: #56575B;
					font-size: 30rpx;
					padding: 8rpx 28rpx;
					box-sizing: border-box;
					display: inline-block;
					border-radius: 28rpx;
					margin-right: 16rpx;
					margin-bottom: 16rpx;
				}
			}
		}

		.scroll-content2 {
			height: calc(100vh - var(--status-bar-height) - 154rpx);
		}
	}
</style>
