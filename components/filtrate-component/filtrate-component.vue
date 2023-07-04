<template>
	<view class="filtrate-type">
		<scroll-view scroll-x="true" style="white-space: nowrap; width: 100%; overflow: hidden; margin-left: 20rpx;">
			<view @click="clickItem(item,index)" class=""
				style="display: inline-block; margin-right: 50rpx; text-align: center;"
				v-for="(item,index) in filtrateList" :key="index">
				<!-- <image style="width: 188rpx; height: 144rpx; border-radius: 8rpx; margin-right: 18rpx;" src="../../../static/store-bag.png" mode=""></image> -->
				<view class="" :class="{'background-color-active': item.isChecked }" style="display: flex; align-items: center; justify-content: center; width: 76rpx; height: 76rpx; border-radius: 38rpx; background: #ffffff; margin: 0 auto;">
					<!-- <image v-if="scrollTopt <= 344" style="width: 70rpx; height: 70rpx; border-radius: 35rpx; margin-top: 4rpx;":src="item.imgUrl?item.imgUrl:'/static/ms_sx_1.png'" mode=""></image> -->
					<image v-if="true" style="width: 70rpx; height: 70rpx; border-radius: 35rpx; margin-top: 4rpx;":src="item.imgUrl?item.imgUrl:'/static/ms_sx_1.png'" mode=""></image>
				</view>
				<!-- <view :class="{'fs-28': scrollTopt >= 346, 'fw-600 fs-26': item.isChecked }" style="font-size: 24rpx;">
					{{ item.shopTypeName }}
				</view> -->
				<view :class="{'fw-600 fs-26': item.isChecked }" style="font-size: 24rpx;">
					{{ item.shopTypeName }}
				</view>
			</view>
		</scroll-view>

		<view class="module_3">
			<scroll-view scroll-x="true"
				style="white-space: nowrap; width: 100%; overflow: hidden;">
				<view class="filter_">
					<template v-for="(item,index) in filterData">
						<view class="filter-item" :class="{'filter-item-active': item.state}"  @click="filterItem(item)">
							<text class="filter-item-text"
								:class="{'filter-itemtext-active': item.state}">{{ item.name }}</text>
						</view>
					</template>
				</view>
			</scroll-view>
			<!-- <view class="filter-icon">
				<image style="width: 28rpx; height: 24rpx; margin-right: 8rpx;" src="../../static/shaixuan.png" mode=""></image>
			</view> -->
		</view>
		<view class="" style="width: 100%; height: 24rpx; background-color: F2F3F4; box-sizing: border-box;"></view>
	</view>
</template>

<script>
	export default {
		props: {
			scrollTopt: {
				type: Number
			},
			indexID: {
				type: String
			},
			filtrateList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		components: {

		},
		data() {
			return {
				scrollTop: 0,
				enable: true, //是否吸顶
				offsetTop: '0',
				// filtrateData: [],
				filterData: [{
						"name": "距离最近",
						"state": true,
						"id": 1
					},
					// {
					// 	"name": "起送最低",
					// 	"state": false,
					// 	"id": 2
					// },
					// {
					// 	"name": "人均最高",
					// 	"state": false,
					// 	"id": 3
					// },
					// {
					// 	"name": "人均最低",
					// 	"state": false,
					// 	"id": 4
					// },
					{
						"name": "销量最高",
						"state": false,
						"id": 5
					},
					{
						"name": "评分最高",
						"state": false,
						"id": 7
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			// 筛选
			filterItem(item){
				// console.log(item)
				for (var i = 0; i < this.filterData.length; i++) {
					this.filterData[i].state = false
				};
				item.state = true;
				this.$emit('sendSortType', item.id)
			},
			clickItem(item, index) {
				// console.log(item.shopTypeId)
				for (var i = 0; i < this.filtrateList.length; i++) {
					this.filtrateList[i].isChecked = false
				}
				// this.filtrateList[index].isChecked = true
				this.$set(this.filtrateList[index], 'isChecked', true);
				this.$emit('sendShopTypeId', item.shopTypeId)
			}
			//       initFiltrateData() {
			// 	switch(this.indexID) {
			// 	     case '0':
			// 	        this.filtrateData = [
			// 	        	{
			// 	        		'name': '全部',
			// 	        		'pic':'/static/ms_sx_all.png'
			// 	        	},
			// 	        	{
			// 	        		'name': '淮扬菜系',
			// 	        		'pic':'/static/ms_sx_1.png'
			// 	        	},
			// 	        	{
			// 	        		'name': '海鲜精品',
			// 	        		'pic':'/static/ms_sx_2.png'
			// 	        	},
			// 	        	{
			// 	        		'name': '品质西餐',
			// 	        		'pic':'/static/ms_sx_3.png'
			// 	        	},
			// 	        	{
			// 	        		'name': '海鲜精品',
			// 	        		'pic':'/static/ms_sx_4.png'
			// 	        	}
			// 	        ];
			// 	        break;
			// 		case '1':
			// 		   this.filtrateData = [
			// 			{
			// 				'name': '全部',
			// 				'pic':'/static/yzc_sx_all.png'
			// 			},
			// 			{
			// 				'name': '速烹菜',
			// 				'pic':'/static/yzc_sx_spc.png'
			// 			},
			// 			{
			// 				'name': '即热菜',
			// 				'pic':'/static/yzc_sx_jrc.png'
			// 			},
			// 			{
			// 				'name': '预制食材',
			// 				'pic':'/static/yzc_sx_yzsc.png'
			// 			},
			// 			{
			// 				'name': '主食小吃',
			// 				'pic':'/static/yzc_sx_zsxc.png'
			// 			},
			// 			{
			// 				'name': '火锅食材',
			// 				'pic':'/static/yzc_sx_hgsc.png'
			// 			}
			// 		   ];
			// 		   break;
			// 		   case '2':
			// 		      this.filtrateData = [
			// 		   	{
			// 		   		'name': '全部',
			// 		   		'pic':'/static/sszy_sx_1.png'
			// 		   	},
			// 		   	{
			// 		   		'name': '全素素食',
			// 		   		'pic':'/static/sszy_sx_2.png'
			// 		   	},
			// 		   	{
			// 		   		'name': '奶蛋素食',
			// 		   		'pic':'/static/sszy_sx_3.png'
			// 		   	},
			// 		   	{
			// 		   		'name': '果蔬沙拉',
			// 		   		'pic':'/static/sszy_sx_4.png'
			// 		   	},
			// 		   	{
			// 		   		'name': '特色斋菜',
			// 		   		'pic':'/static/sszy_sx_5.png'
			// 		   	},
			// 		   	{
			// 		   		'name': '减脂简餐',
			// 		   		'pic':'/static/sszy_sx_6.png'
			// 		   	}
			// 		      ];
			// 		  break;
			// 	     case '3':
			// 	        this.filtrateData = [
			// 	        	{
			// 	        		'name': '全部',
			// 	        		'pic':'/static/td_sx_all.png'
			// 	        	},
			// 	        	{
			// 	        		'name': '奶茶果汁',
			// 	        		'pic':'/static/td_sx_gz.png'
			// 	        	},
			// 	        	{
			// 	        		'name': '面包糕点',
			// 	        		'pic':'/static/td_sx_gd.png'
			// 	        	},
			// 	        	{
			// 	        		'name': '醒脑咖啡',
			// 	        		'pic':'/static/td_sx_kf.png'
			// 	        	},
			// 	        	{
			// 	        		'name': '冰凉甜品',
			// 	        		'pic':'/static/td_sx_tp.png'
			// 	        	},
			// 	        	{
			// 	        		'name': '水凉甜品',
			// 	        		'pic':'/static/td_sx_s.png'
			// 	        	}
			// 	        ]
			// 	        break;
			// 		case '6':
			// 		   this.filtrateData = [
			// 		   	{
			// 		   		'name': '全部',
			// 		   		'pic':'/static/sjzz_sx_1.png'
			// 		   	},
			// 		   	{
			// 		   		'name': '新品推荐',
			// 		   		'pic':'/static/sjzz_sx_2.png'
			// 		   	},
			// 		   	{
			// 		   		'name': '热卖榜单',
			// 		   		'pic':'/static/sjzz_sx_3.png'
			// 		   	},
			// 		   	{
			// 		   		'name': '文创产品',
			// 		   		'pic':'/static/sjzz_sx_4.png'
			// 		   	},
			// 		   	{
			// 		   		'name': '节日礼盒',
			// 		   		'pic':'/static/sjzz_sx_5.png'
			// 		   	},
			// 		   	{
			// 		   		'name': '方便速食',
			// 		   		'pic':'/static/sjzz_sx_6.png'
			// 		   	}
			// 		   ]
			// 		   break;
			// 	     default:
			// 	        this.filtrateData = []
			// 	} 
			// }
		},
		mounted() {
			// this.initFiltrateData();
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
			//获取距离顶部距离
			// const scrollTop = res.scrollTop;
			// if (scrollTop >= 0) {
			// 	// 导航条颜色透明渐变
			// 	if (scrollTop <= 20) {
			// 		this.opacityNum = 0
			// 	} else if (20 < scrollTop && scrollTop <= 100) {
			// 		this.opacityNum = scrollTop / 100
			// 	} else if (scrollTop > 100) {
			// 		this.opacityNum = 1
			// 	}
			// }
			// console.log("zujian:")
			// console.log(this.scrollTop)

		},
	}
</script>

<style scoped>
	.filtrate-type {
		/* width: 710rpx; */
		background-color: #F2F3F4;
		box-sizing: border-box;
		/* transition: width 1s; */
	}

	.fs-28 {
		font-size: 28rpx !important;
	}
	
	.fs-26 {
		font-size: 26rpx !important;
	}
	
	.fw-600 {
		font-weight: 600;
	}

	.col {
		color: red;
	}

	.module_3 {
		display: flex;
		/* padding-left: 22rpx; */
		/* padding-right: 30rpx; */
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		/* background-color: #F5F5F5 */
		margin-top: 12rpx;
		box-sizing: border-box;
	}

	.filter_ {
		display: flex;
		flex-direction: row;
		box-sizing: border-box;

	}

	.filter-item {
		height: 58rpx;
		padding: 12rpx 32rpx;
		background-color: #FEFFFF;
		margin-right: 26rpx;
		border-radius: 10rpx;
		display: flex;
		box-sizing: border-box;
		align-items: center;
	}

	.filter-item-active {
		/* background: linear-gradient(to right, #FFE471, #FCAD00) !important; */
		background: #FFE471!important;
	}

	.filter-itemtext-active {
		color: #000000 !important;
	}

	.filter-item-text {
		color: #56575B;
		font-size: 24rpx;
	}
	.background-color-active {
		background: linear-gradient(to bottom, #ffdfc7, #fff5ed) !important;
		/* color: #fff5ed; */
	}
</style>
