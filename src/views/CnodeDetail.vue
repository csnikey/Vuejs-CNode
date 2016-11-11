<template>
    <div>
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
    methods:{
        fetch(){
            api.getTopic({
                'accesstoken':this.$route.params.topicId,
                'mdrender':false
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
    watch:{
        $route(){
            this.fetch();
        }
    },
    created(){
        this.fetch()
    }
}    
</script>