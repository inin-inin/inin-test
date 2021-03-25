<template>
    <div>
    <nav-bar class="home-nav">
        <span slot="left"> <img alt="" src="../assets/common_ic_12_1@3x.png"></span>
        <span slot="center">消息</span>
        <span slot="right"><img alt="" src="../assets/common_ic_13@3x.png"></span> 
      </nav-bar>
   <!-- <div class="timeline">
          <el-timeline :reverse="reverse">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp">
              {{activity.content}}
            </el-timeline-item>
          </el-timeline>
        </div>  -->

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
      reverse: true,
        // activities: [{
        //   content: '活动按期开始',
        //   timestamp: '2018-04-15'
        // }, {
        //   content: '通过审核',
        //   timestamp: '2018-04-13'
        // }, {
        //   content: '创建成功',
        //   timestamp: '2018-04-11'
        // }]
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
  /* .timeline{
    padding-top: 90px;
  } */
</style>