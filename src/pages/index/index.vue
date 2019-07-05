<template>
  <div class="a">
    
    <div class="b">
      {{text}}
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
     text: '我是首页'
    }
  },


  methods: {
    
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style lang="scss" scoped>
.a {
  .b {
    color: red;
  }
}

</style>
