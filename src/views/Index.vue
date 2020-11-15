<template>
    <el-container style="height: 500px; border: 1px solid #eee">

        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

            <el-menu router :default-openeds="['0','1']">
                <el-submenu v-for="(item1,index1) in $router.options.routes" :index="index1+''">
                    <template slot="title"><i class="el-icon-setting"></i>{{item1.name}}</template>
                    <el-menu-item v-for="(item2,index2) in item1.children"
                      :class="$route.path==item2.path?'is-active':''" :index="item2.path">{{item2.name}}</el-menu-item>
                </el-submenu>
            </el-menu>

        </el-aside>

        <el-container>

            <el-header style="text-align: right; font-size: 12px">

                <el-dropdown>
                    <i class="el-icon-message" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <span>CZH</span>

            </el-header>

            <el-main>
                <!--开视图窗口-->
                <router-view></router-view>
            </el-main>

        </el-container>

    </el-container>

</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>