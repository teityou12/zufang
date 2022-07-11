<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <!-- 子路由出口 -->
    <van-tabbar class="layout-tabbar" route>
      <van-tabbar-item replace to="/Home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/Search" icon="search">找房</van-tabbar-item>
      <van-tabbar-item replace to="/News" icon="orders-o">资讯</van-tabbar-item>
      <van-tabbar-item replace to="/My" icon="user-o">我的 </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.layout-container {
  .layout-tabbar {
    i.toutiao {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
