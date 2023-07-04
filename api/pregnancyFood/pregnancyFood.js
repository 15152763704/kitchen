import request from '@/api/request'; // 引入封装好的request

// 1. 类别字典
function getTypeList() {
	return request({
		method: "GET", // 请求方式
		url: '/system/dict/data/list?pageNum=1&pageSize=100&dictType=mother_and_baby_canUserTime', // 请求url
	})
}

// 2. 母婴详情
function getMotherBabyFoodDetails(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/MotherBabyFood/' + id, // 请求url
	})
}

// 3. 所有菜谱列表
function getMotherBabyFoodList(pageNum, pageSize, foodType, motherBabyType) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/MotherBabyFood/list?pageNum=' + pageNum + '&pageSize=' + pageSize + '&foodType=' +
			foodType + '&motherBabyType=' + motherBabyType, // 请求url
	})
}

// 4. 收藏
function motherBabyFoodMyLike(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/MotherBabyFoodMyLike', // 请求url
		data: data
	})
}

// 5. 取消收藏
function cancelLike(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/MotherBabyFoodMyLike/cancelLike?id=' + id, // 请求url
	})
}

// 6. 查询是否收藏当前
function findIsLikeFood(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/MotherBabyFoodMyLike/findIsLikeFood?id=' + id, // 请求url
	})
}

// 7. 点赞
function motherBabyFoodSupport(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/MotherBabyFoodSupport', // 请求url
		data: data
	})
}
// 8. 取消点赞
function cancelSupport(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/MotherBabyFoodSupport/cancelSupport?id=' + id, // 请求url
	})
}

// 9. 查询是否点赞当前
function findIsSupportFood(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/MotherBabyFoodSupport/findIsSupportFood?id=' + id, // 请求url
	})
}
export default {
	getTypeList,
	getMotherBabyFoodDetails,
	getMotherBabyFoodList,
	motherBabyFoodMyLike,
	cancelLike,
	findIsLikeFood,
	motherBabyFoodSupport,
	findIsSupportFood,
	cancelSupport
}
