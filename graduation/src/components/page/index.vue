<template>
<div class="box">
     <banner></banner>
      <div class="server-box">
         <div class="server-title">服务项目/SERVICE ITEMS</div>
        <div class="server-text">上千套房间任君挑选，给你奇妙之旅自助退订，科技服务，舒适有度，当之无愧，让酒店回归居家本质</div>
            <ul>
          <li>
            <div class="font-bx">
            <i class="iconfont icon-nav-self-service"></i>
            </div>
            <div class="list-title">住宿</div>
            <div class="list-text">Get accommodation</div>
          </li>
          <li>
            <div class="font-bx">
            <i class="iconfont icon-Hotel"></i>
            </div>
            <div class="list-title">服务式套房</div>
            <div class="list-text">SERVICE SUITE</div>
          </li>
          <li>
            <div class="font-bx">
            <i class="iconfont icon-nav-self-service"></i>
            </div>
            <div class="list-title">贵宾阁</div>
            <div class="list-text">VIP &nbsp; CLUB</div>
          </li>
          <li>
            <div class="font-bx">
            <i class="iconfont icon-huiyikaihuitaolun"></i>
            </div>
            <div class="list-title">会议</div>
            <div class="list-text">MEETING</div>
          </li>
          <li>
            <div class="font-bx">
            <i class="iconfont icon-canting"></i>
            </div>
            <div class="list-title">餐厅及酒吧</div>
            <div class="list-text">RESTAURANT &nbsp; BAR</div>
          </li>
          <li>
            <div class="font-bx">
            <i class="iconfont icon-guojijiudianchanpin"></i>
            </div>
            <div class="list-title">设施</div>
            <div class="list-text">FACILITIES</div>
          </li>
        </ul>
      </div>
      <div class="server-box">
        <div class="server-title">服务项目/SERVICE ITEMS</div>
        <div class="server-text">上千套房间任君挑选，给你奇妙之旅自助退订，科技服务，舒适有度，当之无愧，让酒店回归居家本质</div>
        <div class="roomul">
          <ul>
            <li>
               <div class="room-img">
                 <img src="" alt="">
               </div>
               <div class="room-title">豪华海景套房</div>
               <span>立即预订</span>
            </li>
            <li>
               <div class="room-img">
                 <img src="" alt="">
               </div>
               <div class="room-title">豪华海景套房</div>
               <span>立即预订</span>
            </li>
            <li>
               <div class="room-img">
                 <img src="" alt="">
               </div>
               <div class="room-title">豪华海景套房</div>
               <span>立即预订</span>
            </li>
            <li>
               <div class="room-img">
                 <img src="" alt="">
               </div>
               <div class="room-title">豪华海景套房</div>
               <span>立即预订</span>
            </li>
            <li>
               <div class="room-img">
                 <img src="" alt="">
               </div>
               <div class="room-title">豪华海景套房</div>
               <span>立即预订</span>
            </li>
            <li>
               <div class="room-img">
                 <img src="" alt="">
               </div>
               <div class="room-title">豪华海景套房</div>
               <span>立即预订</span>
            </li>
            <li>
               <div class="room-img">
                 <img src="" alt="">
               </div>
               <div class="room-title">豪华海景套房</div>
               <span>立即预订</span>
            </li>
            <li>
               <div class="room-img">
                 <img src="" alt="">
               </div>
               <div class="room-title">豪华海景套房</div>
               <span>立即预订</span>
            </li>
            <li>
               <div class="room-img">
                 <img src="" alt="">
               </div>
               <div class="room-title">豪华海景套房</div>
               <span>立即预订</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="server-box">
        <div class="server-title">新闻/NEWS</div>
        <div class="server-text">NEWS</div>
        <div class="news-box clearfix">
          <div class="newsL">
            <img src="" alt="">
          </div>
          <div class="newsR">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
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
  data() {
    return {};
  },
  components: {
    banner,
    ft
  }
};
</script>
<style lang='less'>
.box {
  .server-box {
    width: 1250px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 80px;

    .server-title {
      margin-top: 55px;
      font-size: 26px;
    }
    .server-text {
      color: rgb(102, 102, 102);
    }
    ul {
      width: 100%;
      height: 440px;
      margin-top: 25px;
      li {
        display: inline-block;
        margin: 0 10px;
        width: 185px;
        height: 440px;
        // background-color: red;
        padding-top: 1px;
        .font-bx {
          margin-top: 120px;
          i {
            font-size: 56px;
          }
        }
        .list-title {
          margin-top: 44px;
          font-size: 18px;
          font-weight: bold;
        }
        .list-text {
          margin-top: 5px;
        }
      }
    }
    .news-box {
      .newsL {
        float: left;
        width: 450px;
        height: 350px;
      }
      .newsR {
        float: right;
        ul {
          width: 700px;
          li {
            width: 700px;
            height: 100px;
            margin-left: 0px;
            border-bottom: 1px solid #a0a0a0;
            background-color: red;
          }
        }
      }
    }
    .roomul {
      ul {
        width: 100%;
        height: auto;
        margin-top: 25px;

        li {
          overflow: hidden;
          position: relative;
          width: 380px;
          height: 365px;
          // background-color: red;
          .room-img {
            width: 385px;
            height: 280px;
            background-color: #7d6450;
          }
          .room-title {
            margin-top: 30px;
            float: left;
            font-size: 14px;
            color: #666666;
          }
          span {
            // float: right;
            position: absolute;
            margin-top: 23px;
            right: 0;
            color: rgba(182, 51, 39, 1);
            display: inline-block;
            padding: 10px 35px;
            border: 1px solid rgba(182, 51, 39, 1);
            &:hover {
              background-color: rgba(182, 51, 39, 1);
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>


