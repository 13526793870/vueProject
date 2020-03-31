import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialogAddUserVisible: false,
    userDetIsShow: false,
    userDetDate: {},
    dialogTit: "用户",
    isEdit: Boolean,
    editId: ""
  },
  mutations: {
    changedialogAddUser(state, data) {
      //点击新增或者编辑  打开dialog弹框
      state.userDetDate = {};
      state.dialogTit = data.tit;
      state.dialogAddUserVisible = data.isShow;  //true
      state.isEdit = data.isEdit;
      if (data.id) {  //编辑用户信息
        state.isEdit = true
        state.editId = data.id;
        axios.get("http://localhost:3000/users/" + data.id).then(res => {
          state.userDetDate = res.data;
        })
      }
    },
    changedialogUserDet(state, data) {
      state.userDetIsShow = data;  //////////打开或关闭详情弹框
    },
    closeAddDialog(state, data) { /////////点击新增弹框的确定按钮
      state.dialogAddUserVisible = data  //将弹框隐藏
      state.userDetDate = {}    //弹框数据初始化为空
      state.isEdit = false;     //isEdit 恢复为初始false
    },
    closeEditDialog(state, data) { //点击编辑弹框的确定按钮
      state.dialogAddUserVisible = data; //关掉弹框
      state.userDetDate = {};   //弹框数据初始化
      state.isEdit = false;     //isEdit状态恢复初始化
    },
    getSingleUser(state, data) {
      axios.get("http://localhost:3000/users/" + data).then(res => {
        state.userDetDate = res.data;
      })
    }
  },
  actions: {
    //详情弹框 打开 关闭
    closeEdit(context, data) {
      context.commit("changedialogUserDet", data.isShow);
      context.commit("getSingleUser", data.id);
    }

  },
  modules: {
  }
})
