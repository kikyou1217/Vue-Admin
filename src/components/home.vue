<template>
       <el-container>
            <el-header id='header'>
                <div class='VueAdmin'>VueAdmin</div>
                <i class="el-icon-menu"></i>
                <div class='user' @mouseenter="flag=!flag">
                    <span class='userName'>胡歌</span>
                    <img src="../images/1.jpg" class='userImg'>
                </div>
                <div class='info-card' v-show='flag' @mouseleave="flag=!flag">
                    <p>我的消息</p>
                    <p>设置</p>
                    <p @click='exit'>退出登录</p>
                </div>
            </el-header>
            <el-container class='container'>
             <el-aside style='width:200px;'>
                 <el-menu>
                     <el-submenu index="1">
                         <template slot="title"><i class="el-icon-message"></i>配置系统</template>
                         <el-menu-item-group>
                             <el-menu-item index="1-1" @click='toTable' :class="{active:hasClass}">客户列表</el-menu-item>
                             <el-menu-item index="1-2" @click='toForm'>创建活动</el-menu-item>
                             <el-menu-item index="1-3" @click='toOrder'>订单列表</el-menu-item>
                         </el-menu-item-group>
                     </el-submenu>
                     <el-submenu index="2">
                         <template slot="title"><i class="el-icon-menu"></i>财务管理</template>
                         <el-menu-item-group>
                             <el-menu-item index="2-1" @click='toFinance'>我的财务</el-menu-item>
                         </el-menu-item-group>
                     </el-submenu>
                     <el-submenu index="3">
                         <template slot="title"><i class="el-icon-setting"></i>退货管理</template>
                         <el-menu-item-group>
                             <el-menu-item index="3-1" @click='toRefunds'>退货列表</el-menu-item>
                         </el-menu-item-group>
                     </el-submenu>
                     <el-submenu index="4">
                         <template slot="title"><i class="el-icon-menu"></i>EChart</template>
                         <el-menu-item-group>
                             <el-menu-item index="4-1" @click='toEchart'>echart</el-menu-item>
                         </el-menu-item-group>
                     </el-submenu>
                 </el-menu>
             </el-aside>
             <el-main>
                 <router-view></router-view>
             </el-main>
            </el-container>
        </el-container>   
</template>
<script>
    export default {
        name: 'home',
        data(){
            return {
                flag: false,
                hasClass: true,
            }
        },
        methods:{
            //路由跳转部分
            toTable(){
                this.$router.push('/table');
                this.hasClass=false
            },
            toForm(){
                this.$router.push('/form')
                this.hasClass=false
            },
            toEchart(){
                this.$router.push('/echart')
                this.hasClass=false
            },
            toOrder(){
                this.$router.push('/order');
                this.hasClass=false
            },
            toFinance(){
                this.$router.push('/finance');
                this.hasClass=false
            },
            toRefunds(){
                this.$router.push('/refunds');
                this.hasClass=false
            },
            exit(){
                this.$router.push('/login')
            }
        }
    }
</script>
<style>
#header{
    padding: 0;     
}
.el-header{
    width: 100%;
    background-color: #409eff;
    color: #333;
    text-align: center;
    line-height: 60px;
    position: fixed;
    padding: 0; 
    cursor: pointer;
    z-index: 998;
  }
.active{
    color:#409eff;
}
.el-header .VueAdmin{
    height: 60px;
    width: 200px;
    color: #fff;
    font-size: 22px;
    background-color: #409eff;
    border-right: 1px solid #fff;
    float: left;
}
.el-header .el-icon-menu{
    color: #FFF;
    font-size: 20px;
    line-height: 60px;
    position: absolute;
    left: 20px;
    float: left;
    margin-left: 200px;
}
.user{
    position: absolute;
    right: 40px;
    height: 60px;
    width: 76px;
}
.userName{
    color: #fff;
    font-size: 14px;
    line-height: 60px;
    position: absolute;
    left: 0;
}
.userImg{
    overflow: hidden;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    right: 0;
    top: 12px;
}
.info-card{
    position: absolute;
    right: 30px;
    top: 65px;
    width: 100px;
    height: 120px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #cac8c8;
    cursor: pointer;
    z-index: 999;
}
.info-card p{
    font-size: 14px;
    height: 40px;
    line-height: 40px;
}
.info-card p:last-child{
    border-top: 1px solid #e6eaf0;
}
.info-card p:hover{
    background-color: #e0e1e4;
}
.container{
    padding-top: 60px;
}
.el-aside{
    background-color: rgb(230, 234, 240);
    color: #333;
    text-align: center;
    min-height: 700px;
    position: fixed;
  }
.el-aside .el-menu{
    background-color: rgb(230, 234, 240);
}
.el-main {
    width: 100%;
    height: 100%;
    min-height: 700px;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    margin-left: 200px;
  }
</style>