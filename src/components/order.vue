<template>
    <div> 
        <div class="title-box">
            <span class='title'>订单列表</span>
            <el-breadcrumb separator-class="el-icon-arrow-right" class='breadTitle'>
                 <el-breadcrumb-item :to="{ path: '/order' }">配置系统</el-breadcrumb-item>
                 <el-breadcrumb-item>订单列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
<script>
    export default {
      name:'form'
    }
</script>
<style>
</style>