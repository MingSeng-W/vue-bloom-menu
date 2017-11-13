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
  import house from 'common/icon/house.svg'
  import datas from 'common/icon/data.svg'
  import info from 'common/icon/info.svg'
  import money from 'common/icon/money.svg'

  export default {
    data() {
      return {
      }
    },
    computed: {
      iconImgArr () {
        let tmp = []
        tmp.push(this.genarateIconObj(house, 'house', '50'))
        tmp.push(this.genarateIconObj(datas, 'datas', '50'))
        tmp.push(this.genarateIconObj(info, 'info', '50'))
        tmp.push(this.genarateIconObj(money, 'money', '50'))
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
