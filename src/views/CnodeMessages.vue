<template>
<div>
<h1>消息</h1>
</div>
</template>


<style lang="sass" scoped>

</style>

<script>
import api from '../store/api.js'
import user from '../store/user.js'
    export default{
        data(){
            return{

            }
        },
        watch:{
            $route(){
                api.getMessages({
                    accesstoken: user.getUserInfo().accesstoken
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