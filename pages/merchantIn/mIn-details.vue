<template>
	<view class="mIn-details">
		<!-- 审核状态 -->
		<view class="check-state">
			<view v-if="shopInfo.status == 1" class="show-state state-ing">审核中</view>
			<view v-if="shopInfo.status == 2" class="show-state state-isPass">审核通过</view>
			<view v-if="shopInfo.status == 3" class="show-state state-isNotpass">审核驳回</view>
			<view v-if="shopInfo.status == 3 && shopInfo.approvalOpinions" class="opinion">
				{{ shopInfo.approvalOpinions }}
			</view>
		</view>
		<!-- 店铺信息 -->
		<view class="store-info">
			<view class="title">
				店铺信息
			</view>
			<view class="content">
				<view class="item">
					<view class="label">
						店铺品类
					</view>
					<view class="cont">
						{{ shopInfo.typeName }}、{{ shopInfo.typeNameSide }}
					</view>
				</view>
				<view class="item">
					<view class="label">
						店铺名称
					</view>
					<view class="cont">
						{{ shopInfo.name }}
					</view>
				</view>
				<view class="item">
					<view class="label">
						详细地址
					</view>
					<view class="cont">
						{{ shopInfo.address }}
					</view>
				</view>
				<!-- <view class="item">
					<view class="label">
						联系人
					</view>
					<view class="cont">
						{{ shopInfo.idcardName }}
					</view>
				</view> -->
				<view class="item">
					<view class="label">
						联系电话
					</view>
					<view class="cont">
						{{ shopInfo.tel }}
					</view>
				</view>
				<view class="item">
					<view class="label">
						店铺所在区域
					</view>
					<view class="cont">
						{{ shopInfo.areaName }}
					</view>
				</view>
			</view>
		</view>
		<!-- 附件 -->
		<view class="accessory">
			<view class="title">
				附件<text class="previewImg">（点击查看大图）</text>
			</view>
			<view class="content">
				<view class="item">
					<view class="label">
						1. 实体店铺图：
					</view>
					<view class="cont" style="" @click="previewImg(1)">
						<!-- <image :src="shopInfo.doorPic" alt=""></image> -->
						<uni-swiper-dot class="uni-swiper-dot-box" style="height: 100%;">
							<swiper class="swiper-box" :current="0">
								<swiper-item v-for="(iitem, index) in enviroPicList" :key="index">
									<image :src="iitem.filePath" alt=""></image>
								</swiper-item>
							</swiper>
						</uni-swiper-dot>
					</view>
				</view>
				<view class="">
					<view class="item">
						<view class="label">
							2. 法人身份证：
						</view>
						<view class="cont" @click="previewImg(2)">
							<!-- <image :src="shopInfo.legalCardPic" alt=""></image> -->
							<uni-swiper-dot class="uni-swiper-dot-box" style="height: 100%;">
								<swiper class="swiper-box" :current="0">
									<swiper-item v-for="(iitem, index) in legalCardPicList" :key="index">
										<image :src="iitem.filePath" alt=""></image>
									</swiper-item>
								</swiper>
							</uni-swiper-dot>
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							姓 名
						</view>
						<view class="cont">
							{{ shopInfo.idcardName }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							性 别
						</view>
						<view class="cont">
							{{ shopInfo.idcardSex }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							民 族
						</view>
						<view class="cont">
							{{ shopInfo.idcardNation }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							出生日期
						</view>
						<view class="cont">
							{{ shopInfo.idcardBirth }}
						</view>
					</view>

					<view class="return-info">
						<view class="label">
							住 址
						</view>
						<view class="cont">
							{{ shopInfo.idcardAddress }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							公民身份号码
						</view>
						<view class="cont">
							{{ shopInfo.idcardNum }}
						</view>
					</view>
				</view>
				<view class="">
					<view class="item">
						<view class="label">
							3. 营业执照：
						</view>
						<view class="cont" @click="previewImg(3)">
							<!-- <image :src="shopInfo.businessLicensePic" alt=""></image> -->
							<uni-swiper-dot class="uni-swiper-dot-box" style="height: 100%;">
								<swiper class="swiper-box" :current="0">
									<swiper-item v-for="(iitem, index) in businessLicensePicList" :key="index">
										<image :src="iitem.filePath" alt=""></image>
									</swiper-item>
								</swiper>
							</uni-swiper-dot>
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							经营范围
						</view>
						<view class="cont">
							{{ shopInfo.licenseNature }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							法人
						</view>
						<view class="cont">
							{{ shopInfo.licenseLegalName }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							证件编号
						</view>
						<view class="cont">
							{{ shopInfo.licenseNum }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							注册资本
						</view>
						<view class="cont">
							{{ shopInfo.licenseRegistMoney }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							单位名称
						</view>
						<view class="cont">
							{{ shopInfo.licenseCompanyName }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							有效期
						</view>
						<view class="cont">
							{{ shopInfo.licenseValidDate }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							社会信用代码
						</view>
						<view class="cont">
							{{ shopInfo.licenseCode }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							核准日期
						</view>
						<view class="cont">
							{{ shopInfo.licenseApprovalDate }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							成立日期
						</view>
						<view class="cont">
							{{ shopInfo.licenseEstablishDate }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							类型
						</view>
						<view class="cont">
							{{ shopInfo.licenseType }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							地址
						</view>
						<view class="cont">
							{{ shopInfo.licenseAddress }}
						</view>
					</view>
				</view>
				<view class="item">
					<view class="label">
						4. 许可证：
					</view>
					<view class="cont" @click="previewImg(4)">
						<!-- <image :src="shopInfo.licencePic" alt=""></image> -->
						<uni-swiper-dot class="uni-swiper-dot-box" style="height: 100%;">
							<swiper class="swiper-box" :current="0">
								<swiper-item v-for="(iitem, index) in licencePicList" :key="index">
									<image :src="iitem.filePath" alt=""></image>
								</swiper-item>
							</swiper>
						</uni-swiper-dot>
					</view>
				</view>
				<view class="">
					<view class="item">
						<view class="label">
							5. 法人或公司帐户银行卡：
						</view>
						<view class="cont" @click="previewImg(5)">
							<!-- <image :src="shopInfo.bankPic" alt=""></image> -->
							<uni-swiper-dot class="uni-swiper-dot-box" style="height: 100%;">
								<swiper class="swiper-box" :current="0">
									<swiper-item v-for="(iitem, index) in bankPicList" :key="index">
										<image :src="iitem.filePath" alt=""></image>
									</swiper-item>
								</swiper>
							</uni-swiper-dot>
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							银行名称
						</view>
						<view class="cont">
							{{ shopInfo.bankName }}
						</view>
					</view>
					<view class="return-info">
						<view class="label">
							银行卡号
						</view>
						<view class="cont">
							{{ shopInfo.bankNum }}
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 其他材料 -->
		<!-- <view class="others">
			<view class="title">
				其他材料<text class="previewImg">（点击查看大图）</text>
			</view>
			<view class="content">
				<view class="item">
					<view class="label">
						·（美食城门店）特殊资质
					</view>
					<view class="cont">
						<image src="../../static/mine/sjrz_ep1.png" alt=""></image>
					</view>
				</view>
				<view class="item">
					<view class="label">
						·（品牌门店）商标授权书
					</view>
					<view class="cont">
						<image src="../../static/mine/sjrz_ep1.png" alt=""></image>
					</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	// import footprintItem from "./footprint-item.vue"
	import shopApply from '@/api/shopApply/shopApply.js'; // 引入api
	import file from '@/api/file/file.js'
	export default {
		components: {
			// footprintItem
		},
		data() {
			return {
				shopInfo: {},
				enviroPicList: [],
				legalCardPicList: [],
				businessLicensePicList: [],
				licencePicList: [],
				bankPicList: [],
			}
		},
		onLoad: function(option) {
			this.getShopInfo();
		},
		methods: {
			getShopInfo() {
				shopApply.getShopById().then(res => {
					if (res.code == 200) {
						// status: "2"  状态1申请中2审核通过3审核不通过 approvalOpinions
						this.shopInfo = res.data;
						// console.log(this.shopInfo.status)
						// #ifdef APP-PLUS
						if (this.shopInfo.status == 2) {
							let webView = this.$mp.page.$getAppWebview();
							webView.setTitleNViewButtonStyle(0, {
								"text": '',
								"width": "0px"
							});
						}
						// #endif
						this.getFileUrl_forEv(res.data.enviroPic);
						this.getFileUrl_forLc(res.data.legalCardPic);
						this.getFileUrl_forBl(res.data.businessLicensePic);
						this.getFileUrl_forLi(res.data.licencePic);
						this.getFileUrl_forBk(res.data.bankPic);
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			// 获取文件地址（图片）
			getFileUrl_forEv(fileid) {
				file.getFileUrl(fileid).then(res => {
					if (res.code == 200) {
						this.enviroPicList = res.rows;
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			getFileUrl_forLc(fileid) {
				file.getFileUrl(fileid).then(res => {
					if (res.code == 200) {
						this.legalCardPicList = res.rows;
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			getFileUrl_forBl(fileid) {
				file.getFileUrl(fileid).then(res => {
					if (res.code == 200) {
						this.businessLicensePicList = res.rows;
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			getFileUrl_forLi(fileid) {
				file.getFileUrl(fileid).then(res => {
					if (res.code == 200) {
						this.licencePicList = res.rows;
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			getFileUrl_forBk(fileid) {
				file.getFileUrl(fileid).then(res => {
					if (res.code == 200) {
						this.bankPicList = res.rows;
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			previewImg(type) {
				// console.log(type);
				let urls = [];
				switch (type) {
					case 1:
						for (var i = 0; i < this.enviroPicList.length; i++) {
							urls.push(this.enviroPicList[i].filePath);
						}
						break;
					case 2:
						for (var i = 0; i < this.legalCardPicList.length; i++) {
							urls.push(this.legalCardPicList[i].filePath);
						}
						break;
					case 3:
						for (var i = 0; i < this.businessLicensePicList.length; i++) {
							urls.push(this.businessLicensePicList[i].filePath);
						}
						break;
					case 4:
						for (var i = 0; i < this.licencePicList.length; i++) {
							urls.push(this.licencePicList[i].filePath);
						}
						break;
					default:
						for (var i = 0; i < this.bankPicList.length; i++) {
							urls.push(this.bankPicList[i].filePath);
						}
						break;
				}
				uni.previewImage({
					urls,
					// longPressActions: {
					// 	itemList: ['发送给朋友', '保存图片', '收藏'],
					// 	success: function(data) {
					// 		console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
					// 	},
					// 	fail: function(err) {
					// 		console.log(err.errMsg);
					// 	}
					// }
				});
			},
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;

		},
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {
			// console.log(e)
			uni.navigateTo({
				url: '../merchantIn/merchant-edit',
			});
		}
		// #endif
	}
</script>

<style lang="scss" scoped>
	.mIn-details {
		background-color: #ffffff;
		padding-bottom: 100rpx;

		.check-state {
			padding: 54rpx 22rpx 36rpx;
			box-sizing: border-box;
			border-bottom: 0.1rpx solid #E3E3E3;

			.show-state {
				width: 100%;
				height: 66rpx;
				line-height: 66rpx;



				border-radius: 8rpx;
				font-size: 26rpx;
				font-weight: 500;
				color: #FFFFFF;
				text-align: center;
				letter-spacing: 2rpx;
			}

			.state-ing {
				background: #A7A7A7;
			}

			.state-isPass {
				background: #4BBA46;
			}

			.state-isNotpass {
				background: #B50000;
			}

			.opinion {
				width: 100%;
				min-height: 164rpx;
				background: #F8F8F8;
				border-radius: 8rpx;
				padding: 14rpx 12rpx;
				box-sizing: border-box;
				margin-top: 16rpx;
			}
		}

		.store-info {
			padding: 50rpx 22rpx 0;
			box-sizing: border-box;

			.title {
				font-size: 36rpx;
				font-weight: 600;
				color: #000000;
				letter-spacing: 1rpx;
			}

			.content {
				box-sizing: border-box;
				padding: 32rpx 26rpx 0;

				.item {
					display: flex;
					padding: 20rpx 0;
					box-sizing: border-box;
					border-bottom: 0.1rpx solid rgba(227, 227, 227, 0.44);

					.label {
						width: 200rpx;
						font-size: 28rpx;
						font-weight: 400;
						color: #000000;
					}

					.cont {
						width: 450rpx;
						font-size: 28rpx;
						font-weight: 400;
						color: #848282;
					}
				}
			}
		}

		.accessory,
		.others {
			padding: 50rpx 22rpx 0;
			box-sizing: border-box;

			.title {
				font-size: 36rpx;
				font-weight: 600;
				color: #000000;
				letter-spacing: 1rpx;

				.previewImg {
					font-size: 24rpx;
					font-weight: 400;
					color: #BABABA;
				}
			}

			.content {
				box-sizing: border-box;
				padding: 12rpx 58rpx 0 28rpx;

				>view {
					padding: 20rpx 0;
					border-bottom: 0.1rpx solid rgba(227, 227, 227, 0.44);
				}

				.return-info {
					display: flex;
					padding: 26rpx 22rpx;
					box-sizing: border-box;

					.label {
						width: 220rpx;
						font-size: 28rpx;
						font-weight: 400;
						color: #000000;
					}

					.cont {
						width: 430rpx;
						font-size: 28rpx;
						font-weight: 400;
						color: #848282;
					}
				}

				.item {
					display: flex;
					align-items: center;
					padding: 20rpx 0;
					box-sizing: border-box;
					// border-bottom: 0.1rpx solid rgba(227, 227, 227, 0.44);

					.label {
						width: 400rpx;
						font-size: 28rpx;
						font-weight: 400;
						color: #000000;
					}

					.cont {
						width: 220rpx;
						height: 160rpx;
						background: #F3F7FA;
						border-radius: 14rpx;
						padding: 20rpx 12rpx;
						box-sizing: border-box;
						overflow: hidden;

						image {
							width: 196rpx;
							height: 120rpx;
						}
					}
				}
			}
		}
	}
</style>
