<template>
    <olylis-cascader :options="treeData" :value="selectedValue" @change="handleChange" :is-show-nav="false">
        <!-- 可自定义节点 -->
<!--        <template v-slot="{ data }">-->
<!--            <view>-->
<!--                {{ data.label }} : {{ data.value }}-->
<!--            </view>-->
<!--        </template>-->
    </olylis-cascader>
</template>

<script>
    import olylisCascader from '@/components/olylis-cascader/olylis-cascader'

    export default {
        name: 'demo',
        components: {olylisCascader},
        data() {
            return {
                selectedValue: [],
                treeData: [
                    {
                        value: 1,
                        label: '一级 1',
                        children: [{
                            value: 11,
                            label: '二级 1-1',
                            children: [{
                                value: 111,
                                label: '三级 1-1-1'
                            }]
                        }],
                    }, {
                        value: 2,
                        label: '一级 2',
                        children: [{
                            value: 21,
                            label: '二级 2-1',
                            children: [{
                                value: 211,
                                label: '三级 2-1-1'
                            }]
                        }, {
                            value: 22,
                            label: '二级 2-2',
                            children: [{
                                value: 221,
                                label: '三级 2-2-1'
                            }]
                        }]
                    }, {
                        value: 3,
                        label: '一级 3',
                        children: [{
                            value: 31,
                            label: '二级 3-1',
                            children: [{
                                value: 311,
                                label: '三级 3-1-1'
                            }]
                        }, {
                            value: 32,
                            label: '二级 3-2',
                            children: [{
                                value: 321,
                                label: '三级 3-2-1'
                            }]
                        }]
                    }
                ]
            }
        },
        methods: {
            handleChange(selectedValue, clickItem) {
                console.log('handleChange', selectedValue, clickItem)
                this.selectedValue = selectedValue
            }
        }
    }
</script>

<style scoped>

</style>