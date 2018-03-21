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
               <div class="room-title">豪华大床房</div>
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
              <li>
                <div class="red-box">
                  <span style="font-size: 30px;">10</span>
                   <span style="font-size: 14px;margin-top: -45px;">2018-3</span>
                </div>
                <div class="newrlist">
                  <div class="news-title">探访成都首家无人酒店：手机订房 刷脸入住</div>
                  <div class="news-text">中新网成都3月14日电 (记者 贺劭清)手机订房、刷脸入住、没有前台、退房无人查房……成都首家无人酒店2018年元旦开业，开业两个多月来入住顾客们交上了“从未有物品遗失”的诚信答卷。</div>
                </div>
              </li>
              <li>
                <div class="red-box">
                  <span style="font-size: 30px;">10</span>
                   <span style="font-size: 14px;margin-top: -45px;">2018-3</span>
                </div>
                <div class="newrlist">
                  <div class="news-title">机器人服务受青睐 美华资酒店开先河</div>
                  <div class="news-text">中新网成都3月14日电 (记者 贺劭清)中新网3月19日电 据美国《世界日报》报道，“飞利浦，这个行李帮忙拿到房间去”。“道莎，谢谢你送来晚餐”。这些被民众亲热称呼的名字，其实都不是真人，却比真人还受青睐。圣盖博市新开张不久的华资酒店，率先使用八个机器人，开全美酒店机器人服务先河，惊艳华洋民众。</div>
                </div>
              </li>
              <li>
                <div class="red-box">
                  <span style="font-size: 30px;">10</span>
                   <span style="font-size: 14px;margin-top: -45px;">2018-3</span>
                </div>
                <div class="newrlist">
                  <div class="news-title">伊斯坦布尔万达文华酒店签约</div>
                  <div class="news-text">2月23日，万达与业主土耳其Mar Yapı公司签约，客房150间，计划2018年底开业，是万达首家海外开业的品牌输出酒店，目前在海外其他5个项目分别位于黄金海岸、悉尼、芝加哥、洛杉矶、伦敦，这些酒店都使用了万达文华品牌。</div>
                </div>
              </li>
              <li>
                <div class="red-box">
                  <span style="font-size: 30px;">10</span>
                   <span style="font-size: 14px;margin-top: -45px;">2018-3</span>
                </div>
                <div class="newrlist">
                  <div class="news-title">中国品牌日活动是助推东风</div>
                  <div class="news-text">1月2日，国务院批复国家发改委《关于设立“中国品牌日”的请示》，同意自2017年起，将每年5月10日设立为“中国品牌日”。</div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div class="show-box">
          <div class="showL">
              <img class=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1.5s" style="margin-left: -200px;" src="../../assets/img/lefttop.png" alt="">
              <img style="margin-top: 151px;" src="../../assets/img/leftmiddle.png" alt="">
              <img class=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s" style="margin-top: 128px;margin-left: -200px;" src="../../assets/img/leftbottom.png" alt="">

          </div>
          <div class="showM">
             <img src="../../assets/img/showimg.png" alt="">
             <p>坐落在“全国工业旅游示范点”的xxx集团公司，是集旅游观光，餐饮、住宿、会议接待，商务活动等三星级涉外酒店(现正在积极申报四星)。酒店整个建筑为仿古庭院式建筑，占地—万三千二百平方米，酒店开业十多年来，始终瞄准向国内一流酒店学习，通过科学管理，培养了一大批管理人才，取得了不菲的成绩。xx酒店曾被国家旅游局评为“全国较佳星级饭店”。</p>
          </div>
          <div class="showR wow fadeInRight" data-wow-duration="1s" data-wow-delay="1.5s">
              <img src="../../assets/img/righttop.png" alt="">
              <img style="margin-top: 300px;" src="../../assets/img/rightbottom.png" alt="">
          </div>
      </div>
      <ft></ft>
      <Back-top style="bottom: 90px;"></Back-top>
</div>
</template>

<script>
import banner from "../common/banner";
import ft from "../common/ft";
export default {
  data() {
    return {
      show: "",
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
  methods: {
    // changechild() {
    //   this.show = true;
    // },
    // hideSlide() {
    //   this.show = false;
    // }
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
        margin-top: 15px;
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
            // background-color: blue;
            .red-box {
              float: left;
              margin-top: 6px;
              width: 60px;
              height: 70px;
              background-color: #a61c00;
              span {
                display: inline-block;
                width: 60px;
                color: #fff;
              }
            }
            .newrlist {
              text-align: left;
              text-align: left;
              margin-top: 5px;
              margin-left: 74px;
              .news-title {
                font-size: 20px;
                font-weight: bold;
              }
              .news-text {
                font-size: 14px;
              }
            }
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
  .show-box {
    width: 1200px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 80px;
    .showL {
      width: 230px;
      height: 500px;
      display: inline-block;
      vertical-align: top;
    }
    .showM {
      vertical-align: top;
      display: inline-block;
      width: 722px;
      height: 500px;
      margin-top: 100px;
      p {
        font-size: 14px;
        text-align: left;
        text-indent: 2em;
        line-height: 24px;
      }
    }
    .showR {
      display: inline-block;
      width: 230px;
      height: 500px;
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
    .close {
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
          a {
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


