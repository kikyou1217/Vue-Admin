<template>
    <div v-loading="loading">
        <!-- 工具条 -->
        <div class="title-box">
            <span class='title'>客户列表</span>
            <el-breadcrumb separator-class="el-icon-arrow-right" class='breadTitle'>
                 <el-breadcrumb-item :to="{ path: '/table' }">配置系统</el-breadcrumb-item>
                 <el-breadcrumb-item>客户列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!-- 新增子组件 -->
        <div v-show='newFileFlag'>
            <newfile @newFileShow='newFile'></newfile>
        </div>

         <!-- 编辑子组件 -->
        <div v-show='enditFileFlag'>
            <enditfile @enditFileShow='enditFile' :row='row'></enditfile>
        </div>

        <!-- 列表 -->
        <div>
            <el-input v-model="username" placeholder="姓名" class='item'></el-input>
            <el-button type="primary" class='item' @click='checkName'>查询</el-button>
            <el-button type="primary" class='item' @click='createFile'>新增</el-button>
        </div>
        <el-table @selection-change="handleSelectionChange" :data="list" :default-sort = "{prop: 'id', order: 'ascending'}">
            <el-table-column type="selection"></el-table-column>
            <el-table-column label="序号"prop="id" sortable>
                <template slot-scope="scope">
                    <span>{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column label="用户名">
                <template slot-scope="scope">
                    <span>{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="省份">
                <template slot-scope="scope">
                    <span>{{ scope.row.province }}</span>
                </template>
            </el-table-column>
            <el-table-column label="市区">
                <template slot-scope="scope">
                    <span>{{ scope.row.city }}</span>
                </template>
            </el-table-column>
            <el-table-column label="地址">
                <template slot-scope="scope">
                    <span>{{ scope.row.address }}</span>
                </template>
            </el-table-column>
            <el-table-column label="邮编">
                <template slot-scope="scope">
                    <span>{{ scope.row.zip }}</span>
                </template>
                </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="enditFileMsg(scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="open2(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
      </el-table>
      <!-- 批量删除 -->
      <el-button type="button" :class="[multipleSelection.length==0? 'notDelete':'delete']" :disabled='multipleSelection.length==0' @click='open3(multipleSelection)'>批量删除</el-button>
      
      <!-- 分页签 -->
      <pagination v-show="total>0" :total="total" :page.sync="page" :limit.sync="limit" @pagination="getList" />
    </div>
</template>
<script>
    import Pagination from './component/pagination'
    import  newfile from './component/newfile.vue'
    import  enditfile from './component/enditfile.vue'
    import { mapState,mapActions } from 'vuex'
    export default {
        name:'table',
        components: { Pagination, newfile, enditfile},
        data(){
            return {
                //加载效果
                loading: true,
                //选中的数据
                multipleSelection:[],
                //新增
                newFileFlag: false,
                //编辑
                enditFileFlag: false,
                //传递编辑页数据
                row:null,
                //查询新增板块
                username:'',
                //渲染数据模块
                list:null,   //请求回来填充表格的数据   
                total:0,     //数据总条数 
                page: 1,    //默认显示第1页
                limit: 10,   //默认一次显示10条数据
                //查询匹配的列表
                checkList: [],
            }
        },
        computed: mapState([
            'tableData'
        ]),
        created() {
            this.getList();
        },
        methods: {
            //引入Vuex中的方法
            ...mapActions([
                'addInfo','addEndit'
            ]),
            //查询
            checkName(){
                //根据填写的姓名匹配查询
                this.checkList= [];
                if(this.username==''){
                   this.getList();
                }else{
                    this.tableData.forEach(item => {
                    if(item.name.indexOf(this.username)!=-1){
                        this.checkList.push(item)
                    }
                 })
                 //开始读取的数据索引
                var start = (this.page - 1) * this.limit;
                //结束读取的数据索引
                var end = this.page * this.limit;
                //每次渲染的数据条数
                this.list = this.checkList.slice(start,end);
                this.total = this.checkList.length;
                }
            },
            //显示新增文档
            createFile(){
                this.newFileFlag=!this.newFileFlag;
            },
            //保存新增内容
            newFile(val){
                this.newFileFlag=!this.newFileFlag;
                var index=this.tableData.length-1;
                //新增数据id
                val.id=this.tableData[index].id+1;
                //追加保存的数据
                this.addInfo(val);
                this.getList();
            },
            //显示编辑页面并传递index
            enditFileMsg(row){
                this.enditFileFlag=!this.enditFileFlag;
                this.row=row;
                console.log(this.row)
            },
            //刷新编辑页面数据
            enditFile(data){
                this.enditFileFlag=!this.enditFileFlag;
                this.addEndit(data);
                this.getList();
            },
            //删除
            handleDelete(id){
                //核心是要找到删除内容对应的索引，再利用数组的splice方法删除数据
                this.tableData.some((item,index)=>{
                    if(item.id==id){
                        this.tableData.splice(index,1);
                        return true;
                    }
                });
                this.getList();
            },
            //删除提示框
            open2(id) {
                this.$confirm('确认删除该记录吗', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.handleDelete(id);
                    this.$message({
                        type: 'success',
                        message: '删除成功!',
                    });
                }).catch(() => {
                    this.$message({
                    type: 'info',
                    message: '已取消删除'
                    });          
                });
            },
            //分页
            getList(){
                //开始读取的数据索引
                var start = (this.page - 1) * this.limit;
                //结束读取的数据索引
                var end = this.page * this.limit;
                //每次渲染的数据条数
                this.list = this.tableData.slice(start,end);
                //用于判断删除的当前页，如果当前页没有数据则调到前一页
                if(this.list.length==0){
                    start = (this.page-1-1) * this.limit;
                    end = (this.page-1) * this.limit;
                    this.list = this.tableData.slice(start,end);
                }
                this.total = this.tableData.length;
                //加载效果
                this.loading=false;
            },
            //批量选择
            handleSelectionChange(val){
                this.multipleSelection = val;
            },
            //批量删除+警示框
            deleteAll(){
                // this.tableData.splice(0,this.multipleSelection.length)；这样删除如果遇到index不连续的情况会有bug,无法删除index断开后的数据
                this.multipleSelection.forEach(row=>{
                    this.handleDelete(row.id);
                })
            },
            open3(val) {
                this.$confirm('确认删除该记录吗', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.deleteAll();
                    this.$message({
                        type: 'success',
                        message: '删除成功!',
                    });
                }).catch(() => {
                    this.$message({
                    type: 'info',
                    message: '已取消删除'
                    });          
                });
            }
        }
    }
</script>
<style scoped>
    .el-input {
    position: relative;
    font-size: 14px;
    width: auto;
}
</style>