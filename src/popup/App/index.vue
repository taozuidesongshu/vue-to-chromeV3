<template>
  <el-card class="box-card">
    <div
        slot="header"
        class="clearfix"
    >
      <span>卡片名称</span>
    </div>
    <div
        v-for="o in listdata"
        :key="o.key"
        class="text item"
    >
      <el-button type="text" @click="go(o)">{{'跳转 ' + o.name }}</el-button>
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
      listdata:[{
        name:"music",
        key:"music"
      }]
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
      chrome.tabs.create({url: '../options.html'});
      return false
    }
  }
}
</script>

<style rel="stylesheet/css" lang="css" scoped>
.box-card {
  width: 300px;
}
</style>