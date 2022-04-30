<template>
  <v-main>
    <div class="flex">
      <div v-for="(item, index) in btnList" :key="index">
        <v-btn color="primary" class="m-2">
          <v-icon>
            {{ item.icon }}
          </v-icon>
          {{ item.info }}
        </v-btn>
      </div>
    </div>
    <v-card class="flex mt-3" v-for="(item, index) in newList" :key="index">
      <v-img
        :src="item.imgUrl"
        max-width="170"
        max-height="170"
        min-width="170"
        min-height="170"
        class="grey darken-4"
      ></v-img>
      <div>
        <v-card-title class="text-h6"> {{ item.title }} </v-card-title>
        <v-card-text> {{ item.text }} </v-card-text>
      </div>
    </v-card>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      btnList: [
        {
          icon: 'mdi-star',
          info: '为你推荐'
        },
        {
          icon: 'mdi-account-multiple-plus',
          info: '邀请回答'
        },
        {
          icon: 'mdi-new-box',
          info: '最新问题'
        },
        {
          icon: 'mdi-fire',
          info: '人气问题'
        }
      ],
      newList: [
        {
          imgUrl: 'https://img0.baidu.com/it/u=158562056,22340437&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=400',
          title: '海绵宝宝',
          text: '知识不能替代友谊，比起失去你，我宁愿做个白痴 。'
        },
        {
          imgUrl: 'https://img1.baidu.com/it/u=1657365165,1891888622&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750',
          title: '海绵宝宝',
          text: '有青苔的地方就有文明'
        },
        {
          imgUrl: 'https://img1.baidu.com/it/u=3921974019,2915255256&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=300',
          title: '海绵宝宝',
          text: '如果你总是让人踩过你的头，你永远都不会得到你想要的东西。'
        },
        {
          imgUrl: 'https://img0.baidu.com/it/u=2020775051,1757117215&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
          title: '海绵宝宝',
          text: '这里埋葬着章鱼哥的希望和梦想。'
        },
        {
          imgUrl: 'https://img0.baidu.com/it/u=2676171483,840293986&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=400',
          title: '海绵宝宝',
          text: '海绵宝宝，我只想告诉你一件事情，派大星也是需要人疼的！'
        },
        {
          imgUrl: 'https://img2.baidu.com/it/u=1625129896,2962725842&fm=253&fmt=auto&app=138&f=JPEG?w=666&h=500',
          title: '海绵宝宝',
          text: '我要两个冰淇淋，一个给我吃一个给我的好朋友海绵宝宝。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/iconfont.css';
.flex {
  display: flex;
}
</style>
