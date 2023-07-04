## 商品分类列表
一个简单的商品分类列表

#### 使用  
``` html
    <mo-product-list :list="list">
        <template v-slot:header="{item}">
            <view class="title">{{item.name}}</view>
        </template>
        <template v-slot="{item}">
            <view>{{item.name}}</view>
        </template>
    </mo-product-list>
```
``` js
	import testJson from './test.json'
	export default {
        data() {
            return {
                list: testJson
            }
        }
    }
```

#### 属性/事件  
|  属性/事件   |  说明  |  类型  |  默认值  |  
|  ----  | ----  |  ----  | ----  |  
| list   | 商品列表 | Array  | [] |  
| animation  | 是否开启滚动动画 | Boolean  | false |  
| title-fixed  | 是否显示右边分类目录 | Boolean  | true |  
| open-tag    | 是否开启左侧目录红点角标 | Boolean  | false |  
| tag-key     | 角标入参字段 | String  | tag |  
| icon-key    | 左侧目录图标入参字段 | String  | icon |  
| icon-size   | 左侧目录图标大小 | Number  | 18 |    
| icon-color  | 左侧目录图标颜色 | String  | #666 |    
| lower-threshold  | 距底部多远时（单位px），触发 scrollEnd 事件 | Number  | 50 |    
| bottom  | 预留底部占位（单位px），底部需要按钮时避免遮挡 | Number  | 0 |    
| @scroll  | 滚动事件 | Function  | (e)=>{} |    
| @scrollEnd  | 滚动到底部触发事件 | Function  | (e)=>{} |    
  
#### 插槽  
|  属性/事件   |  说明     |  
|  ----       |  ----     |  
|  default    |  默认插槽  |   
|  header     |  头部插槽  |   

#### 示例说明  
文件中包含两个示例：  
一个简单的demo和一个应用示例，应用示例使用了uni-popup，项目中需要自行引入uni_modules/uni-popup组件。 

