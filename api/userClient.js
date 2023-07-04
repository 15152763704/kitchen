import request from '@/api/request'; // 引入封装好的request


// 1. 新增用户唯一标识
function addUserClient(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/UserClient', // 请求url
		data: data
	})
}


// 1. 新增或修改消息通知
function addPutInfo(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/UserClient/addPutInfo', // 请求url
		data: data
	})
}


// 1. 获取消息通知详情
function getInfo() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/UserClient/getInfo' // 请求url
	})
}


// 1. 注销用户
function removeUser() {
	return request({
		method: "delete", // 请求方式
		url: '/system/user/removeUser' // 请求url
	})
}


// 1. 查询待办事项统计数据
function findAppBadge() {
	return request({
		method: "get", // 请求方式
		url: '/kitchen/IndexController/findAppBadge' // 请求url
	})
}



export default {
	addUserClient,addPutInfo,getInfo,removeUser,findAppBadge
}