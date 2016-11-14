<template>
<div>
<h1>hello,world</h1>
</div>
</template>


<style lang="stylus" scoped>
    
</style>


<script>
import user from '../store/user.js'
    export default{
        data(){
            return{
                
            }
        },
        watch:{
            $router(){
                if(user.getUserInfo()){

                }else{
                    this.$router.push({
                        path : '/login'
                    })
                }
            }
        }
    }
</script>