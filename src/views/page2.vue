<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户姓名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>

        <el-form-item label="用户密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>

</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 0, max: 20, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请选择活动区域', trigger: 'change'}
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(this.ruleForm)
                        axios.post("http://localhost:8181/createUser",this.ruleForm)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>