'use strict';
const uniPush = uniCloud.getPushManager({appId:"__UNI__DB42A0F"}) //注意这里需要传入你的应用appId
exports.main = async (event, context) => {
	console.log('event : ', event)
	/* let toId = event.queryStringParameters.toId
	let title = event.queryStringParameters.title
	let content = event.queryStringParameters.content
	let payload = event.queryStringParameters.payload
	let obj = {	
			"force_notification": true,
			"title": title,	
			"content": content,
			"payload": payload
	};
	if(toId != null && toId != '' && toId!= undefined && toId != 'undefined')obj.toId = toId //填写上一步在uni-app客户端获取到的客户端推送标识push_clientid
	return await uniPush.sendMessage(obj) */
	//event.body = '{"title":["烦烦烦"],"content":["莎莎莎莎"],"payload":["大大大大大大"],"toId":[["db6263212d826d11d5f3259a1708422f","fe0429808d7eb0e38a3cdb797b41ce8b"]]}';
	// 注意此处可能是base64，需要根据isBase64Encoded判断
	let myBody = event.body;
	if(event.isBase64Encoded){
	   myBody = Buffer.from(body)
	}
	let bodyJson = JSON.parse(myBody);// param为客户端上传的数据
	let toId = bodyJson.toId
	let title = bodyJson.title
	let content = bodyJson.content
	let payload = bodyJson.payload
	let badge = bodyJson.badge
	let obj = {
			"force_notification": true,
			"badge":0,
			"push_clientid":"000",
			"title": title.toString(),	
			"content": content.toString(),	
			"payload": payload.toString()
	};
	//	设置应用右上角数字，用于提醒用户未阅读消息数量，支持在原有数字上的+、-操作;
	//例如：badge=+1，表示当前角标+1；
	//badge=-1，(仅iOS支持)表示当前角标-1(角标>=0)；
	//badge=1，(仅iOS和华为EMUI版本10.0.0+支持)表示当前角标置成1。
	if(badge != null && badge != '' && badge!= undefined && badge != 'undefined')obj.badge = badge[0] 
	if(toId != null && toId != '' && toId!= undefined && toId != 'undefined')obj.push_clientid = toId[0] //填写上一步在uni-app客户端获取到的客户端推送标识push_clientid
	console.log(obj)
	return await uniPush.sendMessage(obj)
};

/* 
uni.getPushClientId(OBJECT)
获取客户端唯一的推送标识

uni.onPushMessage([callback,eventName])
启动监听推送消息事件 代码示例：

uni.offPushMessage([eventName])
关闭推送消息监听事件 示例代码：

uni.createPushMessage(OBJECT)
创建本地通知栏消息（HBuilderX 3.5.2起支持） 
*/