<template>
  <div class="index">
    <header class="index-header">
      <van-nav-bar title="爱信">
        <template #right>
          <van-icon color="white" size="25" name="plus" />
        </template>
      </van-nav-bar>
    </header>
    <main class="index-main">
      <router-view></router-view>
    </main>
    <footer class="index-footer">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="chat-o">爱信</van-tabbar-item>
        <van-tabbar-item icon="friends-o">通讯录</van-tabbar-item>
        <van-tabbar-item icon="eye-o">发现</van-tabbar-item>
        <van-tabbar-item icon="contact">我</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped lang="less">
@footColor: #f9f9f9;
@headerColor: #1b1b1b;
@w: white;
.index {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fbf9fe;
  overflow: hidden;
  .index-header {
    .van-nav-bar {
      background: @headerColor;
    }
    & /deep/.van-nav-bar__title {
      color: @w;
    }
  }
  .index-main {
    flex: 1;
    overflow: auto;
  }
  .index-footer {
    position: relative;
    & /deep/ .van-tabbar {
      background: @footColor;
      position: static;
      top: 0px;
      width: 100%;
    }
    & /deep/ .van-tabbar-item--active {
      background: none;
      color: #0bb908;
    }
  }
}
</style>