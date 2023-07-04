function debounce(fn, wait, immediate) {
	let timer;
	// console.log(555)
	return function() {
		if (timer) clearTimeout(timer);
		if (immediate) {
			// 如果已经执行过，不再执行
			var callNow = !timer;
			timer = setTimeout(() => {
				timer = null;
			}, wait)
			if (callNow) {
				fn.apply(this, arguments)
			}
		} else {
			timer = setTimeout(() => {
				fn.apply(this, arguments)
			}, wait);
		}
	}
}
// 在 vue 中使用（注意：不能使用箭头函数，否则this指向不对）
// move: debounce(function () {
//     console.log(this.title);
// }, 1000)

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}

function compareTime(time) {
	let date = new Date(time);
	if (date.getTime() < Date.now()) {
		return true;
	} else {
		return false;
	}
}

function renderTime(date) {
	let dateee = new Date(date).toJSON();
	return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
}

// 数字补零
function patchZero(str) {
	str = isNaN(+str) ? '0' : str
	const prefix = str > 9 ? '' : '0'
	return prefix + str
}

// 根据形如 '9.00' 这样的字符串，计算该时间对应的时间戳
function calcUnixTime(timeStr, zreoUnix) {
	const [hour, minute] = timeStr.split(':')
	return zreoUnix + hour * 3600 * 1000 + minute * 60 * 1000
}

// 将时间戳输出为日期字符串
function calcUnixToDayStr(unix) {
	const time = new Date(unix)
	const Y = time.getFullYear()
	const M = patchZero(time.getMonth() + 1)
	const D = patchZero(time.getDate())
	return `${Y}-${M}-${D}`
}

// 将时间戳输出为时间字符串
function calcUnixToTimeStr(unix) {
	const time = new Date(unix)
	const h = patchZero(time.getHours())
	const m = patchZero(time.getMinutes())
	return `${h}:${m}`
}

// 根据开始时间戳和结束时间戳计算结果并输出为数组(30分钟为间隔)
function calcTimsArr(startUnix, endUinx) {
	const arr = []
	for (let i = startUnix; i <= endUinx; i += 1800000) {
		arr.push(calcUnixToTimeStr(i))
	}
	return assembleArr(arr)
}

// 拼装最终需要的结果
function assembleArr(arr) {
	arr.map((item, index) => {
		index && (arr[index - 1] += ` - ${item}`)
	})
	arr.length -= 1
	return arr
}

// 计算今天的服务时间
function calcTodayTimes(arr, time) {
	const nextHour = patchZero(time.getHours() + 1)
	const startIndex = arr.findIndex(i => i.slice(0, 2) === nextHour)
	return arr.slice(startIndex, arr.length)
}

// 主函数
function main(startTimeStr, endTimeStr) {
	startTimeStr = startTimeStr || '09.00'
	endTimeStr = endTimeStr || '20.00'
	const startUinx = calcUnixTime(startTimeStr, -28800000)
	const endUinx = calcUnixTime(endTimeStr, -28800000)
	const serviceTimsArr = calcTimsArr(startUinx, endUinx)
	const time = new Date()
	const todayTimesArr = calcTodayTimes(serviceTimsArr, time)
	return {
		today: calcUnixToDayStr(+time),
		tomorrow: calcUnixToDayStr(+time + 86400000),
		todayTimesArr,
		tomorrowTimesArr: serviceTimsArr
	}
}

//首页时间转化
function dateTime(e) {
	let old = new Date(e);
	let now = new Date();
	//获取old具体时间
	let d = old.getTime();
	let h = old.getHours();
	let m = old.getMinutes();
	let Y = old.getFullYear();
	let M = old.getMonth() + 1;
	let D = old.getDate();
	//获取now具体时间
	let nd = now.getTime();
	let nh = now.getHours();
	let n = now.getMinutes();
	let nY = now.getFullYear();
	let nM = now.getMonth() + 1;
	let nD = now.getDate();

	//当天的时间
	if (D === nD && M === nM && Y === nY) {
		if (h < 10) {
			h = '0' + h;
		}
		if (m < 10) {
			m = '0' + m;
		}
		return h + ':' + m;
	}
	//昨天时间
	if (D + 1 === nD && M === nM && Y === nY) {
		if (h < 10) {
			h = '0' + h;
		}
		if (m < 10) {
			m = '0' + m;
		}
		return '昨天 ' + h + ':' + m;
	} else {
		//大于两天
		return Y + '/' + M + '/' + D;
	}

}
//聊天时，发送时间处理
function dateTime1(e) {
	let old = new Date(e);
	let now = new Date();
	//获取old具体时间
	let d = old.getTime();
	let h = old.getHours();
	let m = old.getMinutes();
	let Y = old.getFullYear();
	let M = old.getMonth() + 1;
	let D = old.getDate();
	//获取now具体时间
	let nd = now.getTime();
	let nh = now.getHours();
	let n = now.getMinutes();
	let nY = now.getFullYear();
	let nM = now.getMonth() + 1;
	let nD = now.getDate();

	//当天的时间
	if (D === nD && M === nM && Y === nY) {
		if (h < 10) {
			h = '0' + h;
		}
		if (m < 10) {
			m = '0' + m;
		}
		return h + ':' + m;
	}
	//昨天时间
	if(D+1 === nD && M === nM && Y === nY) {
		if (h < 10) {
			h = '0' + h;
		}
		if (m < 10) {
			m = '0' + m;
		}
		return '昨天 ' + h + ':' + m;
	} else if (Y == nY) {
		//今年
		if( h< 10) {
			h = '0' + h;
		}
		if (m < 10) {
			m = '0' + m;
		}
		return M + '月' + D + '日 ' + h + ':' + m
	} else {
		//大于今年
		if (h < 10) {
			h = '0' + h;
		}
		if (m < 10) {
			m = '0' + m;
		}
		return Y + '年' + M + '月' + D + '日 ' + h + ':' + m
	}
}
// 间隔时间差
function spaceTime(old, now) {
	old = new Date(old);
	now = new Date(now);
	var told = old.getTime();
	var tnow = now.getTime();
	if (told > (tnow + 1000 * 60 * 5)) {
		return now;
	}
	else {
		return '';
	}
}

function returnIP() {
	return 'http://192.168.1.196:8080/';
}


export {
	debounce,
	formatLocation,
	compareTime,
	renderTime,
	main,
	spaceTime,
	dateTime,
	dateTime1,
	returnIP
}
