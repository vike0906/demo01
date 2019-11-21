<template>
  <el-row type="flex" justify="start">
    <el-col class="head-logo">
      <div>
        <i class="el-icon-s-promotion head-icon"></i>
        <span style="font-size:1.5rem">后台管理系统</span>
      </div>
    </el-col>
    <el-col class="head-fold">
      <div class="nav-link-hover" @click="changeAsidebar()">
        <i v-bind:class="this.fold" class="head-icon"></i>
      </div>
    </el-col>
    <el-col :span="1" :offset="19">
      <div class="head-info">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <span style="font-size: 1.2rem;">admin</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user">主页</el-dropdown-item>
            <el-dropdown-item icon="el-icon-edit">修改密码</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      fold: "el-icon-s-fold"
    };
  },
  methods: {
    changeAsidebar: function() {
      this.fold =
        this.fold == "el-icon-s-fold" ? "el-icon-s-unfold" : "el-icon-s-fold";
      this.$store.commit("ASIDEBAR_IS_COLLAPSE");
      this.$store.commit("CHANGE_ASIDEBAR");
      
    }
  }
};
</script>
<style scoped>
.el-row {
  margin-top: 0.8rem;
  margin-bottom: 0.3rem;
}
.head-logo {
  width: 200px;
  color: #324148
}
.head-icon {
  font-size: 1.8rem;
}
.head-fold {
  margin-top: 0.2rem;
  color: #999999;
  width: 50px;
}
.nav-link-hover:hover {
  background-color: #c0c5c094;
}
.head-info{
    width: 100px
}
.el-dropdown{
    margin-top: 0.5rem;
    border-radius: .5rem;
    border: .1rem;
}
.el-dropdown-link{
    color: #999999
}
.el-dropdown-link:hover{
    color: #000222
}
</style>