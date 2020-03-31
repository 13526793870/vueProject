<template>
  <div id="users">
    <el-row>
      <el-col :span="8">
        <el-row>
          <el-col :span="4" style="line-height:40px;">姓名：</el-col>
          <el-col :span="18">
            <el-input placeholder="请输入用户名称" v-model="keyUser" clearable></el-input>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-col :span="4" style="line-height:40px;">电话：</el-col>
          <el-col :span="18">
            <el-input placeholder="请输入电话" v-model="keyPhone" clearable></el-input>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-col :span="4" style="line-height:40px;">邮箱：</el-col>
          <el-col :span="18">
            <el-input placeholder="请输入邮箱" v-model="keyEmail" clearable></el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <br />
    <el-table :data="searchUserinfo(keyUser,keyPhone,keyEmail)" style="width: 100%">
      <el-table-column label="日期" width="170">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 5px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="170">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="电话" width="200">
        <template slot-scope="scope">
          <i class="el-icon-phone"></i>
          <span style="margin-left: 5px">{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮箱">
        <template slot-scope="scope">
          <i class="el-icon-message"></i>
          <span style="margin-left: 5px">{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="openUserDet(scope.$index, scope.row)">
            <i class="el-icon-info"></i>&nbsp;详情
          </el-button>
          <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">
            <i class="el-icon-edit-outline"></i>&nbsp;编辑
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
            <i class="el-icon-delete"></i>&nbsp;删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <br />
    <el-switch v-model="value"></el-switch>
    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
      :current-page="currentPage"
      :page-size="pagesize"
      :page-sizes="pageSizes"
      :hide-on-single-page="value"
      :pager-count="pagerCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
    <AddUser></AddUser>
    <UserDet></UserDet>
  </div>
</template>

<script>
import AddUser from "./AddUserInfo";
import UserDet from "./UserDet";
export default {
  data() {
    return {
      tableData: [],
      isbool: true,
      keyUser: "",
      keyPhone: "",
      keyEmail: "",
      dialogAddUserVisible: false,
      currentPage: 1, //当前页
      pagesize: 5, //每页展示几条
      pageSizes: [1, 2, 3, 5, 10],
      value: true,
      pagerCount: 7 //超过此数值，折叠
    };
  },
  components: {
    AddUser,
    UserDet
  },
  computed: {},
  methods: {
    getUsers() {
      return this.$axios.get("http://localhost:3000/users").then(res => {
        this.tableData = res.data;
      });
    },
    searchUserinfo(keyUser, keyPhone, keyEmail) {
      return this.tableData
        .filter(user => {
          if (
            user.name.match(keyUser) &&
            user.phone.match(keyPhone) &&
            user.email.match(keyEmail)
          ) {
            return user;
          }
        })
        .slice(
          (this.currentPage - 1) * this.pagesize,
          this.currentPage * this.pagesize
        );
    },
    openUserDet(index, row) {
      // 调用vuex中的action 打开弹框，获取数据
      this.$store.dispatch("closeEdit", { isShow: true, id: row.id });
    },
    handleDelete(index, row) {
      this.$axios
        .delete("http://localhost:3000/users/" + row.id)
        .then(res => {});
    },
    handleEdit(index, row) {
      this.$store.commit("changedialogAddUser", {
        tit: "编辑用户信息",
        isShow: true,
        isEdit: true,
        id: row.id
      });
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    handleSizeChange: function(size) {
      this.pagesize = size;
    }
  },
  created() {
    this.getUsers();
  },
  updated() {
    this.getUsers();
  }
};
</script>

<style>
#users {
  /* box-sizing: border-box;
  padding: 20px 15px;
  background: #fff;
  border-radius: 4px;
  overflow: auto; */
}
#add-user .el-dialog {
  width: 60%;
  max-height: 80vh;
  overflow: auto;
  padding: 15px 0;
}
#add-user .el-dialog__body {
  padding: 30px 20px 0;
}
</style>