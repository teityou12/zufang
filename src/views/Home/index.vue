<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <van-search
      class="bgcc"
      v-model="value"
      label="北京"
      placeholder="请输入搜索关键词"
      @click="onSearch"
    >
    </van-search>

    <van-icon name="location-o" size="30" color="white" @click="toMap" />

    <van-grid>
      <van-grid-item>
        <div class="box">
          <van-icon name="home-o" size="30" color="#00ae66" />
        </div>
        <p>整租</p>
      </van-grid-item>
      <van-grid-item>
        <div class="box">
          <van-icon name="friends-o" size="30" color="#00ae66" />
        </div>
        <p>合租</p>
      </van-grid-item>
      <van-grid-item to="/map">
        <div class="box">
          <van-icon name="friends-o" size="30" color="#00ae66" />
        </div>
        <p>地图找房</p>
      </van-grid-item>
      <van-grid-item to="/addroom">
        <div class="box">
          <van-icon name="user-o" size="30" color="#00ae66" />
        </div>
        <p>去出租</p>
      </van-grid-item>
    </van-grid>
    <div class="zufang">
      <div class="top">
        <h4>租房小组</h4>
        <p>更多</p>
      </div>

      <van-grid direction="horizontal" :column-num="2" :gutter="10" clickable>
        <van-grid-item
          class="down"
          v-for="(item, index) in groupList"
          :key="index"
        >
          <van-image :src="'http://liufusong.top:8080' + item.imgSrc" />
          <div class="txt">
            <p>{{ item.title }}</p>

            <p>{{ item.desc }}</p>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import { Lazyload } from 'vant'
import { getGroup } from '@/api/user'

Vue.use(Lazyload)
export default {
  data () {
    return {
      value: '',
      images: [
        'http://liufusong.top:8080/img/swiper/1.png',
        'http://liufusong.top:8080/img/swiper/2.png',
        'http://liufusong.top:8080/img/swiper/3.png'
      ],
      groupList: []
    }
  },
  async created () {
    try {
      const res = await getGroup()
      console.log(res)
      this.groupList = res.data.body

      console.log(this.groupList)
    } catch (err) {
      console.log(err)
    }
  },

  methods: {

    toMap () {
      this.$router.push({ name: 'map' })
    },
    onSearch () {
      this.$router.push({ name: 'citylist' })
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}

</script>

<style scoped lang='less'>
.van-search {
  position: absolute;
  top: 25px;
  left: 15px;
  color: #9c9fa1;
  width: 680px;
  height: 60px;
  background-color: transparent;
}

.van-icon {
  position: absolute;
  top: 25px;
  right: 20px;
  width: 58px;
  height: 58px;
}
/deep/ .van-nav-bar__title {
  max-width: unset;
}

.box {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #f2fbf7;
  margin-bottom: 16px;
  .van-icon {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    // text-align: center;
    line-height: 60px;
  }
}

p {
  font-size: 13px;
}

.zufang {
  height: 374px;
  background-color: #f6f5f6;

  /deep/ .top {
    // flex-direction: row;
    display: flex;
    justify-content: space-between;
    padding: 30px, 0, 30px, 0;
    h4 {
      font-size: 32px;
      font-weight: bold;
    }
  }

  /deep/ .down {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;

    .van-image {
      width: 100px;
      height: 100px;
      margin: 0, 10px;
    }
    .txt {
      /deep/ h5 {
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
}
</style>
