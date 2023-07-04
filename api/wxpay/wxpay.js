import request from '@/api/request'; // 引入封装好的request

// 1. 预约订座支付前
function perMakeSeatBeforePay(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/PerMakeSeatOrderPay/beforePay', // 请求url
		data: data
	})
}
// 2. 预约订座退款
function perMakeSeatRefundMoney(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/PerMakeSeatOrderPay/refundMoney', // 请求url
		data: data
	})
}


// 1. 外卖订单支付前
function TakeOutOrderPayBeforePay(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/TakeOutOrderPay/beforePay', // 请求url
		data: data
	})
}
// 2. 外卖订单退款
function TakeOutOrderPayRefundMoney(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/TakeOutOrderPay/refundMoney', // 请求url
		data: data
	})
}
// 1. 商家自制订单支付前
function selfMadeGoodOrderPayBeforePay(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/SelfMadeGoodOrderPay/beforePay', // 请求url
		data: data
	})
}
// 1. 商家自制订单退款
function selfMadeGoodOrderPayRefundMoney(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/SelfMadeGoodOrderPay/refundMoney', // 请求url
		data: data
	})
}




export default {
	perMakeSeatBeforePay,
	perMakeSeatRefundMoney,
	TakeOutOrderPayBeforePay,
	TakeOutOrderPayRefundMoney,
	selfMadeGoodOrderPayBeforePay,
	selfMadeGoodOrderPayRefundMoney
	
}
