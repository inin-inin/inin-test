<template>
    <div>
    <nav-bar class="home-nav">
        <span slot="left"> <img alt="" src="../assets/common_ic_12_1@3x.png"></span>
        <span slot="center">消息</span>
        <span slot="right"><img alt="" src="../assets/common_ic_13@3x.png"></span> 
      </nav-bar>
 
        <main-tab-bar></main-tab-bar>
        </div>
</template>

<script>


import NavBar from '@/components/NavBar.vue'

import MainTabBar from '@/components/MainTabBar.vue'
export default {
  name: 'Info',
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
    span{
    color:#3a3831;
  }
  img{
     width: 17px;
    height: 18px;
    margin-top: 15px;
  }
  
</style>