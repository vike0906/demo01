<template>
  <el-container>
  <el-header height="60px">
    <Header/>
  </el-header>
  <el-container>
    <el-aside :width="asideWidth+'px'">
      <Asidebar/>
    </el-aside>
    <el-container class="container-main" :style="'left:'+asideWidth+'px'">
      <el-main>
        <div class="wrapper">
          <router-view/>
        </div>
      </el-main>
      <el-footer height="30px">
        <el-row>
          <el-col :span="24">
              <p style="text-align: center">create by <a href="#" class="text-dark" >Vike0906</a> © 2019</p>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
import Header from "./basic/Header";
import Asidebar from "./basic/Asidebar";
import Main from "./Main";

export default {
  components: {
    Header,Asidebar,Main
  },
  computed:{
    asideWidth:function(){
      return this.$store.getters.getAsideWidth;
    }
  }
};
</script>

<style>
.el-header{
  /* background-color: #ecf2fa; */
  background-color: #fff;
  padding: 0 5px;
  box-shadow:0 0 5px #75797d;
  z-index: 1050;
}
.container-main{
  position: absolute;
  top: 60px;
  right: 0px;
  bottom: 0px;
}
.el-footer {
  background-color: #f5f5f6;
  color: #333;
  text-align: center;
}
.el-aside {
  position: absolute;
  top: 60px;
  bottom: 0px;
  background-color: #fff;
  color: #000;
  text-align: center;
  z-index: 1049;
}
.el-main {
  background-color: #f5f5f6;
  color: #333;
  text-align: center;
  padding: 15px 15px;
}
.wrapper{
    background-color: #fff;
    height: 100%;
    width: 100%;
}
</style>