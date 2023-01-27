我的小游戏快速预览，使用iframe

<template>
  <div class="Games">
    <split-pane :min-percent="10" :default-percent="20" split="vertical">
      <template v-slot:paneL>
        <div class="left">
          <h1>{{ works.title }}</h1>
          <div v-for="work in works.pages" :key="work.name" @click="clickItem(work)" class="work">
            <img :src="work.img" style="padding-right: 5px">
            <span>{{ work.name }}</span>
          </div>
        </div>
      </template>
      <template v-slot:paneR>
        <iframe ref="view"></iframe>
      </template>
    </split-pane>
  </div>
</template>
<script>
import splitPane from "vue3-splitpane";

export default {
  components: {
    splitPane,
  },
  data() {
    return {
      works:[],
    }
  },
  mounted() {
    this.clickItem(this.works.pages[0]);
  },
  methods: {
    clickItem(item) {
      console.log(item);
      this.$refs.view.src = item.url;
    }
  }
}
</script>
<style lang="less">
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.Games {
  height: 100%;
}

.left {
  padding: 10px;

  .work {
    cursor: pointer;
    display: flex;
  }
}

.splitter-pane {
  height: 100%;
  overflow: auto;
}

img {
  width: 20px;
  height: 20px;
}

.splitter-paneR {
  overflow: hidden;
}

iframe {
  width: 100%;
  height: 100%;
}
</style>