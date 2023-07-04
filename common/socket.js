let isSocketClose = false; // 是否关闭socket
let reconnectCount = 5; // 重连次数
let heartbeatInterval = ""; // 心跳定时器
let socketTask = null; // websocket对象

let againTimer = null; //断线重连定时器


let url = null;
let onReFn = null;
let onSucFn = null;
let onErrFn = null;

/**
 * sockeUrl：websocet的地址
 * onReceive：消息监听的回调
 * onErrorEvent：抛出错误的回调，且弹窗连接失败的提示框
 * onErrorSucceed：抛出成功回调，主要用于隐藏连接失败的提示框
 * */
const sokcet = (sockeUrl, onReceive, onErrorEvent, onErrorSucceed) => {
	url = sockeUrl;
	onReFn = onReceive;
	onErrFn = onErrorEvent;
	onSucFn = onErrorSucceed;
	isSocketClose = false;
	//判断是否有websocet对象，有的话清空
	if (socketTask) {
		socketTask.close();
		socketTask = null;
		clearInterval(heartbeatInterval);
	}

	//WebSocket的地址
	// 【非常重要】必须确保你的服务器是成功的,如果是手机测试千万别使用ws://127.0.0.1:9099【特别容易犯的错误】
	let url = sockeUrl
	// 连接
	socketTask = uni.connectSocket({
		url: url,
		success(data) {
			console.log("websocket连接成功");
			clearInterval(againTimer) //断线重连定时器
		},
		fail: (err) => {
			console.log("报错", err);
		}
	});

	// 连接打开
	socketTask.onOpen((res) => {
		console.log('WebSocket打开');
		clearInterval(againTimer) //断线重连定时器
		onErrorSucceed({
			isShow: false
		}) // 用于提示框的隐藏
		heartbeatInterval && clearInterval(heartbeatInterval);
		// 10秒发送一次心跳
		heartbeatInterval = setInterval(() => {
			sendMsg('heartBath')
		}, 1000 * 5)
	})
	// 监听连接失败
	socketTask.onError((err) => {
		console.log('WebSocket连接打开失败，请检查', err);
		//停止发送心跳
		clearInterval(heartbeatInterval)
		//如果不是人为关闭的话，进行重连
		if (!isSocketClose) {
			reconnect(url, onErrorEvent)
		}
	})

	// // 监听连接关闭 -
	socketTask.onClose((e) => {
		console.log('WebSocket连接关闭！');
		clearInterval(heartbeatInterval)
		if (!isSocketClose) {
			reconnect(url, onErrorEvent)
		}
	})

	// 监听收到信息
	socketTask.onMessage((res) => {
		uni.hideLoading()
		console.log(res, 'res监听收到信息')
		let serverData = res.data
		//与后端规定好返回值分别代表什么，写业务逻辑
		serverData && onReceive(serverData);
	});


}

const reconnect = (url, onErrorEvent) => {
	console.log('进入断线重连', isSocketClose);
	clearInterval(againTimer) //断线重连定时器
	clearInterval(heartbeatInterval);
	socketTask && socketTask.close(); // 确保已经关闭后再重新打开
	socketTask = null;
	onErrorEvent({
		isShow: true,
		messge: '扫描头服务正在连接...'
	})
	// 连接  重新调用创建websocet方法
	againTimer = setInterval(() => {
		sokcet(url, onReFn, onErrFn, onSucFn)
		console.log('在重新连接中...');
	}, 1000 * 5)


}

const sendMsg = (msg) => { //向后端发送命令
	// msg = JSON.stringify(msg)
	try {
		//通过 WebSocket 连接发送数据
		socketTask.send({
			data: msg
		});
	} catch (e) {
		if (isSocketClose) {
			return
		} else {
			reconnect(url, onErrFn)
		}

	}
}
// 关闭websocket【必须在实例销毁之前关闭,否则会是underfined错误】beforeDestroy() {websocetObj.stop();}

const stop = () => {
	isSocketClose = true
	clearInterval(heartbeatInterval);
	clearInterval(againTimer) //断线重连定时器
	socketTask.close(); // 确保已经关闭后再重新打开
	socketTask = null;
}





export const websocetObj = {
	sokcet,
	stop,
	sendMsg
};
