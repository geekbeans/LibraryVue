<template>
    <el-form style="width: 50%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="图书名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    author: ''
                },
                rules: {
                    name: [
                        { required: true, message: '图书名字不能为空', trigger: 'blur' },
                    ],
                    author: [
                        { required: true, message: '作者名字不能为空', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:8181/book/save', this.ruleForm).then(function (resp) {
                            if (resp.data == '保存成功'){
                                _this.$alert('《'+_this.ruleForm.name+'》添加到了图书仓库', 'TIPS', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        _this.$router.push("/BookManage")
                                    }
                                        })
                            }
                        })
                    } else {
                        console.log('提交错误!!');
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
