<template>
  <div class="aboutus">
    <banner></banner>
    <div class="aboutus-ct">
        <div class="aboutus-top">
          <div class="about-title">关于我们</div>
          <div class="about-title-two">在线预订，可享受超值优惠</div>
        </div>
        <div class="aboutlist">
          <div class="aboutlist-box">
            <ul>
              <li>
                <div class="adtitle">设备齐全设别</div>
                <div class="adtext">在非经营区设客人休息场所、提供店内寻人服务和安排出租车服务、门厅及主要公共区域有残疾人出入坡道、配备轮椅。</div>
              </li>
              <li>
                <div class="adtitle">五星服务</div>
                <div class="adtext">有与酒店规模、五星级相适应的总服务台，总服务台有中英文标志、分区段设置接待、问讯、结帐、24小时有工作人员在岗。</div>
              </li>
              <li>
                <div class="adtitle">智能管理</div>
                <div class="adtext">至少能用2种外语提供服务（英语为必备语种），总机至少能用3种外语提供服务（英语为必备语种），各种指示用和服务用文字至少用中英文同时表示。</div>
              </li>

            </ul>
          </div>
        </div>
        <div class="about-analysis">
          <div class="analysis-out">
            <div class="analysis-box">
              <div class="analisisL">
                <div class="analisisL-title">关于我们</div>
                <div class="analisisL-text">
                  <p>接待大厅宽敞、装修豪华、光线充足。有与酒店规模、五星级相适应的总服务台，总服务台有中英文标志、分区段设置接待、问讯、结帐、24小时有工作人员在岗。提供留言服务、一次性总帐单结帐服务、信用卡服务、24小时提供外币兑换服务。总服务台提供酒店服务项目宣传品、酒店价目表、中英文本市交通地图，全国旅游交通地图、本市和全国旅游景业介绍、各种交通工具时刻表、报刊杂志等。</p>
                  <p>可8小时直接接受国内、国际客房预订，有酒店和客人同时开启的保险箱、设门卫应接员、专职行李员、值班经理、大堂经理。在非经营区设客人休息场所、提供店内寻人服务和安排出租车服务、门厅及主要公共区域有残疾人出入坡道、配备轮椅。至少能用2种外语提供服务（英语为必备语种），总机至少能用3种外语提供服务（英语为必备语种），各种指示用和服务用文字至少用中英文同时表示。</p>
                </div>
              </div>
              <div class="analisisR">
                <div class="analisisR-list">
                  <div class="analisisR-title">接待能力</div>
                  <Progress :percent="75" hide-info status="active"></Progress>
                </div>
                <div class="analisisR-list">
                  <div class="analisisR-title">语言服务</div>
                  <Progress :percent="90" hide-info status="active"></Progress>
                </div>
                <div class="analisisR-list">
                  <div class="analisisR-title">智能系统</div>
                  <Progress :percent="85" hide-info status="active"></Progress>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hotellist">
          <div class="hotellist-box">
            <div class="hotellistL">
            <img src="../../assets/img/hotelphone.png" alt="">
            </div>
            <div class="hotellistR">
              <div class="hotellistR-list">
                <div class="hotellistR-list-title">
                  在线预订系统<Icon type="load-a"></Icon>
                </div>
                <p>可8小时直接接受国内、国际客房预订，有酒店和客人同时开启的保险箱、设门卫应接员、专职行李员、值班经理、大堂经理。可8小时直接接受国内、国际客房预订，有酒店和客人同时开启的保险箱、设门卫应接员、专职行李员、值班经理、大堂经理。</p>
              </div>
              <div class="hotellistR-list">
                <div class="hotellistR-list-title">
                  在线外语服务<Icon type="person"></Icon>
                </div>
                <p>至少能用2种外语提供服务（英语为必备语种），总机至少能用3种外语提供服务（英语为必备语种），各种指示用和服务用文字至少用中英文同时表示。至少能用2种外语提供服务（英语为必备语种），总机至少能用3种外语提供服务（英语为必备语种），各种指示用和服务用文字至少用中英文同时表示。</p>
              </div>
              <div class="hotellistR-list">
                <div class="hotellistR-list-title">
                  休闲娱乐服务<Icon type="coffee"></Icon>
                </div>
                <p>有直拨的国内、国际电话，有彩色电视机、音响设备、并有闭路电视系统，播放频道不少于16个，自办节目至少有2个频道，而且还具有两种以上的外语卫星电视频道，为国外游客带来方便。有直拨的国内、国际电话，有彩色电视机、音响设备、并有闭路电视系统，播而且还具有两种以上的外语卫星电视频道，为国外游客带来方便。</p>
              </div>
              <div class="hotellistR-list">
                <div class="hotellistR-list-title">
                  商务中心<Icon type="model-s"></Icon>
                </div>
                <p>有商场或超级市场，出售旅行日常用品，旅游纪念品、工艺品等商品。
有商务中心，代售邮票，代发信件，办理电报、电传、传真、复印、国际长途电话、国内行李托运、冲洗胶卷等。提供打字服务</p>
              </div>
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
.aboutus {
  .aboutus-ct {
    width: 100%;
    height: auto;
    .aboutus-top {
      width: 100%;
      padding-top: 1px;
      height: 200px;
      background-color: #fff;
      .about-title {
        text-align: center;
        color: #000;
        font-weight: bold;
        font-size: 32px;
        margin-top: 67px;
        /* padding-top: 2px; */
        margin-bottom: 10px;
      }
      .about-title-two {
        color: #b89f80;
        font-size: 16px;
      }
    }
    .aboutlist {
      width: 100%;
      height: 200px;
      opacity: 0.5;
      background-color: #000;
      .aboutlist-box {
        ul {
          width: 1200px;
          height: auto;
          margin: 19px auto;
          padding-top: 1px;

          li {
            display: inline-block;
            width: 320px;
            height: 130px;
            margin: 35px 37px;
            text-align: left;
            .adtitle {
              color: #fff;
              font-size: 17px;
              font-weight: bold;
              padding-bottom: 9px;
              border-bottom: 2px solid #5e6060;
              display: inline-block;
              /* left: 0; */
              margin-bottom: 25px;
            }
            .adtext {
              color: #fff;
            }
          }
        }
      }
    }
    .about-analysis {
      width: 100%;
      text-align: left;
      color: #fff;
      height: 410px;
      background-image: url("../../assets/img/bgten.jpg");
      background-position: 0px -304px;
      background-size: 100%;
      background-repeat: no-repeat;
      position: relative;
      .analysis-out {
        position: absolute;
        width: 100%;
        height: 410px;
        top: 0;
        background-color: rgba(35, 35, 35, 0.75);
        .analysis-box {
          width: 1146px;
          height: auto;
          margin: 0 auto;
          .analisisL {
            float: left;
            width: 550px;
            height: auto;
            .analisisL-title {
              font-size: 20px;
              margin-top: 60px;
            }
            .analisisL-text {
              margin-top: 46px;
              p {
                margin-bottom: 20px;
                line-height: 20px;
              }
            }
          }
          .analisisR {
            width: 500px;
            height: auto;
            float: right;
            vertical-align: top;
            margin-top: 137px;
            .analisisR-list {
              margin-bottom: 24px;
              .analisisR-title {
                margin-bottom: 7px;
              }
            }
          }
        }
      }
    }
    .hotellist {
      width: 100%;
      height: 700px;
      // background-color: red;
      .hotellist-box {
        width: 1130px;
        height: auto;
        margin: 83px auto 0;
        .hotellistL {
          width: 400px;
          height: auto;
          float: left;
          img {
          }
        }
        .hotellistR {
          width: 620px;
          float: right;
          height: auto;
              margin-top: 25px;
          .hotellistR-list {
            font-size: 16px;
            width: 618px;
            height: 100px;
            // background-color: blue;
            margin-bottom: 53px;
            .hotellistR-list-title {
              text-align: left;
              i {
                font-size: 20px;
                /* margin-left: 156px; */
                float: right;
                right: 200px;
                margin-right: 400px;
              }
            }
            p {
              text-align: left;
              font-size: 12px;
              margin-top: 10px;
              line-height: 22px;
            }
          }
        }
      }
    }
  }
}
</style>
