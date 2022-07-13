<template>
  <div class="houseExplicit">
    <van-nav-bar :title="house.title" left-arrow />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in images" :key="item.id">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>

    <div class="houseDetail">
      <div class="houseTitle">
        <h3>{{ house.description }}</h3>
      </div>
      <div class="houseTag">
        <span v-if="house.inspector">{{ house.tags[0] }}</span>
      </div>
      <div class="housePrice">
        <div class="houseItem">
          <i
            ><span>{{ house.price }}</span
            >/月</i
          >

          <div>租金</div>
        </div>
        <div class="houseItem">
          <span>{{ house.roomType }}</span>

          <div>房型</div>
        </div>
        <div class="houseItem">
          <span>{{ house.size }}</span>

          <div>面积</div>
        </div>
      </div>
      <div class="houseInfo">
        <div class="InfoItem">
          <div>
            <span class="itemName">装修：<i>精装</i></span>
          </div>
          <div>
            <span class="itemName"
              >楼层：<i>{{ house.floor }}</i></span
            >
          </div>
        </div>
        <div class="InfoItem">
          <div>
            <span class="itemName"
              >朝向：<i v-if="house.inspector">{{ house.oriented[0] }}</i></span
            >
          </div>
          <div>
            <span class="itemName">类型：<i>住宅</i></span>
          </div>
        </div>
      </div>
    </div>

    <div class="houseMap">
      <div class="mapTop">
        <div class="addressName">小区：<span>滨海花园</span></div>
        <div class="addressMap">
          <div>
            <HouseMap></HouseMap>
          </div>
        </div>
      </div>
    </div>

    <div class="houseAbout">
      <div class="aboutTop">
        <div>房屋配套</div>
      </div>
    </div>

    <div class="houseAbout">
      <div class="aboutTop">
        <div>房源概况</div>
      </div>
    </div>

    <div class="houseAboutLike">
      <div class="aboutTop">
        <div>猜你喜欢</div>
      </div>
      <div class="youLike">
        <HomeList></HomeList>
      </div>
    </div>

    <div class="footer">
      <van-row>
        <van-col span="8">
          <van-button block>收藏</van-button>
        </van-col>
        <van-col span="8">
          <van-button block>在线咨询</van-button>
        </van-col>
        <van-col span="8">
          <van-button type="primary" block>电话预约</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { getHouseById } from '@/api/house'
import HouseMap from '@/components/HouseMap'
import HomeList from '@/components/HomeList.vue'
export default {
  props: {
    houseCode: {
      type: [Number, String],
      required: true
    }
  },
  created () {
    this.loadHouse()
  },
  data () {
    return {
      house: {},
      images: []
    }
  },
  methods: {
    async loadHouse () {
      try {
        const { data } = await getHouseById(this.houseCode)
        console.log(data)
        this.house = data.body
        console.log(this.house)

        if (data.body.houseImg instanceof Array) {
          this.images = data.body.houseImg.map(
            (item) => 'http://liufusong.top:8080' + item
          )
        } else {
          this.images = ['http://liufusong.top:8080' + data.body.houseImg]
        }
      } catch (err) {
        console.log('获取数据失败', err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { HouseMap, HomeList }
}
</script>

<style scoped lang='less'>
.my-swipe .van-swipe-item {
  height: 560px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.title {
  height: 230px;
  h3 {
    font-size: 32px;
  }
  span {
    width: 25px;
    height: 10px;
    color: #39becd;
    background-color: #e1f5f8;
    border-radius: 6px;
  }
}
.houseDetail {
  height: 600px;

  padding: 30px;
  .houseTitle {
    h3 {
      font-size: 32px;
      margin: 30px 0;
    }
  }
  .houseTag {
    span {
      display: inline-block;
      width: 100px;
      height: 35px;
      border-radius: 3px;
      color: #39becd;
      background: #e1f5f8;
      font-size: 12px;

      margin-right: 5px;
      line-height: 35px;
    }
  }

  .housePrice {
    display: flex;
    height: 180px;
    padding: 30px;
    margin: 30px;
    border-top: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    .houseItem {
      width: 30%;
      text-align: center;
      i {
        font-size: 24px;
        color: #fa5741;
        font-weight: 600;
      }
      span {
        font-size: 36px;
        color: #fa5741;
      }
      div {
        font-size: 28px;
        color: #999999;
      }
    }
  }

  .houseInfo {
    display: flex;
    .InfoItem {
      width: 50%;
      height: 130px;

      .itemName {
        font-size: 26px;
        display: inline-block;
        color: #999;
        padding-right: 5px;
        line-height: 52px;
        margin: 0;
        i {
          font: size 30px;
          color: black;
        }
      }
    }
  }
}

.houseMap {
  height: 430px;

  margin-top: 22px;

  z-index: 1;
  .mapTop {
    height: 100px;

    padding: 0 30px;
    .addressName {
      line-height: 100px;
      color: #666;
      font-size: 28px;
      span {
        color: black;
      }
    }
  }
  .addressMap {
    height: 430px;
    width: 100%;
    overflow: hidden;
  }
}
.houseAbout {
  height: 300px;
  z-index: 9999;
  padding: 0 30px;
  background: pink;
  .aboutTop {
    height: 110px;
    padding: 30px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #dadada;
    div {
      font-size: 30px;
      font-weight: 600;
      color: black;
    }
  }
  .youLike {
    height: 830px;
    width: 100%;
  }
}

.houseAboutLike {
  overflow: hidden !important;
  height: 860px;

  padding: 0 30px;

  .aboutTop {
    height: 110px;
    padding: 30px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #dadada;
    div {
      font-size: 30px;
      font-weight: 600;
      color: black;
    }
  }
  .youLike {
    height: 830px;
    width: 100%;
  }
}
.footer {
  width: 100%;
  height: 90px;
  position: fixed;
  bottom: 0px;
  left: 0px;
}
</style>
