
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

import uView from './uni_modules/uview-ui'
Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'

Vue.config.productionTip = false

// 定义全局方法
Vue.prototype.$getRect = function(selector, all) {
	return new Promise(resolve => {
		uni.createSelectorQuery().
		in(this)[all ? 'selectAll' : 'select'](selector)
			.boundingClientRect(rect => {
				if (all && Array.isArray(rect) && rect.length) {
					resolve(rect)
				}
				if (!all && rect) {
					resolve(rect)
				}
			})
			.exec()
	})
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif