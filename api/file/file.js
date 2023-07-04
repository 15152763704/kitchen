import request from '@/api/request'; // 引入封装好的request

// 1.获取文件地址
function getFileUrl(fileId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/file/list?fileId=' + fileId, // 请求url
	})
}
// 识别银行卡
function getAiBankCard(imageUrl) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/BaiduAiUtil/AiBankCard?imageUrl=' + imageUrl, // 请求url
	})
}

// 识别营业执照
function getAiLicense(imageUrl) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/BaiduAiUtil/AiLicense?imageUrl=' + imageUrl, // 请求url
	})
}

// 识别身份证
function getAiIdCard(imageUrl) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/BaiduAiUtil/AiIdCard?imageUrl=' + imageUrl, // 请求url
	})
}

// 查询最新版本
function checkVersion() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/VersionController/checkVersion', // 请求url
	})
}
export default {
	getFileUrl,
	getAiLicense,
	getAiIdCard,
	getAiBankCard,
	checkVersion
}
