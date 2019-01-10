<template>
        <div> 
            <div class="title-box">
                <span class='title'>退货列表</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class='breadTitle'>
                     <el-breadcrumb-item :to="{ path: '/refunds' }">退货管理</el-breadcrumb-item>
                     <el-breadcrumb-item>退货列表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
    </template>
    <script>
        export default {
          name:'refunds'
        }
    </script>
    <style>
    </style>