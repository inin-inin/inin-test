<template>
  <div class="a">

     <div class="A"><div class="aa">{{ status }}</div><span class="ab">{{ message }}</span></div>
     <div class="A"><div class="aa">{{ status }}</div><span class="ab">{{ message }}</span></div>
     <div class="A"><div class="aa">{{ status }}</div><span class="ab">{{ message }}</span></div>
    </div>
     

</template>

<script>
export default {
  name: 'Pending',
  data () {
    return {
      status:'未完成',
      message:'大家有空填写一下疫情防控承诺书,先截...',
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
  /* position: relative; */
  /* display: flex; */
 width: 95%;
 height: 150px;
 margin: 0 auto;
 /* border: 1px solid black; */
}
.A{
  width: 100%;
  display: flex;
  float: left;
  /* padding: 5px; */
  margin-bottom: 20px;
  /* border: 1px solid red; */
}
  .aa{
    width: 60px;
    height: 22px;
    font-size:12px;
    color: #999999;
    padding: 5px 12px;
    background: #f8f8fb;
    border-radius: 2px;
    /* border: 1px solid red; */
  }
  .ab{
    display: block;
    font-size:14px;
    width: 255px;
    height: 14px;
    padding: 5px;
    overflow: hidden;
    color: #666666;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
</style>