<template>
  <van-button
    :icon="value ? 'star' : 'star-o'"
    :color="value ? '#ffa500' : ''"
    @click="onCollect"
    :loading="loading"
  />
</template>

<script>
import { deleteHouseCollect, addHouseCollect } from '@/api/house'
export default {
  name: 'CollectHouse',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  created () { },
  data () {
    return {}
  },
  methods: {
    async onCollect () {
      // 开始请求
      this.loading = true
      try {
        // 是否收藏
        if (this.value) {
          // 父组件 传递articleId
          await deleteHouseCollect(this.houseCode)
        } else {
          await addHouseCollect(this.houseCode)
        }
        // 更新视图
        this.$emit('input', !this.value)
        this.$toast.success(this.value ? '取消收藏' : '收藏成功')
      } catch (err) {
        this.$toast('操作失败，请重试')
      }
      // 请求结束
      this.loading = false
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
