<template>
<div class="box">


     <banner></banner>
      <div class="server-box">
         <div class="server-title wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">服务项目/SERVICE ITEMS</div>
        <div class="server-text wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">上千套房间任君挑选，给你奇妙之旅自助退订，科技服务，舒适有度，当之无愧，让酒店回归居家本质</div>
            <ul class=" wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
          <li :style="image1">
            <div class="mask"></div>
            <div class="list-box">
                <div class="font-bx" >
                <i class="iconfont icon-nav-self-service"></i>
                </div>
                <div class="list-title">住宿</div>
                <div class="list-text">Get accommodation</div>
            </div>
          </li>
          <li :style="image2">
            <div class="mask"></div>
            <div class="list-box">
              <div class="font-bx">
              <i class="iconfont icon-Hotel"></i>
              </div>
              <div class="list-title">服务式套房</div>
              <div class="list-text">SERVICE SUITE</div>
            </div>
          </li>
          <li :style="image3">
            <div class="mask"></div>
            <div class="list-box">
            <div class="font-bx">
            <i class="iconfont icon-nav-self-service"></i>
            </div>
            <div class="list-title">贵宾阁</div>
            <div class="list-text">VIP &nbsp; CLUB</div>
            </div>
          </li>
          <li :style="image4">
            <div class="mask"></div>
            <div class="list-box">
            <div class="font-bx">
            <i class="iconfont icon-huiyikaihuitaolun"></i>
            </div>
            <div class="list-title">会议</div>
            <div class="list-text">MEETING</div>
            </div>
          </li>
          <li :style="image5">
            <div class="mask"></div>
            <div class="list-box">
            <div class="font-bx">
            <i class="iconfont icon-canting"></i>
            </div>
            <div class="list-title">餐厅及酒吧</div>
            <div class="list-text">RESTAURANT &nbsp; BAR</div>
            </div>
          </li>
          <li :style="image6">
            <div class="mask"></div>
            <div class="list-box">
            <div class="font-bx">
            <i class="iconfont icon-guojijiudianchanpin"></i>
            </div>
            <div class="list-title">设施</div>
            <div class="list-text">FACILITIES</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="server-box">
        <div class="server-title wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">服务项目/SERVICE ITEMS</div>
        <div class="server-text wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">上千套房间任君挑选，给你奇妙之旅自助退订，科技服务，舒适有度，当之无愧，让酒店回归居家本质</div>
        <div class="roomul">
          <ul>
            <li class="wow slideInUp" data-wow-duration="1s" data-wow-delay="0.5s">
               <div class="room-img">
                 <img src="../../assets/img/room1.jpg" alt="">
               </div>
               <div class="room-title">豪华海景套房</div>
               <span>立即预订</span>
            </li>
            <li class="wow slideInUp" data-wow-duration="1s" data-wow-delay="0.7s">
               <div class="room-img">
                 <img src="../../assets/img/room2.jpg" alt="">
               </div>
               <div class="room-title">商务经济房</div>
               <span>立即预订</span>
            </li>
            <li class="wow slideInUp" data-wow-duration="1s" data-wow-delay="0.9s">
               <div class="room-img">
                 <img src="../../assets/img/room3.jpg" alt="">
               </div>
               <div class="room-title">精致商务房</div>
               <span>立即预订</span>
            </li>
            <li class="wow slideInUp" data-wow-duration="1s" data-wow-delay="0.5s">
               <div class="room-img">
                 <img  src="../../assets/img/room4.jpg" alt="">
               </div>
               <div class="room-title">豪华大床房房</div>
               <span>立即预订</span>
            </li>
            <li class="wow slideInUp" data-wow-duration="1s" data-wow-delay="0.8s">
               <div class="room-img">
                 <img src="../../assets/img/room5.jpg" alt="">
               </div>
               <div class="room-title">行政套房</div>
               <span>立即预订</span>
            </li>
            <li class="wow slideInUp" data-wow-duration="1s" data-wow-delay="1.1s">
               <div class="room-img">
                 <img src="../../assets/img/room6.jpg" alt="">
               </div>
               <div class="room-title">豪华商务套房</div>
               <span>立即预订</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="server-box">
        <div class="server-title wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">新闻/NEWS</div>
        <div class="server-text wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">NEWS</div>
        <div class="news-box clearfix">
          <div class="newsL wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
            <img src="../../assets/img/newsL.jpg" alt="">
          </div>
          <div class="newsR wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
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
      <transition name="slideL">
      <div class="rightNav" v-if='show'>
        	<b class="close">×</b>
					<div class="searchR">
						<i class="iconfont icon-sousuo"></i>
						<input type="text" name="" >
					</div>
					<div class="searchR-list">
              <ul>
                  <li><a href="/">MEETINGS &amp; EVENTS</a></li>
                  <li><a href="/">OFFERS</a></li>
                  <li><a href="/">DINING &amp; ENTERTAINMENT</a></li>
                  <li><a href="/">EXPLORE US</a></li>
              </ul>
					</div>
			</div>
</transition>
</div>
</template>

<script>
import banner from "../common/banner";
import ft from "../common/ft";
export default {
  data() {
    return {
      show:false,
      image1: {
        background: "url(" + require("../../assets/img/server1.jpg") + ")"
      },
      image2: {
        background: "url(" + require("../../assets/img/server2.jpg") + ")"
      },
      image3: {
        background: "url(" + require("../../assets/img/server3.jpg") + ")"
      },
      image4: {
        background: "url(" + require("../../assets/img/server4.jpg") + ")"
      },
      image5: {
        background: "url(" + require("../../assets/img/server5.jpg") + ")"
      },
      image6: {
        background: "url(" + require("../../assets/img/server6.jpg") + ")"
      }
    };
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
      margin-top: 40px;
      li {
        position: relative;
        display: inline-block;
        margin: 0 10px;
        width: 185px;
        height: 440px;
        padding-top: 1px;
        &:hover {
          .mask {
            background-color: rgba(0, 0, 0, 0);
          }
        }
        .mask {
          position: absolute;
          top: 0;
          width: 185px;
          height: 441px;
          background: rgba(0, 0, 0, 0.4);
        }
        .list-box {
          width: 185px;
          height: 440px;
          position: absolute;
          .font-bx {
            margin-top: 120px;
            i {
              font-size: 56px;
              color: #feda00;
            }
          }
          .list-title {
            margin-top: 44px;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
          }
          .list-text {
            color: #fff;
            margin-top: 5px;
          }
        }
      }
    }
    .news-box {
      margin-top: 40px;
      .newsL {
        float: left;
        width: 450px;
        height: 350px;
      }
      .newsR {
        float: right;
        ul {
          width: 700px;
          margin-top: 0px;
          li {
            margin-bottom: 0px;
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
        margin-top: 40px;

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
            margin-left: 15px;
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
  .rightNav {
    width: 356px;
    border-left: 1px solid #716e6a;
    height: 100vh;
    position: fixed;
    top: 0;
    // right: -725px;
    right: 0;
    z-index: 1001;
    // transition: right .4s;
    // transition-timing-function: ease-in-out;
    background-color: rgba(0, 0, 0, 0.9);
    .close{
          position: absolute;
    right: 35px;
    top: 40px;
    color: #fff;
    font-size: 30px;
    font-weight: lighter;
    cursor: pointer;
    }
    i {
      position: absolute;
      /* right: 35px; */
      /* top: 5px; */
      color: #353030;
      font-size: 30px;
      font-weight: lighter;
      cursor: pointer;
      left: 5px;
      bottom: -6px;
    }
    .searchR {
      width: 280px;
      height: 35px;
      background-color: #fff;
      margin-top: 147px;
      margin-left: 40px;
      position: relative;
      input {
        width: 218px;
        padding: 5px 10px 5px 35px;
        line-height: 25px;
        font-size: 14px;
        color: #333;
        border: 0;
        vertical-align: middle;
        outline: 0;
      }
    }
    .searchR-list {
      ul {
        padding-left: 40px;
        margin: 20px 0;
        li {
          width: 280px;
          height: 60px;
          line-height: 61px;
          color: #fff;
          font-size: 18px;
          list-style: none;
          margin-left: 0;
          color: #fff;
          text-align: left;
          border-top: 1px solid #555352;
            a{
              color: #fff;
            }
          &::first-child {
            border-top: 0;
          }
        }
      }
    }
  }
}
</style>


