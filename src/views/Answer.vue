<template>
  <div class="card">
    <div v-for="(item, index) in btnList" :key="index">
      <div class="btn iconfont">
        {{ item.icon }}
        {{ item.info }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnList: [
        {
          icon: '&#xe60f;',
          info: '为你推荐'
        },
        {
          icon: '&#xe63e;',
          info: '邀请回答'
        },
        {
          icon: '&#xe601;',
          info: '最新问题'
        },
        {
          icon: '&#xe708;',
          info: '人气问题'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/iconfont.css';
.card {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  .btn {
    background: rgba(51, 51, 51, 0.14);
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    
  }
}
</style>
