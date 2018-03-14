<template>
<div class="ft">
  <div class="index-ft">
    <div class="ft-box">
        <div class="footnav">
          <ul>
            <li>首页</li>
            <li>首页</li>
            <li>首页</li>
            <li>首页</li>
            <li>首页</li>
            <li>首页</li>
            <li>首页</li>
          </ul>
        </div>
        <div class="logos">
          <ul>
            <li>
              <img src="../../assets/img/dlogo1.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/dlogo2.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/dlogo3.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/dlogo4.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/dlogo5.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/dlogo6.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/dlogo7.png" alt="">
            </li>
          </ul>
          <ul>
            <li>
              <img src="../../assets/img/dlogo8.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/dlogo9.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/dlogo10.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/dlogo11.png" alt="">
            </li>
          </ul>
        </div>
        <div class="choiceus">联系我们/CONTECT US
        </div>
        <div class="choice-title">
          <span>公司地址：上海市XX区XX路XX街XX号</span><span>邮箱：您的邮箱@163.com</span>
          <span>电话：021-XXXX-XXXX</span>
          <p>热线：400- 000</p>
        </div>
    </div>
  </div>
  <div class="ft-down">
  Copyright©2017-现在 Hangzhou GreenCloud Tech Co., Ltd. All Rights Reserved.
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.ft{
  .index-ft {
    width: 100%;
    height: 440px;
    // background-image: url('../../assets/img/ft.jpg');
        background-color: #f5f5f5;
    // background-color: red;
    .ft-box {
      padding-top: 1px;
      margin: 0 auto;
      width: 1200px;
      height: auto;
      .footnav {
        margin-top: 50px;
        ul {
          margin: 0 15px;
          border-bottom: 1px solid rgb(67, 67, 67);
          border-top: 1px solid rgb(67, 67, 67);

          li {
            display: inline-block;
            line-height: 4;
            width: 100px;
            height: 50px;
            margin: 0 15px;
            text-align: center;
          }
        }
      }
      .logos {
        ul {
          display: inline-block;
          margin: 0 auto;
          padding: 15px 0;
          // border-bottom: 2px solid #ddd;
          height: 76px;
          width: auto;
          li {
            margin-left: 35px;
            display: inline-block;
            img {
              -moz-filter: grayscale(100%);
              -ms-filter: grayscale(100%);
              -o-filter: grayscale(100%);
              filter: grayscale(100%);
              filter: gray;
              &:hover{
               -moz-filter: grayscale(0%);
              -ms-filter: grayscale(0%);
              -o-filter: grayscale(0%);
              filter: grayscale(0%);
              filter: gray;
              }
            }
          }
        }
      }
      .choiceus{
        font-size: 18px;
        margin-top: 20px;
      }
      .choice-title{
        // margin-top: 20px;
        margin: 15px 0 15px;
        span{
          margin-left: 20px;
        }
      }
    }
  }
  .ft-down{
    width: 100%;
    height: 60px;
    background-color: #000;
    text-align: center;
    line-height: 64px;
    color: #fff;
  }
}
</style>
