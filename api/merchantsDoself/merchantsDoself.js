import request from '@/api/request'; // 引入封装好的request

// 查询自制商家列表
function getSelfMadeShopList(pageNum, pageSize, searchValue, goodTypeId, latitude, longitude, sortType) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/shop/selfMadeShopList?pageNum=' + pageNum + '&pageSize=' + pageSize + '&searchValue=' + searchValue + '&goodTypeId=' + goodTypeId + '&latitude=' + latitude + '&longitude=' + longitude + '&sortType=' + sortType, // 请求url
	})
}

// 查询当前店铺自制商品列表
function getListByShopId(shopId, sort) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGood/listByShopId?shopId=' + shopId + '&sort=' + sort, // 请求url
	})
}

// 查询当前店铺的代金券活动信息
function getSelfMadeGoodCouponCard(shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodCouponCard/listByShopId?shopId=' + shopId, // 请求url
	})
}

// 查询我的未过期未使用的代金券
function getSelfMadeGoodUserCouponCardList(shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodUserCouponCard/list?shopId=' + shopId, // 请求url
	})
}

// 领取商家代金券
function getSelfMadeGoodUserCouponCard(couponCardId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodUserCouponCard?couponCardId=' + couponCardId, // 请求url
	})
}

// 获取自制商品类别列表
function getSelfMadeGoodType() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodType/list', // 请求url
	})
}

// 新增订单
function addSelfMadeGoodOrder(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/SelfMadeGoodOrder', // 请求url
		data: data
	})
}

// 查询订单详情
function getSelfMadeGoodOrder(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodOrder/' + id, // 请求url
	})
}

// 订单列表
function getFindMyOrderList(pageNum, pageSize, isPublish, status) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodOrder/findMyOrderList?pageNum=' + pageNum + '&pageSize=' + pageSize + '&isPublish=' + isPublish + '&status=' + status, // 请求url
	})
}

// 最近常买
function getOftenBuyList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodOrder/oftenBuyList', // 请求url
	})
}

// 更改订单状态
function updateStatus(takeOutOrderId, status) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodOrder/updateStatus?takeOutOrderId=' + takeOutOrderId + '&status=' + status, // 请求url
	})
}

// 新增地址
function addSelfMadeGoodUserAddress(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/SelfMadeGoodUserAddress/add', // 请求url
		data: data
	})
}

// 修改地址
function editSelfMadeGoodUserAddress(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/SelfMadeGoodUserAddress/edit', // 请求url
		data: data
	})
}

// 删除地址
function deleteAddress(id) {
	return request({
		method: "DELETE", // 请求方式
		url: '/kitchen/SelfMadeGoodUserAddress/delete/' + id, // 请求url
	})
}

// 根据id查询地址详情
function getSelfMadeGoodUserAddress(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodUserAddress/getById/' + id,  // 请求url
	})
}

// 查询我的地址列表
function getMyAddressList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodUserAddress/myAddress', // 请求url
	})
}

// 设为默认
function setDefAddress(addressId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodUserAddress/setDef?addressId=' + addressId, // 请求url
	})
}

// 加入购物车
function addSelfMadeGoodUserCar(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/SelfMadeGoodUserCar', // 请求url
		data: data
	})
}

// 再来一单
function againOrder(orderId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodUserCar/againOrder?orderId=' + orderId, // 请求url
	})
}

// 清空购物车
function clearCar(shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodUserCar/clearCar?shopId=' + shopId, // 请求url
	})
}

// 根据当前菜品id查询该菜品购物车中的数量
function findUserCarNumByFoodId(foodId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodUserCar/findUserCarNumByFoodId?foodId=' + foodId, // 请求url
	})
}

// 查询我的所有店铺购物车
function getListAllUserCar(userCarIds) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodUserCar/listAllUserCar?userCarIds=' + userCarIds, // 请求url
	})
}

// 查询我的指定店铺的购物车
function getListUserCar(shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodUserCar/listUserCar?shopId=' + shopId, // 请求url
	})
}

// 根据商品id和商品数量拼装购物车对象
function makeUserCarsByFoodIdAndNum(goodId, num) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodUserCar/makeUserCarsByFoodIdAndNum?goodId=' + goodId + '&num=' + num, // 请求url
	})
}

// 移除购物车
function removeSelfMadeGoodUserCar(foodId) {
	return request({
		method: "DELETE", // 请求方式
		url: '/kitchen/SelfMadeGoodUserCar/remove?foodId=' + foodId, // 请求url
	})
}

// 删除购物车
function deleteUserCarByFoodId(foodId) {
	return request({
		method: "DELETE", // 请求方式
		url: '/kitchen//SelfMadeGoodUserCar/deleteUserCarByFoodId?foodId=' + foodId, // 请求url
	})
}


// 自制商品详情
function getSelfMadeGood(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGood/'+ id, // 请求url
	})
}

// 更改订单退款状态
function updateRefundStatus(takeOutOrderId, refundMoneyStatus) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/SelfMadeGoodOrder/updateRefundStatus?takeOutOrderId=' + takeOutOrderId + '&refundMoneyStatus=' + refundMoneyStatus, // 请求url
	})
}

// 新增自制商品订单评价
function addPublishSelfMadeGood(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/order/eval/publishSelfMadeGood', // 请求url
		data: data
	})
}

// 自制商品评价列表
function getSelfMadeGoodEvalList(shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/order/eval/getSelfMadeGoodEvalList?shopId=' + shopId
	})
}


export default {
	getSelfMadeShopList,
	getListByShopId,
	getSelfMadeGoodCouponCard,
	getSelfMadeGoodType,
	addSelfMadeGoodOrder,
	getSelfMadeGoodOrder,
	getFindMyOrderList,
	getOftenBuyList,
	updateStatus,
	addSelfMadeGoodUserAddress,
	editSelfMadeGoodUserAddress,
	deleteAddress,
	getSelfMadeGoodUserAddress,
	getMyAddressList,
	setDefAddress,
	getSelfMadeGoodUserCouponCard,
	getSelfMadeGoodUserCouponCardList,
	addSelfMadeGoodUserCar,
	againOrder,
	clearCar,
	findUserCarNumByFoodId,
	getListAllUserCar,
	getListUserCar,
	removeSelfMadeGoodUserCar,
	getSelfMadeGood,
	deleteUserCarByFoodId,
	makeUserCarsByFoodIdAndNum,
	updateRefundStatus,
	addPublishSelfMadeGood,
	getSelfMadeGoodEvalList
}