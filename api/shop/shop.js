import request from '@/api/request'; // 引入封装好的request

// 1. 查询店铺详情
function getShopDetails(id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/shop/getById?id=' + id, // 请求url
	})
}
// 2. 查询店铺列表
function getShopList (pageNum, pageSize, searchValue, shopTypeId, latitude, longitude, sortType, nutritionValue) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/shop/shopList?pageNum=' + pageNum + '&pageSize=' + pageSize + '&searchValue=' + searchValue + '&shopTypeId=' + shopTypeId + '&latitude=' + latitude + '&longitude=' + longitude + '&sortType=' + sortType + '&nutritionValue=' + nutritionValue, // 请求url
	})
}

// 适用体质类型
function getConstitutionIngredients () {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ConstitutionIngredients/list', // 请求url
	})
}

// 3. 查询分类树结构列表
function getTreeselect () {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/shopType/treeselect', // 请求url
	})
}

// 4. 根据父类id查询分类列表
function getListByParentId (parentId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/shopType/listByParentId?parentId=' + parentId, // 请求url
	})
}

// 5. 查询店铺详情
function getShopDetailsById (id) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/shop/getById?id=' + id, // 请求url
	})
}

// 6. 查询店铺的菜品信息树
function getShopFoodTree (shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/Food/getShopFoodTree?shopId=' + shopId, // 请求url
	})
}

// 7. 加入购物车
function addUserCar(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/UserCar', // 请求url
		data: data
	})
}
// 8. 移除购物车
function deleteUserCar(foodId, foodSpecsId) {
	return request({
		method: "DELETE", // 请求方式
		url: '/kitchen/UserCar/remove?foodId=' + foodId + '&foodSpecsId=' + foodSpecsId, // 请求url
	})
}
// 9. 清空购物车
function clearCar(shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/UserCar/clearCar?shopId=' + shopId, // 请求url
	})
}
// 10. 查询我的所有店铺购物车
function getListAllUserCar(shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/UserCar/listAllUserCar?shopId=' + shopId, // 请求url
	})
}
// 11. 查询指定店铺购物车
function getListUserCar (shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/UserCar/listUserCar?shopId=' + shopId, // 请求url
	})
}

// 12. 查询菜品规格
function getFoodSpecsList(foodId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/FoodSpecs/list?foodId=' + foodId, // 请求url
	})
}

// 13. 根据当前菜品id查询该菜品中购物车中的数量
function findUserCarNumByFoodId(foodId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/UserCar/findUserCarNumByFoodId?foodId=' + foodId, // 请求url
	})
}
// 14. 当前店铺的优惠券活动信息
function getListByShopId(shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/CouponCard/listByShopId?shopId=' + shopId, // 请求url
	})
}
// 15. 领取商家优惠券
function addCouponCard(couponCardId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/UserCouponCard/add?couponCardId=' + couponCardId , // 请求url
	})
}

// 16. 查询我的优惠券
function getMyCouponCardList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/UserCouponCard/list' , // 请求url
	})
}

// 18. 查询店铺菜品评价列表
function getFoodEvalList(foodId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/order/eval/getFoodEvalList?foodId=' + foodId, // 请求url
	})
}
// 19. 查询店铺外卖评价列表
function getShopEvalList(shopId, filterType, evalType, foodId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/order/eval/getShopEvalList?shopId=' + shopId + '&filterType=' + filterType + '&evalType=' + evalType + '&foodId=' + foodId, // 请求url
	})
}

// 20. 查询我的评价
function findMyEvalList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/order/eval/findMyEvalList', // 请求url
	})
}

// 21. 查询我的足迹
function findMyFootprint() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/myFootprint/findMyFootprint', // 请求url
	})
}
// 22. 收藏店铺  
function packageShop(shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/myLikeShop/packageShop?shopId=' + shopId, // 请求url
	})
}
// 23. 查询我的收藏 分页
function findMyLikeShop(pageNum, pageSize) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/myLikeShop/findMyLikeShop?pageNum=' + pageNum + '&pageSize=' + pageSize, // 请求url
	})
}
// 24. 取消收藏
function unPackageShopByShopId(shopId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/myLikeShop/unPackageShopByShopId?shopId=' + shopId, // 请求url
	})
}

// 25. 铲鲟相似店铺
   function findSimilarShops(pageNum, pageSize, latitude, longitude, shopId, shopTypeId) {
   	return request({
   		method: "GET", // 请求方式
   		url: '/kitchen/shop/findSimilarShops?pageNum=' + pageNum + '&pageSize=' + pageSize + '&latitude=' + latitude + '&longitude=' + longitude + '&shopId=' + shopId + '&shopTypeId=' + shopTypeId, // 请求url
   	})
   }
    
// 查询聊天记录
function findChatRecord(userId) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ChatSession/findChatRecord?userId=' + userId, // 请求url
	})
}

// 开店信息
function getShopById(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/shopApply/getById', // 请求url
		params: query
	})
}
// 查询店铺外卖评价统计数据
function findShopEvalStatics(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/order/eval/findShopEvalStatics', // 请求url
		params: query
	})
}

function findListByShopId(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/FullReduceActivity/listByShopId',
		params: query
	})
}

function fullUpdateUserCars(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/UserCar/fullUpdateUserCars', // 请求url
		data: data
	})
}

function findIsNeedCover(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/IndexController/findIsNeedCover',
		params: query
	})
}

export default {
	getShopDetails,
	getShopList,
	getTreeselect,
	getListByParentId,
	getShopDetailsById,
	getShopFoodTree,
	addUserCar,
	deleteUserCar,
	clearCar,
	getListAllUserCar,
	getListUserCar,
	getFoodSpecsList,
	findUserCarNumByFoodId,
	getListByShopId,
	addCouponCard,
	getMyCouponCardList,
	getFoodEvalList,
	getShopEvalList,
	findMyEvalList,
	findMyFootprint,
	packageShop,
	findMyLikeShop,
	unPackageShopByShopId,
	findSimilarShops,
	findChatRecord,
	getConstitutionIngredients,
	getShopById,
	findShopEvalStatics,
	findListByShopId,
	fullUpdateUserCars,
	findIsNeedCover
}
