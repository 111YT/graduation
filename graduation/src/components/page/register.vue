<template>
<div class="register">
       <bannerother></bannerother>
       <div class="registermask">
          <div class="register-box">
            <div class="registerL">
               <img src="../../assets/img/vip.png" alt="">
            </div>
            <div class="registerR">
                <form class="login-form">
                  <div class="center-area">
                        <div class="center-header">
                          <label data-v-0aaf70a0="">会员注册</label>
                        </div>
                        <div class="list-box">
                            <div class="name-box">
                              手机号码：
                            </div>
                            <div class="inp">
                              <input type="text" placeholder="请填写手机号" >
                              <Icon type="asterisk"></Icon>
                            </div>
                        </div>
                        <div class="list-box">
                            <div class="name-box">
                              姓名：
                            </div>
                            <div class="inp">
                              <input type="text" placeholder="请填写您的真实姓名" >
                              <Icon type="asterisk"></Icon>
                            </div>
                        </div>

                        <div class="list-box">
                            <div class="name-box">
                              性别：
                            </div>
                            <div class="inpss">
                             <div class="choice-box">
                              <input type="radio" class="choiceOne" id="male" name="sex" checked="checked" /><label for="male">男</label>
                             </div>
                             <div class="choice-box">
                                  <input type="radio" class="choiceOne" id="female" name="sex" /><label for="female">女</label>
                              </div>
                              <!-- <input class="choiceOne" name='sex' type="radio" value="男" >
                              <input  class="choiceOne" name='sex' type="radio" value="女" > -->
                            </div>
                        </div>
                        <div class="list-box">
                            <div class="name-box">
                              登录密码：
                            </div>
                            <div class="inp">
                              <input type="text" placeholder="" >
                              <Icon type="asterisk"></Icon>
                            </div>
                        </div>
                        <div class="list-box">
                            <div class="name-box">
                              确认密码：
                            </div>
                            <div class="inp">
                              <input type="text" placeholder="" >
                              <Icon type="asterisk"></Icon>
                            </div>
                        </div>
                        <div class="list-box">
                            <div class="name-box">
                              邮箱
                            </div>
                            <div class="inp">
                              <input type="text" placeholder="请填写您的邮箱账号" >
                              <Icon type="asterisk"></Icon>
                            </div>
                        </div>
                        <div class="checkList">
                            <input type="checkbox" value='' ><label class="labl">我已经阅读并同意《君域酒店会员条款》</label>
                        </div>
                        <div class="regist">
                            注册
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
.register {
  .registermask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(35, 35, 35, 0.5);

    .register-box {
      width: 1253px;
      margin: 0 auto;
      height: 400px;
      margin-top: 300px;
      /* padding-top: 1px; */
      .registerL {
        width: 500px;
        height: 538px;
        /* display: inline; */
        float: left;
      }
      .registerR {
        float: right;
        width: 420px;
        height: 500px;
        background-color: #fff;
        margin-top: 11px;
        .login-form {
          .center-area {
            .center-header {
              font-size: 28px;
              padding-bottom: 11px;
              border-bottom: 1px solid #ccc;
              margin-bottom: 20px;
              padding-top: 10px;
            }
            .list-box {
              margin-bottom: 20px;
              .name-box {
                width: 65px;
                height: auto;
                display: inline-block;
              }
              .inpss {
                display: inline-block;
                vertical-align: top;
                width: 330px;
                .choice-box {
                  width: 61px;
                  float: left;
                  .choiceOne {
                    width: 29px;
                    /* float: left; */
                    margin-left: 10px;
                  }
                }
              }
              .inp {
                display: inline-block;
                input {
                  display: inline-block;
                  margin-left: 10px;
                  width: 300px;
                  height: 30px;
                  background-color: #fff;
                  padding-left: 5px;
                }
                i {
                  color: #e96262;
                  margin-left: 5px;
                }
              }
            }
            .checkList {
              width: 90%;
              margin-left: 20px;
              .labl {
                margin-left: 5px;
                vertical-align: text-bottom;
              }
            }
            .regist {
              width: 320px;
              height: 40px;
              background: -webkit-gradient(
                linear,
                left top,
                left bottom,
                from(#ae9366),
                to(#d6ba7e)
              );
              background: linear-gradient(to bottom, #ae9366, #d6ba7e);
              margin: 32px auto;
              line-height: 39px;
              font-size: 20px;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
