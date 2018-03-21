<template>
<div class="signin">
       <bannerother></bannerother>
       <div class="signinmask">
          <div class="signin-box">
            <div class="signinL">
              <div class="signinListL">
                <img src="../../assets/img/phone.png" alt="">
              </div>
              <div class="signinListR">
                    <h1>君域酒店微信</h1>
                    <h2><Icon type="ionic" style="margin-top:50px"></Icon>预付立减20元房/晚</h2>
                    <h2><Icon type="ionic"></Icon>特价专区优惠享不停</h2>
                    <h2><Icon type="ionic"></Icon>真人客服24小时候命</h2>
                    <h2><Icon type="ionic"></Icon>参与互动赢丰厚大奖</h2>
                    <img src="../../assets/img/code.png" alt="">
                    <p>扫描二维码关注君域官方微信</p>
              </div>
            </div>
            <div class="signinR">
                <form class="login-form">
                  <div class="center-area">
                        <div class="center-header">
                          <label data-v-0aaf70a0="">帐号登录</label>
                        </div>
                        <div class="input-div">
                          <input type="text" placeholder="手机号或者邮箱账号" class="input account">
                          <Icon type="ios-people-outline"></Icon>
                          </div>
                          <div class="input-div marginTop">
                            <input type="password" placeholder="请输入密码" class="input password">
                            <Icon type="ios-locked-outline"></Icon>
                          </div>
                          <!-- <div  class="vaild-tip">
                            <label data-v-0aaf70a0=""></label>
                          </div> -->
                          <div class="sumbit button">登录</div>
                          <div class="forgot-pwd">
                            <label data-v-0aaf70a0="">忘记密码</label>
                            <span data-v-0aaf70a0="" style="width: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <label data-v-0aaf70a0="">立即注册</label>
                        </div>
                    </div>
                  </form>

            </div>
          </div>
       </div>
</div>
</template>

<script>
import bannerother from "../common/bannerother";
export default {
  components: {
    bannerother
  }
};
</script>

<style lang='less'>
.signin {
  .signinmask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(35, 35, 35, 0.5);

    .signin-box {
      width: 1000px;
      margin: 0 auto;
      // background-color: blue;
      height: 400px;
      margin-top: 300px;
      .signinL {
        float: left;
        width: 500px;
        height: 500px;
        .signinListL {
          float: left;
        }
        .signinListR {
          float: right;
          h1 {
            font-size: 40px;
            font-weight: normal;
            color: #ffffff;
          }
          h2 {
            text-align: left;
            font-size: 18px;
            font-weight: normal;
            line-height: 30px;
            color: #fff;
          }
          img {
            width: 120px;
            height: 120px;
            /* left: 0; */
            margin-left: -118px;
            margin-top: 40px;
          }
          p {
            color: #fff;
            font-size: 12px;
            margin-left: -79px;
          }
        }
      }
      .signinR {
        float: right;
        width: 300px;
        height: 500px;
        .login-form {
          margin-top: 30px;
          width: 300px;
          height: 320px;
          // background-color: rgba(0, 0, 0, 0.45);
          background-color: #fff;
          border-radius: 1px;
          .center-area {
            width: 80%;
            height: 100%;
            text-align: center;
            margin: 0 auto;
            overflow: hidden;
            .center-header {
              width: auto;
              height: 68px;
              line-height: 68px;
              text-align: left;
              font-size: 16px;
              color: #333;
            }
            .input-div {
              width: 100%;
              height: auto;
              position: relative;
              input {
                width: 100%;
                height: 40px;
                border: 1px;
                border: 1px solid #cccccc;
                border-radius: 3px;
                font-size: 18px;
                line-height: 40px;
                padding-left: 40px;
                // padding-right: 40px;
                -webkit-box-sizing: border-box;
                -o-box-sizing: border-box;
                -ms-box-sizing: border-box;
                box-sizing: border-box;
              }
              i {
                position: absolute;
                color: #a0a0a0;
                top: 5px;
                left: 5px;
                font-size: 29px;
              }
            }

            .marginTop {
              margin-top: 20px;
            }
            .vaild-tip {
              height: 40px;
              width: 100%;
              font-size: 14px;
              color: #e96262;
              text-align: right;
              line-height: 40px;
              overflow: hidden;
            }
            .sumbit {
              border: 0px;
              color: #fff;
              background-color: #4a90e2;
              cursor: pointer;
              width: 100%;
              height: 40px;
              line-height: 40px;
              font-size: 16px;
              border-radius: 3px;
              letter-spacing: 14px;
              margin-top: 22px;
            }
            .forgot-pwd {
              width: 100%;
              margin: 26px 0;
              text-align: center;
              color: #333;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
