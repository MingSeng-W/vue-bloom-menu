<template>
  <div class="header">
    <ul >
      <li>
        <router-link to="/center" style="color:white">center</router-link>
      </li>
      <li>
        <router-link to="/corner" style="color:white">corner</router-link>
      </li>
    </ul>
      <router-view></router-view>
  </div>
</template>
<style lang="stylus" type="text/stylus">
  .header
    margin-top 200px
    display flex
    justify-content center
    align-items center
    &>ul>li
      display inline-block
      height 30px
      width 50px
      line-height 30px
      font-size 15px
      border-radius 10px
      text-align center
      background-color #6b9eb8
</style>
<script type="text/ecmascript-6">

  export default {
    props: {},


    data() {
      return {
        msg: 'hello vue'
      }
    },

    computed: {},
    created() {

    },

    methods: {},

    components: {
    }
  }
</script>
