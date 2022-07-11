<template>
  <div>
    <van-nav-bar title="城市列表" />

    <van-index-bar>
      <div v-for="(item, cityIndex) in cityNameList" :key="cityIndex">
        <van-index-anchor :index="cityIndex" />

        <van-cell
          v-for="(citem, cindex) in item"
          :key="cindex"
          :title="citem.label"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList, getHotCityList } from '@/api/city'

// 数据格式化
// list: [{},{}]
const formatCityData = (list) => {
  const cityList = {}
  // const cityIndex = []
  const cityNameList = {}
  // 1 遍历数组
  list.forEach(item => {
    // 2 获取每个城市的首字母
    const first = item.short.substr(0, 1).toUpperCase()
    // 3 判断citylist中是否有该分类
    if (cityList[first]) {
      // 4 如果有直接往分类里push数据
      // cityList[first] => [{},{}]
      cityList[first].push(item)
    } else {
      // 5 如果没有就先创建一个数组 然后 把当前城市信息添加进数组中
      cityList[first] = [item]
    }
  })

  // 2 获取索引数据

  Object.keys(cityList).sort().forEach(item => {
    cityNameList[item] = cityList[item]
  })
  return {
    cityList, cityNameList
  }
  // for (let i = 65; i <= 90; i++) {
  //   const c = String.fromCharCode(i)
  //   if (this.cityList[c]) {
  //     console.log(c, this.cityList[c])
  //   }
  // }
}
// const letters = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'
export default {
  created () {
    this.getCityList()
    this.getHotCityList()
  },
  data () {
    return {
      cityList: {},
      cityNameList: []

    }
  },
  methods: {
    async getCityList () {
      try {
        const res = await getCityList()
        const { cityList, cityNameList } = formatCityData(res.data.body)
        console.log(cityList, cityNameList)
        this.cityList = cityList
        this.cityNameList = cityNameList
      } catch (err) {
        console.log(err)
      }
    },

    async getHotCityList () {
      try {
        const res = await getHotCityList()
        // const { cityList, cityNameList } = formatCityData(res.data.body)
        // console.log(cityList, cityNameList)
        // this.cityList = cityList
        // this.cityNameList = cityNameList
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  },

  computed: {

  },
  watch: {},
  filters: {},
  components: {}

}

</script>

<style scoped lang='less'>
</style>
