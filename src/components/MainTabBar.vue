<template>

    <tab-bar class="tabbar">
      <!-- <tab-bar-item path='/home' activeColor='skyblue'> -->
      <tab-bar-item path='/experts'>
        <img slot="item-icon" src="../assets/message-circle-fill备份 2@2x.png" alt="">
        <img slot="item-icon_active" src="../assets/message-circle-fill备份 2@2x.png" alt="">
        <div slot="item-text">达人</div>
      </tab-bar-item>
      <tab-bar-item path='/info'>
        <img slot="item-icon" src="../assets/message-circle-fill@2x.png" alt="">
        <img slot="item-icon_active" src="../assets/message-circle-fill@2x.png" alt="">
        <div slot="item-text">消息</div>
      </tab-bar-item>
      <!-- <tab-bar-item path='/cart' activeColor='pink'> -->
      <tab-bar-item path='/home'>
         <img slot="item-icon" src="../assets/message-circle-fill备份 2@2x02.png" alt="">
         <img slot="item-icon_active" src="../assets/message-circle-fill备份 2@2x02.png" alt="">
        <div slot="item-text">工作台</div>
      </tab-bar-item>
       <tab-bar-item path='/contacts'>
         <img slot="item-icon" src="../assets/message-circle-fill备份@2x.png" alt="">
         <img slot="item-icon_active" src="../assets/message-circle-fill备份@2x.png" alt="">
        <div slot="item-text">通讯录</div>
      </tab-bar-item>
      <tab-bar-item path='/mine'>
         <img slot="item-icon" src="../assets/message-circle-fill@2x02.png" alt="">
         <img slot="item-icon_active" src="../assets/message-circle-fill@2x02.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar'
import TabBarItem from '@/components/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  data () {
    return {
      
    };
  },
  components: {
    TabBar,
    TabBarItem
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>
  
<style scoped>
 /* .tabbar{ */
   /* z-index: 8; */
 /* } */
#tab-bar-item img{
   border: 1px dashed;
 }
</style>