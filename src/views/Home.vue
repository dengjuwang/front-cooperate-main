<template>
  <div id="app">
    <div class="nav">
      <label for="" class="title">知乎</label>
      <router-link to="/index">首页</router-link>
      <!-- <router-link to="/about">关于</router-link> -->

      <!-- 名命路由跳转 -->
      <router-link to="/vip">会员</router-link>
      <router-link to="/find">发现</router-link>
      <router-link to="/answer">等你来答</router-link>

      <div class="inputdiv">
        <input type="text" />
        <a href="">提问</a>
      </div>
      <router-link to="/aaa">登录</router-link>
    </div>

    <!-- 命名视图 -->
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({})
}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  background-color: #f6f6f6;
}
.inputdiv {
  height: 40px;
  width: 490px;
  display: flex;
  align-content: center;
  margin-left: 80px;
}
.inputdiv input {
  border-radius: 999px;
  width: 400px;
  height: 35px;
  background-color: #f6f6f6;
}
.inputdiv a {
  flex: 1;
  border-radius: 999px;
  background-color: #005ce6;
  text-align: center;
  color: #fff;
}
.title {
  font-size: 30px;
  color: #0066ff;
  margin-right: 30px;
}
.nav {
  height: 60px;
  line-height: 40px;
  background-color: #fff;
  padding-left: 20%;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
}

a {
  color: #b4a7b6;
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 18px;
  height: 40px;
}

a:hover {
  color: #ddd;
}

.router-link-active {
  border-bottom: 5px solid #0066ff;
  color: black;
}

.container {
  width: 50%;
  margin: 10px auto;
  background-color: #fff;
  min-height: 1000px;
  padding: 10px;
}
</style>
