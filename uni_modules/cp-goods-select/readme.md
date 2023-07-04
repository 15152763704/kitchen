# cp-goods-select
> 该组件是一款实用性的分类商品展示组件,适用于需要多层分类的场景,支持滑动自动选中，自定义菜单和商品展示等功能
> 基于 HBuilderX 3.1.0+ 的uni_modules 模块开发。

## 使用说明

--------
##### 基础用法
```
<cp-goods-select 
	height="50vh" 
	:props="{label:'label',value:'value',children:'children'}" 
	:options="list"
	@scrolltolower="handelScrolltolower" 
	@category-change="handelCategoryChange"
>
	<cp-goods-item v-for="(item,index) in list" :key="index" :category="item.label">
		<view v-for="(cell,k) in item.children" :key="k" class="goods__item ">
			{{ cell.label}}
		</view>
	</cp-goods-item>
</cp-goods-select>
```

##### 自定义类型样式
```
<!-- 自定义类型样式 -->
<cp-goods-select
	height="50vh" 
	:options="list4" 
	@scrolltolower="handelScrolltolower"
	@category-change="handelCategoryChange"
>
	<!-- 自定义类型样式 -->
	<template v-slot:category>
		<cp-goods-select-category>
			<template v-slot:bottom>
				<view style="width: 100%; background-color: #007AFF; color: #fff; text-align: center;">设置</view>
			</template>
			<template v-for="(row,k) in list4">
				<cp-goods-category-item :key="k" :category="row">
					<text>{{row.label}}</text><text class="num">3</text>
				</cp-goods-category-item>
			</template>
		</cp-goods-select-category>
	</template>
	<!-- 商品列表 -->
	<cp-goods-item v-for="(item,index) in list4" :key="index" :category="item.label" customClass="cloumn-2">
		<template v-slot:category>
			<text style="color: red;">{{item.label}}</text>
		</template>
		<template v-for="(cell,k) in item.children">
			<view :key="k" class="goods__item ">
				{{ cell.label}}
			</view>
		</template>
	</cp-goods-item>
</cp-goods-select>
		
```

##### 独立商品列表
```
<!-- 独立商品列表  -->
<cp-goods-select 
	height="50vh" 
	:options="list3" 
	:props="{label:'label',value:'value',children:'children'}" 
	@scrolltolower="handelScrolltolower" 
	@category-change="handelCategoryChange"
>
	<view v-for="(item,index) in goods" :key="index" :category="item.label">
			<view class="goods__item ">
				{{ item.label}}
			</view>
	</view>
</cp-goods-select>
```

##### cp-goods-select  参数说明
|字段|类型|必填|默认值|说明|
|-|-|-|-|-|
|height|String|是|500upx|scroll-view 必须指定高度|
|options|Array|是||数据集|
|props|Object|否|{label: 'label',value: 'value',children: 'children'}||
