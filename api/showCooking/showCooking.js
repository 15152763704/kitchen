import request from '@/api/request'; // 引入封装好的request
/* 视频发布 */

// 1. 新增视频发布
function addVideo(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/ShowCooking/addVideo', // 请求url
		data: data
	})
}
// 2. 获取视频详情
function getShowCookingById(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCooking/getShowCookingById', // 请求url
		params: query
	})
}
// 3. 查询视频列表
function listVideo(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCooking/listVideo', // 请求url
		params: query
	})
}
// 4. 查询我的收藏视频列表
function myLikeVideoList(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCooking/myLikeVideoList', // 请求url
		params: query
	})
}
// 5. 查询我的发布视频列表
function myReleaseVideoList(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCooking/myReleaseVideoList', // 请求url
		params: query
	})
}
// 6. 查询我的点赞视频列表
function mySupportVideoList(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCooking/mySupportVideoList', // 请求url
		params: query
	})
}



/* 关注 */

// 1. 关注
function ShowCookingFollow(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/ShowCookingFollow', // 请求url
		data: data
	})
}
// 2. 取消关注
function cancelFollow(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCookingFollow/cancelFollow', // 请求url
		params: query
	})
}
// 3. 查询我的关注数量和我的粉丝数量
function findFollowedMeCountAndMyFollowerCount() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCookingFollow/findFollowedMeCountAndMyFollowerCount', // 请求url
	})
}
// 4. 查询我的粉丝列表
function findFollowedMeList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen​​/ShowCookingFollow​/findFollowedMeList', // 请求url
	})
}
// 5. 查询我是否关注该用户
function findIsFollowUser(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCookingFollow/findIsFollowUser', // 请求url
		params: query
	})
}
// 6. 查询我的关注列表
function findMyFollowerList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen​/ShowCookingFollow​/findMyFollowerList', // 请求url
	})
}



/* 收藏 */

// 1. 收藏
function ShowCookingMyLike(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/ShowCookingMyLike', // 请求url
		data: data
	})
}
// 2. 取消收藏
function cancelLike(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCookingMyLike/cancelLike', // 请求url
		params: query
	})
}
// 3. 查询是否收藏当前
function findIsLikeVideo(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCookingMyLike/findIsLikeVideo', // 请求url
		params: query
	})
}
// 4. 查询我的获收藏数量
function findMyReceiveLikeNum() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen​/ShowCookingMyLike​/findMyReceiveLikeNum', // 请求url
	})
}
// 5. 查询我的收藏列表
function ShowCookingMyLikeList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen​/ShowCookingMyLike​/list', // 请求url
	})
}



/* 点赞 */

// 1. 点赞
function ShowCookingSupport(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/ShowCookingSupport', // 请求url
		data: data
	})
}
// 2. 取消点赞
function cancelSupport(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCookingSupport/cancelSupport', // 请求url
		params: query
	})
}
// 3. 查询是否点赞当前
function findIsSupportVideo(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCookingSupport/findIsSupportVideo', // 请求url
		params: query
	})
}
// 4. 查询我的获点赞数量
function findMyReceiveSupportNum() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCookingSupport/findMyReceiveSupportNum', // 请求url
	})
} 
// 5. 查询我的点赞列表
function ShowCookingSupportList() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen​/ShowCookingSupport​/list', // 请求url
	})
} 



/* 评价 */

// 1. 新增评价
function addEvaluation(data) {
	return request({
		method: "POST", // 请求方式
		url: '/kitchen/ShowCookingEvaluation/addEvaluation', // 请求url
		data: data
	})
}
// 2. 查询当前视频的评价列表
function findEvaluationList(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCookingEvaluation/findEvaluationList', // 请求url
		params: query
	})
}



/* 通知 */

// 1. 查询通知详情
function findNoticeById(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCookingNotice/findById', // 请求url
		params: query
	})
}
// 2. 查询我的未读通知数量
function findMyUnReadNoticeCount() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCookingNotice/findMyUnReadNoticeCount', // 请求url
	})
}
// 2. 查询通知列表
function ShowCookingNoticeList(query) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/ShowCookingNotice/list', // 请求url
		params: query
	})
}

function findPercent(){
	return request({
		method: "GET", // 请求方式
		url: '/file/getPercent'
	})
}



export default {
	//晒厨艺视频发布接口
	addVideo,getShowCookingById,listVideo,myLikeVideoList,myReleaseVideoList,mySupportVideoList,
	//晒厨艺关注接口
	ShowCookingFollow,cancelFollow,findFollowedMeCountAndMyFollowerCount,findFollowedMeList,findIsFollowUser,findMyFollowerList,
	//晒厨艺收藏接口
	ShowCookingMyLike,cancelLike,findIsLikeVideo,findMyReceiveLikeNum,ShowCookingMyLikeList,
	//晒厨艺点赞接口
	ShowCookingSupport,cancelSupport,findIsSupportVideo,findMyReceiveSupportNum,ShowCookingSupportList,
	//晒厨艺评价接口
	addEvaluation,findEvaluationList,
	//晒厨艺通知接口
	findNoticeById,findMyUnReadNoticeCount,ShowCookingNoticeList,
	
	findPercent
}
