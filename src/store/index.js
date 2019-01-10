import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const state={
        //获取index
        index:0,
        //模拟的静态数据 
        tableData: [{
            id: 1,
            name: '汤丽',
            province: '香港特别行政区',
            city: '香港',
            address: '香港岛 湾仔',
            zip: 999077
        }, {
            id: 2,
            name: '夏强',
            province: '深圳',
            city: '南山区',
            address: '深圳市 南山区',
            zip: 518000
        }, {
            id: 3,
            name: '尹磊',
            province: '广州',
            city: '天河',
            address: '广州市 天河区 华强路',
            zip: 510000
        }, {
            id: 4,
            name: '王志辉',
            province: '上海',
            city: '普陀区',
            address: '上海市 普陀区 金沙江路',
            zip: 200333
        },{
            id: 5,
            name: '胡秀英',
            province: '北京',
            city: '北京',
            address: '北京市 房山区',
            zip: 100000
        },{
            id: 6,
            name: '孔静',
            province: '福建省',
            city: '厦门市',
            address: '福建省 厦门市 同安区',
            zip: 350000
        },{
            id: 7,
            name: '蔡洋',
            province: '广州',
            city: '越秀区',
            address: '广州市 越秀区',
            zip: 200333
        },{
            id: 8,
            name: '万超',
            province: '上海',
            city: '上海市',
            address: '上海 上海市 青浦区',
            zip: 200333
        },{
            id: 9,
            name: '曹敏',
            province: '北京',
            city: '朝阳区',
            address: '北京市 朝阳区',
            zip: 100000
        },{
            id: 10,
            name: '宋平',
            province: '吉林省',
            city: '辽源市',
            address: '吉林省 辽源市 东辽县',
            zip: 130000
        },{
            id: 11,
            name: '易磊',
            province: '海南省',
            city: '三亚市',
            address: '海南省 三亚市',
            zip: 572900
        },{
            id: 12,
            name: '韩勇',
            province: '上海',
            city: '杨浦区',
            address: '上海市 杨浦区',
            zip: 200333
        },{
            id: 13,
            name: '何平',
            province: '河北省',
            city: '石家庄市',
            address: '河北省 石家庄市 长安区',
            zip: 300000
        },{
            id: 14,
            name: '姚静',
            province: '江苏省',
            city: '苏州市',
            address: '江苏省 苏州市 姑苏区',
            zip: 210000
        },{
            id: 15,
            name: '孟刚',
            province: '四川省',
            city: '自贡市',
            address: '四川省 自贡市 贡井区',
            zip: 643000
        },{
            id: 16,
            name: '郭军',
            province: '重庆',
            city: '重庆市',
            address: '重庆 重庆市 黔江区',
            zip: 400000
        },{
            id: 17,
            name: '郭军',
            province: '湖南省',
            city: '娄底市',
            address: '湖南省 娄底市 双峰县',
            zip: 410011
        },{
            id: 18,
            name: '谭芳',
            province: '陕西省',
            city: '渭南市',
            address: '陕西省 渭南市 白水县',
            zip: 710000
        },{
            id: 19,
            name: '高平',
            province: '新疆维吾尔自治区',
            city: '巴音郭楞蒙古自治州',
            address: '新疆维吾尔自治区 巴音郭楞蒙古自治州 轮台县',
            zip: 840000
        },{
            id: 20,
            name: '汪刚',
            province: '安徽省',
            city: '铜陵市',
            address: '安徽省 铜陵市 狮子山区',
            zip: 247000
        },{
            id: 21,
            name: '沈强',
            province: '宁夏回族自治区',
            city: '固原市',
            address: '宁夏回族自治区 固原市 原州区',
            zip: 756400
        },{
            id: 22,
            name: '康磊',
            province: '江苏省',
            city: '常州市',
            address: '江苏省 常州市 钟楼区',
            zip: 226000
        },{
            id: 23,
            name: '雷磊',
            province: '内蒙古自治区',
            city: '包头市',
            address: '内蒙古自治区 包头市 固阳县',
            zip: 260000
        },{
            id: 24,
            name: '秦涛',
            province: '台湾',
            city: '基隆市',
            address: '台湾 基隆市 仁爱区',
            zip: 70847
        },{
            id: 25,
            name: '顾军',
            province: '甘肃省',
            city: '金昌市',
            address: '甘肃省 金昌市 其它区',
            zip: 747000
        },{
            id: 26,
            name: '邵超',
            province: '香港特别行政区',
            city: '新界',
            address: '香港特别行政区 新界 荃湾区',
            zip: 999077
        },{
            id: 27,
            name: '常芳',
            province: '上海',
            city: '上海市',
            address: '上海 上海市 青浦区',
            zip: 200000
        },{
            id: 28,
            name: '曹敏',
            province: '安徽省',
            city: '马鞍山市',
            address: '安徽省 马鞍山市 当涂县',
            zip: 247000
        },{
            id: 29,
            name: '陈明',
            province: '湖北省',
            city: '黄石市',
            address: '湖北省 黄石市 其它区',
            zip: 443000
        },{
            id: 30,
            name: '贾明',
            province: '天津',
            city: '天津市',
            address: '天津 天津市 河北区',
            zip: 300000
        },{
            id: 31,
            name: '白芳',
            province: '山西省',
            city: '吕梁市',
            address: '山西省 吕梁市 柳林县',
            zip: 480002
        },{
            id: 32,
            name: '赵强',
            province: '山东省',
            city: '青岛市',
            address: '山东省 青岛市 胶州市',
            zip: 250000
        },{
            id: 33,
            name: '赵强',
            province: '山东省',
            city: '青岛市',
            address: '山东省 青岛市 胶州市',
            zip: 250000
        },{
            id: 34,
            name: '郑涛',
            province: '江苏省',
            city: '常州市',
            address: '江苏省 常州市 溧阳市',
            zip: 210000
        }]
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
})
