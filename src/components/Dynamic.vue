<template>
  <div class="box">
      <div class="ahead">
        <div class="circle"></div>
        <div class="atitle">2019-06-06</div>
        </div>
        <div class="abody">
        <div class="adetail">
          {{ message }}<br/>
          {{ message }}

        </div>
	    </div>

        <div class="ahead">
          <div class="circle"></div>
          <div class="atitle">2019-06-06</div>
        </div>
        <div class="abody">
          <div class="adetail">
            {{ message }}<br/>
            {{ message }}

          </div>
	 </div>

        <div class="ahead">
          <div class="circle"></div>
          <div class="atitle">2019-06-06</div>
        </div>
        <div class="noline">
          <div class="adetail">
            {{ message }}<br/>
            {{ message }}

          </div>
	 </div>

  </div>
</template>

<script>
export default {
  name: 'Dynamic',
  data () {
    return {
      message:'王一鸣办理了入职，入职日期2019-06-06'
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
.box{
  margin-left: 15px;
}
  .ahead {
		display: flex;
	}
	.circle {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		border: 2px solid #FFBD00;
		
	}
	.atitle {
		margin-left: 10px;
		font-size: 12px;
    color: #333333;
    /* border:1px solid red; */
	}

	.abody {
		width: 270px;
		height: 70px;
    margin: 8px 8px;
		padding: 5px 18px;	
		border-left: 2px solid  #dddddd;;
    /* border:1px solid red; */
	}

	.adetail {
		width: inherit;
    line-height: 22px;
    text-align: left;
		color:#999999;
		font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    /* border:1px solid red; */
	}
  .noline{
    width: 270px;
		height: 70px;
    margin: 8px 8px;
		padding: 5px 18px;	
  }

</style>