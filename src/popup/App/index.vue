<template>
  <el-card class="box-card">
    <div
        slot="header"
        class="clearfix"
    >
      <span>卡片名称</span>
      <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="go()"
      >操作按钮</el-button>
    </div>
    <div
        v-for="o in 4"
        :key="o"
        class="text item"
    >
      {{'列表内容 ' + o }}
    </div>
  </el-card>
</template>

<script>


export default {
  name: 'index.vue',
  mixins: [],
  filters: {},
  components: {},
  props: {},
  data() {
    return {
      // newwindow:undefined
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    go(){
      // let newwindow
      // window.open('../options.html', "_blank");
      chrome.tabs.create({url: '../options.html'});
      return false
      // newwindow.recordedBlobs = blobs;
      // newwindow.url = "";
    }
  }
}
</script>

<style rel="stylesheet/css" lang="css" scoped>
.box-card {
  width: 300px;
}
</style>