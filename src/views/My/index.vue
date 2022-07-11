<template>
  <div>
    <div
      class="header header-login" v-if="user && user.token">
      <div class="My_info__eOYeg">
        <div class="My_myIcon__3cKIV">
          <img src="@/assets/avatar.png" alt="" />
        </div>

        <p>好客</p>
        <van-button size="small" @click="logout"><span>退出</span></van-button>
        <a href="#"><p>编辑各人资料</p></a>
      </div>
    </div>
    <div class="header header-notlogin" v-else>
      <div class="My_info__eOYeg">
        <div class="My_myIcon__3cKIV">
          <img src="@/assets/avatar.png" alt="" />
        </div>
        <p>游客</p>
        <van-button size="small" @click="$router.push('/login')"
          ><span>去登陆</span></van-button
        >
      </div>
    </div>
    <van-grid :column-num="3">
      <van-grid-item icon="star-o" text="我的收藏" />

      <van-grid-item icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="birthday-cake-o" text="成为房主" />
      <van-grid-item icon="manager-o" text="个人资料" />
      <van-grid-item icon="photo-o" text="联系我们" />
    </van-grid>
    <img src="@/assets/join.png" alt="" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

  created () { },
  data () {
    return {}
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({ message: '确定退出吗' })
        this.$store.commit('setUser', {})
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.header {
  height: 384px;
  opacity: 0.7;
  background: url("@/assets/bg.png");
  background-size: cover;
  // padding-top: 120px;
}
.header-notlogin,
.header-login {
  display: flex;
  justify-content: center;
  align-items: center;

  .My_info__eOYeg {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 640px;
    height: 330px;
    background-color: #fff;
    box-shadow: 0 0 10px 3px #ddd;
    margin: 100px 0 0;
    padding: 40px 0;
    .My_myIcon__3cKIV {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 140px;
      height: 140px;
      border: 10px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
      img {
        width: 120px;
        height: 120px;
        // margin-bottom: 15px;
        // display: block;
        // vertical-align: middle;
      }
    }
  }

  p {
    font-size: 13px;
  }

  button {
    background-color: #21b97a;
    span {
      font-size: 13px;
      color: #fff;
    }
  }
}

// .van-grid {
//   margin-top: 100px;
// }
</style>
