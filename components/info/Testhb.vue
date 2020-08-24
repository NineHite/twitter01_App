<template>
    <div id="myChart" class="notfound"></div>
</template>
<script>
    var data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];
    var dateList = data.map(function (item) {
        return item[0];
    });
    var valueList = data.map(function (item) {
        return item[1];
    });
    export default {
        data () {
            return {
            }
        },
        mounted(){
            this.drawLine();
        },
        methods: {
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    // Make gradient line here
                    // backgroundColor: ['#081944'], // 全图默认背景
                    grid: [{
                        bottom: '60%'
                    }, {
                        top: '60%'
                    }, {
                        show: false,
                        borderWidth: 1,
                        // borderColor: '#FF0000' // 网格的边框颜色
                    }],
                    // 视觉映射组件，用于进行『视觉编码』
                    visualMap: [{
                        show: false, // 是否显示 visualMap-piecewise 组件。如果设置为 false，不会显示，但是数据映射的功能还存在。
                        type: 'continuous', // 定义为连续型 visualMap
                        seriesIndex: 0, // 指定取哪个系列的数据，即哪个系列的 series.data。默认取所有系列
                        min: 0, // 指定 visualMapPiecewise 组件的最小值。
                        max: 400
                    }, {
                        show: false,
                        type: 'continuous',
                        seriesIndex: 1,
                        dimension: 0,
                        min: 0,
                        max: dateList.length - 1
                    }],
                    title: [{
                        left: 'center',
                        text: 'Gradient along the y axis'
                    }, {
                        top: '55%',
                        left: 'center',
                        text: 'Gradient along the x axis'
                    }],
                    // 提示框组件
                    tooltip: {
                        trigger: 'axis' // 触发类型。坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用/none什么都不触发
                    },
                    xAxis: [{
                        data: dateList,
                        show: true //是否显示x轴
                    }, {
                        data: dateList,
                        gridIndex: 1 // x 轴所在的 grid 的索引，默认位于第一个 grid。
                    }],
                    yAxis: [{
                        nameTextStyle: { // 坐标轴名称的文字样式。
                            color: '#63B8FF',
                            fontWeight:'bold', // 坐标轴名称文字字体的粗细
                            fontSize: 15
                        },
                        name: '心率次数/bmp',
                        splitLine: {
                            show: true, // x轴、y轴显示网格线,坐标轴在 grid 区域中的分隔线
                            lineStyle:{
                                // 使用深浅的间隔色--分隔线颜色，可以设置成单个颜色。也可以设置成颜色数组，分隔线会按数组中颜色的顺序依次循环设置颜色。
                                color: ['#4F5258', '#30394F']
                            }
                        }
                    }, {
                        splitLine: {show: false},
                        gridIndex: 1
                    }],
                    // 系列列表。每个系列通过 type 决定自己的图表类型
                    series: [{
                        type: 'line', // 线条
                        showSymbol: false, // 是否显示 symbol符号, 如果 false 则只有在 tooltip hover 的时候显示。
                        data: valueList,
                        lineStyle: {color: '#BA3945'}, // 线条样式
                        markPoint: { // 图表标注
                            data: [
                                {
                                    type: 'max',
                                    name: '最高心率',
                                    label: {
                                        color: '#CCCCCC',
                                        show: true,
                                    }
                                },
                                {
                                    type: 'min',
                                    name: '最小心率',
                                    label: {
                                        color: '#CCCCCC',
                                        show: true,
                                        position: 'bottom',
                                    },
                                    symbolSize: [5, 5] // 标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                                }
                            ],
                            // symbol: 'none', // 标记的图形。circle-圆形,rect-方形
                            label: { // 标注的文本
                                show: true
                            },
                            itemStyle: {
                                color: '#081944', // 图形的颜色--设置这个是为了隐藏掉图标
                                opacity: 1 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                            }
                        }
                    }, {
                        type: 'line',
                        showSymbol: false,
                        data: valueList,
                        xAxisIndex: 1,
                        yAxisIndex: 1
                    }]
                });
            }
        }
    }
</script>
<style scoped>
    .notfound{
        width: 509px;
        height: 800px;
    }
</style>