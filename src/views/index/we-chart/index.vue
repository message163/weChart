<template>
  <div class="chart">
    <div class="chart-wraps">
      <div class="chart-search">
        <van-icon name="search" />
        <span>搜索</span>
      </div>
    </div>
    <div class="chart-list">
      <chart-list :data="item" :key="index" v-for="(item,index) in list"></chart-list>
    </div>
  </div>
</template>
<script>
import chartList from "@/components/chart-list"; //components
import { getChartList } from "@/api"; //interface
import { setTimeout } from "timers";
export default {
  components: {
    chartList
  },
  data() {
    return {
      value: "",
      isLoading: false,
      list: [] //user list
    };
  },
  mounted() {
    this.getlst();
  },
  methods: {
    onRefresh() {
      setTimeout(_ => {
        this.isLoading = false;
      }, 1000);
    },
    getlst() {
      getChartList().then(res => {
        this.list = res.data;
      });
    }
  }
};
</script>

<style scoped lang="less">
.chart {
  min-height: 100%;
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