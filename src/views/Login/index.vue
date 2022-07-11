<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="账号登录"
      @click-left="$router.back()"
    >
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <!-- /导航栏 -->

    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="username" placeholder="请输入账号" />
      <van-field
        v-model="password"
        name="password"
        type="password"
        placeholder="请输入密码"
      />

      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
      <a href="#">还没有账号，去注册~</a>
    </van-form>
  </div>

  <!-- /登录表单 -->
</template>
<script>
import { login } from '@/api/user.js'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {

      username: '',
      password: ''

    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    async onSubmit (values) {
      // 开始转圈圈
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '登录中...' // 提示消息
      })
      try {
        const res = await login(values)
        console.log('登录成功', res)
        this.$store.commit('setUser', res.data.body)
        this.$router.push({ name: 'my' })
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('登录失败，手机号或验证码错误')
        }
      }
    }

  }
}
</script>
<style scoped lang="less">
.login-container {
  text-align: center;
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #1cb676;
      border: none;
    }
  }
}
</style>
