<template>
  <div>
    <van-nav-bar title="添加房源" left-arrow />
    <van-cell-group title="房源信息">
      <van-cell title="小区名称" value="输入小区名称" />
      <van-cell title="租金" value="￥/yue" />
      <van-cell title="建筑面积" value="㎡" />
      <van-cell title="户型" value="请选择" />
      <van-cell title="所在楼层" value="请选择" />
      <van-cell title="朝向" value="请选择" />
    </van-cell-group>
    <van-cell-group title="房屋标题">
      <input placeholder="请输入标题（例如：整租 小区名 2室 5000元)" />
    </van-cell-group>
    <van-cell-group title="房屋图像">
      <van-uploader :after-read="afterRead" />
    </van-cell-group>
    <van-cell-group title="房屋配置"> </van-cell-group>
    <van-cell-group title="房屋描述">
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="留言"
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
      />
    </van-cell-group>
    <div class="footer">
      <van-row>
        <van-col span="12">
          <van-button block>取消</van-button>
        </van-col>

        <van-col span="12">
          <van-button type="primary" block>提交</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-cell-group {
  input {
    font-size: 16px;
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
