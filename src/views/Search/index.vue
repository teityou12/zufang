<template>
  <div>
    <van-nav-bar left-arrow @click-left="$router.back()">
      <template #title>
        <van-search
          v-model="value"
          show-action
          label="北京"
          placeholder="请输入搜索关键词"
          @search="onSearch"
        >
          <template #action>
            <div @click="onSearch"></div>
          </template>
        </van-search>
      </template>
      <template #right>
        <van-icon name="location-o" size="18" @click="toMap" />
      </template>
    </van-nav-bar>

    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域">
          <van-picker title="标题" :columns="columns" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="方式">
          <van-picker title="标题" :columns="columns1" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="租金">
          <van-picker title="标题" :columns="columns2" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" @open="flag = true"></van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>
    <van-popup position="right" style="height: 100%; width: 70%" v-model="flag">
    </van-popup>
    <HomeList>></HomeList>
  </div>
</template>

<script>
import { Toast } from 'vant'
import HomeList from '@/components/HomeList.vue'
import { getChooseList } from '@/api/search'

export default {
  created () {
    this.getChooseList()
  },
  data () {
    return {
      value: '',

      showPicker: false,
      childList: [],
      columnsList: [],
      columns: [

      ],
      columns1: [

      ],
      columns2: [
        {
          text: '浙江'

        },
        {
          text: '福建'

        }
      ],
      flag: false
    }
  },
  methods: {
    // renderFilePicker () {
    //   const { active, columnsList: { area, subway, rentType, price } } = this.columnsList
    //   if (active !== 0 && active !== 1 && active !== 2) {
    //     return null
    //   }

    //   let columns = []
    //   switch (active) {
    //     case '0':
    //       columns = [area, subway]
    //       break
    //     case '1':
    //       columns = rentType
    //       break
    //     case '2':
    //       columns = price
    //       break
    //     default:
    //       break
    //   }
    //   console.log(columns)
    // },

    OnClick () {
      this.showPicker = true
      this.renderFilePicker()
    },
    onSearch (val) {
      Toast(val)
    },
    async getChooseList () {
      try {
        const res1 = await getChooseList()
        console.log(res1)
        this.columnsList = res1.data.body
        res1.data.body.area.children[0].children = [{ label: '' }]
        res1.data.body.subway.children[0].children = [{ label: '' }]
        this.columns = [res1.data.body.area, res1.data.body.subway]
        this.columns1 = res1.data.body.rentType
        this.columns2 = res1.data.body.price
        console.log(this.columnsList)
      } catch (err) {
        console.log(err)
      }
    },
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    },
    toMap () {
      this.$router.push({ name: 'map' })
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { HomeList }
}
</script>

<style scoped lang='less'>
.van-nav-bar {
  height: 100px;
}
</style>
