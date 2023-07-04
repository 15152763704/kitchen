import request from '@/api/request'; // 引入封装好的request

// 1.清空搜索记录
function clearMyHistorySearch() {
	return request({
		method: "DELETE", // 请求方式
		url: '/kitchen/MyHistorySearch/clearMyHistorySearch', // 请求url
	})
}

// 2. 查询热搜
function findHotSearch(pageNum, pageSize) {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/MyHistorySearch/findHotSearch?pageNum=' + pageNum + '&pageSize=' + pageSize, // 请求url
	})
}

// 3. 查询历史记录
function findMyHistorySearch() {
	return request({
		method: "GET", // 请求方式
		url: '/kitchen/MyHistorySearch/findMyHistorySearch', // 请求url
	})
}

export default{
	clearMyHistorySearch,
	findMyHistorySearch,
	findHotSearch
}