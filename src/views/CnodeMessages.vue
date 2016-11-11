<template>
<div>
<h1>消息</h1>
</div>
</template>


<style lang="stylus" scoped>
    
</style>

<script>
import api from '../store/api.js'
    export default{
        data(){
            return{

            }
        },
        watch:{
            $route(){
                api.getMessages({
                    accesstoken:'1debe75e-7140-4e68-8475-48a1691fe591'
                })
                .then((res)=>{
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        }
    }
</script>