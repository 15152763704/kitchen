<template>
	<view class="will-open">
		<!-- banner + 流程 -->
		<view class="open-process">
			<view class="steps">
				<view class="steps-item" v-for="(item,index) in steps" :key="index + '1'">
					<image style="width: 38rpx;" :src="item.imgUrl" mode="widthFix"></image>
					<view class="">
						<text>{{ item.name }}</text>
					</view>
					<view class="line" v-if="index < 2">

					</view>
				</view>
			</view>
		</view>
		<!-- 填写材料 -->
		<view class="fillIn-material">
			<view class="tit">
				<text>填写材料</text>
			</view>
			<view class="form-cont">
				<view class="common-info">
					<view class="item">
						<view class="i-label">
							<text class="required">*</text><text>店铺名称</text>
						</view>
						<view class="i-input">
							<uni-easyinput style="" :inputBorder="false" v-model="osForm.name"
								:placeholderStyle="placeholderStyle" placeholder="请输入店铺名称" />
						</view>
					</view>
					<text v-show="!osForm.name && errShowFlag" class="text-error">店铺名称不能为空</text>
					<view class="item">
						<view class="i-label">
							<text class="required">*</text><text>详细地址</text>
						</view>
						<view class="i-input">
							<uni-easyinput style="" :inputBorder="false" v-model="osForm.address"
								:placeholderStyle="placeholderStyle" placeholder="请输入店铺地址" />
						</view>
					</view>
					<text v-show="!osForm.address && errShowFlag" class="text-error">店铺地址不能为空</text>
					<view class="item">
						<view class="i-label">
							<text class="required">*</text><text>联系电话</text>
						</view>
						<view class="i-input">
							<uni-easyinput style="" type="number" :inputBorder="false" v-model="osForm.tel"
								:placeholderStyle="placeholderStyle" placeholder="请输入联系电话" />
						</view>
					</view>
					<text v-show="!osForm.tel && errShowFlag" class="text-error">联系电话不能为空</text>
					<view class="item">
						<view class="i-label">
							<text class="required">*</text><text>店铺所在区域</text>
						</view>
						<view class="i-input" style="display: flex; justify-content: flex-end;" @click="chooseLocation">
							<view class="area" style="min-height: 72rpx;">
								<text style="">{{ osForm.areaName }}</text>
								<image style="width: 11rpx;" src="../../static/mine/right.png" mode="widthFix"></image>
							</view>
						</view>
					</view>
					<text v-show="!osForm.areaName && errShowFlag" class="text-error">店铺所在区域不能为空</text>
				</view>
				<view class="photo-info">
					<view class="" v-for="(item,index) in photoInfo" :key="index + 1" style="margin-bottom: 80rpx;">
						<view class="item">
							<!-- 左 实景图 -->
							<view class="photo">
								<image style="width: 274rpx; height: 200rpx; border-radius: 8rpx;" :src="item.photoUrl"
									mode=""></image>
								<image style="width: 68rpx; position: absolute; top: 0; left: 0;"
									src="../../static/mine/sjrz_ep.png" mode="widthFix"></image>
							</view>
							<!-- <view class="photo" v-else>
								<image style="width: 274rpx; height: 200rpx; border-radius: 8rpx;" :src="item.url" mode="">
								</image>
							</view> -->
							<!-- 右 信息 -->
							<view class="intro">
								<view class="">
									<text class="required">*</text>
									<text class="tit">{{ index+1 }}. {{ item.name }}</text>
								</view>
								<text class="cont">{{ item.intro }}</text>
								<text v-show="!item.urls.length && errShowFlag" class="image-error">{{ item.name }}不能为空</text>
								<text class="toUpload" @click="onUploadPic(index)">去上传</text>
							</view>
						</view>
						<view class="img-preview" v-for="(iitem,iindex) in item.urls">
							<image @click="previewImg(item)" class="photo" :src="iitem.filePath" mode=""></image>
							<image style="position: absolute; top: -10rpx; right: -10rpx; width: 40rpx;"
								src="../../static/shopCar/delete_fill.png" mode="widthFix"
								@click="deleteImg(index, iindex, iitem)"></image>
						</view>
						<!-- 识别图像反馈的信息 -->
						<view v-if="index == 2" class="" style="padding: 0 26rpx; box-sizing: border-box;">
							<view class="return-info">
								<view class="label">
									姓 名
								</view>
								<view class="cont">
									<!-- {{ osForm.idcardName }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.idcardName"
										:placeholderStyle="placeholderStyle" placeholder="请输入姓名" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									性 别
								</view>
								<view class="cont">
									<!-- {{ osForm.idcardSex }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.idcardSex"
										:placeholderStyle="placeholderStyle" placeholder="请输入性别" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									民 族
								</view>
								<view class="cont">
									<!-- {{ osForm.idcardNation }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.idcardNation"
										:placeholderStyle="placeholderStyle" placeholder="请输入民族" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									出生日期
								</view>
								<view class="cont">
									<!-- {{ osForm.idcardBirth }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.idcardBirth"
										:placeholderStyle="placeholderStyle" placeholder="请输入出生日期" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									住 址
								</view>
								<view class="cont">
									<!-- {{ osForm.idcardAddress }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.idcardAddress"
										:placeholderStyle="placeholderStyle" placeholder="请输入家庭住址" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									公民身份号码
								</view>
								<view class="cont">
									<!-- {{ osForm.idcardNum }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.idcardNum"
										:placeholderStyle="placeholderStyle" placeholder="请输入公民身份号码" />
								</view>
							</view>
							
						</view>
						<view v-if="index == 3" class="" style="padding: 0 26rpx; box-sizing: border-box;">
							<view class="return-info">
								<view class="label">
									证件编号
								</view>
								<view class="cont">
									<!-- {{ osForm.licenseNum }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.licenseNum"
										:placeholderStyle="placeholderStyle" placeholder="请输入证件编号" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									注册资本
								</view>
								<view class="cont">
									<!-- {{ osForm.licenseRegistMoney }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.licenseRegistMoney"
										:placeholderStyle="placeholderStyle" placeholder="请输入注册资本" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									单位名称
								</view>
								<view class="cont">
									<!-- {{ osForm.licenseCompanyName }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.licenseCompanyName"
										:placeholderStyle="placeholderStyle" placeholder="请输入单位名称" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									法人代表
								</view>
								<view class="cont">
									<!-- {{ osForm.licenseLegalName }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.licenseLegalName"
										:placeholderStyle="placeholderStyle" placeholder="请输入法人代表" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									有效期
								</view>
								<view class="cont">
									<!-- {{ osForm.licenseValidDate }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.licenseValidDate"
										:placeholderStyle="placeholderStyle" placeholder="请输入有效期" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									社会信用代码
								</view>
								<view class="cont">
									<!-- {{ osForm.licenseCode }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.licenseCode"
										:placeholderStyle="placeholderStyle" placeholder="请输入社会信用代码" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									核准日期
								</view>
								<view class="cont">
									<!-- {{ osForm.licenseApprovalDate }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.licenseApprovalDate"
										:placeholderStyle="placeholderStyle" placeholder="请输入核准日期" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									成立日期
								</view>
								<view class="cont">
									<!-- {{ osForm.licenseEstablishDate }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.licenseEstablishDate"
										:placeholderStyle="placeholderStyle" placeholder="请输入成立日期" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									类 型
								</view>
								<view class="cont">
									<!-- {{ osForm.licenseType }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.licenseType"
										:placeholderStyle="placeholderStyle" placeholder="请输入类型" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									地 址
								</view>
								<view class="cont">
									<!-- {{ osForm.licenseAddress }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.licenseAddress"
										:placeholderStyle="placeholderStyle" placeholder="请输入地址" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									经营范围
								</view>
								<view class="cont">
									<!-- {{ osForm.licenseNature }} -->
									<uni-easyinput type="textarea" :autoHeight="true" style="" :inputBorder="false" v-model="osForm.licenseNature"
										:placeholderStyle="placeholderStyle" placeholder="请输入经营范围" />
								</view>
							</view>
						</view>
						<view v-if="index == 5" class="" style="padding: 0 26rpx; box-sizing: border-box;">
							<view class="return-info">
								<view class="label">
									银行名称
								</view>
								<view class="cont">
									<!-- {{ osForm.bankName }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.bankName"
										:placeholderStyle="placeholderStyle" placeholder="请输入银行名称" />
								</view>
							</view>
							<view class="return-info">
								<view class="label">
									银行卡号
								</view>
								<view class="cont">
									<!-- {{ osForm.bankNum }} -->
									<uni-easyinput style="" :inputBorder="false" v-model="osForm.bankNum"
										:placeholderStyle="placeholderStyle" placeholder="请输入银行卡号" />
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="isSelected">
			<view class="isRead">
				<!-- <view class="">
					<checkbox-group @change="checkboxChange">
						<checkbox color="#FFBD2B" :checked="isRead" style="transform:scale(0.7)" />
					</checkbox-group>
				</view>
				<view class="">
					<text>我已阅读并同意<uni-link fontSize="12" href="#" text="《外卖开店说明》" showUnderLine="false" color="#FFBD2B">
						</uni-link></text>
				</view> -->
			</view>
			<text class="submit" @click="submit()">提交</text>
		</view>
	</view>
</template>

<script>
	// import footprintItem from "./footprint-item.vue"
	import shopApply from '@/api/shopApply/shopApply.js'; // 引入api
	import file from '@/api/file/file.js'
	import * as util from '@/common/util.js'
	var returnIP = util.returnIP;
	export default {
		components: {
			// footprintItem
		},
		data() {
			return {
				errShowFlag: false,
				steps: [{
						imgUrl: '/static/mine/sjrz_step1.png',
						name: '提交申请'
					},
					{
						imgUrl: '/static/mine/sjrz_step2.png',
						name: '平台审核'
					},
					{
						imgUrl: '/static/mine/sjrz_step3.png',
						name: '开门营业'
					}
				],
				osForm: {
					name: '', //  店铺名称
					address: '', //  店铺地址
					tel: null, //  联系电话
					latitude: '', //  纬度
					longitude: '', //  经度
					areaName: '',
					bankPic: '', // 法人或对公账号卡号图片id
					businessLicensePic: '', // 营业执照图片id
					doorPic: '', // 店面门面图片id
					enviroPic: '', // 店铺环境图片id
					legalCardPic: '', // 法人身份证图片id,
					licencePic: '', //许可证图片id,
					typeId: '',
					typeIdSide: '',
					typeName: '',
					typeNameSide: ''
				},
				placeholderStyle: 'font-size: 28rpx; color: #BABABA;',
				photoInfo: [{
						photoUrl: '../../static/mine/sjrz_ep1.png',
						name: '店铺门头',
						intro: '需提供有完整牌匾的门脸图和真实 用餐环境图',
						fileId: '',
						urls: ''
					},
					{
						photoUrl: '../../static/mine/sjrz_ep1.png',
						name: '店铺环境',
						intro: '需提供有完整牌匾的门脸图和真实 用餐环境图',
						fileId: '',
						urls: ''
					},
					{
						photoUrl: '../../static/mine/sjrz_ep3.png',
						name: '法人身份证',
						intro: '需提供营业执照法人的身份证 人像面',
						fileId: '',
						urls: ''
					},
					{
						photoUrl: '../../static/mine/sjrz_ep4.png',
						name: '营业执照',
						intro: '需提供有效的营业执照，或其他监 管部门认可的具有与营业执照同等 法律效力的证件',
						fileId: '',
						urls: ''
					},
					{
						photoUrl: '../../static/mine/sjrz_ep4.png',
						name: '许可证',
						intro: '需提供有效的许可证明或同等 法律效力的证件',
						fileId: '',
						urls: ''
					},
					{
						photoUrl: '../../static/mine/sjrz_ep5.png',
						name: '法人或对公账号',
						intro: '需提供法人名下的银行卡或同名公司帐户用于营业后收款、结算',
						fileId: '',
						urls: ''
					}
				],
				// isRead: false,
			}
		},
		onLoad: function(option) {
			// console.log(option);
			this.osForm.typeId = option.typeId;
			this.osForm.typeIdSide = option.typeIdSide;
			this.osForm.typeName = option.typeName;
			this.osForm.typeNameSide = option.typeNameSide;
			this.getShopInfo();
			// this.init();
		},
		methods: {
			// checkboxChange(e) {
			// 	this.isRead = !this.isRead;
			// },
			// 识别身份证
			getAiIdCard(imageUrl) {
				file.getAiIdCard(imageUrl).then(res => {
					if (res.code == 200) {
						if (res.words_result.住址) this.$set(this.osForm, 'idcardAddress', res.words_result.住址
							.words)
						if (res.words_result.公民身份号码) this.$set(this.osForm, 'idcardNum', res.words_result.公民身份号码
							.words)
						if (res.words_result.出生) this.$set(this.osForm, 'idcardBirth', res.words_result.出生.words)
						if (res.words_result.姓名) this.$set(this.osForm, 'idcardName', res.words_result.姓名.words)
						if (res.words_result.性别) this.$set(this.osForm, 'idcardSex', res.words_result.性别.words)
						if (res.words_result.民族) this.$set(this.osForm, 'idcardNation', res.words_result.民族
							.words)
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			// 识别营业执照
			getAiLicense(imageUrl) {
				file.getAiLicense(imageUrl).then(res => {
					if (res.code == 200) {
						if (res.words_result.经营范围) this.$set(this.osForm, 'licenseNature', res.words_result.经营范围
							.words)
						if (res.words_result.法人) this.$set(this.osForm, 'licenseLegalName', res.words_result.法人
							.words)
						if (res.words_result.证件编号) this.$set(this.osForm, 'licenseNum', res.words_result.证件编号
							.words)
						if (res.words_result.注册资本) this.$set(this.osForm, 'licenseRegistMoney', res.words_result
							.注册资本.words)
						if (res.words_result.单位名称) this.$set(this.osForm, 'licenseCompanyName', res.words_result
							.单位名称.words)
						if (res.words_result.有效期) this.$set(this.osForm, 'licenseValidDate', res.words_result.有效期
							.words)
						if (res.words_result.社会信用代码) this.$set(this.osForm, 'licenseCode', res.words_result
							.社会信用代码.words)
						if (res.words_result.核准日期) this.$set(this.osForm, 'licenseApprovalDate', res.words_result
							.核准日期.words)
						if (res.words_result.成立日期) this.$set(this.osForm, 'licenseEstablishDate', res
							.words_result.成立日期.words)
						if (res.words_result.类型) this.$set(this.osForm, 'licenseType', res.words_result.类型.words)
						if (res.words_result.地址) this.$set(this.osForm, 'licenseAddress', res.words_result.地址
							.words)
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			// 识别银行卡
			getAiBankCard(imageUrl) {
				file.getAiBankCard(imageUrl).then(res => {
					if (res.code == 200) {
						if (res.result.bank_card_number) this.$set(this.osForm, 'bankName', res.result
							.bank_card_number)
						if (res.result.bank_name) this.$set(this.osForm, 'bankNum', res.result.bank_name)
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			getShopInfo() {
				shopApply.getShopById().then(res => {
					if (res.code == 200) {
						this.osForm = res.data;
						// console.log(this.osForm)
						this.getFileUrl_forDoor(res.data.doorPic);
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
			getFileUrl_forDoor(fileid) {
				file.getFileUrl(fileid).then(res => {
					if (res.code == 200) {
						// this.doorPicList = res.rows;
						this.photoInfo[0].urls = res.rows;
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
			getFileUrl_forEv(fileid) {
				file.getFileUrl(fileid).then(res => {
					if (res.code == 200) {
						// this.enviroPicList = res.rows;
						this.photoInfo[1].urls = res.rows;
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
						// this.legalCardPicList = res.rows;
						this.photoInfo[2].urls = res.rows;
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
						// this.businessLicensePicList = res.rows;
						this.photoInfo[3].urls = res.rows;
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
						// this.licencePicList = res.rows;
						this.photoInfo[4].urls = res.rows;
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
						// this.bankPicList = res.rows;
						this.photoInfo[5].urls = res.rows;
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
			// 上传图片
			onUploadPic(index) {
				let _this = this;
				// console.log(index)
				let fieldName = '';
				switch (index) {
					case 0:
						fieldName = 'doorPic';
						break;
					case 1:
						fieldName = 'enviroPic';
						break;
					case 2:
						fieldName = 'legalCardPic';
						break;
					case 3:
						fieldName = 'businessLicensePic';
						break;
					case 4:
						fieldName = 'licencePic';
						break;
					case 5:
						fieldName = 'bankPic';
						break;
					default:
						break;
				}
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						// console.log(JSON.stringify(res.tempFilePaths));
						uni.uploadFile({
							url: returnIP() + 'file/uploadKitchen', //仅为示例，非真实的接口地址
							filePath: res.tempFilePaths[0],
							name: 'file',
							formData: {
								'fieldName': fieldName,
								'tableName': 'shop_apply'
							},
							header: {
								Authorization: 'Bearer ' + uni.getStorageSync('token_key'),
							},
							success: (uploadFileRes) => {
								// console.log(JSON.parse(uploadFileRes.data).data.fileId);
								// _this.photoInfo[index].fileId = JSON.parse(uploadFileRes.data).data
								// 	.fileId;
								switch (index) {
									case 0:
										_this.osForm.doorPic =
											_this.osForm.doorPic == null ?
											"" :
											_this.osForm.doorPic;
										_this.osForm.doorPic += `;${JSON.parse(uploadFileRes.data).data
											.fileId}`;
										// _this.osForm.doorPic = JSON.parse(uploadFileRes.data).data
										// 	.fileId;
										break;
									case 1:
										// fieldName = 'enviroPic';
										_this.osForm.enviroPic =
											_this.osForm.enviroPic == null ?
											"" :
											_this.osForm.enviroPic;
										_this.osForm.enviroPic += `;${JSON.parse(uploadFileRes.data).data
											.fileId}`;
										// _this.osForm.enviroPic = JSON.parse(uploadFileRes.data)
										// 	.data.fileId;
										break;
									case 2:
										// fieldName = '';
										_this.osForm.legalCardPic =
											_this.osForm.legalCardPic == null ?
											"" :
											_this.osForm.legalCardPic;
										_this.osForm.legalCardPic += `;${JSON.parse(uploadFileRes.data).data
											.fileId}`;
										// _this.osForm.legalCardPic = JSON.parse(uploadFileRes.data)
										// 	.data.fileId;
										// 识别身份证
										_this.getAiIdCard(JSON.parse(uploadFileRes.data).data.url);
										break;
									case 3:
										// fieldName = '';
										_this.osForm.businessLicensePic =
											_this.osForm.businessLicensePic == null ?
											"" :
											_this.osForm.businessLicensePic;
										_this.osForm.businessLicensePic += `;${JSON.parse(uploadFileRes.data).data
											.fileId}`;
										// _this.osForm.businessLicensePic = JSON.parse(uploadFileRes
										// 	.data).data.fileId;
										// 识别营业执照
										_this.getAiLicense(JSON.parse(uploadFileRes.data).data.url);
										break;
									case 4:
										// fieldName = '';
										_this.osForm.licencePic =
											_this.osForm.licencePic == null ?
											"" :
											_this.osForm.licencePic;
										_this.osForm.licencePic += `;${JSON.parse(uploadFileRes.data).data
											.fileId}`;
										// _this.osForm.licencePic = JSON.parse(uploadFileRes.data)
										// 	.data.fileId;
										break;
									case 5:
										// fieldName = '';
										_this.osForm.bankPic =
											_this.osForm.bankPic == null ?
											"" :
											_this.osForm.bankPic;
										_this.osForm.bankPic += `;${JSON.parse(uploadFileRes.data).data
											.fileId}`;
										// _this.osForm.bankPic = JSON.parse(uploadFileRes.data).data
										// 	.fileId;
										// 识别银行卡
										_this.getAiBankCard(JSON.parse(uploadFileRes.data).data.url);
										break;
									default:
										break;
								}
								let obj = {
									fileId: JSON.parse(uploadFileRes.data).data.fileId,
									fileName: JSON.parse(uploadFileRes.data).data.fileName,
									filePath: JSON.parse(uploadFileRes.data).data.url,
								}
								_this.photoInfo[index].urls.push(obj)
								// console.log(_this.photoInfo[index].urls)
							}
						});
					}
				});
			},
			// 删除图片
			deleteImg(index, iidex, iitem) {
				// console.log(index, iidex, iitem.fileId);
				// console.log(this.osForm.enviroPic);
				this.photoInfo[index].urls.splice(iidex, 1);
				switch (index) {
					case 0:
						// this.osForm.doorPic
						this.osForm.doorPic = this.osForm.doorPic.replace(`;${iitem.fileId}`, '');
						break;
					case 1:
						// this.osForm.enviroPic
						this.osForm.enviroPic = this.osForm.enviroPic.replace(`;${iitem.fileId}`, '');
						break;
					case 2:
						// this.osForm.legalCardPic
						this.osForm.legalCardPic = this.osForm.legalCardPic.replace(`;${iitem.fileId}`, '');
						break;
					case 3:
						// this.osForm.businessLicensePic
						this.osForm.businessLicensePic = this.osForm.businessLicensePic.replace(`;${iitem.fileId}`, '');
						break;
					case 4:
						// this.osForm.licencePic
						this.osForm.licencePic = this.osForm.licencePic.replace(`;${iitem.fileId}`, '');
						break;
					default:
						// this.osForm.bankPic
						this.osForm.bankPic = this.osForm.bankPic.replace(`;${iitem.fileId}`, '');
						break;
				}
			},
			previewImg(iitem) {
				// console.log(type);
				let urls = [];
				for (var i = 0; i < iitem.urls.length; i++) {
					urls.push(iitem.urls[i].filePath);
				}
				uni.previewImage({
					urls,
				});
			},
			// init() {
			// 	let _this = this;
			// 	uni.getLocation({
			// 		type: 'gcj02', // 谷歌地图使用 wgs84 坐标，其他地图使用 gcj02 坐标
			// 		success: (res) => {
			// 			if (res.errMsg == "getLocation:ok") {
			// 				// this.setMap(res)
			// 				// console.log(res)
			// 				var point = new plus.maps.Point(res.longitude, res.latitude);
			// 				plus.maps.Map.reverseGeocode(
			// 					point, {},
			// 					function(event) {
			// 						var address = event.address; // 转换后的地理位置
			// 						// var point = event.coord; // 转换后的坐标信息
			// 						// var coordType = event.coordType; // 转换后的坐标系类型
			// 						// console.log(address, 'address');
			// 						var reg = /.+?(省|市|自治区|自治州|县|区)/g;
			// 						// console.log(address.match(reg));
			// 						_this.osForm.areaName = address.match(reg).toString().split(",")[0] +
			// 							address.match(reg).toString().split(",")[1] + address.match(reg)
			// 							.toString().split(",")[2]
			// 					},
			// 					function(e) {}
			// 				);
			// 			}
			// 		}
			// 	});
			// },
			chooseLocation() {
				let _this = this;
				uni.chooseLocation({
					success: (res) => {
						// console.log(res)
						var point = new plus.maps.Point(res.longitude, res.latitude);
						plus.maps.Map.reverseGeocode(
							point, {},
							function(event) {
								var address = event.address; // 转换后的地理位置
								// var point = event.coord; // 转换后的坐标信息
								// var coordType = event.coordType; // 转换后的坐标系类型
								// console.log(address, 'address');
								var reg = /.+?(省|市|自治区|自治州|县|区)/g;
								// console.log(address.match(reg));
								_this.osForm.areaName = address.match(reg).toString().split(",")[0] +
									address.match(reg).toString().split(",")[1] + address.match(reg)
									.toString().split(",")[2]
								_this.osForm.latitude = res.latitude;
								_this.osForm.longitude = res.longitude;
							},
							function(e) {}
						);

						// .longitude 经度
						// .latitude  纬度
						// .address   区域
					}
				})
			},
			submit() {
				// console.log(this.osForm)

				// osForm: {
				// 	name: '', //  店铺名称
				// 	address: '', //  店铺地址
				// 	tel: null, //  联系电话
				// 	latitude: '', //  纬度
				// 	longitude: '', //  经度
				// 	areaName: '',
				// 	bankPic: '', // 法人或对公账号卡号图片id
				// 	businessLicensePic: '', // 营业执照图片id
				// 	doorPic: '', // 店面门面图片id
				// 	enviroPic: '', // 店铺环境图片id
				// 	legalCardPic: '', // 法人身份证图片id,
				// 	licencePic: '', //许可证图片id,
				// 	typeId: '',
				// 	typeIdSide: '',
				// 	typeName: '',
				// 	typeNameSide: ''

				// },
				if (!this.osForm.name || !this.osForm.address || !this.osForm.tel || !this.osForm.areaName || !this.osForm
					.bankPic || !this.osForm.businessLicensePic || !this.osForm.doorPic || !this.osForm.enviroPic || !this
					.osForm.legalCardPic || !this.osForm.licencePic) {
					this.errShowFlag = true;
					return;
				};
				if(!this.isRead) {
					uni.showToast({
						title: "请勾选已阅读并同意《外卖开店说明》",
						icon: 'none'
					})
					return;
				}
				shopApply.shopApplyEdit(this.osForm).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: "编辑成功",
							icon: 'success'
						})
						setTimeout(function() {
							uni.navigateTo({
								url: './mIn-details',
								// animationType: 'fade-in',
								// animationDuration: 200
							});
						}, 1000);
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			}
		},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop;
		},
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {
			uni.makePhoneCall({
				phoneNumber: '15152763704'
			});
		}
		// #endif
	}
</script>

<style lang="scss" scoped>
	.required {
		color: red;
	}

	.text-error {
		color: #f56c6c;
		margin-left: 212rpx;
		;
		font-size: 24rpx;
	}

	.image-error {
		color: #f56c6c;
		font-size: 24rpx;
		position: absolute;
		bottom: 0px;
	}

	.will-open {
		width: 750rpx;
		/* #ifdef APP-PLUS */
		// height: 100vh;
		/* #endif */
		/* #ifdef H5 */
		// height: calc(100vh - 88rpx);
		/* #endif */
		background-color: #FFFFFF;
		box-sizing: border-box;
		padding: 40rpx 22rpx 0 22rpx;

		.open-process {
			width: 100%;
			height: 456rpx;
			background-image: url(../../static/mine/sjrz_banner.png);
			background-repeat: no-repeat;
			background-size: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;

			.steps {
				/* #ifdef APP-PLUS */
				width: 100%;
				/* #endif */
				/* #ifdef H5 */
				position: relative;
				width: 710rpx;
				left: -1rpx;
				/* #endif */
				height: 176rpx;
				border-radius: 8rpx;
				background-color: #F3F7FA;
				display: flex;
				align-items: center;
				justify-content: space-around;

				.steps-item {
					text-align: center;
					position: relative;

					text {
						font-size: 28rpx;
						font-weight: 500;
					}

					.line {
						width: 72rpx;
						height: 2rpx;
						border-top: 2rpx solid #DDDDDD;
						position: relative;
						left: 130%;
						bottom: 76rpx;
					}
				}
			}
		}

		.fillIn-material {
			margin-top: 60rpx;
			padding-bottom: 120rpx;

			.tit {
				text {
					font-size: 36rpx;
					font-weight: 500;
				}
			}

			.form-cont {
				margin-top: 30rpx;

				.common-info {
					padding: 0 26rpx;
					box-sizing: border-box;

					.item {
						display: flex;
						align-items: center;
						border-bottom: 1rpx solid #E3E3E3;
						padding: 10rpx 0;

						.i-label {
							// margin-right: 60rpx;
							width: 192rpx;

							text {
								font-size: 28rpx;
							}
						}

						.i-input {
							width: 450rpx;
						}

						.area {
							display: flex;
							align-items: center;

							text {
								margin-right: 32rpx;
								font-size: 28rpx;
							}
						}
					}
				}

				.photo-info {
					margin-top: 68rpx;

					.item {
						display: flex;
						padding: 0 30rpx 0 8rpx;
						margin-bottom: 20rpx;
						box-sizing: border-box;

						.photo {
							position: relative;
						}

						.intro {
							position: relative;
							display: flex;
							flex-direction: column;
							margin-left: 34rpx;

							.tit {
								font-size: 32rpx;
								font-weight: 500;
								margin-bottom: 12rpx;
							}

							.cont {
								font-size: 24rpx;
								color: #808080;
							}

							.toUpload {
								font-size: 24rpx;
								font-weight: 500;
								color: #FFBD2B;
								position: absolute;
								bottom: 0;
								right: 0;
							}
						}
					}
					.return-info {
						display: flex;
						// height: 100rpx;
						// line-height: 100rpx;
						padding: 10rpx 0rpx;
						box-sizing: border-box;
						border-bottom: 0.5px solid #E3E3E3;
						align-items: center;
						.label {
							width: 220rpx;
							font-size: 28rpx;
							// border-bottom: 0.5px solid #E3E3E3;
						}
						.cont {
							width: 440rpx;
							font-size: 28rpx;
							// border-bottom: 0.5px solid #E3E3E3;
						}
					}
					.img-preview {
						width: 274rpx;
						height: 200rpx;
						// overflow: hidden;
						margin: 0 auto 16rpx;
						position: relative;

						.photo {
							width: 100%;
							height: 100%;
							border-radius: 8rpx;
						}
					}
				}
			}
		}

		.isSelected {
			width: 706rpx;
			height: 200rpx;
			background-color: #FFFFFF;
			position: fixed;
			bottom: -2rpx;
			padding: 50rpx 0 0 0;
			box-sizing: border-box;

			.isRead {
				display: flex;
				margin-bottom: 24rpx;

				text {
					font-size: 24rpx;
					color: #808080;
				}
			}

			.submit {
				display: inline-block;
				width: 100%;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				border-radius: 10rpx;
				background: linear-gradient(to bottom, #FFD417, #FFBD2B);
				font-size: 30rpx;
				font-weight: 500;
			}
		}
	}
</style>
