import request from '@/api/request'; // 引入封装好的request


// 1. 查询可预约店铺
function findPerMakeShopList(date, latitude, longitude, pageNum, pageSize, searchValue, shopTypeId, sortType) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/shop/findPerMakeShopList?date=' + date + '&latitude=' + latitude + '&longitude=' + longitude + '&pageNum=' + pageNum + '&pageSize=' + pageSize + '&searchValue=' + searchValue + '&shopTypeId=' + shopTypeId + '&sortType=' + sortType, // 请求url
	})
}

// 2. 查询品类列表
function getTreeselect() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/shopType/treeselect', // 请求url
	})
}

// 3. 预约订座套餐
function getFoodPackage(shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/FoodPackage/list?shopId=' + shopId, // 请求url
	})
}

// 4. 新增预约订座
function addPerMakeSeat(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/PerMakeSeat', // 请求url
		data: data
	})
}
// 5. 修改预约订单状态
function editPerMakeSeat(data) {
	return request({
		method: "PUT", // 请求方式
		url: '/kitchen/PerMakeSeat', // 请求url
		data: data
	})
}
// 6. 我的预约订单
function findMyPerMakeOrder(pageNum, pageSize) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/PerMakeSeat/findMyPerMakeOrder?pageNum=' + pageNum + '&pageSize=' + pageSize, // 请求url
	})
}
// 7. 新增预约评价
function addPublishPerMake(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/order/eval/publishPerMake', // 请求url
		data: data
	})
}
// 8. 预约店铺评价
function getShopPerMakeEvalList(shopId, pageNum, pageSize) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/order/eval/getShopPerMakeEvalList?shopId=' + shopId + '&pageNum=' + pageNum + '&pageSize=' + pageSize, // 请求url
	})
}

// 预约订座订单支付前
function orderSeatbeforePay(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/PerMakeSeatOrderPay/beforePay', // 请求url
		data: data
	})
}

function beforePayLeftMoney(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/PerMakeSeatOrderPay/beforePayLeftMoney', // 请求url
		data: data
	})
}


function updateRefundStatus(refundMoneyStatus, perMakeSeatId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/PerMakeSeat/updateRefundStatus?refundMoneyStatus=' + refundMoneyStatus + '&perMakeSeatId=' + perMakeSeatId, // 请求url
	})
}

// 获取包厢详情
function getPmsSeatDetails(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/PmsSeat/' + id, // 请求url
	})
}

// 获取包厢列表
function getPmsSeatList(shopId, lunchOrDinner, receiveDate) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/PmsSeat/list?shopId=' + shopId+ '&lunchOrDinner=' + lunchOrDinner + '&receiveDate=' + receiveDate, // 请求url
	})
}

// 获取套餐详情
function getFoodPackageDetails(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/FoodPackage/' + id, // 请求url
	})
}

function findFoodPackageList(seatId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/PmsSeat/findFoodPackageList?seatId=' + seatId, // 请求url
	})
}


function getPerMakeSeatDetails(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/PerMakeSeat/' + id, // 请求url
	})
}

function perMakeSeatReduceOrderMoney(data) {
	return request({
		method: "PUT", // 请求方式
		url: '/kitchen/StoreCardDetailController/perMakeSeatReduceOrderMoney', // 请求url
		data: data
	})
}

function getFoodRecommendList(shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/PerMakeSeatFoodController/list?shopId=' + shopId, // 请求url
	})
}

export default{
	findPerMakeShopList,
	getTreeselect,
	getFoodPackage,
	addPerMakeSeat,
	editPerMakeSeat,
	findMyPerMakeOrder,
	addPublishPerMake,
	getShopPerMakeEvalList,
	orderSeatbeforePay,
	beforePayLeftMoney,
	updateRefundStatus,
	getPmsSeatDetails,
	getPmsSeatList,
	getFoodPackageDetails,
	getPerMakeSeatDetails,
	findFoodPackageList,
	perMakeSeatReduceOrderMoney,
	getFoodRecommendList
}