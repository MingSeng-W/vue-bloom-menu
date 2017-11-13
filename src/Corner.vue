<style lang="stylus" type="text/stylus">
@import "common/stylus/menuConfig.styl"
</style>
<template>
  <div>
    <Bloom-menu
      :iconImgArr="iconImgArr"
      :startAngle="-90"
      :endAngle="0"
      :itemNum="4"
      class="menu-left-corner-wrapper"
    >
    </Bloom-menu>
  </div>

</template>

<script type="text/ecmascript-6">
  import menu from 'components/Menu/menu.vue'
  // 图片的icon
  import home from 'common/img/home.svg'
  import grade from 'common/img/grade.svg'
  import languge from 'common/img/language.svg'
  import lock from 'common/img/lock.svg'

  export default {
    data() {
      return {
      }
    },
    computed: {
      iconImgArr () {
        let tmp = []
        tmp.push(this.genarateIconObj(home, 'home', '50'))
        tmp.push(this.genarateIconObj(grade, 'grade', '50'))
        tmp.push(this.genarateIconObj(languge, 'languge', '50'))
        tmp.push(this.genarateIconObj(lock, 'lock', '35'))
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
