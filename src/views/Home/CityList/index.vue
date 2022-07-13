<template>
  <div>
    <van-nav-bar title="城市列表" />

    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门城市"></van-index-anchor>

      <van-cell
        v-for="(item, index) in hotCityList"
        :key="index"
        :title="item.label"
      />

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
  const cityNameList = {}
  // const cityIndex = []
  // const cityNameList = {}

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
  // var arr1 = ['apple', 'banana', 'mango'];
  // var arr2 = ['orange', ...arr1];
  // ["orange", "apple", "banana", "mango"]
  const indexList = Object.keys(cityList).sort()
  Object.keys(cityList).sort().forEach(item => {
    cityNameList[item] = cityList[item]
  })

  // Object.assign(this.cityList, { hot: this.hotCityList })

  return {
    cityList, cityNameList, indexList
  }

  // for (let i = 65; i <= 90; i++) {
  //   const c = String.fromCharCode(i)
  //   if (this.cityList[c]) {
  //     console.log(c, this.cityList[c])
  //   }
  // }
}

// this.cityNameList[key] = this.hotCityList
// console.log(this.hotCityList)
// const letters = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'
export default {
  created () {
    this.getCityList()
    this.getHotCityList()
  },
  data () {
    return {
      cityList: {},
      cityNameList: [],
      cityIndex: [],
      hotCityList: [],
      indexList: []

    }
  },
  methods: {
    async getCityList () {
      try {
        const res = await getCityList()
        const { cityList, cityNameList, indexList } = formatCityData(res.data.body)
        console.log(cityList, cityNameList, indexList)
        this.cityList = cityList
        this.cityNameList = cityNameList
        this.indexList = indexList
      } catch (err) {
        console.log(err)
      }
    },

    async getHotCityList () {
      try {
        const hotres = await getHotCityList()
        const hotCityList = hotres.data.body
        console.log('热门城市数据:', hotCityList)
        // this.cityList[hot] = hotCityList
        // this.hotCityList = hotCityList
        // console.log(this.hotCityList)
        this.hotCityList = hotCityList
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

// this.cityList.hot = this.hotCityList.data.body
// console.log(this.cityList)

</script>

<style scoped lang='less'>
</style>
