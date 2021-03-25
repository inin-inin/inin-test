<template>
  <div class="home">
       <!--  导航栏   -->
       <div>
      <nav-bar class="home-nav">
        <span slot="left"> <img alt="" src="../assets/common_ic_12_1@3x.png"></span>
        <span slot="center">工作台</span>
        <span slot="right"><img alt="" src="../assets/common_ic_13@3x.png"></span> 
      </nav-bar>
      <div class="content">
         <!-- 横幅 -->
        <div class="banner"><img src="../assets/banner@3x.png" alt=""></div>

        <!-- 事项 -->
        <matter></matter>

        <!-- 人事代办 -->
        <guide> <span slot="left">人事代办</span></guide>
        <pending></pending>
        <!-- 人事统计 -->
        <guide> <span slot="left">人事统计</span></guide>
       <statistics></statistics>
        <!-- 公司动态 -->
        <guide> <span slot="left">公司动态</span></guide>
        <dynamic></dynamic>
<main-tab-bar></main-tab-bar>
      </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from '@/components/NavBar.vue'
import Matter from '@/components/Matter.vue'
import Guide from '@/components/Guide.vue'
import Pending from '@/components/Pending.vue'
import Statistics from '@/components/Statistics.vue'
import Dynamic from '@/components/Dynamic.vue'
import MainTabBar from '@/components/MainTabBar.vue'


export default {
  name: 'Home',
  components: {
    NavBar,
    Matter,
    Guide,
    Pending,
    Statistics,
    Dynamic,
    MainTabBar
  },
  data(){ 
      return {  
      
      }
     
  }
}
</script>
<style scoped>
ul li{ list-style: none; }

.home-nav {
  color:#3a3831;
  /* font-weight: 400; */
}

.home-nav img{
  width: 17px;
  height: 18px;
  margin-top: 15px;
}
.content{
  width: 90%;
  margin: 0 auto;
  padding-top: 60px;
  margin-bottom: 40px;
  /* border: 1px solid red; */
}
.banner{
  padding: 10px;
  /* border: 1px solid red; */
  
}
.banner img{
  width: 100%;
  margin:auto;
}


</style>>
  

