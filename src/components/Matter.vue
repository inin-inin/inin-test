<template>

        <div class="box">
            <!-- 第一列 -->
            <div class="a">
              <div class="A" v-for="item in items0" :key="item.message">
                <p class="aa">
                  {{ item.message }}
                </p>
                <p class="ab">
                  {{ item.msg }}
                </p>
                <img class="aaa" :src="item.src" alt="1">
              </div>
            </div>         
            <!-- 第二列 -->
             <div class="b">
              <div class="A" v-for="item in items1" :key="item.message">
                <p class="aa">
                  {{ item.message }}
                </p>
                <img class="bbb" :src="item.src" alt="1">

              </div>
             </div>   
            <!-- 第三列 -->
            <div class="b">
              <div class="A" v-for="item in items2" :key="item.message">
                <p class="aa">
                  {{ item.message }}
                </p>
                <img class="bbb" :src="item.src" alt="1">

              </div>
             </div>
        </div>

</template>

<script>
export default {
  name: 'Matter',
  data () {
    return {
       items0:[
          {message:'办理入职',msg:'快速办理人员入职',src:require('../assets/jobs_01.png')},
          {message:'员工关怀',msg:'节日关怀更贴心',src:require('../assets/jobs_04.png')},
          {message:'考勤打卡',msg:'精准定位一键打卡',src:require('../assets/jobs_07.png')},
          {message:'入职审批',msg:'增加新鲜血液',src:require('../assets/jobs_13.png')},
          {message:'请假审批',msg:'审批无压力',src:require('../assets/jobs_16.png')},
        ],
        items1:[
          {message:'办理转正',src:require('../assets/jobs_02.png')},
          {message:'花名册',src:require('../assets/jobs_05.png')},
          {message:'考勤统计',src:require('../assets/jobs_08.png')},
          {message:'转正审批',src:require('../assets/jobs_14.png')},
          {message:'补卡审批',src:require('../assets/jobs_17.png')}
        ],
        items2:[
          {message:'办理离职',src:require('../assets/jobs_03.png')},
          {message:'员工合同',src:require('../assets/jobs_06.png')},
          {message:'补卡请假',src:require('../assets/jobs_09.png')},
          {message:'离职审批',src:require('../assets/jobs_12.png')},
          {message:'考勤规则',src:require('../assets/jobs_15.png')}
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
  .box{
  display: flex;
  flex-direction: row;
  height: 450px;
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
.box .A{
  position: relative;
  left: 0;
  top: 0;
  height: 68px;
  margin-right: 5px;
  margin-bottom: 20px;
  padding-top:5px;
  background-color: #F8F8FB;
  border-radius:5px;
   /* border: 1px solid red; */
}

/* 办理入职 */
.box .aa{
  margin-left: 6px;
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
  margin-left: 6px;
  font-size: 11px;
  text-align: left;
  color: #999999;
  /* border: 1px solid red; */
}
.box .aaa{
  position: absolute; 
  right: 6px;
  bottom: 9px;
}
.box .bbb{
  position: absolute;
  right:2px; 
  bottom: 8px;
  
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