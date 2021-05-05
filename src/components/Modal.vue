<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javacscript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"> </slot>
        </div>
        <div class="modal-footer">
          <a href="javacscript:;" class="btn" v-if="btnType == 1" v-on:click="$emit('submit')">{{sureText}}</a>
          <a href="javacscript:;" class="btn" v-if="btnType == 2" v-on:click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-if="btnType == 3">
            <a href="javacscript:;" class="btn" v-on:click="$emit('submit')">{{sureText}}</a>
            <a href="javacscript:;" class="btn btn-default" v-on:click="$emit('cancel')">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  props: {
    //弹框类型：小small、中middle、大large、表单form
    modalType: {
      type: String,
      default: "form",
    },
    //弹框标题
    title: String,
    //按钮类型： 1.确定、2.取消、3.确定取消
    btnType: String,
    sureText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    showModal: Boolean,
  },
};
</script>
<style lang="scss">
//要注意引入顺序，否则报错。eg,先引入config文件有了自定义的变量，再mixin中使用
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/modal.scss";
</style>

