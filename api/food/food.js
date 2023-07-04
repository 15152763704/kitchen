import request from '@/api/request'; // 引入封装好的request

// 1.查询外卖菜品详细信息
function findFoodInfo(id) {
	return request({
		method: "get", // 请求方式
		url: '/kitchen/Food/'+ id , // 请求url
	})
}

// 2. 查询外卖菜品评价统计数据
function findFoodEvaluationStatics(foodId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/order/eval/findFoodEvaluationStatics?foodId=' + foodId, // 请求url
	})
}

export default{
	findFoodInfo,findFoodEvaluationStatics
}