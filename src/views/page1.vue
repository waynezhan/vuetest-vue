<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="userid"
                    label="id"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="username"
                    label="用户名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="password"
                    label="密码"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                page-size="6"
                :total="20"
                @current-change="page">
        </el-pagination>
        <el-button @click="getUserData" userId="1">点击这里</el-button>
    </div>
</template>


<script>

    export default {
        methods: {


            handleClick(row) {
                console.log(row);
            },
            page(currentPage) {
                alert(currentPage)
            },
            getUserData(){

                const _this = this
                axios.get("http://localhost:8181/getUser").then(function (resp) {
                    //console.log(resp);

                    console.log(_this)

                    _this.tableData=resp.data

                })
            }

        },


        data() {
            return {
                tableData: null
            }
        }

    }
</script>