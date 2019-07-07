<template>
  <div class="container">
     {{text}}
  </div>
</template>

<script>


export default {
  
  data () {
    return {
      text:'我是默认页面'
    }
  },

 
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  background: #eff3f6;
  flex-direction: column;
  box-sizing: border-box;
}
</style>
