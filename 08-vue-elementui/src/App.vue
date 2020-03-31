<template>
  <div id="app">
    <Header></Header>
    <el-container style=" border: 1px solid #eee;height:91vh;overflow:hidden;">
      <el-container>
        <Aside></Aside>
        <el-main>
          <div class="box">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Login from "./views/Login";
import Users from "./components/Users";
import Header from "./components/Header";
import Aside from "./components/Aside";

export default {
  name: "app",
  components: {
    HelloWorld,
    Login,
    Users,
    Header,
    Aside
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
#app .el-main {
  padding: 10px;
  background: #eee;
  height: 91vh;
}
.el-menu-item a {
  display: block;
  text-decoration: none;
  color: #303133;
}
.box {
  box-sizing: border-box;
  padding: 20px 15px;
  background: #fff;
  border-radius: 4px;
  overflow: auto;
}
</style>
