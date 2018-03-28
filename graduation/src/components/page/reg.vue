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
      <div class="right_top">
          <div class="right_top_content">
                <div class="chircle">
                    <div >
                        <!-- <span class='iconfont icon-right'> </span> -->
                          <span class="active">1</span>
                    </div>
                    <b>注册</b>
                </div>
             <div class="line"></div>
             <div class="chircle">
                 <div >
                     <span class='iconfont icon-right'  v-if="stap == 3"> </span>
                       <span v-else>2</span>
                </div>
                 <b>完善资料</b>
             </div>
             <div class="line"></div>
             <div class="chircle">
                 <div >
                       <span>3</span>
                </div>
                 <b>确认</b>
             </div>
          </div>
      </div>

            <div class="one">
            <div class="right-pass">
            <div class="mail_box">
                邮箱
                <input type="text" name="" v-model='email' class="inp" @change="changeValidRemote('email')" >
                <!-- <span v-if='this.nameva==true'>邮箱格式不正确</span>
                <Icon type="checkmark-round" v-if='this.nameva==false'></Icon> -->

            </div>
            <div class="mail_box">
                密码
                <input type="password" name="" class="inp" v-model='password1' @input="inputValid('password1')" >
                <!-- <span  >密码格式不正确</span>
                <Icon type="checkmark-round"></Icon> -->
            </div>
            <div class="mail_box lef">
                再次输入密码
                <input type="password" name="" v-model='password2' class="inp" @input="inputValid('password2')" >
                <!-- <span >密码不一致</span>
                <Icon type="checkmark-round"></Icon> -->
            </div>
            <div class="mail_box distance">
                验证码
                <input type="text" name="" class="inp whidCode" @change="changeValid('passCode')">
                <div class="imgCode" @click="getCode">
                    <img :src="'data:image/png;base64,' + imgsrc" alt="">
                </div>
                <b @click='getCode()' style="cursor: pointer">换一张</b>
                <!-- <span >验证码错误</span>
                <Icon type="checkmark-round"></Icon> -->
            </div>
            <div class="check_soure">
                <input type="checkbox" @change="validItem()">
                <span>我同意并遵守上述的
                    <div class="serverTitle" @click="openServer()"> 《君域酒店注册服务协议》</div>
                </span>
                <!-- <span class="checkWarn">警告</span> -->
            </div>
        </div>
        <!-- <router-link to='/steptwo'> -->
        <div class="botton_two">
            <span class="butt" @click="nextStep()" :class="{green:this.greening =='11' && !wait}">下一步</span>
        </div>
        <!-- </router-link> -->
  </div>
    <ft></ft>
    </div>
      </div>
</template>

<script>
import ft from "../common/ft";
import list from "../common/list";
export default {
  data() {
    return {
      shows: false,
      stap: 1,
      imgsrc: "",
      imgState:'',
      captchaUUID:'',
      greening:'',

       nameva:false,
       passva1:false,
       passva2:false,










      id:'',
      email:'',
      password1:'',
      password2:'',


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
    changeValidRemote(value) {
      setTimeout( function(value){
         var vaild = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$ /;
                if(vaild.test(value)){
                   this.nameva=false
                }else{
                   this.nameva=true
                }
            }, 500)
    },
    inputValid() {},
    changeValid() {},
    getCode() {},
    validItem() {},
    openServer() {},
    nextStep() {
        let form = {
            email: this.email,
            password1: this.password1,
            password2: this.password2,
            // passCode: this.passCode,
            // item: this.item
        }
          .post("/user/add")
          .then(res => {
            if (res.data.result == 1) {
              // this.$router.push("/LoginPage");
              // console.log(this.info)
              console.log('成功了')
            } else {
              alert(res.data.msg);
            }

           })
    }
  },
    mounted(){
    // let url = ''
    this.$http.get('http://172.27.35.5:2234/captcha').then(res=>{
      this.imgsrc=res.data.data.src,
      this.imgState=res.data.value,
      this.captchaUUID=res.data.captchaUUID
      console.log(1)
      console.log(res.data)
    })
  },
  components: {
    list,
    ft
  }
};
</script>
<style lang="less">
.hoteldetail {
  // background: #eee;
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
    margin: 30px auto 0;
    overflow: hidden;
    min-height: calc(100vh - 206px);
    .reg-box {
      width: 100%;
      height: 97px;
      // background: red;
      padding-top: 1px;
      border: 1px solid #a0a0a0;
      .ivu-steps {
        font-size: 0;
        width: 100%;
        line-height: 1.5;
        margin-top: 34px;
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

.right_top {
  width: 100%;
  height: 123px;
  background: #f9f9f9;
}
.right_top_content {
  width: 807px;
  height: 60px;
  margin-left: 48px;
  padding-top: 20px;
  margin: 0 auto;
}
.chircle {
  width: 75px;
  height: 30px;
  text-align: center;
  display: inline-block;
}
.chircle span {
  background: #d8d8d8;
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 50px;
  text-align: center;
  color: #ffffff;
  font-size: 24px;
  line-height: 40px;
}
.chircle b {
  font-size: 14px;
  color: #999999;
  margin-top: 8px;
  font-weight: normal;
  display: inline-block;
  width: 100px;
  margin-left: -15px;
}
.line {
  width: 275px;
  height: 5px;
  background: #d8d8d8;
  border-radius: 3px;
  display: inline-block;
  margin-bottom: 33px;
  margin-left: -5px;
  margin-right: 9px;
}
.active {
  background: #00b935 !important;
}

.protocol {
  width: 1200px;
  height: 800px;
  position: absolute;
  background: #fff;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0px;
  margin: 0 auto;
  opacity: 1;
}

.protocol_box {
  width: 90%;
  height: 83.5vh;
  background: #fff;
  margin: 0 auto;
  padding-top: 40px;
}

.content_box {
  margin: 0 auto;
  width: 80%;
  height: 74vh;
  background: #fff;
  overflow: auto;
}
.article_content {
  width: 99%;
  text-align: left;
  color: #151515;
}
.return {
  margin-top: 20px;
  text-decoration: underline;
  display: inline-block;
  font-size: 14px;
  color: #999999;
  cursor: pointer;
}
.return:hover {
  color: #009ae6;
}
.htmlContent {
  text-align: center;
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 10px;
}

.addIcon {
  display: inline-block;
  /*color: #fff!important;*/
  /*background: #00B935;*/
  color: #00b935 !important;
  /*width: 25px;
          height: 25px;*/
  font-size: 18px !important;
  /*border-radius: 50%;*/
  text-align: center;
  vertical-align: top;
  line-height: 27px;
  margin-left: 20px;
  margin-top: 5px;
}

.check_soure .serverTitle {
  color: #009ae6;
  display: inline-block;
  cursor: pointer;
}

.checkWarn {
  color: #e96262;
  margin-left: 10px;
}

.codeWarn {
  margin-left: 16px;
  margin-top: 11px;
  display: inline-block;
  vertical-align: top;
}

.whidCode {
  width: 140px !important;
}

.imgCode {
  display: inline-block;
  width: 130px;
  height: 50px;
  vertical-align: top;
}

.imgCode img {
  display: inline-block;
  width: 130px;
  height: 50px;
  margin-top: -7px;
  margin-left: 15px;
}

.distance b {
  font-size: 14px;
  color: #999999;
  display: inline-block;
  font-weight: normal;
  color: #009ae6;
  margin-left: 40px;
  margin-top: 12px;

  vertical-align: top;
}

/*.content_box {
        margin-top: 30px;
        width:90%;
        margin: 0 auto;
    }*/

.right {
  width: 1000px;
  height: 752px;
  margin-top: 40px;
  margin-left: 21px;
  border: 1px solid #e6e6e6;
  display: inline-block;
}

.right_top {
  width: 100%;
  height: 123px;
  background: #f9f9f9;
}

.right_top_content {
  width: 807px;
  height: 60px;
  margin-left: 48px;
  padding-top: 20px;
  margin: 0 auto;
}

.chircle {
  width: 75px;
  height: 30px;
  text-align: center;
  display: inline-block;
}

.chircle span {
  // background: #00b935;
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 50px;
  text-align: center;
  color: #ffffff;
  font-size: 24px;
  line-height: 38px;
}

.chircle b {
  font-size: 14px;
  color: #999999;
  margin-top: 8px;
  font-weight: normal;
  display: inline-block;
  width: 100px;
  margin-left: -15px;
}

.line {
  width: 275px;
  height: 5px;
  background: #d8d8d8;
  border-radius: 3px;
  display: inline-block;
  margin-bottom: 33px;
  margin-left: -5px;
  margin-right: 9px;
}

.right-pass {
  margin-top: 66px;
  width: 883px;
  height: 434px;
  margin-left: 140px;
  border-bottom: 1px solid #e6e6e6;
}

.mail_box {
  font-size: 14px;
  margin-left: 132px;
  margin-bottom: 30px;
  text-align: left;
}

.inp {
  width: 320px;
  height: 37px;
  margin-left: 20px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  padding-left: 10px;
}

.right-pass i {
  font-style: normal;
  width: 300px;
  margin-top: 6px;
  margin-left: 53px;
  letter-spacing: 1px;
      display: inline-block;
    font-size: 15px;
    margin-left: 13px;
    color: #00b935;
}

.lef {
  margin-left: 76px;
}

.distance {
  margin-top: 20px;
  margin-left: 117px;
}

.check_soure {
  margin-left: 183px;
  text-align: left;
}

.check_soure span {
  font-size: 14px;
}

.botton_two {
  margin-left: 400px;
  margin-top: 35px;
  text-align: left;
  height: 85px;
}

.botton_two span {
  /* cursor: not-allowed; */
  background: #e6e7ec;
  border-radius: 3px;
  padding: 11px 39px;
  font-size: 14px;
  margin-left: 20px;
  cursor: pointer;
  color: #999999;
}

.mail_box span {
  font-size: 14px;
  color: #e96262;
  margin-left: 10px;
}

.green {
  cursor: pointer;
  background: #44b549 !important;
  color: #ffffff !important;
}

.borderT {
  outline: 1px solid red !important;
}
</style>

