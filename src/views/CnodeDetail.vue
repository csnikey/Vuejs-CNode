<template>
    <div>
        <div v-if="isLoading">
            {{detail.content}}
        </div>
        <div class="msg" v-else>
            {{loadingMsg}}
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .msg
        width 100%
        margin 30px auto
        text-align center
</style>


<script>
import api from '../store/api.js'
export default {
    data(){
        return {
            detail:{},
            isLoading:false,
            loadingMsg:'加载中..'
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
                this.isLoading = true;
                this.loadingMsg = '';
                if(result.success){
                    this.detail=result.data;
                }
            })
            .catch((err)=>{
                console.log(err);
                this.isLoading = false;
                this.loadingMsg = '加载数据失败'
            })
        }
    },
    watch:{
        $route(){
            this.isLoading = false;
            this.loadingMsg='加载中..'
            this.fetch();
        }
    },
    created(){
        this.isLoading = false;
        this.loadingMsg='加载中..'
        this.fetch()
    }
}    
</script>