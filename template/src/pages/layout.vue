<template>
  <div class="layout">
    <el-container style="height:100%;">
      <el-aside width="200px">
        <h5><img src="../../static/img/logo.png" alt=""></h5>
        <el-menu :default-active="menuPosition.menuIndex" class="el-menu-vertical-demo" @select="handleMenu">
          <el-menu-item :index="''+(index+1)" :key="index" v-for="(item,index) in menu">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container style="overflow: auto;">
        <div class="userinfo">
          东哥牛逼，<el-button type="text" @click="logout">退出</el-button>
        </div>
        <el-header class="min-width">
          <el-menu :default-active="menuPosition.itemIndex" class="el-menu-demo" mode="horizontal" @select="handleItem">
            <el-menu-item :index="''+(index+1)" :key="index" v-for="(item,index) in minMenu">{{item.name}}</el-menu-item>
          </el-menu>
        </el-header>
        <el-main class="min-width"><router-view ref="child"/></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import menu from '@/menu.json'
  import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      menu:menu,
      minMenu:menu[0].child||[]
    }
  },
  computed: {
    ...mapGetters([
      'menuPosition'
    ])
  },
  created(){
    this.$menu(this.$router.currentRoute.path) ;
    this.minMenu = this.menu[this.menuPosition.menuIndex-1].child ;
  },
  methods:{
    handleMenu(key){
      this.minMenu = this.menu[key-1].child||[];
      if(this.menu[key-1].path){
        this.$router.replace(this.menu[key-1].path) ;
      }
    },
    handleItem(key){
      if(this.minMenu[key-1].path){
        this.$router.replace(this.minMenu[key-1].path) ;
      }
    },
    logout(){
      this.$model.logout().then(res=>{
      }).catch() ;
      this.$router.replace("/login") ;
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.layout {
  height: 100%;
}
.el-menu-vertical-demo{
  border: none;
}
.el-header {
  background-color: #fff;
  padding: 0;
  color: #333;
  text-align: center;
  height: 100px;
}

.userinfo{
  position: absolute;
  right: 30px;
  top: 10px;
  z-index: 10;
  font-size: 14px;
}

.min-width{
  min-width: 1100px;
}
.el-aside {
  color: #333;
  text-align: center;
  margin-right: 10px;
  -moz-box-shadow:10px 0px 15px #eee; 
  -webkit-box-shadow:10px 0px 15px #eee; 
  box-shadow:10px 0px 15px #eee;
  h5{
    padding: 20px 0;
    img{
      width: 160px;
      height: auto;
    }
  }
}

.el-main {
  background-color: rgb(249, 249, 249);
}

body>.el-container {
  margin-bottom: 40px;
}

</style>
