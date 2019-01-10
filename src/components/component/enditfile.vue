<template>
    <div class='bg'>
        <el-card class="box-card">
                <el-alert title="内容不能为空" type="warning" show-icon v-show='flag' class='alert'></el-alert>
                <div class='box-title'>
                    <span class='left'>编辑</span>
                    <span class='right' @click='close'>×</span>
                </div>
                <div class='box-container'>
                    <div>
                        <label for="name">姓名</label>
                        <el-input id='name' v-model="name" clearable autocomplete="off"></el-input>
                    </div>
                   <div>
                        <label for="province">省份</label>
                        <el-input id='province' v-model="province" clearable autocomplete="off"></el-input>
                   </div>
                    <div>
                        <label for="city">市区</label>
                        <el-input id='city' v-model="city" clearable autocomplete="off"></el-input>
                    </div>
                    <div>
                        <label for="address">地址</label>
                        <el-input id='address' v-model="address" clearable autocomplete="off"></el-input>
                    </div>
                    <div>
                        <label for="zip">地址</label>
                        <el-input id='zip' v-model="zip" clearable autocomplete="off"></el-input>
                    </div>
                </div>
                <div class='box-config'>
                        <el-button type="primary" @click='config' class='config'>确认</el-button>
                        <el-button type="danger" @click='cancle' class='cancle'>取消</el-button>
                    </div>
            </el-card>
        </div>
</template>
<script>
    import { mapState,mapActions } from 'vuex'
    export default{
        name:'enditfile',
        data(){
            return {
                name:'',
                province:'',
                city:'',
                address:'',
                zip:'',
                flag: false,
                //存储新数据
                data:{}
            }
        },
        props:['row'],
        watch: {
            row(val,oldval){
                if(val!==oldval){
                    this.update();
                }
            },
            data(val,oldval){
                this.update();
            }
        },
        methods:{ 
            update(){
                this.name=this.row.name;
                this.province=this.row.province;
                this.city=this.row.city;
                this.address=this.row.address;
                this.zip=this.row.zip;
            },
            close(){
                this.flag=false;
                this.data=this.row;
                this.$emit('enditFileShow',this.data);
            },
            //修改页面数据
            config(){
                if(this.name==''|this.province==''|this.city==''|this.address==''|this.zip==''){
                    this.flag=true;
                    return;
                }
                this.data={'id':this.row.id,'name':this.name,'province':this.province,'city':this.city,'address':this.address,'zip':this.zip};
                this.$emit('enditFileShow',this.data);
                this.flag=false;
                this.open();
            },
            open() {
                this.$confirm('确认修改该记录吗', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '修改成功!',
                      })
                }).catch(() => {
                    this.close();
                    this.$message({
                    type: 'info',
                    message: '已取消修改',
                    });          
                });
            },
            cancle(){
                this.flag=false;
                this.data=this.row;
                this.$emit('enditFileShow',this.data)
            }
        }
    }
</script>
<style scoped>
     .box-card{
    position: fixed;
    top: 130px;
    left: 500px;
    height: 420px;
    z-index: 99;
    width: 40%;
    cursor: pointer;
    }
</style>