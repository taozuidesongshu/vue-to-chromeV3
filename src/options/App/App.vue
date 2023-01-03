<template>
  <div class="main_app">
    <el-card class="box-card">
      <div
          slot="header"
          class="clearfix"
      >
        <span>卡片名称</span>
        <!--        <el-button-->
        <!--            style="float: right; padding: 3px 0"-->
        <!--            type="text"-->
        <!--            @click="go()"-->
        <!--        >操作按钮</el-button>-->
      </div>
      <ul>
        <li v-for="(o,index) in listData" :key="index" class="box-li">
          <div style="width: 10vw">
            <el-image
                style="width: 100px; height: 100px"
                :src="o.al.picUrl"
                :fit="'fill'"></el-image>
          </div>
          <div style="flex: 1;text-align: left;">
            {{ o.name }}{{ o.al.name }}
          </div>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
import { apiGetList } from '@/api/api'

export default {
  name: 'app',
  mixins: [],
  filters: {},
  components: {},
  props: {},
  data() {
    return {
      listData: []
    }
  },
  computed: {},
  watch: {},
  created() {
    this.go()
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    go() {
      apiGetList({ 'keywords': '猫咪宝贝' }).then(res => {
        this.listData = res.result.songs
      })
    }
  }
}
</script>

<style>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box-li{
  display: flex;
  height: 10vh;
  margin-bottom: 1vh;
  width: 100vw;
}
</style>
