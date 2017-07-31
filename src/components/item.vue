<template>
  <li class="item" ref="item" :style="itemContractAnimationStyle"
      :class="{'item-block':isOpen,'item-selected':!isOpen,'item-active':isOpen}">
    <div class="item-wrapper">
      <button class="item-btn"></button>
    </div>
  </li>
</template>
<style lang="stylus" type="text/stylus">
  .item
    opacity: 1
    position: absolute;
    bottom: 5px;
    left: 5px;
    transition: transform .28s cubic-bezier(.4, 0, .2, 1), box-shadow .28s cubic-bezier(.4, 0, .2, 1), opacity .28s cubic-bezier(.4, 0, .2, 1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    .item-wrapper
      width: 100%;
      height: 100%;
      background-color: #6B9EB8;
      border-radius: 50%;

      .item-btn
        cursor: pointer;
        border-radius: 50%;
        border: none;
        background-color: transparent;
        width: 100%;
        height: 100%;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .26);
        transition: box-shadow .28s cubic-bezier(.4, 0, .2, 1), opacity .28s cubic-bezier(.4, 0, .2, 1);
        background-position: center center;
        background-repeat: no-repeat;
        opacity: 0.8;
        background-image: url("../common/img/home.svg")
        background-size: 35
        outline none
        &:hover
          box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2);

  .item-block
    display: block

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
</style>
<script type="text/ecmascript-6">

  export default {
    props: {
      radius: Number,
      angleCur: Number,
      index: Number,
      animationDuration: Number,
      itemAnimationDelay: Number
    },
    data () {
      return {
        itemContractAnimationStyle: {
          animationDelay: (this.index * this.itemAnimationDelay) + 's',
          animationDuration: this.animationDuration + 's',
          animationTimingFunction: 'ease-out',
          animationName: 'contract-item-' + this.index,
          animationFillMode: 'backwards'
        },
        itemExpandAnimationStyle: {
          animationName: 'expand-item-' + this.index,
          animationFillMode: 'forwards'
        }
      }

    },

    computed: {
      isOpen () {
        return this.$store.state.isOpen
      },
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

    mounted () {
      this.insertStyleSheet()
    },
    created () {

    },

    methods: {
      toRadians (angle) {
        return angle * (Math.PI / 180)
      },

      generateBaseKeyFrame (stage, index) {

        let str = stage + this.index + '{' +
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
        return '@keyframes ' + str + '@-webkit-keyframes   ' + str

      },
      genetateAnimateDetail () {

        let str = '.item-active {' +
          'animation-name: ' + 'expand-item-' + this.index + ';' +
          'animation-fill-mode: forwards;' +
          '}\n'
//          '.item-active:nth-of-type(' + (this.index + 1) + ')' + '{' +
//          '-webkit-animation-name: ' + 'expand-item-' + this.index + ';' +
//          '-webkit-animation-fill-mode: forwards;' +
//          '}\n'
        return str
      },

      generateSelectItemKeyFrame () {
//
//        '.item :nth-of-type(&{(index + 1)} ).is-selected . item-wrapper {' +
//        'animation-name:   select-item; +
//        'animation-fill-mode: forwards;' +
//        'animation-duration: ' + props.animationDuration + 's;' +
//        'animation-timing-function: ease-out;' +
//        '}' +
//        '.' + cssClassPrefix + ITEM_CSS_CLASS + ':nth-of-type(' + (index + 1) + ').is-selected .' + cssClassPrefix + ITEM_BTN_WRAPPER_CSS_CLASS + ' {' +
//        '-webkit-animation-name: ' + cssClassPrefix + 'select-item;' +
//        '-webkit-animation-fill-mode: forwards;' +
//        '-webkit-animation-duration: ' + props.animationDuration + 's;' +
//        '-webkit-animation-timing-function: ease-out;' +
//        '}'

      },

      insertStyleSheet () {
        let cssRule = this.generateBaseKeyFrame('expand-item-', this.index)
        cssRule += this.genetateAnimateDetail()
        let style = document.createElement('style')
        style.type = 'text/css'
        style.innerHTML = cssRule
        document.head.appendChild(style)

      },
      useAmination () {
//        let str = 'expand-item-' + this.index
//        this.$refs.item.style.animation = str

      }

    }

  }
</script>
