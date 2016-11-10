<template>
<div>
<cnode-nav></cnode-nav>
<cnode-top-list></cnode-top-list>
</div>
</template>


<style lang="stylus" scoped>
    
</style>


<script>
import CnodeNav from '../components/CnodeNav.vue'
import CnodeTopList from '../components/CnodeTopicList.vue'
    export default{
        data(){
            return{
                
            }
        },
        components:{
            CnodeNav,
            CnodeTopList
        }
    }
</script>