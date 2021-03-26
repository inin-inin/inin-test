<template>
  <div>
      <div>
    <nav-bar class="home-nav">
        <span slot="left"> <img alt="" src="../assets/common_ic_12_1@3x.png"></span>
        <span slot="center">通讯录</span>
        <span slot="right"><img alt="" src="../assets/common_ic_13@3x.png"></span> 
      </nav-bar>
  </div>
     
      

   <main-tab-bar></main-tab-bar>
</div>
        

  


  
</template>

<script>


import NavBar from '@/components/NavBar.vue'

import MainTabBar from '@/components/MainTabBar.vue'
export default {
  name: 'About',
  data () {
    return {
      
    };
  },
  components: {
    NavBar,
    MainTabBar
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>
  
<style scoped>
.home-nav {
  color:#3a3831;
  /* font-weight: 400; */
}

.home-nav img{
  width: 17px;
  height: 18px;
  margin-top: 15px;
}

  .box{
  display: flex;
  flex-direction: row;
  /* flex-wrap:wrap; */
  width: 90%;
  height: 900px;
  margin: 0 auto;
  padding: 10px;
  /* border: 1px solid black; */
}
.box .a{
  flex-direction:column;
  flex: 2;
  width: 159px;
  height: 68px;

  /* background-color: #F8F8FB; */
  /* background-color: black; */

}
/* 小框 */
.box .a .A{
  position: relative;
  left: 0;
  top: 0;
  height: 68px;
  margin-right: 5px;
  margin-bottom: 20px;
  background-color: #F8F8FB;
  border-radius:5px;
   /* border: 1px solid red; */
}

/* 办理入职 */
.box .a .aa{
  margin-left: 10px;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: 500;
  text-align: left;
  color: #333333;
  /* border: 1px solid red; */
 /* background-color: #F8F8FB; */
}
/* 快速办理人员入职 */
.box .a .ab{
  margin-left: 10px;
  font-size: 11px;
  text-align: left;
  color: #999999;
  /* border: 1px solid red; */
}
.box img{
  display: block;
  position: absolute; 
  right: 10;
  bottom: 50;
  /* height: 30px; */
 /* margin-top: -10px; */
 /* margin-left: -10px; */
}
.box .b{
  flex-direction:column;
  flex: 1;
  width: 88px;
  height: 68px;
  /* border: 1px solid red; */
}
.box .b .A{
  height: 68px;
  margin-right: 5px;
  margin-bottom: 20px;
  background-color: #F8F8FB;
  border-radius:5px;
   /* border: 1px solid red; */
}
</style>
