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
        <img src="../../assets/img/bgtwo.jpg" alt="">
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
            <h1><i class="iconfont icon-sousuo"></i>TO FIND THE HOTEL</h1>
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
						<input type="text" name="" >
					</div>
					<div class="searchR-list">
              <ul>
                  <li><a href="/">MEETINGS &amp; EVENTS</a></li>
                  <li><a href="/">HOTEL &amp;RESERVATION</a></li>
                  <li><a href="/">PREFERENTIAL&amp;ACTICITIESa</a></li>
                  <router-link to='/aboutus'>
                     <li><a href="/">ABOUT&amp;US</a></li>
                  </router-link>
                  <li><a href="/">HOTEL&amp;MAP</a></li>
              </ul>
					</div>
			</div>
</transition>
   </div>

</template>

<script>
export default {

        data () {

            return {
              shows:false,
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        },
        methods: {
          changeRight(){
            this.shows=true
          },
          hideSlide(){
            this.shows=false
          }
        }
    }

</script>
<style lang="less">
.topBanner {
  width: 100%;
  .topTab {
    width: auto;
        z-index: 90;
    position: relative;
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
    img{
      width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    }
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
.ivu-input{
  border-radius:0px;
}
.ivu-cascader{
width: 170px;
    display: inline-block;
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
</style>


