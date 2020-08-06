<template>
    <div>
        <h1>this page 3</h1>
        <el-button @click="test1">测试按钮</el-button>


    </div>

</template>


<script>

    export default {
        name: "page3",



        methods: {



            test1(){
                var loginDto={};
                loginDto={
                    "username":"zhang",
                    "password":"12312",
                },
                    console.log(loginDto)
                axios.post("http://localhost:8181/login",loginDto)

            }




        }
    }
</script>

<style scoped>

</style>