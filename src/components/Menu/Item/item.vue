<template>
    <li class="item" ref="item" :style="styleArr" @click="changeShowItem">
      <transition :name="currentIndex === index?'item-selected':'item-not-selected'">
        <div class="item-wrapper" v-show="showItem"  @animationend="animationEnd">
          <button class="item-btn" :class="[icon]"></button>
        </div>
      </transition>
    </li>

</template>

<style lang="stylus" type="text/stylus">
@import "../../../common/stylus/menuConfig.styl"
.item
  opacity 1
  position absolute
  bottom 5px
  left 5px
  transition transform .28s cubic-bezier(.4, 0, .2, 1), box-shadow .28s cubic-bezier(.4, 0, .2, 1), opacity .28s cubic-bezier(.4, 0, .2, 1)
  width 40px
  height 40px
  border-radius 50%
  .item-wrapper
    width 100%
    height 100%
    background-color #d8dde0
    border-radius 50%

    .item-btn
      cursor pointer
      border-radius 50%
      border none
      background-color transparent
      width 100%
      height 100%
      box-shadow 0 2px 5px 0 rgba(0, 0, 0, .26)
      transition box-shadow .28s cubic-bezier(.4, 0, .2, 1)
      opacity .28s cubic-bezier(.4, 0, .2, 1)
      background-position center center
      background-repeat no-repeat
      /*opacity 0.8*/
      outline none
      &:hover
        box-shadow 0 8px 17px 0 rgba(0, 0, 0, .2)

.item-selected-leave-active
  animation-name select-item
  animation-duration animationDuriation
  animation-fill-mode forwards
.item-not-selected-leave-active
  animation-name not-select-item
  animation-duration animationDuriation
  animation-fill-mode backwards

@keyframes select-item {
  0% {
    transform scale(1)
    opacity 1
  }
  100% {
    transform scale(2)
    opacity 0
  }
}
@keyframes not-select-item {
  0% {
    transform scale(1)
    opacity 1
  }
  100% {
    transform scale(0.5)
    opacity 0
  }
}


</style>
<script type="text/ecmascript-6">
  export default {
    props: {
      radius: Number,
      angleCur: Number,
      index: Number,
      animationDuration: Number,
      itemAnimationDelay: Number,
      icon: String,
      showItem: Boolean,
      isOpen: Boolean,
      total: Number,
      currentIndex: Number
    },
    data () {
      return {
        styleArr: [],
        itemExpandAnimationStyle: {
          animationName: 'expand-item-' + this.index,
          animationFillMode: 'forwards',
          animationDuration: +this.animationDuration + 's',
          animationDelay: this.itemAnimationDelay + 's',
          animationTimingFunction: 'ease-in'
        },
        animationEndCount: 0,
        itemContractAnimationStyle: {
          animationName: 'contract-item-' + this.index,
          animationFillMode: 'backwards',
          animationDuration: +this.animationDuration + 's',
          animationDelay: this.itemAnimationDelay + 's',
          animationTimingFunction: 'ease-out'
        }
      }

    },

    computed: {
      x () {
        return this.radius * Math.cos(this.toRadians(this.angleCur))
      },
      y () {
        return this.radius * Math.sin(this.toRadians(this.angleCur))
      },
      x0 () {
        return 0
      },
      y0 () {
        return 0
      },
      x2 () {
        return Number((this.x).toFixed(2))
      },
      y2 () {
        return Number((this.y).toFixed(2))
      },
      x1 () {
        return this.x2 * 1.2
      },
      y1 () {
        return this.y2 * 1.2
      },
      animation () {
        if (this.isOpen) {

        } else {
          return this.generateAminate()
        }
      }
    },
    watch: {
      isOpen: function () {
        if (this.isOpen) {
          try {
            this.styleArr.pop()
          } catch (e) {
            console.log(e)
          }
          this.styleArr.push(this.itemExpandAnimationStyle)
        } else {
          this.styleArr.pop()
          this.styleArr.push(this.itemContractAnimationStyle)
        }

      }
    },

    mounted () {
      this.insertStyleSheet()
    },
    methods: {
      animationEnd() {
        this.$emit('animationCountIncrease')
      },
      changeShowItem () {
        this.$emit('showItemChange', this.index)
      },
      toRadians (angle) {
        return angle * (Math.PI / 180)
      },
      generateBaseKeyFrame (stage) {
        let str = ''
        if (stage === 'expand-item-') {
          str = stage + this.index + '{' +
          '0% {' +
          'transform: translate(' + this.x0 + 'px,' + this.y0 + 'px)' +
          '}' +
          '70% {' +
          'transform: translate(' + this.x1 + 'px,' + this.y1 + 'px)' +
          '}' +
          '100% {' +
          'transform: translate(' + this.x2 + 'px,' + this.y2 + 'px)' +
          '}' +
          '}\n'
        } else {
          str = stage + this.index + '{' +
          '100% {' +
          'transform: translate(' + this.x0 + 'px,' + this.y0 + 'px)' +
          '}' +
          '0% {' +
          'transform: translate(' + this.x2 + 'px,' + this.y2 + 'px)' +
          '}' +
          '}\n'
        }
        return '@keyframes ' + str + '@-webkit-keyframes   ' + str

      },
      genetateAnimateDetail () {

        let str = '.item-active {' +
          'animation-name: ' + 'expand-item-' + this.index + ';' +
          'animation-fill-mode: forwards;' +
          'animation-duration: 0.7s;' +
          'animation-timing-function: ease-out'
        '}\n'
        return str
      },
      insertStyleSheet () {
        let cssRule = this.generateBaseKeyFrame('expand-item-')
        cssRule += this.generateBaseKeyFrame('contract-item-')
        cssRule += this.genetateAnimateDetail()
        let style = document.createElement('style')
        style.type = 'text/css'
        style.innerHTML = cssRule
        document.head.appendChild(style)

      }
    }

  }
</script>
