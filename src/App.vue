<template>
  <div id="app">
      <cnode-header></cnode-header>
      <router-view></router-view>
  </div>
</template>

<script>
import CnodeHeader from './components/CnodeHeader.vue'
import CnodeMain from './views/CnodeMain.vue'
export default {
  data(){
    return {
      
    }
  },
  components:{
    CnodeHeader,
    CnodeMain
  }
}
</script>

<style lang="stylus">
@import './assets/common.styl'
</style>
