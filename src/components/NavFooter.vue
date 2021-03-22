<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://github.com/saucyjackme/MiMall" target="_blank">本项目地址</a><span>|</span>
      <a href="">我的主页</a><span>|</span>
      <a href="">我的主页</a><span>|</span>
      <a href="">我的主页</a>
    </div>
    <div class="copyright">©mi.com 2021 <span class="domain">低仿小米商城</span> All Rights Reserved</div>
  </div>
</template>
<script>
  export default{
    name: 'nav-footer'
  }
</script>
<style lang="scss">
@import '../assets/scss/config.scss';
  .footer {
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo {
      margin-top: 46px;
      margin-bottom: 31px;
      img {
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link {
      a {
        color:#999999;
        display: inline-block;
      }
      span {
        margin:0 10px;
      }
      margin-bottom:13px;
    }
    .copyright {
      .domain {
        color:$colorA;
      }
    }
  }
</style>