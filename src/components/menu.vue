<template>

  <div class="menu-container">
    <div class="menu-bar-con">
      <button class="menu-bar-btn" @click="menuClick" v-bind:class="{'btn-active':isOpen}">
        <span class="icon">+</span>
      </button>
    </div>
    <ul class="menu-item-list">
      <menu-item :radius="radius" :index=3 :angleCur=0 :animationDuration="animationDuration"
                 :itemAnimationDelay="itemAnimationDelay"></menu-item>
    </ul>
  </div>
</template>
<style lang="stylus" type="text/stylus">
  .menu-container
    position absolute
    top 50%
    right 50%
    width 50px
    height 50px
    transform 50% 50%
    user-select none
    border-radius 50%
    transition box-shadow .28s cubic-bezier(.4, 0, .2, 1);
    box-shadow 0 2px 5px 0 rgba(0, 0, 0, .26);
    padding 0
    margin 0
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    .menu-bar-con
      .menu-bar-btn
        position: absolute;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        z-index: 1;
        cursor: pointer;
        transition: all .28s cubic-bezier(.4, 0, .2, 1);
        border: none;
        background-color: #A974A2;
        color: white
        outline none
        &.btn-active
          transform rotate(45deg);
        &:hover
          box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2);
        .icon
          font-size: 32px;
          line-height: 60%;
          position: relative;
    .menu-item-list
      list-style-type none
</style>
<script type="text/ecmascript-6">
  import item from './item.vue'

  export default {
    props: {
      startAngel: {

        default: 90
      },
      radius: {
        default: 100
      },
      itemAnimationDelay: {
        default: 0.04
      },
      animationDuration: {
        default: 0.5
      },
      endAngle: {
        default: 0
      },
      itemWidth: {
        default: 50
      },
      itemNum: {
        default: 8
      }

    },

    data () {
      return {
        msg: 'hello vue'
      }
    },

    computed: {
      isOpen () {
        return this.$store.state.isOpen
      },
      angleStep () {
        return (this.startAngel - this.endAngle) / (this.itemNum)
      }

    },

    mounted () {

    },
    created () {

    },

    methods: {
      menuRender () {

      },
      menuClose () {

      },
      menuOpen () {
//        this.changeState()

      },
      menuRemove () {

      },

      menuSetItem () {

      },
      menuClick () {
        this.$store.commit('changeState')
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
