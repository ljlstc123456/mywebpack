<style lang="less" scoped>
.loading {
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  z-index : 99;
}
.loading-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
}
@keyframes rotate {
    100% {
        transform: rotate(720deg);
    }
}
.loading-icon {
    display: inline-block;
    width: 60px;
    height: 60px;
    border: 6px solid gray;
    border-right: 6px solid transparent;
    vertical-align: middle;
    border-radius: 50%;
    animation: rotate 2s linear infinite;
}

</style>

<template>
    <div class="loading">
        <div class="loading-inner">
            <span class="loading-icon"></span>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      circle: new Array(12)
    };
  }
};
</script>