<template>
        <div> 
            <div class="title-box">
                <span class='title'>我的财务</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class='breadTitle'>
                     <el-breadcrumb-item :to="{ path: '/finance' }">财务管理</el-breadcrumb-item>
                     <el-breadcrumb-item>我的财务</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
    </template>
    <script>
        export default {
          name:'finance'
        }
    </script>
    <style>
    </style>