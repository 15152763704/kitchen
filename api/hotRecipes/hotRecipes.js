import request from '@/api/request'; // 引入封装好的request

// 1. 获取热门菜谱类别信息
function getFoodMenuType() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/foodMenuType/list', // 请求url
	})
}

// 2. 收藏
function myLikeFoodContent(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/MyLikeFoodContent', // 请求url
		data: data
	})
}

// 3. 取消收藏
function cancelLike(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/MyLikeFoodContent/cancelLike?id=' + id, // 请求url
	})
}

// 4. 查询我的收藏列表
function getMyLikeFoodList(name, pageNum, pageSize) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/MyLikeFoodContent/list?name=' + name + '&pageNum=' + pageNum + '&pageSize=' + pageSize, // 请求url
	})
}

// 5. 新增热门菜谱评价
function addPublishHotFood(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/order/eval/publishHotFood', // 请求url
		data: data
	})
}

// 6. 查询热门菜谱评价列表
function getHotFoodEvalList(orderId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/order/eval/getHotFoodEvalList?orderId=' + orderId, // 请求url
	})
}
// 7. 获取热门菜谱详细信息
function getHotFoodMenuContent(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/HotFoodMenuContent/' + id, // 请求url
	})
}
// 8. 人气菜谱
function getHotList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/HotFoodMenuContent/hotList', // 请求url
	})
}
// 9. 所有菜谱列表
function getAllList(name, pageNum, pageSize, foodTypeId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/HotFoodMenuContent/list?name=' + name + '&pageNum=' + pageNum + '&pageSize=' + pageSize + '&foodTypeId=' + foodTypeId, // 请求url
	})
}
// 10. 最新菜谱
function getNewList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/HotFoodMenuContent/newList', // 请求url
	})
}
// 11. 查询是否收藏当前菜谱
function findIsLikeFood(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/MyLikeFoodContent/findIsLikeFood?id=' + id, // 请求url
	})
}

// 查询店铺分类下拉树结构
export function treeselect() {
  return request({
    url: '/kitchen/foodMenuType/treeselect',
    method: 'get'
  })
}

export default{
	getFoodMenuType,
	myLikeFoodContent,
	cancelLike,
	getMyLikeFoodList,
	addPublishHotFood,
	getHotFoodEvalList,
	getHotFoodMenuContent,
	getHotList,
	getAllList,
	getNewList,
	findIsLikeFood,
	treeselect
}