const request = (config) => {
	if(uni.getStorageSync('mItoken_key')) {
		config.header =  {
		  Authorization: 'Bearer ' + uni.getStorageSync('mItoken_key'),
		  // Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2tleSI6ImJkNjQxY2MxLWNhNzQtNDBkMy04MGU1LThlZGZhY2U4YTU5NyIsInVzZXJuYW1lIjoiYWRtaW4ifQ.cf1KepRXoSuCL58H913YLAD9YgRB0E3Z9Q9F1vREmchtj97HGDf6vZcdLCI7Akn52ocELJxFQnj9cujKP3lMTw',
		  
		}
	}
	console.log('======request.js')
	// 处理 apiUrl
	config.url = 'http://192.168.1.196:8080' + config.url;           // luqinwu本地ip
	// config.url = 'http://192.168.1.174:8080' + config.url;         // wangpeng本地ip
	// config.url = '127.0.0.1/api' + config.url;
	
	// get请求映射params参数
	if (config.method === 'GET' && config.params) {
	    let url = config.url + '?' + tansParams(config.params);
	    url = url.slice(0, -1);
	    config.params = {};
	    config.url = url;
	}
	
	if(!config.data){
		config.data = {};
	}
	// if (uni.getStorageSync('token_key')) {
	// 	config.headers['Authorization'] = 'Bearer ' + uni.getStorageSync(
	// 		'token_key') // 让每个请求携带自定义token 请根据实际情况自行修改
	// }
	// console.log(JSON.stringify(config.data));
	let promise = new Promise(function(resolve, reject) {
		uni.request(config).then(responses => {
			// 异常
			// console.log(responses)
			if (responses[0]) {
				reject({message : "网络超时"});
			} else {
				let response = responses[1].data; // 如果返回的结果是data.data的，嫌麻烦可以用这个，return res,这样只返回一个data
				resolve(response);
			}
		}).catch(error => {
			reject(error);
		})
	})
	return promise;
};



/**
* 参数处理
* @param {*} params  参数
*/
function tansParams(params) {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName];
    var part = encodeURIComponent(propName) + "=";
    if (value !== null && typeof (value) !== "undefined") {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && typeof (value[key]) !== 'undefined') {
            let params = propName + '[' + key + ']';
            var subPart = encodeURIComponent(params) + "=";
            result += subPart + encodeURIComponent(value[key]) + "&";
          }
        }
      } else {
        result += part + encodeURIComponent(value) + "&";
      }
    }
  }
  return result
}


export default request;