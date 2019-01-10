<template>
  <div>
      <el-card class="box-card">
          <span class='login'>系统登录</span>
          <el-input placeholder="账号" v-model="userName" clearable class='item' type='text' @blur='getUserName'>
          </el-input>
          <span class='tips tips1'>{{userMessage}}</span>
          <el-input placeholder="密码" v-model="password" clearable class='item' type='password' @blur='getUserPswd'>
          </el-input>
          <span class='tips tips2'>{{pswdMessage}}</span>
          <div class='left item'>
              <el-switch v-model="value1" active-color="#13ce66" inactive-color="#dcdfe6">
              </el-switch>
              <span> 记住密码</span>
          </div>
          <div>
            <el-button type="primary" @click='submit'>登录</el-button>
            <router-link to="index"></router-link>
          </div>
      </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userName: 'admin111',
      userMessage: '',
      password: '111111',
      pswdMessage: '',
      value1: true,
      submitMessage: ''
    }
  },
  methods: {
    getUserName(){
      // 4-8位非纯数字非纯字母的用户名组合正则表达式
      let reg=new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,8}$/);
      //通过验证
      if(!this.userName){
        this.userMessage='用户名不能为空';
      }else if(!reg.test(this.userName)){
        this.userMessage='请输入4-8位数字字母组合的用户名';
      }else{
        this.userMessage=''
      }
    },
    getUserPswd(){
      // 6位纯数字密码
      let reg=new RegExp(/^[\d]{6}$/);
      //通过验证
      if(!this.password){
        this.pswdMessage='密码不能为空'
      }else if(!reg.test(this.password)){
        this.pswdMessage='请输入6位数字密码'
      }else{
        this.pswdMessage=''
      }
    },
    submit(){
       // 4-8位非纯数字非纯字母的用户名组合正则表达式
       let reg1=new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,8}$/);
       // 6位纯数字密码
       let reg2=new RegExp(/^[\d]{6}$/);
      if(reg1.test(this.userName)&&reg2.test(this.password)){
        this.$router.push('/table')
      }else{
       return false;
      }
    }
  }
}
</script>

<style  lang='css' scoped>
  .login{
    display: block;
    font-size: 18px;
    font-weight: 700;
    color: #000;
    margin-bottom:55px;
  }
  .item{
    margin-bottom: 24px;
  }
  .box-card {
    width: 400px;
    height: 370px;
    margin: 150px auto;
    padding: 20px 20px;
    position: relative;
  }
  .left{
    text-align: left;
  }
  .tips{
    position: absolute;
    font-size: 12px;
    color: red;
    left: 50%;
    transform: translateX(-50%);
  }
  .tips1{
    top: 163px;
  }
  .tips2{
    top: 227px;
  }
  .el-button{
    width: 100%;
    margin-top: 12px;
  }
</style>
