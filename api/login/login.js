import request from '@/api/request'; // 引入封装好的request

// 1.获取验证码
function getVerification(data) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/login/getVerification/' + data, // 请求url
	})
}

// 2.登录
function login(phoneNumber, code) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/login?phoneNumber=' + phoneNumber + '&code=' + code, // 请求url
	})
}

// 2.苹果apple登录
function appleLogin(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/wxLogin/appleLogin', // 请求url
		data: data
	})
}


// 3. 查询个人信息
function getUser() {
	return request({
		method: "GET", // 请求方式
		url: '/system/user/profile', // 请求url
	})
}

// 4. 修改个人信息
function editUser(data) {
	return request({
		method: "PUT", // 请求方式
		url: '/system/user/profile', // 请求url
		data: data
	})
}

// 5. banner 图文详情
function bannerInfoById(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/bannerInfo/' + id, // 请求url
	})
}

// 6. 积分
function findMyIntegralCount(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/myIntegral/findMyIntegralCount', // 请求url
	})
}

// 7. 储值卡
function findStoreCardController(tel, pageNum, pageSize) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/StoreCardController/list?tel=' + tel + '&pageNum=' + pageNum + '&pageSize=' + pageSize, // 请求url
	})
}

// 8. 储值卡明细
function findStoreCardDetail(id, pageNum, pageSize) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/StoreCardDetailController/list?storeCardId=' + id + '&pageNum=' + pageNum + '&pageSize=' + pageSize, // 请求url
	})
}

// 9. 商家储值卡
function findCardByShopIdAndTel(tel, shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/StoreCardController/findCardByShopIdAndTel?tel=' + tel + '&shopId=' + shopId, // 请求url
	})
}

export default{
	login,
	getVerification,
	getUser,
	editUser,
	bannerInfoById,
	appleLogin,
	findMyIntegralCount,
	findStoreCardController,
	findStoreCardDetail,
	findCardByShopIdAndTel
}