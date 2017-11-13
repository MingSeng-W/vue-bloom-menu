<style lang="stylus" type="text/stylus">
  @import "common/stylus/menuConfig.styl"
</style>
<template>
  <div>
    <Bloom-menu
      :iconImgArr="iconImgArr"
      class="menu-center-wrapper"
      :radius="100"
    >
      <!--可配置参数,默认有缺省值-->
      <!--:radius="radius"-->
      <!--:startAngle="startAngle"-->
      <!--:endAngle="endAngle"-->
      <!--:itemNum="itemNum"-->
      <!--:animationDuration="animationDuration"-->
      <!--:itemAnimationDelay="itemAnimationDelay"-->
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
  import phone from 'common/icon/phone.svg'
  import user from 'common/icon/user.svg'
  import card from 'common/icon/card.svg'
  import liuyangtiao from 'common/icon/liuyangtiao.svg'
  export default {
    data() {
      return {
      }
    },
    computed: {
      iconImgArr () {
        let tmp = []
        // 分别指定图标,名称， 以及background-size属性
        tmp.push(this.genarateIconObj(house, 'house', '50'))
        tmp.push(this.genarateIconObj(datas, 'datas', '50'))
        tmp.push(this.genarateIconObj(info, 'info', '50'))
        tmp.push(this.genarateIconObj(money, 'money', '50'))
        tmp.push(this.genarateIconObj(phone, 'phone', '50'))
        tmp.push(this.genarateIconObj(user, 'user', '50'))
        tmp.push(this.genarateIconObj(card, 'card', '50'))
        tmp.push(this.genarateIconObj(liuyangtiao, 'liuyangtiao', '50'))
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
