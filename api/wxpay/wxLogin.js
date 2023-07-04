import request from '@/api/request'; // 引入封装好的request

// 1. 微信获取access_token
function changeAccessToken(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/wxLogin/changeAccessToken', // 请求url
		params: query
	})
}

export default { 
	changeAccessToken
}