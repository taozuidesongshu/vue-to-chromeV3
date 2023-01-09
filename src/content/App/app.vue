<template>
  <div class="box" :style="`right: ${right}px;`">
    <div>
      <div
          class="card__header"
      >
        <span>{{ name }}    {{ time }}</span>
<!--        <el-button-->
<!--            style="float: right; padding: 3px 0"-->
<!--            type="text"-->
<!--            @click="go()"-->
<!--        >操作按钮-->
<!--        </el-button>-->
        <a :href="imgUrl" target="_blank">主要链接</a>
      </div>
<!--      <ul>-->
<!--        <li v-for="(o,index) in listData" :key="index" class="box-li">-->
<!--          <div style="width: 10vw">-->
<!--            &lt;!&ndash;            <el-image&ndash;&gt;-->
<!--            &lt;!&ndash;                style="width: 100px; height: 100px"&ndash;&gt;-->
<!--            &lt;!&ndash;                :src="o.al.picUrl"&ndash;&gt;-->
<!--            &lt;!&ndash;                :fit="'fill'"&ndash;&gt;-->
<!--            &lt;!&ndash;            ></el-image>&ndash;&gt;-->
<!--          </div>-->
<!--          <div style="flex: 1;text-align: left;">-->
<!--            {{ index + 1 }}： {{ o }}-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
                  <el-image
                      style="width: 500px;"
                      :src="imgUrl"
                      :fit="'fill'"
                  ></el-image>
    </div>
    <div class="hiddenBottom" style="top: 400px;" @click="toLeft">
      <i :class="ico"></i>
    </div>
  </div>
</template>

<script>
import { api60s } from '@/api/api'

export default {
  name: 'app',
  mixins: [],
  filters: {},
  components: {},
  props: {},
  data() {
    return {
      listData: [],
      right: '0',
      ico: 'el-icon-arrow-left',
      imgUrl: '',
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
    toLeft() {
      const num = this.right
      if (num === '-500') {
        this.ico = 'el-icon-arrow-left'
        this.right = '0'
      } else {
        this.ico = 'el-icon-arrow-right'
        this.right = '-500'
      }
    },
    go() {
      //http://bjb.yunwj.top/php/API/html.html?1
      //https://api.vvhan.com/60s.html
      //https://api.vvhan.com/
      api60s({ 'type': 'json' }).then(res => {
        this.listData = res.data
        this.time = res.time
        this.name = res.name
        this.imgUrl = res.imgUrl
      })
    }
  }
}
</script>

<style rel="stylesheet/css" lang="css" scoped>
.box {
  position: absolute;
  top: 100px;
  width: 500px;
  height: 600px;
  background: #fcfcfc;
  z-index: 99;
}
.card__header{
  box-sizing: border-box;
  padding: 18px 20px;
  border-bottom: 1px solid rgb(235, 238, 245);
}
.box-li {
  padding: 1rem 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 2rem;
  color: #515767;
  font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial !important;
}



.hiddenBottom {
  width: 12px;
  height: 50px;
  left: -12px;
  color: #000000;
  line-height: 50px;
  /*border-radius: 0 15px 15px 0;*/
  border-radius: 15px 0 0px 15px;
  background-color: #027ee2;
  display: inline-block;
  position: absolute;
  cursor: pointer;
  opacity: .4;
  font-size: 2px;
  margin-left: 1px;
}
</style>