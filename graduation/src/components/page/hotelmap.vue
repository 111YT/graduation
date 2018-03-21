

<template>
<div class="map">
    <banner></banner>
    <h1>地理位置</h1>
    <div class="map-box clearfix">
        <div class="map-le">
          <div style="width:697px;height:550px;border:#ccc solid 1px;" id="dituContent"></div>
        </div>
        <div class="map-ri">
          <h3>君域酒店</h3>
          <div class="list-ri-text">
            浙江省杭州市西湖区古荡街道文三路508号

            <p>联系电话：0599- 5183999</p>
          </div>
          <span>进入百度地图</span>
        </div>
    </div>
     <h1>交通指南</h1>
     <div class="mapmethods clearfix">
       <div class="mapmethods-box">
         <ul>
           <li>从上海出发</li>
           <li>从北京出发</li>
           <li>从深圳出发</li>
           <li>从武汉出发</li>
         </ul>
       </div>
       <div class="detail-list">
          <div class="detail-box">
                <div class="detailL">
                  <Icon type="android-train"></Icon>
                </div>
                <div class="detailR">
                  <h3>高铁或动车</h3>
                  <p>上海虹桥——武夷山北/武夷山东，高铁约3小时</p>
                  <p>武夷山北/武夷山东——悦武夷酒店，打车约30分钟</p>
                </div>
          </div>
          <div class="detail-box">
                <div class="detailL">
                  <Icon type="model-s"></Icon>
                </div>
                <div class="detailR">
                  <h3>高铁或动车</h3>
                  <p>上海虹桥——武夷山北/武夷山东，高铁约3小时</p>
                  <p>武夷山北/武夷山东——悦武夷酒店，打车约30分钟</p>
                </div>
          </div>
       </div>
     </div>
  <ft></ft>
</div>

</template>




<script>
import banner from "../common/banner";
import ft from "../common/ft";
export default {
  components: {
    banner,
    ft
  }
};
</script>

<style lang='less'>
.map {
  h1 {
    margin-top: 50px;
    font-size: 34px;
  }
  .map-box {
    width: 1200px;
    height: 548px;
    margin: 40px auto;
    background-color: #f1f1f1;
    .map-le {
      display: inline-block;
      width: 400px;
      height: 295px;
      float: left;
    }
    .map-ri {
      float: right;
      vertical-align: top;
      text-align: left;
      width: 400px;
      height: 220px;
      padding: 20px;
      margin-bottom: 40px;
      h3 {
        font-weight: normal;
        font-size: 38px;
      }
      .list-ri-text {
        margin: 20px 0 30px;
        width: 300px;
        font-size: 14px;
        line-height: 27px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
        height: 105px;
      }
      span {
        padding: 10px 60px;
        border: 1px solid #e9a838;
        &:hover {
          color: #fff;
          background-color: #e9a838;
        }
      }
    }
  }
  .mapmethods {
    width: 100%;
        margin-top: 30px;
        padding-bottom: 80px;
    background-color: #f1f1f1;
    .mapmethods-box {
      padding-top: 1px;
      height: 60px;
      ul {
        width: 1000px;
        margin: 20px auto 0;
        li {
          width: 25%;
          text-align: center;
          font-size: 20px;
          float: left;
          padding-bottom: 30px;
          cursor: pointer;
          &:hover {
            border-bottom: 2px #e9a838 solid;
          }
        }
      }
    }
    .detail-list {
      width: 1000px;
      margin: 0 auto;
      height: 400px;
      background-color: #fff;
      margin-top: 20px;
      .detail-box {
        width:900px;
        margin: 0 auto;
        height: 200px;
        background-color: #fff;
            border-bottom: 1px #E6E6E6 solid;
        .detailL {
          font-size: 71px;
          float: left;
          width: 150px;
          /* height: 200px; */
          margin-top: 45px;
        }
        .detailR {
          float: right;
          width: 750px;
          text-align: left;
          margin-top: 45px;
          h3 {
            font-size: 18px;
            margin-bottom: 20px;
          }
          p {
            line-height: 29px;
          }
        }
      }
    }
  }
}
</style>
