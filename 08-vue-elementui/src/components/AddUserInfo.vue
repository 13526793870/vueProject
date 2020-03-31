<template>
  <div id="add-user">
    <el-dialog :title="$store.state.dialogTit" :visible.sync="$store.state.dialogAddUserVisible">
      <el-form :model="form">
        <el-row>
          <el-col :span="12">
            <label style="float: left;text-align: right;width: 120px;line-height: 40px;">
              <span style="color:red;">*</span>姓名：
            </label>
            <el-form-item :label-width="formLabelWidth">
              <el-input
                v-model="$store.state.userDetDate.name"
                autocomplete="off"
                placeholder="请填写姓名"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <label style="float: left;text-align: right;width: 120px;line-height: 40px;">
              <span style="color:red;">*</span>年龄：
            </label>
            <el-form-item :label-width="formLabelWidth">
              <el-input
                v-model="$store.state.userDetDate.age"
                autocomplete="off"
                placeholder="请填写年龄"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <label style="float: left;text-align: right;width: 120px;line-height: 40px;">
              <span style="color:red;">*</span>邮箱：
            </label>
            <el-form-item :label-width="formLabelWidth">
              <el-input
                v-model="$store.state.userDetDate.email"
                autocomplete="off"
                placeholder="请填写邮箱"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <label style="float: left;text-align: right;width: 120px;line-height: 40px;">
              <span style="color:red;">*</span>电话：
            </label>
            <el-form-item :label-width="formLabelWidth">
              <el-input
                v-model="$store.state.userDetDate.phone"
                autocomplete="off"
                placeholder="请输入电话"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="住址:" :label-width="formLabelWidth">
              <el-input
                v-model="$store.state.userDetDate.address"
                autocomplete="off"
                placeholder="请输入住址"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="职业:" :label-width="formLabelWidth">
              <el-input
                v-model="$store.state.userDetDate.profession"
                autocomplete="off"
                placeholder="请输入职业"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="时间:" :label-width="formLabelWidth">
              <el-date-picker
                v-model="$store.state.userDetDate.date"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"
                style="width:100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学历:" :label-width="formLabelWidth">
              <el-input
                v-model="$store.state.userDetDate.education"
                autocomplete="off"
                placeholder="请输入学历"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="学校:" :label-width="formLabelWidth">
              <el-input
                v-model="$store.state.userDetDate.graduationschool"
                autocomplete="off"
                placeholder="请输入毕业学校"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancleDialog()">取 消</el-button>
        <el-button type="primary" @click="addSubmit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLabelWidth: "120px",
      form: {
        name: "",
        age: "",
        email: "",
        phone: "",
        address: "",
        profession: "",
        date: "",
        education: "",
        graduationschool: ""
      }
    };
  },
  methods: {
    cancleDialog() {
      this.$store.commit("changedialogAddUser", false);
    },
    addSubmit() {
      if (
        !this.$store.state.userDetDate.name |
        !this.$store.state.userDetDate.age |
        !this.$store.state.userDetDate.email |
        !this.$store.state.userDetDate.phone
      ) {
        this.$message({
          message: "请补全信息",
          type: "warning"
        });
      } else if (this.$store.state.isEdit) {
        console.log("编辑");
        this.$axios
          .put(
            "http://localhost:3000/users/" + this.$store.state.editId,
            this.$store.state.userDetDate
          )
          .then(res => {
            this.$store.commit("closeEditDialog", false);
          });
      } else {
        console.log("新增");
        this.$axios
          .post("http://localhost:3000/users", this.$store.state.userDetDate)
          .then(res => {
            this.$store.commit("closeAddDialog", false);
          });
      }
    }
  }
};
</script>
<style scoped>
</style>