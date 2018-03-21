<template>
  <div class="reservation">
    <banner></banner>
    <div class="reservation-ct">
      <div class="reservation-top">
        <Breadcrumb separator=">">
            <Breadcrumb-item href="/">Home</Breadcrumb-item>
            <Breadcrumb-item href="/Reservation">Reservation</Breadcrumb-item>
        </Breadcrumb>
      </div>
      <div class="reservation-search-box">
         <div class="reservation-search">
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
      <div class="reservation-list">
        <div class="reservation-list-box">
           <div class="reservation-list-le">
             <img src="../../assets/img/room1.jpg" alt="">
           </div>
           <div class="reservation-list-ri">
             <h3>豪华海景套房</h3>
             <div class="list-ri-text">
               坐落于空气新鲜，环境宜人的上海市浦东新区沪南公里路5278号，近航三路口，酒店周围交通十分便利。
               <p>建筑面积：60平方</p>
             </div>
             <span>立即预订</span>
           </div>
        </div>
        <div class="reservation-list-box">
           <div class="reservation-list-le">
             <img src="../../assets/img/room2.jpg" alt="">
           </div>
           <div class="reservation-list-ri">
             <h3>商务经济房</h3>
             <div class="list-ri-text">
               坐落于空气新鲜，环境宜人的上海市浦东新区沪南公里路5278号，近航三路口，酒店周围交通十分便利。
               <p>建筑面积：45平方</p>
             </div>
             <span>立即预订</span>
           </div>
        </div>
        <div class="reservation-list-box">
           <div class="reservation-list-le">
             <img src="../../assets/img/room3.jpg" alt="">
           </div>
           <div class="reservation-list-ri">
             <h3>精致商务房</h3>
             <div class="list-ri-text">
               坐落于空气新鲜，环境宜人的上海市浦东新区沪南公里路5278号，近航三路口，酒店周围交通十分便利。
               <p>建筑面积：35平方</p>
             </div>
             <span>立即预订</span>
           </div>
        </div>
        <div class="reservation-list-box">
           <div class="reservation-list-le">
             <img src="../../assets/img/room4.jpg" alt="">
           </div>
           <div class="reservation-list-ri">
             <h3>豪华大床房</h3>
             <div class="list-ri-text">
               坐落于空气新鲜，环境宜人的上海市浦东新区沪南公里路5278号，近航三路口，酒店周围交通十分便利。
               <p>建筑面积：35平方</p>
             </div>
             <span>立即预订</span>
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
    data() {
    return {
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
  components: {
    banner,
    ft
  }
};
</script>

<style lang='less'>
.reservation {
  .reservation-ct {
    .reservation-top {
      width: 1200px;
      height: auto;
      text-align: left;
      margin: 20px auto;
      font-size: 16px;
      color: #000;
      span {
        a {
          color: #000;
        }
      }
    }
    .reservation-search-box {
      width: 1200px;
      height: auto;
      margin: 0 auto;
      .reservation-search {
        background-color: rgba(35, 35, 35, 0.85);
        padding: 20px 20px 20px 150px;
        text-align: left;
        margin: 20px 45px 0 0;
        h1 {
          font-size: 18px;
          color: #7d6450;
          line-height: 21px;
          font-weight: normal;
          margin-left: 30px;
          i {
            margin-right: 10px;
          }
        }
        p {
          font-size: 12px;
          color: #fff;
          margin: 15px 0 25px 55px;
          /* margin-left: 35px; */
        }
        .searchCity {
          margin-bottom: 9px;
          height: 34px;
          margin-left: 50px;
          // .searchcity {
          //   margin-left: 0;
          //   width: 205px;
          //   height: 34px;
          //   margin-right: 5px;
          .ivu-cascader {
            width: 300px;
            display: inline-block;
            margin-right: 14px;
            input {
              height: 40px;
            }
          }
          .ivu-date-picker {
            width: 202px;
            margin-right: 20px;
            input {
              height: 40px;
            }
          }
          .searchdate {
            margin-left: 0;
            width: 170px;
            height: 34px;
            margin-right: 5px;
          }
          .search {
            display: inline-block;
            width: 105px;
            height: 40px;
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
    .reservation-list {
      width: 100%;
      height: auto;
      .reservation-list-box {
        width: 1200px;
        height: auto;
        margin: 40px auto;
        .reservation-list-le {
          display: inline-block;
          width: 400px;
          height: 295px;
          img {
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        }
        .reservation-list-ri {
          display: inline-block;
          vertical-align: top;
          text-align: left;
          width: 562px;
          height: 220px;
          padding: 20px;
          margin-bottom: 40px;
          h3 {
            font-size: 24px;
          }
          .list-ri-text {
            margin: 20px 0 30px;
            width: 300px;
            font-size: 14px;
            line-height: 27px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: wrap;
                height: 105px;
          }
          span {
            padding: 10px 60px;
            border: 1px solid #e9a838;
            &:hover {
              color: #fff;
              background-color: #e9a838;
            }
          }
        }
      }
    }
  }
}
.demo-breadcrumb-separator {
  color: #ff5500;
  padding: 0 5px;
}
</style>
