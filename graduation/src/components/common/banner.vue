<template>
   <div class="topBanner">
       <div class="topTab">
         <div class="topTab-box">
            <div class="topLeft">
              <img src="../../assets/img/topLogo.png" alt="">
            </div>
            <ul>
              <li>登录</li>
              <li>|</li>
              <li>注册</li>
              <li>|</li>
              <li>预定</li>
              <li>|</li>
              <li>English</li>
            </ul>
         </div>
         </div>
      <div class="banner">
        <img src="../../assets/img/banner.jpg" alt="">
       <div class="bannerTwo">
         <div class="topbanner-box">
          <div class="bannerLeft">
            <img src="../../assets/img/logo.png" alt="">
          </div>
          <div class="bannerManu">
            <img src="../../assets/img/manu.png" alt="">
            <span>Menu</span>
            </div>
          <div class="bannerRight">
            <h1><i class="iconfont icon-sousuo"></i>TO FIND THE HOTEL</h1>
            <p>According to the destination | According to the key words</p>
            <div class="searchCity">
              <input class="searchcity" type="text">
              <input class="searchdate" type="text">
              <input class="searchdate" type="text">
              <input class="search" type="text" value="SEARCH">
            </div>
          </div>
           </div>
         </div>
      </div>
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
          </ul>
        </div>
      </div>
   </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less">
.topBanner {
  width: 100%;
  .topTab {
    width: auto;
    height: 50px;
    background-color: #111111;
    .topTab-box {
      margin: 0 auto;
      width: 1200px;
      height: 50px;
      .topLeft {
        float: left;
        margin-top: 10px;
      }
      ul {
        margin: 0 auto;
        padding-top: 1px;
        color: 505050;
        float: right;
        li {
          display: inline-block;
          margin: 10px 8px 0;
          color: #fff;
        }
      }
    }
  }
  .banner {
    width: 100%;
    position: relative;
    height: 880px;
    overflow: hidden;
    .bannerTwo {
      width: 100%;
      top: 0;
      position: absolute;
      background-color: rgba(35, 35, 35, 0.85);
      height: 156px;
      z-index: 1000;
      .topbanner-box {
        width: 1200px;
        margin: 0 auto;
        .bannerLeft {
          float: left;
          margin-top: 25px;
        }
        .bannerManu {
          float: right;
          width: 34px;
          margin-top: 98px;
          span {
            display: block;
            color: #fff;
            font-size: 14px;
            text-align: center;
            line-height: 20px;
          }
        }
        .bannerRight {
          float: right;
          text-align: left;
          margin: 20px 45px 0 0;
          h1 {
            font-size: 18px;
            color: #7d6450;
            line-height: 21px;
            font-weight: normal;
            i {
              margin-right: 10px;
            }
          }
          p {
            font-size: 12px;
            color: #a6a5a5;
            margin: 15px 0 25px 28px;
          }
          .searchCity {
            margin-bottom: 9px;
            height: 34px;
            .searchcity {
              margin-left: 0;
              width: 205px;
              height: 34px;
              margin-right: 5px;
            }
            .searchdate {
              margin-left: 0;
              width: 170px;
              height: 34px;
              margin-right: 5px;
            }
            .search {
              display: inline-block;
              width: 70px;
              height: 34px;
              text-align: center;
              color: #fff;
              letter-spacing: 1px;
              background-color: #7d6450;
              border: 2px solid #7d6450;
            }
          }
        }
      }
    }
  }
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
        background-color: red;
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
    .roomul {
      ul {
        width: 100%;
        height: 440px;
        margin-top: 25px;

        li {
          width: 380px;
          height: 365px;
          background-color: red;
          .room-img{
              width: 385px;
              height: 280px;
              background-color: #7d6450;
          }
          .room-title{
            float: left;
            font-size: 14px;
    color: #666666;
          }
          span{
            float: right;
                color: rgba(182,51,39,1);
                display: inline-block;
                padding: 10px 20px;
                border:1px solid rgba(182,51,39,1);
          }
        }
      }
    }
  }
}
</style>


