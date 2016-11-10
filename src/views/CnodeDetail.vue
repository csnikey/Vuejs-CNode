<template>
    <div v-html="detail.content">
    {{detail.content}}
    </div>
</template>

<style lang="stylus" scoped>
    
</style>


<script>
import api from '../store/api.js'
export default {
    data(){
        return {
            detail:{}
        }
    },
    watch:{
        $route(){
            api.getTopic({
                'accesstoken':this.$route.params.id,
                'mdrender':true
            })
            .then((res)=>{
                let result = res.data;
                if(result.success){
                    this.detail=result.data;
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    },
    created(){

    }
}    
</script>