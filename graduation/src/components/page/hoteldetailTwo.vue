<template>
  <div class="hoteldetail">
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
        <div class="bannerTwo">
          <div class="topbanner-box">
            <div class="bannerLeft">
              <img src="../../assets/img/logo.png" alt="">
            </div>
            <div class="bannerManu" @click='changeRight()'>
              <img src="../../assets/img/manu.png" alt="">
              <span>Menu</span>
            </div>
            <div class="bannerRight">
              <h1>
                <i class="iconfont icon-sousuo"></i>TO FIND THE HOTEL</h1>
              <p>According to the destination | According to the key words</p>
              <div class="searchCity">
                <Cascader :data="data" trigger="hover"></Cascader>
                <DatePicker type="date" show-week-numbers placeholder="2018-03-25" style="width: 170px"></DatePicker>
                <DatePicker type="date" show-week-numbers placeholder="2018-03-27" style="width: 170px"></DatePicker>
                <input class="search" type="text" value="SEARCH">
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition name="slideL">
        <div class="rightNav" v-if='shows==true'>
          <b class="close" @click='hideSlide()'>×</b>
          <div class="searchR">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" name="">
          </div>
          <div class="searchR-list">
            <ul>
              <router-link to='/Reservation'>
                <li>Reservation</li>
              </router-link>
              <li>
                <a href="/">HOTEL &amp;RESERVATION</a>
              </li>
              <li>
                <a href="/">PREFERENTIAL&amp;ACTICITIESa</a>
              </li>
              <router-link to='/aboutus'>
                <li>ABOUT&amp;US</li>
              </router-link>
              <li>
                <a href="/">HOTEL&amp;MAP</a>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <div class="hoteldetail-ct">
      <list></list>
      <div class="hoteldetail-left">
        <div class="you_hd">
           <h2>您的订单信息</h2>
            <div class="img_text">
              <img src="../../assets/img/romre.jpg" alt="">
              <div class="time_w">
                <div class="time">入住时间：<span>2018-03-26</span></div>
                <div class="time">离店时间：<span>2018-03-27</span></div>
              </div>
              <div class="room_i">客房类型：<span>悦景高级双床房</span></div>
              <div class="room_i">价格类型：<span>门市价</span></div>
            </div>
        </div>
        <div class="tail_text">
          <p>
            <span>工作时间：</span>
            <br>
            <br>

            周一至周五：08:00~18:00<br>

            周六    周日 : 07:00~19:00
          </p>
        </div>
      </div>
      <div class="hoteldetail-right">
        <div class="tip_info">
          <p>填写订单</p>

        </div>
       <div class="info_room">
         <ul class="list clearfix">
           <li class="li_tf">
             <p>房间数量：</p>
              <i-select :model.sync="model1" style="width:200px">
                   <!-- <i-option v-for="item in cityList" :value="item.value">{{ item.value}}</i-option> -->
              </i-select>
           </li>
           <li class="li_tf">
             <p>单价：666666</p>
           </li>
           <li class="li_tf">
             <p>备注：</p>
                <textarea rows="4" style="width:400px;"></textarea>
           </li>
         </ul>
          <div class="allMoney clearfix">
            <p class="money"><span style="margin-right: 20px">总金额： RMB</span><span style="font-size:16px ;font-weight: 600;"> 6666</span></p>
            <p class="login_tip">下订单前请确认登录
              <a href="">登录会员</a>
              <a href="" style="margin-left: 10px">注册</a>
            </p>
          </div>



       </div>
      <div class="protocol prodialog">
       <input type="checkbox">
       <span style=" color:#666">我已阅读并同意<a @click="modal2 = true">预订条款</a> </span>
      </div>

     <div style="margin-bottom: 300px;margin-top: 40px">
       <router-link to='/hoteldetail'>
          <div class="preBtn">上一步</div>
        </router-link>
        <div class="submit_btn nextBtn">
          提交订单
        </div>
     </div>
      </div>

    <Modal
        :visible.sync="modal2"
        title="Modal Title"
        ok-text="OK"
        cancel-text="Cancel">
        <p>Something...</p>
        <p>Something...</p>
        <p>Something...</p>
    </Modal>

    </div>
    <ft></ft>
  </div>
</template>

<script>
import list from "../common/list";
import ft from "../common/ft";
export default {
  data() {

    return {
      modal2: false,
      shows: false,
      cityList: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        },
        {
          value: "6",
          label: "6"
        },
        {
          value: "7",
          label: "7"
        },
        {
          value: "8",
          label: "8"
        },
        {
          value: "9",
          label: "9"
        }
      ],
      data: [
        {
          value: "beijing",
          label: "北京",
          children: [
            {
              value: "gugong",
              label: "故宫"
            },
            {
              value: "tiantan",
              label: "天坛"
            },
            {
              value: "wangfujing",
              label: "王府井"
            }
          ]
        },
        {
          value: "jiangsu",
          label: "江苏",
          children: [
            {
              value: "nanjing",
              label: "南京",
              children: [
                {
                  value: "fuzimiao",
                  label: "夫子庙"
                }
              ]
            },
            {
              value: "suzhou",
              label: "苏州",
              children: [
                {
                  value: "zhuozhengyuan",
                  label: "拙政园"
                },
                {
                  value: "shizilin",
                  label: "狮子林"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    changeRight() {
      this.shows = true;
    },
    hideSlide() {
      this.shows = false;
    },
     del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('删除成功');
                }, 2000);
            }
  },
  components: {
    list,
    ft
  }
};
</script>
<style lang="less">
.hoteldetail {
  background: #eee;
  .topBanner {
    width: 100%;
    .topTab {
      width: auto;
      height: 50px;
      z-index: 90;
      position: relative;
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
      height: 155px;
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
                vertical-align: top;
              }
            }
          }
        }
      }
    }
  }
  .hoteldetail-ct {
    width: 1024px;
    margin: 0 auto;
    overflow: hidden;
    min-height: calc(100vh - 206px);

    .hoteldetail-left {
      width: 340px;
      height: 600px;
      margin-top: 20px;
      float: left;
      .you_hd {
        padding: 30px;
        background-color: #fff;
        h2 {
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 15px;
        }
        .img_text {
          width: 100%;
          img {
            width: 100%;
          }
          .time_w {
            padding: 5px 0;
            border-bottom: 1px solid #eee;
            margin-bottom: 10px;
            .time {
              line-height: 32px;
              color: #333;
              font-size: 14px;
            }
          }
          .room_i {
            line-height: 30px;
          }
        }
      }
      .tail_text {
        margin-top: 20px;
        background-color: #fff;
        padding: 20px;
        p {
          line-height: 22px;
          span {
            font-size: 16px;
          }
        }
      }
    }
    .hoteldetail-right {
      width: 684px;
      box-sizing: border-box;
      padding-left: 20px;
      margin-top: 20px;
      float: right;

      .tip_info {
        text-align: left;
        p {
          font-size: 18px;
          margin-bottom: 20px;
        }
      }
      .info_room {
        text-align: left;
        padding: 25px;
        background-color: #fff;
        .list {
          .li_tf {
            margin-bottom: 20px;
            p {
              font-size: 18px;
              margin-bottom: 20px;
            }
          }
        }
        .allMoney {
          margin-top: 40px;
          color: #666;
          font-weight: 600;
          .money {
            height: 30px;
            text-align: right;
            padding-right: 15px;
          }
          .login_tip {
            text-align: right;
            color: #666;
            font-weight: 500;
            a {
              color: #000;
              margin-left: 20px;
              text-decoration: underline;
            }
          }
        }
      }
      .protocol {
        margin-top: 20px;
        height: 60px;
        background-color: #fff;
        box-sizing: border-box;
        padding: 0 20px;
        text-align: left;
        line-height: 60px;
        input {
          vertical-align: middle;
        }
        span {
          color: #666;
        }
      }
      .preBtn{
        color: #000;
            margin-left: 195px;
    margin-right: 50px;
    cursor: pointer;
    text-align: center;
    width: 65px;
    float: left;
    height: 40px;
    line-height: 40px;
      }
      .nextBtn{
            float: left;
    width: 160px;
    background-color: #e9a838;
    color: #fff;
    text-align: center;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
      }
    }
  }
}
.ivu-input {
  border-radius: 0px;
}

.ivu-cascader {
  width: 170px;
  display: inline-block;
}

.rightNav {
  width: 356px;
  border-left: 1px solid #716e6a;
  height: 100vh;
  position: fixed;
  top: 0; // right: -725px;
  right: 0;
  z-index: 1001; // transition: right .4s;
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
</style>

