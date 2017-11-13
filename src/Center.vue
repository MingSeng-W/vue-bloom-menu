<style lang="stylus" type="text/stylus">
  @import "common/stylus/base.styl"
</style>
<template>
  <div>
    <Bloom-menu
      :iconImgArr="iconImgArr"
      :radius="radius"
      :startAngle="startAngle"
      :endAngle="endAngle"
      :itemNum="itemNum"
      :animationDuration="animationDuration"
      :itemAnimationDelay="itemAnimationDelay"
      class="menu-center-wrapper"
    >
    </Bloom-menu>
  </div>

</template>

<script type="text/ecmascript-6">
  import menu from 'components/menu.vue'
  // 图片的icon
  import home from 'common/img/home.svg'
  import favorite from 'common/img/favorite.svg'
  import getApp from 'common/img/get-app.svg'
  import grade from 'common/img/grade.svg'
  import languge from 'common/img/language.svg'
  import lock from 'common/img/lock.svg'
  import accessibility from 'common/img/accessibility.svg'
  import findInPage from 'common/img/find-in-page.svg'
  // 一些基本配置参数
  // 半径
  const radius = 100
  // item的开始角度
  const startAngle = 0
  // menu的结束角度
  const endAngle = 315
  // 项目数量
  const itemNum = 8
  const animationDuration = 0.5
  const itemAnimationDelay = 0.04

  export default {
    data() {
      return {
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle,
        itemNum: itemNum,
        animationDuration: animationDuration,
        itemAnimationDelay: itemAnimationDelay
      }
    },
    computed: {
      iconImgArr () {
        let tmp = []
        tmp.push(this.genarateIconObj(home, 'home', '50'))
        tmp.push(this.genarateIconObj(grade, 'grade', '50'))
        tmp.push(this.genarateIconObj(languge, 'languge', '50'))
        tmp.push(this.genarateIconObj(lock, 'lock', '35'))
        tmp.push(this.genarateIconObj(getApp, 'getApp', '35'))
        tmp.push(this.genarateIconObj(findInPage, 'findInPage', '40'))
        tmp.push(this.genarateIconObj(favorite, 'favorite', '50'))
        tmp.push(this.genarateIconObj(accessibility, 'accessibility', '50'))
        return tmp
      }
    },
    methods: {
      // 分别指定图标的url ,名称， 以及background-size属性
      genarateIconObj (url, name, size) {
        let tmp = {}
        tmp.iconUrl = url
        tmp.iconName = name
        tmp.iconSize = size
        return tmp
      }
    },
    created() {
    },
    components: {
      'Bloom-menu': menu
    }
  }

</script>
