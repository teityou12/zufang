<template>
  <van-cell-group>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <HomeItem v-for="(item, index) in homeList" :key="index" :house="item">
      </HomeItem>
    </van-list>
  </van-cell-group>
</template>

<script>
import HomeItem from './HomeItem.vue'
import { getHomeList } from '@/api/search'
export default {

  created () {
    this.getHomeList()
  },
  data () {
    return {

      loading: false,
      finished: false,
      homeList: []
    }
  },
  methods: {
    async getHomeList () {
      try {
        const res = await getHomeList()
        console.log(res)
        // this.timestamp = res.data.data.pre_timestamp

        // 若数据全部加载完毕，则将finished 设置为 true
        // if (this.timestamp === null) {
        //   this.finished = true
        // }

        this.homeList.push(...res.data.body.list)
        // 数据更新完毕后，将 loading 设置为false
        this.loading = false
      } catch (err) {
        console.log(err)
      }
    },

    onLoad () {
      // 异步更新数据
      this.getHomeList()
    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: { HomeItem }
}
</script>

<style scoped lang='less'>
</style>
