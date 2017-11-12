<style lang="stylus" type="text/stylus">
  @import 'common/stylus/index'
  @import "common/stylus/mixin.styl"
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      a
        display: block
        font-size: 14px
        color rgb(77, 85, 93)
        &.active
          font-size 14px
          color rgb(240, 20, 20)
</style>

<template>
  <div>
    <!--<v-header :seller="seller"></v-header>-->
    <menu-con
      :iconImgArr="iconImgArr"
      :radius="radius"
      :startAngle="startAngle"
      :endAngle="endAngle"
      :itemNum="itemNum"
      :animationDuration="animationDuration"
      :itemAnimationDelay="itemAnimationDelay"
    >

    </menu-con>
    <!--<div class="tab">-->
    <!--<div class="tab-item">-->
    <!--<router-link to="/goods">商品</router-link>-->
    <!--</div>-->
    <!--<div class="tab-item">-->
    <!--<router-link to="/ratings">评论</router-link>-->
    <!--</div>-->
    <!--<div class="tab-item">-->
    <!--<router-link to="/seller">商家</router-link>-->
    <!--</div>-->
    <!--</div>-->
    <!--<keep-alive>-->
    <!--<router-view :seller="seller"></router-view>-->
    <!--</keep-alive>-->
  </div>

</template>

<script type="text/ecmascript-6">
//  import header from 'components/header/header'
  import menu from 'components/menu.vue'
  import home from 'common/img/home.svg'
  import favorite from 'common/img/favorite.svg'
  import getApp from 'common/img/get-app.svg'
  import grade from 'common/img/grade.svg'
  import languge from 'common/img/language.svg'
  import lock from 'common/img/lock.svg'
  import accessibility from 'common/img/accessibility.svg'
  import findInPage from 'common/img/find-in-page.svg'
  const radius = 100
  const startAngle = 0
  const endAngle = 315
  const itemNum = 8
  const animationDuration = 0.5
  const itemAnimationDelay = 0
  const itemWidth = 50
  export default {
    data() {
      return {
        seller: {},
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle,
        itemNum: itemNum,
        animationDuration: animationDuration,
        itemAnimationDelay: itemAnimationDelay,
        itemWidth: itemWidth
      }
    },
    computed: {
      iconImgArr () {
        let tmp = []
        // 分别指定图标的url ,名称， 以及background-size属性
        tmp.push(this.genarateIconObj(home, 'home', '50'))
        tmp.push(this.genarateIconObj(grade, 'grade', '50'))
        tmp.push(this.genarateIconObj(languge, 'languge', '50'))
        tmp.push(this.genarateIconObj(lock, 'lock', '35'))
        tmp.push(this.genarateIconObj(getApp, 'getApp', '35'))
        tmp.push(this.genarateIconObj(findInPage, 'findInPage', '40'))
        return tmp
      }
    },
    methods: {
      genarateIconObj (url, name, size) {
        let tmp = {}
        tmp.iconUrl = url
        tmp.iconName = name
        tmp.iconSize = size
        return tmp
      }
    },
    created() {
//      axios.get('static/data.json').then((res) => {
//        this.seller = res.data.seller
//      })
    },
    components: {
      'menu-con': menu
    }
  }

</script>
