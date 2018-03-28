<template>
          <div class="personbox">
           <h2>用户信息</h2>
            <ul>
                <li>
                  <span>姓名：</span>
                  <span>王赞</span>
                </li>
                <li>
                  <span>性别：</span>
                  <span>男</span>
                </li>
                <li>
                  <span>手机号：</span>
                  <span>15788852654</span>
                </li>
                <li>
                  <span>邮箱：</span>
                  <span>1628154856@qq.com</span>
                </li>
                <li>
                  <span>身份证号：</span>
                  <span>3306154xxxx528</span>
                </li>

            </ul>
         </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
.personbox{
      h2{
        font-size: 24px;
        text-align: left;
      }
      ul {
        li {
          span {
            font-size: 20px;
            width: 150px;
            display: inline-block;
            padding: 10px 20px 10px 0;
            text-align: left;
          }
        }
      }
}
</style>
