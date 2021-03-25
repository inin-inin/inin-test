<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>  
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      
    };
  },
  components: {
    
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>
  
<style scoped>
  .nav-bar{
    position: fixed;
    display: flex;
    width: 100%;
    height: 40pt;
    line-height: 40pt;
    margin-top: 0;
    margin-left:0;
    margin-right:0;
    font-size: 18px;
    color: #333333;
    background-color:#ffbd00;
    font-family: PingFangSC, PingFangSC-Regular;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    z-index: 100;
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
    white-space:nowrap
  }
</style>