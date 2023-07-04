- <a href="#c1" title="概要">概要</a>
- <a href="#c2" title="Tips">Tips</a>
- <a href="#c3" title="支持的平台">支持的平台</a>
- <a href="#c4" title="使用示例">使用示例</a>
- <a href="#c5" title="Tabs Attributes">Tabs Attributes</a>
- <a href="#c6" title="Tabs Events">Tabs Events</a>
- <a href="#c7" title="Tab-pane Attributes">Tab-pane Attributes</a>
- <a href="#c8" title="关注我，不迷路">关注我，不迷路</a>

<div id="c1"></div>

#### 概要

在做项目的过程中用到了tab切换，本想着去插件市场找一个直接现用，后面发现找到的tab切换并不是我想要的那种使用方式，于是我结合了element-ui中Tabs标签页的方式写了该组件。


<div id="c2"></div>

#### Tips

1. 该插件使用的预编译，需要自行安装scss/sass插件。
2. 该插件同时兼容了VUE2和VUE3，hbuilderX 最好是更新到较新版本。
3. 由于组件重构升级，老用户需要更新插件的，需要注意参数，根据下面提供的参数修改即可。
4. 遵循uni_modules规范插件。
5. 如果发现组件有bug或者不完善可以留言交流。
6. uniapp插件git地址：https://gitee.com/my_dear_li_pan/my-uni-modules.git
7. 个人博客地址：https://blog.csdn.net/qq_42961150?spm=1011.2124.3001.5343

<div id="c3"></div>

#### 支持的平台
- H5、app-vue、微信小程序、百度小程序等小程序平台。
- 暂不支持nvue。
- cli脚手架项目是否可用，暂未测试。

<div id="c4"></div>

#### 使用示例
```
<template>
	<view>
		<custom-tabs :value="value" @change="changeIndex">
			<custom-tab-pane label="标签一" name="1">
				<view style="height: 100px;">内容0</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
			</custom-tab-pane>
			<custom-tab-pane label="标签二" name="2">内容2</custom-tab-pane>
			<custom-tab-pane label="标签三3" name="3">内容3</custom-tab-pane>
			<custom-tab-pane label="标签四44" name="4">内容4</custom-tab-pane>
			<custom-tab-pane label="标签五555" name="5">内容5</custom-tab-pane>
			<custom-tab-pane label="标签六6666" name="6">内容6</custom-tab-pane>
			<custom-tab-pane label="标签七77777" name="7">内容7</custom-tab-pane>
		</custom-tabs>
	</view>
</template>
<script setup>
    // #ifdef VUE3
	import { reactive, ref, watch } from 'vue';
	const value = ref(2);

	function changeIndex(e) {
		console.log('选中:', e)
	}
	// #endif
</script>
<script>
	// #ifdef VUE2
	export default {
		data() {
			return {
				value: 2
			}
		},
		methods: {
			changeIndex(e) {
				console.log('选中:', e)
			}
		}
	}
	// #endif
</script>
```

<div id="c5"></div>

#### Tabs Attributes

参数|说明|类型|是否必填|可选值|默认值
-|-|-|-|-|-|
value|选中选项的索引，从0开始|Number|否|-|0
animation|切换动画|Boolean|否|true/false|true
duration|切换动画的动画时长，单位ms|Number|否|-|200
tabSpacing|tab选项的左右间距，单位rpx|Number|否|-|40
tabCenter|tab选项是否居中显示|Boolean|否|true/false|false
fixed|tab选项固定|Boolean|否|true/false|false
defaultTextStyle|未选中tab选项的样式|Object|否|示例：```:defaultTextStyle="{color:'pink'}"```|-
activeTextStyle|选中后tab选项的样式|Object|否|示例：```:activeTextStyle="{color:'red','font-weight':700}"```|-
activeLineStyle|选中后tab选项下划线的样式|Object|否|示例：```:activeLineStyle="{'background-color':'red',height:'6rpx'}"```|-

<div id="c6"></div>

#### Tabs Events
事件名称|说明|回调参数
-|-|-|
change|tab 被选中时触发|被选中的标签tab实例

<div id="c7"></div>

#### Tab-pane Attributes

参数|说明|类型|是否必填|可选值|默认值
-|-|-|-|-|-|
label|选项卡标题|String|是|-|-
name|与选项卡绑定值 value 对应的标识符，表示选项卡别名|String|是|-|该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'

<div id="c8"></div>

**----- 别忘记点赞哟，您的肯定就是对我最大的支持 END -----**

#### 关注我，不迷路

如果任何疑问的可以在评论区留言，还可以加QQ群交流：568984539，加群备注‘地区-名字-技术类型’。

更多前端等相关知识可关注我个人博客：https://blog.csdn.net/qq_42961150?spm=1011.2124.3001.5343

**个人作品展示：**

uniapp+vue3.2+unicloud开发微信小程序：**皮皮虎去水印**。

关注下方公众号：【**全网免费网盘资源**】、【**美团外卖饿了么天天领红包**】、【**去水印**】。

![image](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bb657efd-fece-483e-a715-5daea480fde8/6e029310-aec8-46e9-9883-1c88dc1925ad.jpg)








