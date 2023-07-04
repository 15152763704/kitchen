<template>
    <view :style="{height: isFixed ? height + 'px' : 'auto'}">
        <view :class="{'statusFixed':isFixed}" :style="{top:offsetTop+'rpx',zIndex: zIndex,width: width == 'auto' ? 'auto' : width + 'px',}" id="f__sticky">
            <slot></slot>
        </view>
    </view>
</template>

<script>
    export default {
        props:{
            // 距离顶部多高吸顶，单位rpx
            offsetTop: {
            	type: [Number, String],
            	default: 0
            },
            // 图层
            zIndex:{
                type: [Number,String],
                default: 9
            },
            // 滚动条参数
            scrollTop: {
            	type: Number,
            	default: 0
            },
            // 是否开启吸顶功能
            enable: {
            	type: Boolean,
            	default: true
            },
        },
        watch:{
            scrollTop(val){
                if(val>this.viewH && this.enable){
                    this.isFixed = true
                }else{
                    this.isFixed = false
                }
            },
            enable(val){
            	if(val == false){
            		this.isFixed = false;
            	}
            }
        },
        data(){
            return {
                viewH:0,// 获取元素距离顶部的高度
                isFixed:false,//是否吸顶
                height: 'auto',
                width: 'auto',
            }
        },
        mounted(){
            this.$nextTick(function() {
                this.getStickyH('#f__sticky')
            });
        },
        methods:{
            // 获取元素距离顶部的高度
            getStickyH(id) {
                var me = this;
                var query = uni.createSelectorQuery().in(me);
                query.selectViewport().scrollOffset()
                query.select(id).boundingClientRect();
                query.exec(function(res) {
                    // console.log(res,'getStickyH')
                    me.viewH = res[0].scrollTop + res[1].top-uni.upx2px(me.offsetTop);
                    me.height = res[1].height
                    me.width = res[1].width
                });
            },

        }
    }
</script>

<style>
.statusFixed{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: 10;
}
</style>
