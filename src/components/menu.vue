<template>
  <div class="menu-container">
    <div class="menu-bar-con">
      <button class="menu-bar-btn" @click="isOpenChange" v-bind:class="{'btn-active':isOpen}">
        <span class="icon">+</span>
      </button>
    </div>
    <ul class="menu-item-list" >
      <menu-item
        v-for="(item, itemIndex) in iconImgArr"
        :radius="radius"
         :index="itemIndex"
         :angleCur="startAngle+angleStep*itemIndex"
         :animationDuration="animationDuration"
         :itemAnimationDelay="0 + (itemIndex * itemAnimationDelay)"
         :icon="'icon-'+item.iconName"
         :showItem="showItem"
         :isOpen="isOpen"
         :total="iconImgArr.length"
         :currentIndex="currentIndex"
          v-on:showItemChange="showItemChange"
          v-on:isOpenChange="isOpenChange"
          v-on:animationCountIncrease=" (val) => {animationCountIncrease(val)}"
      >
      </menu-item>

    </ul>
  </div>
</template>
<style lang="stylus" type="text/stylus">
.menu-container
  user-select none
  border-radius 50%
  transition box-shadow .28s cubic-bezier(.4, 0, .2, 1)
  box-shadow 0 2px 5px 0 rgba(0, 0, 0, .26)
  padding 0
  margin 0
  box-sizing border-box
  -webkit-tap-highlight-color rgba(0, 0, 0, 0)
  .menu-bar-con
    .menu-bar-btn
      position absolute
      border-radius 50%
      width 50px
      height 50px
      z-index 1
      cursor pointer
      transition all .28s cubic-bezier(.4, 0, .2, 1)
      border none
      background-color #A974A2
      color white
      outline none
      &.btn-active
        transform rotate(45deg)
      &:hover
        box-shadow 0 8px 17px 0 rgba(0, 0, 0, .2)
      .icon
        font-size 32px
        line-height 60%
        position relative
  .menu-item-list
    list-style-type none
</style>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  import item from './item.vue'
  export default {
    props: {
      startAngle: Number,
      radius: Number,
      itemAnimationDelay: Number,
      animationDuration: Number,
      endAngle: Number,
      itemNum: Number,
      iconImgArr: Array
    },
    data () {
      return {
        showItem: true,
        isOpen: false,
        total: this.iconImgArr.length,
        count: 0,
        currentIndex: -1
      }
    },

    computed: {
      angleStep () {
        console.log((this.endAngle - this.startAngle) / (this.itemNum - 1))
        return (this.endAngle - this.startAngle) / (this.itemNum - 1)
      }
    },
    created () {
      //      把每个button的背景图片的class插入到html中,方便以后使用。
      let cssRule = ''
      this.iconImgArr.map((item) => {
        cssRule += this.gennerateIconStyle(item)
      })
      let style = document.createElement('style')
      style.type = 'text/css'
      style.innerHTML = cssRule
      document.head.appendChild(style)
    },

    methods: {
      // 产生icon的类
      gennerateIconStyle (icon) {
        let cssRule = '.icon-' + icon.iconName + '{' +
          'background-image: url(' + icon.iconUrl + ');' +
          'background-size: ' + icon.iconSize + '%; ' +
        '}\n'
        return cssRule
      },
      animationCountIncrease () {
        this.count++
        if (this.count === this.total) {
          this.isOpenChange()
          this.count = 0
        }
      },
      showItemChange (index) {
        this.showItem = false
        this.currentIndex = index
      },
      isOpenChange () {
        if (!this.isOpen && !this.showItem) {
          this.showItem = true
        }
        this.isOpen = !this.isOpen
      },
      setAmination () {
        let angleCur = this.startAngle

      }

    },
    components: {
      'menu-item': item

    }
  }
</script>
