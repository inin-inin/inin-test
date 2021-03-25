<template>
  <div class="A">
     <div  class="a" v-for="item in items" :key="item.message">

        <div><img :src="item.src" alt=""></div>
        <span>{{ item.message }}</span>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  data () {
    return {
      items:[
        {message:'员工构成',src:require('../assets/jobs_19.png')},
        {message:'司龄分布',src:require('../assets/jobs_20.png')},
        {message:'学历分布',src:require('../assets/jobs_21.png')},
        {message:'年龄分布',src:require('../assets/jobs_24.png')},
        {message:'性别比例',src:require('../assets/jobs_22.png')},
        {message:'已婚比例',src:require('../assets/jobs_23.png')},      
      ]
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
.A{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 0 auto;
  /* border:1px solid red ; */
}
  .a{
    /* margin-left: 0px; */
    margin-bottom: 20px;
    padding: 10px;
    font-size: 14px;
    /* border: 1px solid red; */
  }
  span{
    white-space:nowrap
  }
  .b{
    height: 25%;
    height: 50px;
  }
</style>