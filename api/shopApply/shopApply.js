import request from '@/api/request_mIn.js'; // 引入封装好的request

// 1. 新增开店申请
function shopApply(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/shopApply', // 请求url
		data: data
	})
}
// 2.登录
function shopLogin(phoneNumber, code) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/login/shopLogin?phoneNumber=' + phoneNumber + '&code=' + code, // 请求url
	})
}

// 开店信息
function getShopById(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/shopApply/getById', // 请求url
		params: query
	})
}

// 修改开店申请
function shopApplyEdit(data) {
	return request({
		method: "PUT", // 请求方式
		url: '/kitchen/shopApply', // 请求url
		data: data
	})
}
export default {
	shopApply,
	shopLogin,
	shopApplyEdit,
	getShopById
}
