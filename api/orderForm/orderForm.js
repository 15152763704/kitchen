import request from '@/api/request'; // 引入封装好的request


// 1. 新增发票
function addInvoice(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/invoice/invoice', // 请求url
		data: data
	})
}

// 2. 修改发票
function changeInvoice(data) {
	return request({
		method: "PUT", // 请求方式
		url: '/kitchen/invoice/invoice', // 请求url
		data: data
	})
}


// 3. 获取发票详情
function getInvoiceDetails(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/invoice/invoice/' + id, // 请求url
	})
}

// 4. 删除发票
function deleteInvoice(ids) {
	return request({
		method: "DELETE", // 请求方式
		url: '/kitchen/invoice/invoice/' + ids, // 请求url
	})
}

// 5. 获取发票列表
function getInvoiceList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/invoice/invoice/list', // 请求url
	})
}

// 6. 新增地址
function addAddress(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/user/address/add', // 请求url
		data: data
	})
}

// 7. 删除地址
function deleteAddress(id) {
	return request({
		method: "DELETE", // 请求方式
		url: '/kitchen/user/address/delete/' + id, // 请求url
	})
}

// 8. 修改地址
function editAddress(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/user/address/edit', // 请求url
		data: data
	})
}

// 9. 根据id查询地址详情
function getAddressDetails(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/user/address/getById/' + id, // 请求url
	})
}

// 10. 查询地址列表
function getMyAddressList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/user/address/myAddress', // 请求url
	})
}

// 11. 地址设为默认
function setAddressDef(addressId ) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/user/address/setDef?addressId=' + addressId , // 请求url
	})
}

// 12. 领取优惠券
function addUserCouponCard(couponCardId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/UserCouponCard/add' + couponCardId, // 请求url
	})
}
// 13. 查询我的优惠券
function getMyCouponCardList(shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/UserCouponCard/list?shopId=' + shopId, // 请求url
	})
}
// 14. 查询我的可使用红包列表
function getMyPackageMoneyList(canUseMoney) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/UserPackageMoney/findCanUse', // 请求url
		query: {
			canUseMoney
		}
	})
}
// 15. 新增订单
function addOrder(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/Order', // 请求url
		data: data
	})
}

// 16. 外卖端消费者查询外卖订单列表
function findMyOrderList(status,pageNum,pageSize,isPublish) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/Order/findMyOrderList?status=' + status + '&pageNum=' + pageNum + '&pageSize=' + pageSize + '&isPublish=' + isPublish, // 请求url
	})
}
// 17. 最近常买
function oftenBuyList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/Order/oftenBuyList', // 请求url
	})
}

function getOrderDetails(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/Order/' + id, // 请求url
	})
}

// 20. 新增外卖评价
function addEval(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/order/eval/publish', // 请求url
		data: data
	})
}

// 21. 更改订单状态
function updateStatus(status, takeOutOrderId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/Order/updateStatus?status=' + status + '&takeOutOrderId=' + takeOutOrderId, // 请求url
	})
}

// 22. 再来一单

function againOrder(orderId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/UserCar/againOrder?orderId=' + orderId, // 请求url
	})
}

// 23. 领取红包
function getUserPackageMoney(packageMoneyId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/UserPackageMoney?packageMoneyId=' + packageMoneyId, // 请求url
	})
}

// 24. 查询平台可领取红包
function findCanReceiveList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/UserPackageMoney/findCanReceiveList', // 请求url
	})
}

function updateRefundStatus(refundMoneyStatus, takeOutOrderId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/Order/updateRefundStatus?refundMoneyStatus=' + refundMoneyStatus + '&takeOutOrderId=' + takeOutOrderId, // 请求url
	})
}

// 新增订单备注
function addOrderRemark(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/orderRemark', // 请求url
		data: data
	})
}

// 删除订单备注记录
function deleteMyOrderRemark(id) {
	return request({
		method: "DELETE", // 请求方式
		url: '/kitchen/orderRemark/deleteMyOrderRemark/' + id, // 请求url
	})
}

function findMyOrderRemarkList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/orderRemark/findMyOrderRemarkList', // 请求url
	})
}

export default{
	getMyAddressList,
	setAddressDef,
	addAddress,
	getMyPackageMoneyList,
	getMyCouponCardList,
	getInvoiceList,
	addInvoice,
	addOrder,
	changeInvoice,
	deleteInvoice,
	getInvoiceDetails,
	getAddressDetails,
	editAddress,
	deleteAddress,
	findMyOrderList,
	oftenBuyList,
	
	addEval,
	updateStatus,
	againOrder,
	getUserPackageMoney,
	findCanReceiveList,
	updateRefundStatus,
	findMyOrderRemarkList,
	deleteMyOrderRemark,
	addOrderRemark,
	getOrderDetails
}