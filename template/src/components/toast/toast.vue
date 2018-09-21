<template>
  <div class="toast">
    <div class="toast-wrapper">
      <div class="message">
        {{message}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String | Number
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.toast {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background: red;
  z-index: 999;

  .toast-wrapper {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
  }

  .message {
    background: rgba(3, 3, 3, 0.8);
    display: inline-block;
    padding: 33px 51px;
    border-radius: 8px;
    color: #fff;
    letter-spacing: 0.64px;
    font-size: 36px;
    line-height: 36px;
    white-space: normal;
    max-width: 80%;
    // white-space: nowrap;
  }
}
</style>
