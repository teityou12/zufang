<template>
  <div>
    <van-card
      :tag="house.tag"
      :price="house.price"
      :desc="house.desc"
      :title="house.title"
      :thumb="'http://liufusong.top:8080' + house.houseImg"
      origin-price="10.00"
      @click="toHouse"
    />
  </div>
</template>

<script>
export default {
  name: 'HomeItem',
  components: {},
  props: {
    house: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () { },
  mounted () {

  },
  methods: {
    toHouse () {
      this.$router.push('/house/' + this.house.houseCode)
    }
  }
}
</script>

<style scoped lang='less'>
/deep/.house-item {
  display: flex;
  justify-content:content .van-image {
    width: 212px;
    height: 160px;
  }
  .houseText {
    h4 {
      font-size: 15px;
      color: #394043;
    }

    p {
      font-size: 13px;
      color: #afb2b3;
    }
  }
}
</style>
