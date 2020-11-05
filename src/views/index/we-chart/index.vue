<template>
  <div class="chart">
    <div class="chart-wraps">
      <div class="chart-search">
        <van-icon name="search" />
        <span>搜索</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
.chart {
  .chart-wraps {
    background: #efeff4;
    padding: 8px 0;
    .chart-search {
      background: #ffffff;
      margin: 0 10px;
      padding: 3px 7px;
      display: flex;
      font-size: 14px;
      color: #b2b2b2;
      align-items: center;
      justify-content: center;
      span {
        display: inline-block;
        margin-left: 8px;
      }
    }
  }
}
</style>