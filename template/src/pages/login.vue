<style lang="less">
  .form .el-input__inner{
    background-color: hsla(0,0%,73%,.4);
    color: #fff;
    border: none;
  }
</style>
<style lang="less" scoped>
  .form-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('~stc/imgs/test.png');
    background-size: cover;
  }
  .cover{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .4);
  }
  .form{
    width:260px;
  }
</style>
<template>
  <div class="form-wrap">
    <div class="cover"></div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm form">
      <el-form-item prop="username" style="margin-bottom: 30px;">
        <el-input type="text" class="input" v-model="ruleForm2.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password" style="margin-bottom: 50px;">
        <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="success" round @click="submitForm('ruleForm2')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          username: 'test1',
          password: '123456'
        },
        rules2: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.submit() ;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submit(){
        this.$model.login({username:this.ruleForm2.username,password:this.ruleForm2.password}).then(res=>{
          this.$router.replace({ path: '/banner' })
        }).catch() ;
      }
    }
  }
</script>