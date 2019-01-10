<template>
    <div class='bg'>
        <el-card class="box-card">
                <el-alert title="请填写内容" type="warning" show-icon v-show='flag' class='alert'></el-alert>
                <div class='box-title'>
                    <span class='left'>新增</span>
                    <span class='right' @click='close'>×</span>
                </div>
                <div class='box-container'>
                    <div>
                        <label for="name">姓名</label>
                        <el-input id='name' placeholder="请输入内容" v-model="name" clearable></el-input>
                    </div>
                   <div>
                        <label for="province">省份</label>
                        <el-input id='province' placeholder="请输入内容" v-model="province" clearable></el-input>
                   </div>
                    <div>
                        <label for="city">市区</label>
                        <el-input id='city' placeholder="请输入内容" v-model="city" clearable></el-input>
                    </div>
                    <div>
                        <label for="address">地址</label>
                        <el-input id='address' placeholder="请输入内容" v-model="address" clearable></el-input>
                    </div>
                    <div>
                        <label for="zip">邮编</label>
                        <el-input id='zip' placeholder="请输入内容" v-model="zip" clearable></el-input>
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
    export default{
        name:'newfile',
        data(){
            return {
                name:'',
                province:'',
                city:'',
                address:'',
                zip:'',
                flag: false,
                //保存新增的数据
                newInfo:{},
            }
        },
        methods:{
            close(){
                this.flag=false;
                this.$emit('newFileShow');
                this.name=this.province=this.city=this.address=this.zip='';
            },
            //确认按钮必须是填写内容的
            config(){
                if(this.name==''|this.province==''|this.city==''|this.address==''|this.zip==''){
                    this.flag=!this.flag;
                    return;
                }
                this.newInfo={'name':this.name,'province':this.province,'city':this.city,'address':this.address,'zip':this.zip};
                this.$emit('newFileShow',this.newInfo);
                this.name=this.province=this.city=this.address=this.zip='';
                this.flag=false;
                this.open()
            },
            open() {
                this.$confirm('确认添加该记录吗', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '添加成功!',
                      })
                })
            },
            cancle(){
                this.flag=false;
                this.$emit('newFileShow');
                this.name=this.province=this.city=this.address=this.zip='';
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