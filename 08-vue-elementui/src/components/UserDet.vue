<template>
  <div id="add-user">
    <el-dialog title="用户信息详情" :visible.sync="$store.state.userDetIsShow">
      <el-form :model="form">
        <el-row>
          <el-col :span="12">
            <label>姓名：</label>
            <span>{{this.$store.state.userDetDate.name}}</span>
          </el-col>
          <el-col :span="12">
            <label>年龄：</label>
            <span>{{this.$store.state.userDetDate.age}}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <label>邮箱：</label>
            <span>{{this.$store.state.userDetDate.email}}</span>
          </el-col>
          <el-col :span="12">
            <label>电话：</label>
            <span>{{this.$store.state.userDetDate.phone}}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <label>住址：</label>
            <span>{{this.$store.state.userDetDate.address}}</span>
          </el-col>
          <el-col :span="12">
            <label>职业：</label>
            <span>{{this.$store.state.userDetDate.profession}}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <label>时间：</label>
            <span>{{this.$store.state.userDetDate.date}}</span>
          </el-col>
          <el-col :span="12">
            <label>学历：</label>
            <span>{{this.$store.state.userDetDate.education}}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <label>学校：</label>
            <span>{{this.$store.state.userDetDate.graduationschool}}</span>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancleDialog()">取 消</el-button>
        <el-button type="primary" @click="cancleDialog()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLabelWidth: "120px",
      forms: {
        name: "",
        phone: "",
        email: "",
        education: "",
        graduationschool: "",
        profession: "",
        profile: "",
        age: "",
        companyId: "",
        date: "",
        address: ""
      },
      form: {}
    };
  },
  methods: {
    cancleDialog() {
      this.$store.commit("changedialogUserDet", false);
    }
    // getSingleUser() {
    // return this.$axios.get("http://localhost:3000/users/8").then(res => {
    //   this.form = res.data;
    // });
    // this.form = this.$store.state.userDetDate;
    // }
  },
  mounted() {
    // this.getSingleUser();
  }
};
</script>
<style scoped>
label {
  width: 120px;
  display: inline-block;
  text-align: right;
}
.el-col {
  line-height: 40px;
  font-size: 16px;
}
</style>