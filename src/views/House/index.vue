<template>
  <div class="houseExplicit">
    <van-nav-bar title="滨海花园" left-arrow />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <div class="houseDetail">
      <div class="houseTitle">
        <h3>中铁蓝湖万嘉圆</h3>
      </div>
      <div class="houseTag">
        <span>近地铁</span>
      </div>
      <div class="housePrice">
        <div class="houseItem">
          <i><span>1200</span>/月</i>

          <div>租金</div>
        </div>
        <div class="houseItem">
          <span>三室</span>

          <div>房型</div>
        </div>
        <div class="houseItem">
          <span>121平米</span>

          <div>面积</div>
        </div>
      </div>
      <div class="houseInfo">
        <div class="InfoItem">
          <div>
            <span class="itemName">装修：<i>精装</i></span>
          </div>
          <div>
            <span class="itemName">楼层：<i>高楼层</i></span>
          </div>
        </div>
        <div class="InfoItem">
          <div>
            <span class="itemName">朝向：<i>南</i></span>
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

    <div class="houseAbout">
      <div class="aboutTop">
        <div>猜你喜欢</div>
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
import { getHouse } from '@/api/house'
import HouseMap from '@/components/HouseMap'
export default {
  created () {
    this.getHouse()
  },
  data () {
    return {

    }
  },
  methods: {
    async getHouse () {
      try {
        const res = await getHouse(this.houseCode)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { HouseMap }
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
}
.footer {
  width: 100%;
  height: 90px;
  position: fixed;
  bottom: 0px;
  left: 0px;
}
</style>
