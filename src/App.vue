<template>
  <div id="app">
    <div class="fixed">
      <cnode-header></cnode-header>
      <cnode-nav></cnode-nav>
    </div>
    <div class="wrapper">
      <cnode-topic-list></cnode-topic-list>
    </div>
  </div>
</template>

<script>
import CnodeHeader from './components/CnodeHeader.vue'
import CnodeNav from './components/CnodeNav.vue'
import CnodeTopicList from './components/CnodeTopicList.vue'
export default {
  data(){
    return {
      
    }
  },
  components:{
    CnodeHeader,
    CnodeNav,
    CnodeTopicList
  }
}
</script>

<style lang="stylus">
@import './assets/common.styl'
</style>
