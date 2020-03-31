<template>
  <div id="header">
    <el-header style="text-align: right; font-size: 12px;height:9vh;">
      <el-button round style="margin-right:20px;" @click="addUser()">新增用户</el-button>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px">
          &nbsp;
          <span>王小虎</span>
        </i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
  </div>
</template>

<script>
export default {
  methods: {
    addUser() {
      this.$store.commit("changedialogAddUser", {
        tit: "用户新增信息",
        isShow: true,
        isEdit: false
      });
    }
  }
};
</script>

<style lang="stylus" scoped></style>