<template>
  <div>
    <van-swipe-cell>
      <div class="compons-chart">
        <div class="compons-chart-pic">
          <van-image width="40" height="40" :src="data.pic" />
        </div>
        <div class="compons-chart-text">
          <p>{{data.name}}</p>
          <p>{{data.title}}</p>
        </div>
        <div>{{data.birthday}}</div>
      </div>
      <template #right>
        <div class="compons-btn">
          <van-button square type="warning" text="标记未读" />
          <van-button square type="danger" text="删除" />
        </div>
      </template>
    </van-swipe-cell>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
@w: white;
.compons-chart {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  background: @w;
  border-bottom: 1px solid #b7b7b7;
  .compons-chart-pic {
    width: 40px;
    height: 40px;
    /deep/img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
  .compons-chart-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    p:first-child {
      font-size: 15px;
    }
    p:last-child {
      color: #b8b8b8;
    }
  }
  .compons-btn {
    height: 100%;
  }
}
/deep/ .van-swipe-cell__right {
  height: 100%;
  background: @w;
}
/deep/ .van-button {
  height: 66.8px;
}
</style>