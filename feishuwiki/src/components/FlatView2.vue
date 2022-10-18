<template>
  <el-tabs tab-position="left" class="FlatView2">
    <el-tab-pane v-for="i in works.pages" :label="i.name" :key="i.name">
      <iframe :src="i.url"></iframe>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
// import works from "../assets/mywork.json";
import works from "../assets/我在晚清搞洋务.json";

export default {
  data() {
    return {
      works,
    }
  }
}
</script>
<style lang="less">
.FlatView2 {
  width: 100%;
  height: 100%;

  .el-tabs {
    width: 100%;
    height: 100%;
  }

  .el-tabs__content, .el-tabs__content .el-tab-pane {
    height: 100%;
  }

  .el-tabs--left .el-tabs__header.is-left {
    margin-right: 0 !important;
  }

  .el-tabs__header {
    background: #3b2e2a;


    .el-tabs__item {
      color: white;
    }
  }

  iframe {
    width: 100%;
    height: 100%;
  }

  .index-body {
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>