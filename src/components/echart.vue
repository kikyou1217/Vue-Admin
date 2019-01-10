<template>
    <div>
        <div class="title-box">
                <span class='title'>echart</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class='breadTitle'>
                     <el-breadcrumb-item :to="{ path: '/echart' }">Echart</el-breadcrumb-item>
                     <el-breadcrumb-item>echart</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
    
        <section class='echart-content'>
            <el-row>
                <el-col :span="12"><div id='barChart' style="width:100%; height:400px;"></div></el-col>
                <el-col :span="12"><div id='pieChart' style="width:100%; height:400px;"></div></el-col>
                <el-col :span="12"><div id='lineChart' style="width:100%; height:400px;"></div></el-col>
                <el-col :span="12"><div id='scatterChart' style="width:100%; height:400px;"></div></el-col>
                <a href="http://www.echartsjs.com/examples/">更多图表>></a>
            </el-row>
        </section>
</div>
</template>
<script>
    import echarts from 'echarts'
    export default{
        name:'echart',
        data(){
            return {
                barChart: null,
                pieChart: null,
                lineChart: null,
                scatterChart: null
            }
        },
        methods:{
            drawBarChart(){
                this.barChart=echarts.init(document.getElementById('barChart'));
                this.barChart.setOption({
                        title: {
                            text: 'BarChart'
                        },
                        tooltip: {},
                        legend: {
                            data:['销量']
                        },
                        xAxis: {
                            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                        },
                        yAxis: {},
                        series: [{
                            name: '销量',
                            type: 'bar',
                            data: [5, 20, 36, 10, 10, 20]
                        }]
                })
            },
            drawPieChart(){
                this.pieChart=echarts.init(document.getElementById('pieChart'));
                this.pieChart.setOption({
                    title : {
                    text: 'pieChart',
                    subtext: '纯属虚构',
                    x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                })
            },
            drawLineChart(){
                this.lineChart=echarts.init(document.getElementById('lineChart'));
                this.lineChart.setOption({
                    title: {
                            text: 'LineChart'
                        },
                    xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        areaStyle: {}
                    }]
                })
            },
            drawScatterChart(){
                this.scatterChart=echarts.init(document.getElementById('scatterChart'));
                this.scatterChart.setOption({
                    title: {
                            text: 'ScatterChart'
                        },
                    xAxis: {},
                    yAxis: {},
                    series: [{
                        symbolSize: 20,
                        data: [
                            [10.0, 8.04],
                            [8.0, 6.95],
                            [13.0, 7.58],
                            [9.0, 8.81],
                            [11.0, 8.33],
                            [14.0, 9.96],
                            [6.0, 7.24],
                            [4.0, 4.26],
                            [12.0, 10.84],
                            [7.0, 4.82],
                            [5.0, 5.68]
                        ],
                        type: 'scatter'
                    }]
                })
            },
            drawInit(){
                this.drawBarChart();
                this.drawPieChart();
                this.drawLineChart();
                this.drawScatterChart();
            }
        },
        mounted() {
            this.drawInit();
        },
        updated() {
            this.drawInit();
        }
    }
</script>
<style scoped>
   .echart-content{
       width: 100%;
       height: 100%;
   }
   .el-row{
       margin-top: 20px;
       margin-left: 20px;
    }
   
   .el-col{
       width: 50%;
       height: 400px;
       display: block;
   }
   a{
       text-decoration: none;
       color: #409eff;
       margin-top: 20px;
   }
</style>