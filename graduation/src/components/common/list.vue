<template>
      <div class="hotel-step">
        <div class="steps" style="    margin-left: 110px;">
          <p class="sanjiaoL" ></p>
          1.选择日期
          <p class="sanjiaoR"></p>
        </div>
        <div class="steps">
          <p class="sanjiaoL"></p>
          2.下订单
          <p class="sanjiaoR"></p>
        </div>
        <div class="steps">
          <p class="sanjiaoL"></p>
          3.确认
          <p class="sanjiaoR"></p>
        </div>


      </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
    .hotel-step {
      width: 100%;
      height: 50px;
      margin: 50px 0 0;
      .steps {
        width: 25%;
        float: left;
        position: relative;
        text-align: center;
        font: 16px;
        color: #fff;
        line-height: 50px;
        background-color: #ccc;
        .sanjiaoR {
          float: right;
          height: 0;
          width: 0;
          border-left: solid 15px rgba(0, 0, 0, 0);
          border-top: solid 25px #eee;
          border-bottom: solid 25px #eee;
        }
        .sanjiaoL {
          float: left;
          height: 0;
          width: 0;
          border-left: solid 15px #eee;
          border-top: solid 25px rgba(0, 0, 0, 0);
          border-bottom: solid 25px rgba(0, 0, 0, 0);
        }
      }
    }
</style>
