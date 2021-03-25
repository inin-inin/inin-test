<template>
  <div>
     <div class="a">
       <span class="aa"><slot name="left"></slot></span>
       <span class="ab"><img src="../assets/common_ic_12.png" alt=""></span>
       </div>
  </div>
</template>

<script>
export default {
  name: 'Guide',
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
  .a{
    position:relative;
    height: 64px;
    /* background: pink; */
    line-height: 64px;
    /* border: 1px solid black; */
  }
  .aa{
    position:absolute;
    left: 20px;
    font-weight: 700;
    /* border:1px solid black   */
  }
  .ab{
    position: absolute;
    right:20px;
     /* border:1px solid black   */
  }
</style>